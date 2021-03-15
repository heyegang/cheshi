module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const CouponsSchema = new Schema({
        // 名称 ===========================================
        name: {
            type: String
        },
        // 类型 ================================================
        category: {
            type: String
        },
        // 发放数 ============================================
        issueNumber: {
            type: Number
        },
        //优惠金额============================================
        discountAmount: {
            type: Number
        },
        //使用门槛===========================================
        threshold: {
            type: String
        },
        //状态==============================================
        status: {
            type: String
        },
        //是否有效===============================================
        effective: {
            type: String
        }
    })
    return mongoose.model('Coupons', CouponsSchema)
}