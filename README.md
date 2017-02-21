# Frontend Starter Kit
Front-end starter kit for automated web development.

## What's included?
- SASSLint: To lint the SCSS files.
- SASS: Compiles SCSS to minified CSS file.
- Autoprefixer: Parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](http://caniuse.com/).

## Getting Started
Install [Node.js](https://nodejs.org/).

Get this front-end starter kit by git clone or downloading the latest zip file.

For example:
```
git clone git@github.com:bijoyanupam/frontend-starter-kit.git
```

Once downloaded, navigate to the folder. You could also rename the folder as per your project name.

Install all required packages as specified in package.json.
```
npm install
```

Now that the required packages are installed, you are ready to go. Just run below grunt command.
```
grunt build
```

## Configuration
- SASSLint: Check the sass-lint.yml file. For options, check [sass-lint options](https://github.com/sasstools/sass-lint#options)
- Autoprefixer: Check the browserslist file. For options, check [browserslist options](https://github.com/ai/browserslist#config-file)

## Note
I use VS Code editor and have added related settings. You can exclude/delete them if you use a different editor.
