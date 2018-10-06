/*
包含了n个接口请求的函数的模块
函数返回值为:promise
 */
import ajax from './ajax'
//密码登陆接口
export const reqLoginPwd = ({username,password,capthca}) => ajax('/login_pwd',{username,password,capthca},'POST')
//密码登陆验证发获取接口
export const reqCaptcha = () => ajax('/captcha')
//获取短信验证码
export const reqSendSms = (phone) => ajax('/sendcode',{phone})
//短信登陆
export const reqLoginSms = ({phone,code}) => ajax('/login_sms',{phone,code},'POST')
//根据session中的userid，查询对应user
export const reqUserInfo = () => ajax('/userinfo')
//获取首页分类列表
export const reqCategory = () => ajax('/index_category')
//根据经纬度获取位置详情
export const reqGeohash = (geohash) => ajax(`/position/${geohash}`)
//根据经纬度获取商铺列表
export const reqShop = ({latitude,longitude}) => ajax('/shop',{latitude,longitude})
//根据经纬度和关键词搜索商铺商品
export const reqSearchShops = ({geohash,keyword}) => ajax('/search_shops',{geohash,keyword})
