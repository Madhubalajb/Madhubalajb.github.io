# Madhubalajb.github.io
> [Personal portfolio](https://madhubalajb.github.io/) for Madhubala Jayakumaran (thats me!) built using React Js.

## Technology stack
- HTML
- SASS
- React Js
- Bootstrap

## Dependencies
1. [Node Js](https://nodejs.org/en/download/)

## Getting Started
1. Install dependencies  
```
npm install
```
2. Launch the development server  
```
npm start
```
## What I Used
* [Sublime Text](https://www.sublimetext.com/3) - A light weight and sophisticated text editor
* [Github pages](https://pages.github.com/) - Host directly from your Github repo, by simple push and deploy
* [SASS](https://sass-lang.com/) - The Syntactically AWESOME guy
* [Google Fonts](https://fonts.google.com/) - Collection of beautiful fonts
* [unDraw](https://undraw.co/) - Illustrations at the best

## Directory Information
```
/node_modules
/public
    index.html
    favicon.png
/src
    /components
        /images
        About.js
        Contact.js
        Home.js
        Navigation.js
        Projects.js
        Skills.js
    App.js
    index.js
    index.scss
.gitignore
package-lock.json
package.json
ReADME.md
```
1. `**/node_modules**` - The place where all the modules and packages of the project are installed.
2. `**/public**` - The directory contains the `index.html` and `favicon.png`, which are not read by the [Webpack](https://survivejs.com/webpack/what-is-webpack/). 
3. `**/src**` - This directory contains all the source code of the project that what we will see in the front-end. And the webpack only reads the files in this directory.
4. `**.gitignore**` - This file will tell the git what are the files to ignore, when pushing to remote. It mentions all the complex, large files like /node_modules.
5. `**package-lock.json**` - 