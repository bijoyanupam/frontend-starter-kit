# Frontend Starter Kit
Front-end starter kit for automated web development.

## What's included?
- ESLint: Checks your js files for errors.
- Babel: Transpile ES6 based JS files for current browsers.
- Browserify: Bundles node.js-style modules for current browsers and combine them into one file.
- Uglify: Generate minified JS file with sourcemap.
- SASSLint: To lint the SCSS files.
- SASS: Compiles SCSS to minified CSS file with sourcemap.
- Autoprefixer: Parse CSS and automatically add vendor prefixes to CSS rules using values from [Can I Use](http://caniuse.com/).
- postcss-import: Can consume local files, node modules or web_modules using inline @import rules.
- cssnano: Modular minifier, built on top of the PostCSS ecosystem. For more please check [cssnano.co](http://cssnano.co).

## Getting Started
Install [Node.js](https://nodejs.org/).

Remember: You do not need to install Grunt globally. The Grunt commands are run as npm scripts from a local install.

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

Now that the required packages are installed, you are ready to go.

To check your js and scss files for errors using eslint and sasslint, run the following grunt command using npm scripts.
```
npm run lint
```

Ready to go live? Run the following grunt command using npm scripts.
```
npm run build
```

## Configuration
- ESLint: Check the .eslintrc.json file. For options, check [eslintrc](http://eslint.org/docs/user-guide/configuring)
Check the .eslintignore file. For options, check [eslintignore](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories)
- SASSLint: Check the .sass-lint.yml file. For options, check [sass-lint options](https://github.com/sasstools/sass-lint/tree/master/docs/rules)
- Babel: Check the .babelrc file. For options, check [babelrc](https://babeljs.io/docs/usage/api/#options)
- Autoprefixer: Check the browserslist file. For options, check [browserslist options](https://github.com/ai/browserslist#config-file)

## Note
- EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. For more, please visit: [EditorConfig](http://editorconfig.org/). A .editorconfig file is included with this project. Please use these configurations for linting to work correctly.
- JSBeautify tool is supported with .jsbeautifyrc file. Most of the editors and IDEs has extension support. For more, read [JSBeautifier](http://jsbeautifier.org/).
