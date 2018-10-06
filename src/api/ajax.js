/*
能发送ajax请求的函数模块
函数的返回值是promise对象
 */
import axios from 'axios'
export default function ajax(url,data={},type='GET') {
    if (type==='GET'){
        let parmaStr = ''
        Object.keys(data).forEach(key => {
            parmaStr += key + '=' +data[key] + '&'
        })
        if (parmaStr){
            parmaStr = parmaStr.substring(0,parmaStr.length-1)
        }
        return axios.get(url + '?' +parmaStr)
    } else {
        return axios.post(url,data)
    }
}
