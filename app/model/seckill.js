module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const SeckillSchema = new Schema({
        // 图片 = ==========================================
        image: {
            type: String
        },
        // 旧价格 ===============================================
        old_price: {
            type: String
        },
        // 当前价格 ==============================================
        current_price: {
            type: String
        }
    })
    return mongoose.model('Seckill', SeckillSchema)
}