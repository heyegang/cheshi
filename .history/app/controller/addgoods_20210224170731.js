'use strict';

const Controller = require('egg').Controller;

class AddgoodsController extends Controller {
  // 新增商品请求 =============================================================
  async AddGoods() {
    let { ctx } = this

    let { Names
    } = ctx.request.body
    // 查找goods数据
    let goods = await ctx.model.Goods.findOne({
      Names
    })

    // let goodss = await ctx.model.Goods.findOne({
    //   Names, ShortName, SalesPromotion, Sort, Brand
    // })

    // ArtNo, SPU, SKU, BarCode, Measurement, Mode, Metering,
    // Stock, SortValue, OnShelfStatus, Recommend, New, Hot, MarketValue,
    // OurPrice, MinimumOrder, Quota, FreeShipping

    // 添加商品，数据不同或者没有该商品，添加成功 =============================================================
    if (!goods) {
      // 添加商品
      let goods = new this.app.model.Goods(ctx.request.body)
      await goods.save()
      // 返回消息给前端
      ctx.body = {
        code: 200,
        msg: '新增商品成功',
        data: goods
      }
    } else {
      // if (goods) {
      //   let { id, Stock } = this.ctx.request.body
      //   let res = await this.ctx.model.User.findByIdAndUpdate(id, {
      //     Stock
      //   })
      //   if (res) {
      //     this.ctx.body = {
      //       code: 200,
      //       msg: '修改成功',
      //     }
      //   } else {
      //     this.ctx.body = {
      //       code: 500,
      //       msg: '修改失败',
      //     }
      //   }
      // } else {
      // }
      ctx.body = {
        code: 500,
        msg: '新增失败',
      }
    }
  }
}

module.exports = AddgoodsController;
