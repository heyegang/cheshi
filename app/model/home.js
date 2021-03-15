module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const HomeSchema = new Schema({
        //名称================================================
        image: {
            type: String
        }
    })
    return mongoose.model('Home', HomeSchema)
}