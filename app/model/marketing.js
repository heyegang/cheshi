module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const MarketingSchema = new Schema({
        //名称================================================
        name: {
            type: String
        },
        // 折扣方式 =============================================================
        manner: {
            type: String
        },
        //折扣日期 =============================================================
        startDate: {
            type: String
        },
        // 状态 =============================================================
        status: {
            type: String
        },
        // 编号
        number: { type: String }
    })
    return mongoose.model('Marketing', MarketingSchema)
}