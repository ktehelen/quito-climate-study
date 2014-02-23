using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CsvHelper;
using OSGeo.GDAL;
using SharpMap.Data;
using SharpMap.Layers;

namespace qcspublish
{
	class Program
	{
		static void Main(string[] args)
		{
			// string tifDirectory = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);			
			string tifDirectory = @"C:\dev\quito\For_Geoportal\For_Geoportal\Climate\";
			string resultDirectory = tifDirectory + @"out\";
			
			if (args.Length == 1)
			{
				tifDirectory = args[0];
			}

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
			Console.WriteLine("Processing files:");
			di.GetFiles("*.tif").ToList().ForEach(a => Console.WriteLine(a));			

			foreach (FileInfo fi in di.GetFiles("*.tif"))
			{				
				// GdalRasterLayer layer = new GdalRasterLayer(fi.Name, fi.FullName);				
				GdalReader gdalRdr = new GdalReader(fi.Name, fi.FullName);
				Band band = gdalRdr.Dataset.GetRasterBand(1);
				float[] r = new float[band.XSize * band.YSize];
				float[] red = new float[band.XSize * band.YSize];
				float[] green = new float[band.XSize * band.YSize];
				float[] blue = new float[band.XSize * band.YSize];
				band.ReadRaster(0, 0, band.XSize, band.YSize, r, band.XSize, band.YSize, 0, 0);				

				//assign values to rgb rasters to produce new raster with rgb bands matching color pattern
				for (int cell = 0; cell < r.Length; cell++)
				{
					RGBColors colors = colorRepo.ColorsOfValueInFile(fi.Name, r[cell]);
					red[cell] = colors.Red;
					green[cell] = colors.Green;
					blue[cell] = colors.Blue;
				}

				//write new output 		
				GdalRasterLayer output = new GdalRasterLayer(fi.Name, resultDirectory + fi.Name);
				output.

				
				/*using (FileStream fs = new FileStream(resultDirectory + fi.Name.Replace(".tif", ".csv"), FileMode.Create))
				using (TextWriter tw = new StreamWriter(fs))
				using (CsvWriter wtr = new CsvWriter(tw))
				{
					wtr.wrt
				}*/
				
				
				
				/*
				FeatureDataSet dataset = new FeatureDataSet();				
				layer.ExecuteIntersectionQuery(layer.Envelope, dataset);	
				int colCount = dataset.Tables[0].Columns.Count;
				Console.WriteLine(dataset.Tables[0].Rows.Count);
				Console.WriteLine(colCount);
				DataTableReader rdr = dataset.Tables[0].CreateDataReader();

				using (FileStream fs = new FileStream(resultDirectory + fi.Name.Replace(".tif", ".csv"), FileMode.Create))
				using (TextWriter tw = new StreamWriter(fs))
				using (CsvWriter wtr = new CsvWriter(tw))
				{
					while (rdr.Read())
					{
						object[] values = new object[colCount];
						rdr.GetValues(values);						
					}
					tw.Flush();
				}*/				
				
			}			
			// GdalRasterLayer newLayer = new GdalRasterLayer("tmed_dif_alto_rgba	
						

			Console.ReadKey();

		}
	}
}
