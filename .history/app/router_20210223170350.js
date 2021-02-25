'use strict';


/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  // 登录
  router.post('/user/login',controller.user.login)
  router.post('/user/register',controller.user.register)
  router.post('/user',controller.user.user)
  // 添加日志 需要鉴权
  // router.post('/diary/add', jwt, controller.diary.add);
  // router.post('/admin',jwt, controller.admin.index); 
};
