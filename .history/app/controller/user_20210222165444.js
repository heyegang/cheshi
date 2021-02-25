'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 是一个类，放方法
  async login() {
    // 这个接口对应登录的所有操作
    // let { ctx } = this
    // 如果给前端返回数据    code:是否成功 msg:当前信息 data：数据 ...
    // ctx.body = {
    //   code:200,
    //   msg:'登录成功',
    //   data:1
    // }
  }
  async regster() {

  }
  async user() {
    
  }

}

module.exports = UserController;
