//const { path } = require('path');
const { Application } = require('spectron');
//const path = require('path');
//const baseDir = path.join(__dirname, '../../../');
//const electronBinary = path.join(__dirname, '../../../node_modules', '.bin', 'electron');
const app = new Application({
	path: 'C:\\Program Files\\Zimbra X\\Zimbra X'
});
//class Zxd {
	//initialiseSpectron() {
	//let electronPath = path.join(__dirname, '../../../node_modules', '.bin', 'electron');
	//const appPath = path.join(__dirname, '../../../');
	// if (process.platform === "win32") {
	// 	electronPath += ".cmd";
	// }
//console.log('Inside SPECTRON');
//return new Application({
//path: '/Applications/Zimbra.app/Contents/MacOS/Zimbra'
//args: [appPath],
// env: {
// 	ELECTRON_ENABLE_LOGGING: true,
// 	ELECTRON_ENABLE_STACK_DUMPING: true,
// 	NODE_ENV: 'development'
// },
// startTimeout: 20000,
// chromeDriverLogPath: '../chromedriverlog.txt'
//});
	//}
	// class App {
	// 	constructor() {
	// 		this.baseDir = path.join(__dirname, '../../../');
	// 		this.electronBinary = path.join(__dirname, '../../../node_modules', '.bin', 'electron');
	// 		this.apps = new Application({
	// 			path: '/Applications/Zimbra.app/Contents/MacOS/Zimbra'
	// 			//args: [this.baseDir],
	// 			// env: {
	// 			// 	ELECTRON_ENABLE_LOGGING: true,
	// 			// 	ELECTRON_ENABLE_STACK_DUMPING: true,
	// 			// 	NODE_ENV: 'development'
	// 			// },
	// 			// startTimeout: 20000,
	// 			// chromeDriverLogPath: '../chromedriverlog.txt'
	//         });
	//         return this.apps;
	// 	}
	//     //baseDir = path.join(__dirname, '../../../');
	//     //electronBinary = path.join(__dirname, '../../../node_modules', '.bin', 'electron');
	//     // application = new Application({
	//     // 	path: '/Applications/Zimbra.app/Contents/MacOS/Zimbra',
	//     // 	//args: [this.baseDir]
	//     // });
	// launchApp() {
	// 	return this.initialiseSpectron().start();
	// }
	// //module.exports.start = launchApp;
	// stopApp() {
	// 	return this.initialiseSpectron().stop();
	//}
//module.exports.stop = stopApp;
// }
//}
module.exports = app;