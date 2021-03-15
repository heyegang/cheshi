'use strict';

const Controller = require('egg').Controller;

class MarketingController extends Controller {

    // 营销首页数据 =============================================================
    async top() {
        // this.ctx.body = "新闻详情"
        let list = await this.service.marketing.getHomeData()
        this.ctx.body = list
    }

    // 添加商品折扣表格数据 =============================================================
    async table() {
            let { ctx } = this;
            let { name, manner, startDate, status } = ctx.request.body;
            let goods = await ctx.model.Marketing.findOne({
                name,
                manner,
                startDate,
                status
            })
            if (goods) {
                ctx.body = {
                    code: 500,
                    msg: '该物品已存在'
                }
            } else {
                let goods = new this.app.model.Marketing(ctx.request.body)
                await goods.save()
                    // let userModel = new
                ctx.body = {
                    code: 200,
                    msg: '添加成功'
                }
            }
        }
        // 获得商品折扣表格数据 =============================================================
    async getData() {
        //获取存在数据库中的数据
        let { ctx, app } = this
        let data = await this.ctx.model.Marketing.find()
        this.ctx.body = {
            code: 200,
            msg: '获取成功',
            total: data.length,
            data
        }
    }

    // 查找表格数据 =============================================================
    async findData() {
        let { ctx } = this;
        let { name, manner, startDate, status } = ctx.request.body;
        let data = await ctx.model.Marketing.findOne({
            name,
            manner,
            startDate,
            status
        })
        if (data) {
            ctx.body = {
                code: 200,
                msg: '查找成功',
                data
            }
        } else {
            ctx.body = {
                code: 500,
                msg: '该物品不存在'
            }
        }
    }

    // 删除商品折扣表格数据=============================================================
    async delete() {
        let { ctx } = this;
        let { _id } = ctx.request.body;
        let data = await ctx.model.Marketing.findOneAndRemove({
            _id
        })
        if (data) {
            ctx.body = {
                code: 200,
                msg: '删除成功',
            }
        } else {
            ctx.body = {
                code: 500,
                msg: '该物品已被删除'
            }
        }
    }

    // 添加订单促销表格数据 =============================================================
    async order() {
        let { ctx } = this;
        let { number, name, startDate, status } = ctx.request.body;
        let order = await ctx.model.Order.findOne({
            number,
            name,
            startDate,
            status
        })
        if (order) {
            ctx.body = {
                code: 500,
                msg: '该订单已存在'
            }
        } else {
            let order = new this.app.model.Order(ctx.request.body)
            await order.save()
                // let userModel = new
            ctx.body = {
                code: 200,
                msg: '添加成功'
            }
        }
    }

    //获取订单列表页面的表格数据
    async getOrder() {
        let data = await this.ctx.model.Order.find()
        this.ctx.body = {
            code: 200,
            msg: '获取成功',
            total: data.length,
            data
        }
    }

    //删除订单列表页面的表格数据
    async delOrder() {
        let { ctx } = this;
        let { _id } = ctx.request.body;
        let data = await ctx.model.Order.findOneAndRemove({
            _id
        })
        if (data) {
            ctx.body = {
                code: 200,
                msg: '删除成功',
            }
        } else {
            ctx.body = {
                code: 500,
                msg: '该物品已被删除'
            }
        }


    }

    // 修改订单列表页面的表格数据
    async modifyOrder() {
        //_id为查找到数据  name,startDate,status,number是要修改的数据
        let { id, name, startDate, status, number } = this.ctx.request.body
        let data = await this.ctx.model.Order.findByIdAndUpdate(id, {
            name,
            startDate,
            status,
            number
        })
        if (data) {
            this.ctx.body = {
                code: 200,
                msg: '修改成功'
            }
        } else {
            this.ctx.body = {
                code: 500,
                msg: '修改失败'
            }
        }
    }
}

module.exports = MarketingController;