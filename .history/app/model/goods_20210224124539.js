



module.exports = app => {
  let mongoose = app.mongoose
  let Schema = mongoose.Schema
  const GoodsSchema = new Schema({
    // 名称
    Names: {
      type:String,
    },
    // 短名称
    ShortName: {
      type:String,
    },
    // 促销语
    SalesPromotion: {
      type:String,
    },
    // 分类
    Sort: {
      type:String,
    },
    // 品牌
    Brand: {
      type:String,
    },
    // // 货号
    // ArtNo: {
    //   type:String,
    // },
    // // SPU
    // SPU: {
    //   type:String,
    // },
    // // SKU
    // SKU: {
    //   type:String,
    // },
    // // 条码
    // BarCode: {
    //   type:String,
    // },
    // // 计量单位
    // Measurement: {
    //   type:String,
    // },
    // // 计量方式（1/2/3）
    // Mode: {
    //   type:String,
    // },
    // // 商品计量
    // Metering: {
    //   type:String,
    // },
    // // 实际库存
    // Stock: {
    //   type:String,
    // },
    // // 排序值
    // SortValue: {
    //   type:String,
    // },
    // // 上架状态(0/1)
    // OnShelfStatus: {
    //   type:String,
    // },
    // // 是否推荐(0/1)
    // Recommend: {
    //   type:String,
    // },
    // // 是否新品(0/1)
    // New: {
    //   type:String,
    // },
    // // 是否热卖（0/1）
    // Hot: {
    //   type:String,
    // },
    // // 市场价
    // MarketValue: {
    //   type:String,
    // },
    // //本店价
    // OurPrice: {
    //   type:String,
    // },
    // // 最少起订
    // MinimumOrder: {
    //   type:String,
    // },
    // // 限购数量
    // Quota: {
    //   type:String,
    // },
    // // 包邮
    // FreeShipping: {
    //   type:String,
    // },

  })
  return mongoose.model('Goods',GoodsSchema)
}