'use strict';

const Controller = require('egg').Controller;

class AddgoodsController extends Controller {
  async AddGoods() {
    let { ctx } = this

    let { Name, ShortName, SalesPromotion, Sort, Brand, 
      ArtNo, SPU, SKU, BarCode, Measurement, Mode, Metering,
      Stock, SortValue, OnShelfStatus, Recommend, New, Hot, MarketValue,
      OurPrice, MinimumOrder, Quota, FreeShipping } = ctx.request.body

      let goods = await ctx.model.User.findOne({
        Name, ShortName, SalesPromotion, Sort, Brand, 
        ArtNo, SPU, SKU, BarCode, Measurement, Mode, Metering,
        Stock, SortValue, OnShelfStatus, Recommend, New, Hot, MarketValue,
        OurPrice, MinimumOrder, Quota, FreeShipping
      })
      if(goods) {
        let goods = new this.app.model.User(ctx.request.body)
        await goods.save()
        ctx.body = {
          code:200,
          msg:'新建成功',
          data:goods
        }
      }
  }
}

module.exports = AddgoodsController;
