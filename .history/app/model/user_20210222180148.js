// 用户的所有信息（字段）
// eg：username password email mobile ...(包括商品，商品名称，商品价格)

module.exports = app => {
  let mongoose = app.mongoose
  let Schema = mongoose.Schema
  const UserSchema = new Schema({
    username: {
      type:String,
      // required:true
    },
    password: {
      type:String,
    },
  })
  return mongoose.model('User',UserSchema)
}