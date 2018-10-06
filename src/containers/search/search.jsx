import React,{Component} from 'react'
import {NavBar} from 'antd-mobile'

import Searchbar from '../../components/searchbar/searchbar'

export default class Search extends Component {
    render(){
        return (
            <div>
                <NavBar>搜索</NavBar>
                <Searchbar/>
            </div>
        )
    }
}
