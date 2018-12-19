// import  app from './app';
import test from 'ava';
import { Application } from 'spectron';
//import soap from '../../../testcafe/framework/utils/soap-client';
//const utils = require('../../../testcafe/pages');
//describe('SMIME feature enabled', function() {
//	this.timeout(0);
test.before(async t  => {
	t.context.app = new Application({
		path: 'C:\\Program Files\\Zimbra X\\Zimbra X.exe'
	});
	//console.log('Starting the app');
	//await app.client.element('input#login-form_2-email').keys('mm7');
	return await t.context.app.start().then(async() => {
		t.is(await app.client.getWindowCount(), 1, 'verify the count');
		    await app.client.waitUntilTextExists('h1', 'Sign in');
		    await app.client.setValue('input#login-form_2-email','mm7');
		    await app.client.setValue('#login-form_2-password','zimbra');
		    await app.client.click("button[type='submit']");
	}).catch((error) => {
		// Log any failures
		console.error('Before Test failed', error.message);
	});
});
test.after(async t => {
	console.log('CLosing the app');
	await t.context.app.client.pause(4000);
	await t.context.app.client.click('span.zimbra-icon.zimbra-icon-caret-down.blocks_icon_md');
	await t.context.app.client.click('span*=Logout');
	return await t.context.app.stop();
});
test.beforeEach(async t => {
	console.log('Starting the Test');
	//await app.client.waitUntilTextExists('span', 'Mail');
	//await app.client.click('div.zimbra-client_app-navigation_menuItemWrapper:nth-of-type(1)');
});
test.afterEach(async t => {
	console.log('Ending the Test');
});
test('Check SMIME option is present in settings', async t => {
	const appx = t.context.app;
	await appx.client.pause(10000);
	await appx.client.click('span.zimbra-client_header-actions_settingsIcon');
	await appx.client.click('span*=Settings');
	await appx.client.pause(5000);
	await t.true(await appx.client.isExisting('a*=S/MIME and Encryption'));
	await appx.client.click('a*=S/MIME and Encryption');
	await appx.client.click('button*=Cancel');
	await appx.client.pause(5000);
	//await appx.client.waitUntilTextExists('a', 'New Message');
	//const adminAuthToken = await soap.getAdminAuthToken('admin', 'z1mbr4@123');
	//console.log('Admin Auth tokent: ' + adminAuthToken);
});
    
test.serial('Send a signed mail', async t => {
	const sub = 'Signed only mail222';
	const appx = t.context.app;
	await appx.client.pause(5000);
	await appx.client.click('a=New Message');
	await appx.client.setValue('rich-text-area','Body of signed mail');
	await appx.client.pause(3000);
	await appx.client.setValue('input.zimbra-client_composer_subject', sub);
	await appx.client.setValue('input.zimbra-client_address-field_inputField', 'mm8');
	await appx.client.pause(3000);
	await appx.client.keys('Down arrow');
	await appx.client.keys('Enter');
	if (await appx.client.getText('div.zimbra-client_token-input_tokenInput') === '') {
			    await appx.client.setValue('input.zimbra-client_address-field_inputField', 'mm8');
		        await appx.client.pause(3000);
		        await appx.client.keys('Down arrow');
			    await appx.client.keys('Enter');
	}
	await appx.client.pause(3000);
	await appx.client.click('div.zimbra-client_gui-rich-text-area_components_toolbar_left button[class$="_send"]');
	await appx.client.pause(5000);
	await appx.client.click('span.zimbra-icon.zimbra-icon-caret-down.blocks_icon_md');
	await appx.client.click('span*=Logout');
        
	// Verification on recipient side
	await appx.client.waitUntilTextExists('h1', 'Sign in');
	await appx.client.setValue('input#login-form_2-email','mm8');
	await appx.client.setValue('#login-form_2-password','zimbra');
	await appx.client.click("button[type='submit']");
        
	// Check mail exists
	await appx.client.pause(5000);
	const subject = await appx.client.getText('div.zimbra-client_mail-list_messageGroup div[menu*="Object"]:nth-of-type(1)');
	await t.true((subject.indexOf(sub) !== -1), 'Verify mail is presnt');
	await appx.client.click('div.zimbra-client_mail-list_messageGroup div[menu*="Object"]:nth-of-type(1)');
	await appx.client.pause(5000);
});
//});
//const app = apps.initialiseSpectron();
//console.log(app);
//const appx = app.initialiseSpectron();
// app.start().then(() => {
// 	// Check if the window is visible
// 	return app.browserWindow.isVisible();
// }).then((isVisible) => {
// 	assert.equal(isVisible, true);
// }).then(() => {
// 	// Get the window's title
// 	return app.client.getTitle();
// }).then((title) => {
// 	console.log('title is:' + title);
// 	assert.equal(title, 'Zimbra');
// }).then('Login to Zimbra X',  () => {
// 	return app.client
// 		.waitUntilTextExists('h1', 'Sign in')
// 		.element('input#login-form_2-email').keys('mm7')
// 		.element('#login-form_2-password').click().keys('zimbra')
// 		.element("button[type='submit']").click();
// }).then(() => {
// 	console.log('Logout');
// 	//return app.client
// 	//.pause(10000)
// 	//.element('span.zimbra-client_header-actions_headerAction').click()
// 	// .element('a.zimbra-client_action-menu-item_item:nth-of-type(2) span').click();
// }).then(() => {
// 	console.log('Closing the app');
// 	//return app.stop();
// }).catch((error) => {
// 	// Log any failures
// 	console.error('Test failed', error.message);
// });