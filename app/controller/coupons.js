'use strict';

const Controller = require('egg').Controller;

class CouponsController extends Controller {
    // 新增商品请求 =============================================================
    async add() {
        let { ctx } = this;
        let { name, category, issueNumber, discountAmount, threshold, status, effective } = ctx.request.body;
        let goods = await ctx.model.Coupons.findOne({
            name,
            category,
            issueNumber,
            discountAmount,
            threshold,
            status,
            effective
        })
        if (goods) {
            ctx.body = {
                code: 500,
                msg: '该物品已存在'
            }
        } else {
            let goods = new this.app.model.Coupons(ctx.request.body)
            await goods.save()
                // let userModel = new
            ctx.body = {
                code: 200,
                msg: '添加成功'
            }
        }
    }
    async getData() {
        let data = await this.ctx.model.Coupons.find()
        this.ctx.body = {
            code: 200,
            msg: '获取成功',
            total: data.length,
            data
        }
    }
}

module.exports = CouponsController;