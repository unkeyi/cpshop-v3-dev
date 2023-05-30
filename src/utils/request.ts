import { message } from 'ant-design-vue/es';
import axios, { type AxiosRequestConfig } from 'axios';
// 待优化为env环境地址配置（测试/生产）
export const BASE_URL = 'http://localhost:8081'
// 设置通用公共地址
const request = axios.create({ baseURL: `${BASE_URL}/api` })

request.interceptors.request.use((config) => {
    // 此处做token的相关处理（暂将token存储操作于auth.ts）
    /**
     * 
     const { token } = ${auth.ts中return的function};
     if(token) {
             config.headers.Authorization = token
     }
    */
    return config
});

request.interceptors.response.use((response) => {
    // 处理请求响应(成功/失败/...)---这里需要与后端设置的code配置进行联调
    const data = response.data
    if(data.code === 50001) {
        message.error(data.message || '')
        // dosomething
    } else if(data.code !== 0) {
        message.error(data.msg)
        // dosomething
    }
    return response;
})

// 调用接口的function 及获得的数据.data。方法名(api地址，传参)
export default async function (url: string, options?: AxiosRequestConfig) {
    return (
        await request({
            url,
            ...options,
        })
    ).data;
}