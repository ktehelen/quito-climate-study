quito-climate-study
===================

Build process and web portal for the results of a climate change vulnerability study on Quito, Ecuador.

###Setting up a development environment to enable you to rebuild this application
#### Notes: 
1. This is only necessary if you wish to change the structure of the geoportal, for example, to add another section or additional maps. To update existing maps content, see below.
2. This setup was executed on Windows 7 (should work on other platforms as well but this has not been tested).
#### Procedures:
1. Read Yeoman getting started here:[http://yeoman.io/gettingstarted.html](http://yeoman.io/gettingstarted.html)
2. Install node js: http://nodejs.org/download/ 
3. Open a command prompt (Windows 7: Start Menu => Type "cmd" => Press Enter).
4. Install yeoman by typing: npm install -g yo (Enter)
5. Install ruby by downloading and running the installer: http://rubyinstaller.org/. Make sure to put ruby executables in your PATH when prompted by the installer.
6. Open a Git client (recommend Git Bash; alternatives include: Git Gui, Tower on Mac, Github for Windows, Visual Studio Git Integration) and type cd <Path of directory to hold this project>.
7. Clone this project e.g. in Git Bash, type 'git clone https://github.com/hydrojumbo/quito-climate-study.git' (no quotes).
8. In the command prompt, type cd quito-climate-study to move inside the just-created project folder.
9. Install the angular generator: npm install -g generator-angular

You should now be ready to build the files that get uploaded to cloud storage as the web portal. Type 'grunt serve' in the command prompt to build the app and host it on your local machine (not accessible to the internet).

