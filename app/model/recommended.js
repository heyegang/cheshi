module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const RecommendedSchema = new Schema({
        title: {
            type: String
        },
        describe: {
            type: String
        },
        img: {
            type: String
        },
        image: {
            type: String
        }
    })
    return mongoose.model('Recommended', RecommendedSchema)
}