import instance from './axios'

const http = ({ url = '', method, param = {} }) => {
  return new Promise((resolve, reject) => {
    instance({
      method,
      url,
      // `params` 是即将与请求一起发送的 URL 参数
      // `data` 是作为请求主体被发送的数据
      params: method === 'GET' || method === 'DELETE' ? param : null,
      data: method === 'POST' || method === 'PUT' ? JSON.stringify(param) : null,
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

const get = ({ url, param = {} }) => {
  return http({ url, method: 'GET', param });
}

const post = ({ url, param = {} }) => {
  return http({
    url,
    method: 'POST',
    param
  })
}

export default { get, post };