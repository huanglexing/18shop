/*
包含N个接口请求
 */
//1,根据经纬度获得位置详情
import ajax from './ajax'
export const reqAddress = (geohash) => ajax('/position/${geohash')
export const reqAddress = (reqFoodTypes) => ajax('/index_category')
