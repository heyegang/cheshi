const svgCaptcha = require('svg-captcha');
// 获取图片验证码
module.exports.getcode = (ctx) => {
    const options = { // 参数
        width: 100,
        height: 40, // height of captcha
        fontSize: 50, // captcha text size
        color: true,
        noise: 2,
    }
    const Captcha = svgCaptcha.createMathExpr(options); //生成验证码
    ctx.session.codes = Captcha.text //把验证码保存到session
    console.log('=============================================================')
    console.log(ctx.session.codes)
        // 设置session过期时间
    ctx.session.maxAge = 1000 * 60 * 10
    ctx.body = { //返回结果给客户端
        status: 0,
        message: 'success',
        data: Captcha.data
    }
};