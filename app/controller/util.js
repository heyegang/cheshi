'use strict';
const svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;

class UtilController extends Controller {
    async captcha() {
        const captcha = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            ignoreChars: 'Ooli',
            width: 100,
            height: 40,
            noise: 3,
            color: true,
            background: '#cc9966',
        });
        // this.req.session.captcha = cap.text
        this.ctx.session.captcha = captcha.text;
        this.ctx.response.type = 'image/svg+xml';
        this.ctx.body = captcha.data;
    }
}

module.exports = UtilController;