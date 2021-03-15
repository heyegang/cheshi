'use strict';

const Controller = require('egg').Controller;

class DetailsController extends Controller {
    async details() {
        let { ctx } = this;
        let { id, image1, image2, price, discount, pricing, way, describe, details, recommended, author1, Introduction1, author2, Introduction } = ctx.request.body;
        let data = await ctx.model.Details.findOne({
            id,
            image1,
            image2,
            price,
            discount,
            pricing,
            way,
            describe,
            details,
            recommended,
            author1,
            Introduction1,
            author2,
            Introduction
        })
        if (data) {
            ctx.body = {
                code: 500,
                msg: '该物品已存在'
            }
        } else {
            let data = new this.app.model.Details(ctx.request.body)
            await data.save()
                // let userModel = new
            ctx.body = {
                code: 200,
                msg: '添加成功'
            }
        }
    }
    async getDetails() {
        let { ctx } = this
        let { id } = ctx.request.body
        let data = await ctx.model.Details.findOne({
            id
        })
        if (data) {
            ctx.body = {
                code: 200,
                msg: '获取成功',
                data
            }
        } else {
            ctx.body = {
                code: 500,
                msg: '获取失败'
            }
        }

    }
}

module.exports = DetailsController;