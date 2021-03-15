module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const DetailsSchema = new Schema({
        id: {
            type: String
        },
        image1: {
            type: String
        },
        image2: {
            type: String
        },
        price: {
            type: Number
        },
        discount: {
            type: String
        },
        pricing: {
            type: String
        },
        way: {
            type: String
        },
        describe: {
            type: String
        },
        details: {
            type: String
        },
        recommended: {
            type: String
        },
        author1: {
            type: String
        },
        Introduction1: {
            type: String
        },
        author2: {
            type: String
        },

        Introduction: {
            type: String
        }
    })
    return mongoose.model('Details', DetailsSchema)
}