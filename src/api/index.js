import axios from 'axios'
import qs from 'qs'
import config from '@/config'

// 配置默认请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = config.config.url

// pOST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  // 在发送请求之前做参数序列化
  config.data = qs.stringify(config.data)
  return config
}, (error) => Promise.reject(error))

export default axios
