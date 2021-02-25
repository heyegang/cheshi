'use strict';

const Controller = require('egg').Controller;

class AddgoodsController extends Controller {
  async AddGoods() {
    let { ctx } = this
    let { Name, ShortName, SalesPromotion, Sort, Brand, 
      ArtNo, SPU, SKU, BarCode, Measurement, Mode, Metering,
      Stock, SortValue, OnShelfStatus, Recommend, New, Hot, MarketValue,
      OurPrice, MinimumOrder, Quota, FreeShipping } = ctx.request.body
  }
}

module.exports = AddgoodsController;
