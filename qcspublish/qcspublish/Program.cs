using System;
using System.Collections.Generic;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CsvHelper;
using OSGeo.GDAL;
using SharpMap.Data;
using SharpMap.Layers;
using System.Runtime.InteropServices;

namespace qcspublish
{
	class Program
	{
		/// <summary>
		/// Binding to Windows API PInvoke as a means of configuring environment variables needed during runtime.
		/// </summary>
		/// <param name="lpName"></param>
		/// <param name="lpValue"></param>
		/// <returns></returns>
		[DllImport("kernel32.dll", CharSet=CharSet.Auto, SetLastError=true)]
		public static extern bool SetEnvironmentVariable(string lpName, string lpValue);
		
		static void Main(string[] args)
		{
			//verify gdal dlls are available; see: http://trac.osgeo.org/gdal/wiki/GdalOgrCsharpUsage
			string GDAL_HOME = @";c:\Program Files (x86)\FWTools2.4.7\bin";		
			string path = Environment.GetEnvironmentVariable("PATH");
			path += ";" + GDAL_HOME;
			SetEnvironmentVariable("PATH", path);

			// string tifDirectory = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);			
			string tifDirectory = @"C:\dev\quito\For_Geoportal\For_Geoportal\Climate\";
			string resultDirectory = tifDirectory + @"out\";
			
			if (args.Length == 1)
			{
				tifDirectory = args[0];
			}

			Gdal.AllRegister();
			OSGeo.GDAL.Driver srcDrv = Gdal.GetDriverByName("GTiff");			

			//if app scales, or additional implementations made (e.g. database table), use DI for this dependency
			IColorRepository colorRepo = new ColorRepository();

			//see: http://sharpmap.codeplex.com/discussions/421752
			GeoAPI.GeometryServiceProvider.Instance = new NetTopologySuite.NtsGeometryServices();

			Console.WriteLine(tifDirectory);
			DirectoryInfo di = new DirectoryInfo(tifDirectory);
			DirectoryInfo resultDir = new DirectoryInfo(resultDirectory);
			if (!resultDir.Exists)
			{
				resultDir.Create(); 
			}
			Console.WriteLine("Processing {0} files matching '*.tif'");
			foreach (FileInfo fi in di.GetFiles("*.tif"))
			{
				Console.WriteLine("Processing " + fi.Name + "...");

				//read data from source raster
				Dataset src = Gdal.Open(fi.FullName, Access.GA_ReadOnly);									
				Band band = src.GetRasterBand(1);
				float[] r = new float[band.XSize * band.YSize];
				byte[] red = new byte[band.XSize * band.YSize];
				byte[] green = new byte[band.XSize * band.YSize];
				byte[] blue = new byte[band.XSize * band.YSize];
				band.ReadRaster(0, 0, band.XSize, band.YSize, r, band.XSize, band.YSize, 0, 0);				

				//assign values to rgb rasters to produce new raster with rgb bands matching color pattern
				for (int cell = 0; cell < r.Length; cell++)
				{
					RGBColors colors = colorRepo.ColorsOfValueInFile(fi.Name, r[cell]);
					red[cell] = (byte)colors.Red;
					green[cell] = (byte)colors.Green;
					blue[cell] = (byte)colors.Blue;
				}

				//write new output 		
				using (Dataset output = srcDrv.Create(resultDirectory + fi.Name, band.XSize, band.YSize, 3, DataType.GDT_Byte, null))
				{					
					if (output == null) 
					{
						Console.WriteLine("Can't create " + args[0]);
						System.Environment.Exit(-1);
					}
					//set metadata
					output.SetProjection(src.GetProjection());
					double[] geotransform = new double[0];
					src.GetGeoTransform(geotransform);
					output.SetGeoTransform(geotransform);														

					//prepare data for write
					int[] colorData = new int[red.Length * 3];
					red.CopyTo(colorData, 0);
					green.CopyTo(colorData, red.Length);
					blue.CopyTo(colorData, red.Length + green.Length);

					//write data to disk
					output.WriteRaster(0, 0, band.XSize,  band.YSize, colorData, band.XSize, band.YSize, 3, null, 0, 0, 0);					
					output.FlushCache();					
				}										
			}						
		}
	}
}
