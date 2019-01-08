// 处理请求
// 导入 axios 模块
import axios from 'axios'
// 配置基准路径
// const baseURL = 'http://localhost:8888/api/private/v1/'
// axios.defaults.baseURL = baseURL
export const login = (type, data) => {
  // console.log(type, data)
  const params = JSON.stringify(
    {
      message: type,
      data: data
    }
  )
  console.log(params)
  return axios.post('https://www.snowstormdoll.cn/ajax', params)
    .then(results => {
      return results
    })
}
// export const login = (params) => {
//   axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//   })
// }
