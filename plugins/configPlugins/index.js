/*全局配置类*/
"use strict";
let M_WEB_CONFIG = new Map();
M_WEB_CONFIG.set("hessianReqTimeout", 8000);
M_WEB_CONFIG.set("queryType", 'GET');
M_WEB_CONFIG.set("coreUrl", 'http://api-test.yidengxuetang.com:8080/');
M_WEB_CONFIG.set("accessflag", new Date().getTime());
M_WEB_CONFIG.set("ydUrls", {
	helloWord: 'HelloHession/hello',
	login: 'ucenter/Authentication ',
	registerByMobile: 'ucenter/Authentication',
	sendMobileCaptcha: 'ucenter/Authentication',
});
M_WEB_CONFIG.set("wwwHost", '');
yog.M_WEB_CONFIG = M_WEB_CONFIG;