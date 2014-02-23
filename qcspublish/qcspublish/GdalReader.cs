using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OSGeo.GDAL;
using SharpMap.Layers;

namespace qcspublish
{
	/// <summary>
	/// Exposes internal Dataset object of raster opened by GDAL library.
	/// </summary>
	public class GdalReader : GdalRasterLayer
	{
		public GdalReader(string strLayerName, string imageFileName)
			: base(strLayerName, imageFileName)
		{ 
			
		}

		public Dataset Dataset { get {			
			return this._gdalDataset;
		} }
	}
}
