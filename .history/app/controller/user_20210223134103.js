// 对应请求的所有操作
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 是一个类，放方法
  async login() {
    // 登录 =============================================================
    // 这个接口对应登录的所有操作
    // let { ctx } = this
    // 如果给前端返回数据    code:是否成功 msg:当前信息 data：数据 ...
    // ctx.body = {
    //   code:200,
    //   msg:'登录成功',
    //   data:1
    // }
    let { ctx } = this
    // 给前端返回数据
    // 所有增删查改的操作都要写await
    let { username, password } = ctx.request.body
    let user = await ctx.model.User.findOne({
      username,
      password
    })
    if (user) {
      ctx.body = {
        code:200,
        msg:'登录成功',
        data:user
      }
    } else {
      ctx.body = {
        code:500,
      msg:'账号或密码错误'
      }
    }


  }
  async register() {
    // 注册 =============================================================
    // 注册 ，是否账号已存在  接收前端传递的参数
    let { ctx } = this
    // 前端传递过来的参数都在ctx.request.body中
    let { username } = ctx.request.body
    // 查询有没有当前信息
    // find查找全部数据，得到的是一个数组；findOne查找一个数据，得到一个数据
    let user = await ctx.model.User.findOne({
      username
    })
    if (user) {
      ctx.body = {
        code:500,
        msg:'用户已存在'
      }
    } else {
      // 添加账号 存账号
      let user = new this.app.model.User(ctx.request.body)
      await user.save()
      // let userModel = new
      ctx.body = {
        code:200,
        msg:'注册成功'
      }
    }
  }
  async user() {
    
    let {id, username } = this.ctx.request.body
    // 删除 =============================================================
    // let res = await this.ctx.model.User.findByIdAndRemove({
    //   _id:id
    // })
    // 修改 =============================================================
      let res = await this.ctx.model.User.findByIdAndUpdate({
      _id:id,
      username
      }).exec()
    if (res){
      this.ctx.body = {
      code: 200,
      msg:'修改成功',
      }
    } else {
      this.ctx.body = {
        code: 500,
        msg:'修改失败',
        }
    }
    
  }

}

module.exports = UserController;
