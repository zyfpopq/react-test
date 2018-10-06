import React,{Component} from 'react'
import {NavBar} from 'antd-mobile'

import OrderList from '../../components/orderlist/orderlist'

export default class Order extends Component {
    render(){
        return (
            <div>
                <NavBar>订单列表</NavBar>
                <OrderList/>
            </div>
        )
    }
}
