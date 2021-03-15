module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const ServeSchema = new Schema({
        //名称================================================
        image: {
            type: String
        },
        // 标题 ============================================
        title: {
            type: String
        }
    })
    return mongoose.model('Serve', ServeSchema)
}