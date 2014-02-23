quito-climate-study
===================

Build process and web portal for the results of a climate change vulnerability study on Quito, Ecuador.


###Preparing raster data for publication
####Tools used:
1. [http://fwtools.maptools.org/](FWTools 2.4.7 (Windows 32bit))
2. MapTiler 0.5.2 Start edition (single-user license costs $28 as of 2/15/2014)

This site uses an OpenStreetMap-compatible tilesource format to serve raster datasets over the web. Starting from 32-bit single-band raster files with color maps defined in ArcGIS .lyr files:

1. Open a single raster layer in ArcMap.
2. Use ArcToolbox/Data Management Tools/Raster/Raster Dataset/Copy Raster, specifying the raster layer as the Input Raster, making sure to check the box next to 'Colormap to RGB.', and specifying 8_BIT_UNSIGNED as the pixel type. This will create a 3-band raster with values based on the color map specified in the .lyr.
3. Update the RGB colors associated with the generated raster file in case they do not match those specified in the original color map.
4. Export the generated raster file by right-clicking on it in the Table Of Contents/Layers, and choosing Data/Export Data. In the Export Raster Data dialogue box that pops up, under Output Raster, check the Use Renderer, Force RGB, and Use Colormap boxes. Leave the other settings alone (Format should be TIFF).
5. Open MapTiler. Load the file that was just exported from ArcGIS and choose Continue. 
6. When options are presented to choose destination and Zoom from, select Folder and set the Zoom from equal to 7 to 12. Choose Render.

You should make a separate folder for the tiles of each raster file you wish to display on the site. Before publishing the site to the cloud, you will need to move each of these folders into the quito-climate-study/tiles folder for the upload script to find them. 

###Preparing vector data for publication
This site supports the use of GeoJson data sources to display vector datasets. Source data for these datasets can be upwards of 60Mb; to reduce the data size in storage and sent over the wire, gzip compression is applied prior to uploading the data files.

####To create GeoJSON data files:
1. Load the shapefile in ArcGIS. 
2. Use ArcToolbox/Conversion Tools/JSON/Features To JSON to export a GeoJSON representation of the shapefile.
3. The site publication script will manage compression of these files.
4. Before publishing the site to the cloud, copy or move each of these GeoJSON files to the quito-climate-study/vector folder so the upload script can find them.

###Setting up a development environment to enable you to rebuild this application
NOTE: This is only necessary if you wish to change the structure of the geoportal, for example, to add another section or additional maps. To update existing maps content, see below. This setup was executed on Windows 7 (should work on other platforms as well but this has not been tested).

1. Read Yeoman getting started here:[http://yeoman.io/gettingstarted.html](http://yeoman.io/gettingstarted.html)
2. Install node js: http://nodejs.org/download/ 
3. Open a command prompt (Windows 7: Start Menu => Type "cmd" => Press Enter).
4. Install yeoman by typing: npm install -g yo (Enter)
5. Install ruby by downloading and running the installer: http://rubyinstaller.org/. Make sure to put ruby executables in your PATH when prompted by the installer.
6. Open a Git client (recommend Git Bash; alternatives include: Git Gui, Tower on Mac, Github for Windows, Visual Studio Git Integration) and type 'cd path-of-directory-to-hold-this-project'.
7. Clone this project e.g. in Git Bash, type 'git clone https://github.com/hydrojumbo/quito-climate-study.git' (no quotes).
8. In the command prompt, type cd quito-climate-study to move inside the just-created project folder.
9. Install the angular generator: npm install -g generator-angular

You should now be ready to build the files that get uploaded to cloud storage as the web portal. Type 'grunt serve' in the command prompt to build the app and host it on your local machine (not accessible to the internet).

