'use strict';

const Service = require('egg').Service;

class MarketingService extends Service {
    async getHomeData() {
        let list = {
            code: '200',
            data: [{
                id: '100',
                authname: '营销中心',
                icon: 'ios-briefcase-outline',
                children: [{
                    id: '1001',
                    describe: '下单前对商品折扣优惠',
                    authname: '商品折扣',
                    icon: "ios-bookmarks-outline",
                    path: '/marketing/goodsDiscount'
                }, {
                    id: '1002',
                    describe: '下单后对订单的促销优惠',
                    authname: '订单促销',
                    icon: "md-clipboard",
                    path: '/marketing/orderPromotional'
                }]
            }, {
                id: '200',
                authname: '优惠券',
                icon: "ios-cloudy-night-outline",
                children: [{
                    id: '2001',
                    describe: '优惠券的发放与管理',
                    authname: '优惠券',
                    icon: "ios-cog-outline",
                    path: '/marketing/Coupons'
                }, {
                    id: '2002',
                    describe: '对生成的优惠券进行发放',
                    authname: '优惠券发放',
                    icon: "ios-contacts-outline",
                    path: '/marketing/CouponDistribution'
                }]
            }, {
                id: '300',
                authname: '购物卡',
                icon: "md-desktop",
                children: [{
                    id: '3001',
                    describe: '购物卡的生成与管理',
                    authname: '购物卡',
                    icon: 'md-easel',
                    path: '/marketing/ShoppingCard'
                }, {
                    id: '2002',
                    describe: '对已绑定的购物卡进行管理',
                    authname: '购物卡使用',
                    icon: "ios-flash-outline",
                    path: '/marketing/UseCard'
                }]
            }]
        }
        return list
    }
}

module.exports = MarketingService;