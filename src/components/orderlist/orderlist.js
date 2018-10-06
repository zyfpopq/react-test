import React,{Component} from 'react'
import {Button} from 'antd-mobile'


export default class OrderList extends Component{
    render(){
        return(
            <div className='orderlist'>
                <img src={require(`./images/order/person.png`)}/>
                <h3>登陆后查看订单列表</h3>
                <Button type='primary' style={{fontSize:'14px',display:'inline-block',padding:'0 20px'}}>立即登陆</Button>
            </div>
        )
    }
}
