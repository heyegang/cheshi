/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1613978371613_5312';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf:false
  //   csrf: {
  //     enable: false,
  //    ignoreJSON: true,
  //     // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
  //     ignore: (ctx) => {
  //       // if (ctx.request.url == '/admin/goods/uploadImg') {
  //       //   return true
  //       // }
  //       return true
  //     },
  };

  // 连接数据库
  config.mongoose = {
    url:'mongodb://localhost:27017/shop'
  }
  return {
    ...config,
    ...userConfig,
  };
  // config.jwt = {
  //   secret: 'username',
  // };
  // config.cors = {
  //   origin:'*',
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  // };
};
