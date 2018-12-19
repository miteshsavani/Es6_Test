{
  "name": "es6_Test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log --copy-files",
    "start": "npm run build && node dist/index.js",
    "testrun": "ava --serial dist/index.js",
	"test1": "ava --serial index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.16.4",
    "morgan": "^1.9.1",
    "spectron": "^5.0.0"
  },
  "devDependencies": {
    "babel-cli": "^6.24.0",
    "babel-preset-es2015": "^6.24.0",
    "ava": "^1.0.1"
  }
}
