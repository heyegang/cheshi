module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const DisplaySchema = new Schema({
        image: {
            type: String
        },
        way: {
            type: String
        },
        describe: {
            type: String
        },
        price: {
            type: String
        }

    })
    return mongoose.model('Display', DisplaySchema)
}