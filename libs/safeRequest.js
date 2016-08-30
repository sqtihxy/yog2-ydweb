/*
 * @Description 封装hessian - proxy基础请求类
 * @Date 2016-06-21
 * @Author yuanzhijia@yidengxuetang.com
 */
"use strict";
const M_WEB_CONFIG = yog.M_WEB_CONFIG;
const Proxy = require('hessian-proxy').Proxy;
const _safeFactory = (params) => {
    // request settings
    const hostUrl = (params.host || M_WEB_CONFIG.get('coreUrl')) + params.url;
    let reqOptions = params.data;
    reqOptions.__mapType__ = 'java.util.LinkedHashMap';
    const proxy = new Proxy(hostUrl, '', '', '');
    const promise = new Promise(function(resolve, reject) {
        proxy.invoke(params.way, [reqOptions], (err, result) => {
            console.log('输出结果', result);
            if (result) {
                let reply = JSON.parse(result);
                console.log('Java输出结果', result);
                if (err) {
                    yog.log.fatal({
                        'stack': err, //错误堆栈
                        'msg': '请求Java API异常-》' + params.way //错误消息
                    });
                    reject(err);
                } else {
                    try {
                        if (reply.error_code == 0) {
                            resolve(reply.response);
                        } else {
                            yog.log.fatal({
                                'stack': reply.error_code, //错误堆栈
                                'msg': reply.msg
                            });
                            reject(reply.msg);
                        }
                    } catch (e) {
                        yog.log.fatal({
                            'stack': e, //错误堆栈
                            'msg': '请求成功分析数据出错'
                        });
                        reject(e);
                    }
                }
            } else {
                reject("err");
            }
        });
    });
    return promise;
};
module.exports = _safeFactory;