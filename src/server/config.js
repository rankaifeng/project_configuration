/**
 * 请求路径
 */
export const BASE_URL = process.env.NODE_ENV === 'development' ?
  'http://192.168.100.144:8088/' : localStorage.getItem("httpUrl");
/**
 * 超时时间
 */
export const TIMEOUT = 30000;