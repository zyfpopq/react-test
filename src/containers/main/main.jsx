import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'

import Order from '../order/order'
import Personal from '../personal/personal'
import Search from '../search/search'
import Msite from '../msite/msite'
import LoginEnter from '../login/login'
import NavFooter from '../../components/nav-footer/nav-footer'

export default class Main extends Component {
    navList = [
        {
            path:'/msite',
            component:Msite,
            title:'外卖列表',
            icon:'msite',
            text:'外卖',
        },
        {
            path:'/search',
            component:Search,
            title:'搜索',
            icon:'search',
            text:'搜索',
        },
        {
            path:'/order',
            component:Order,
            title:'订单列表',
            icon:'order',
            text:'订单',
        },
        {
            path:'/personal',
            component:Personal,
            title:'用户信息',
            icon:'personal',
            text:'我的',
        }
    ]
    render(){
        const {navList} = this
        return (
            <div>
                <Switch>
                    <Route path='/order' component={Order}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/personal' component={Personal}/>
                    <Route path='/login' component={LoginEnter}/>
                    <Route component={Msite}/>
                </Switch>
                <NavFooter navList={navList}/>
            </div>
        )
    }
}
