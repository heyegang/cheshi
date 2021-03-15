'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async addSlide() {
        let { ctx } = this;
        let { img } = ctx.request.body;
        let image = await ctx.model.Home.findOne({
            img
        })
        if (image) {
            ctx.body = {
                code: 500,
                msg: '该物品已存在'
            }
        } else {
            let image = new this.app.model.Home(ctx.request.body)
            await image.save()
                // let userModel = new
            ctx.body = {
                code: 200,
                msg: '添加成功'
            }
        }
    }
    async slide() {
        let data = await this.ctx.model.Home.find()
        this.ctx.body = {
            code: 200,
            msg: '获取成功',
            data
        }
    }
    async serve() {
        let { ctx } = this;
        let { img, title } = ctx.request.body;
        let data = await ctx.model.Serve.findOne({
            img,
            title
        })
        if (data) {
            ctx.body = {
                code: 500,
                msg: '该物品已存在'
            }
        } else {
            let data = new this.app.model.Serve(ctx.request.body)
            await data.save()
                // let userModel = new
            ctx.body = {
                code: 200,
                msg: '添加成功'
            }
        }
    }
    async getServe() {
            let data = await this.ctx.model.Serve.find()
            this.ctx.body = {
                code: 200,
                msg: '获取成功',
                data
            }
        }
        // 秒杀 =============================================================
    async addAeckill() {
        let { ctx } = this;
        let { image, old_price, current_price } = ctx.request.body;
        let data = await ctx.model.Seckill.findOne({
            image,
            old_price,
            current_price
        })
        if (data) {
            ctx.body = {
                code: 500,
                msg: '该物品已存在'
            }
        } else {
            let data = new this.app.model.Seckill(ctx.request.body)
            await data.save()
                // let userModel = new
            ctx.body = {
                code: 200,
                msg: '添加成功'
            }
        }
    }
    async seckill() {
            let data = await this.ctx.model.Seckill.find()
            this.ctx.body = {
                code: 200,
                msg: '获取成功',
                data
            }
        }
        // 推荐 ================================================================
    async addRecomm() {
        let { ctx } = this;
        let { title, describe, img, image } = ctx.request.body;
        let data = await ctx.model.Recommended.findOne({
            title,
            describe,
            img,
            image
        })
        if (data) {
            ctx.body = {
                code: 500,
                msg: '该物品已存在'
            }
        } else {
            let data = new this.app.model.Recommended(ctx.request.body)
            await data.save()
                // let userModel = new
            ctx.body = {
                code: 200,
                msg: '添加成功'
            }
        }
    }
    async recommended() {
            let data = await this.ctx.model.Recommended.find()
            this.ctx.body = {
                code: 200,
                msg: '获取成功',
                data
            }
        }
        //展览列表 ==========================================================================
    async addDisplay() {
        let { ctx } = this;
        let { image, way, describe, price } = ctx.request.body;
        let data = await ctx.model.Display.findOne({
            image,
            way,
            describe,
            price
        })
        if (data) {
            ctx.body = {
                code: 500,
                msg: '该物品已存在'
            }
        } else {
            let data = new this.app.model.Display(ctx.request.body)
            await data.save()
                // let userModel = new
            ctx.body = {
                code: 200,
                msg: '添加成功'
            }
        }
    }
    async display() {
        let data = await this.ctx.model.Display.find()
        this.ctx.body = {
            code: 200,
            msg: '获取成功',
            data
        }
    }
}

module.exports = HomeController;