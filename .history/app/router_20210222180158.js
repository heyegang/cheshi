'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  // 登录
  router.post('/user/login',controller.user.login)
  router.post('/user/register',controller.user.regster)
  router.post('/user',controller.user.user)
};
