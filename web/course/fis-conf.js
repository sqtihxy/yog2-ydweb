/**
 * @file FIS 配置
 * @author yuanzhijia@yidengxuetang.com
 */
var WEB_CONFIG = require("../config.js");
fis.config.merge({
	namespace: 'course',
	roadmap: {
		//cdn配置
		domain: WEB_CONFIG.roadmap.domain
	},
	pack: {}
});