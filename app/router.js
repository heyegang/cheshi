'use strict';


/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // router.get('/', controller.home.index);
    // 登录
    router.post('/user/login', controller.user.login)
    router.post('/user/register', controller.user.register)
    router.post('/user', controller.user.user)
        // 添加日志 需要鉴权
        // router.post('/diary/add', jwt, controller.diary.add);
        // router.post('/admin',jwt, controller.admin.index); 

    // 新增商品
    router.post('/addGoods/AddGoods', controller.addGoods.AddGoods)
        //验证码接口
    router.get('/captcha', controller.util.getcode);
    //营销首页 营销数据
    router.get('/market/home', controller.marketing.top);

    //添加商品折扣表格数据 ===================================================================
    router.post('/market/table', controller.marketing.table)

    // 获得商品折扣表格数据 =============================================================
    router.get('/market/data', controller.marketing.getData)
        // 商品折扣查询 =============================================================
    router.post('/market/findData', controller.marketing.findData)
        //删除商品折扣数据==============================================================
    router.post('/market/del', controller.marketing.delete)
        //添加订单促销表格数据
    router.post("/market/order", controller.marketing.order)
        //获取订单促销表格数据
    router.get('/market/getOrder', controller.marketing.getOrder)
        //删除订单促销表格数据
    router.post('/market/delOrder', controller.marketing.delOrder)
        //修改订单促销表格数据
    router.post('/market/modifyOrder', controller.marketing.modifyOrder)
        //添加优惠券===============================================================
    router.post('/market/coupons', controller.coupons.add)
        //获取优惠券 =================================================
    router.get('/market/getCoupons', controller.coupons.getData)


    // 商城首页轮播图===============================================================
    // 添加轮播图
    router.post('/home/addSlide', controller.home.addSlide)
        // 获取轮播图
    router.get('/home/slide', controller.home.slide)
        // 服务
    router.post('/home/serve', controller.home.serve)
        //获取服务列表
    router.get('/home/getServe', controller.home.getServe)
        //秒杀==================================================================
        // 添加秒杀
    router.post('/home/addAeckill', controller.home.addAeckill)
        //获取秒杀
    router.get('/home/seckill', controller.home.seckill)
        // 推荐==========================================================================
        // 添加推荐
    router.post('/home/recommended', controller.home.addRecomm)
        //获取推荐
    router.get('/home/getRecommended', controller.home.recommended)
        //展示图=======================================================================
        //添加展示图
    router.post('/home/addDisplay', controller.home.addDisplay)
        //获取展览图
    router.get('/home/display', controller.home.display)
        // 详情 ==============================================================
    router.post('/details', controller.details.details)
        //获取详情
    router.post('/getDetails', controller.details.getDetails)
};