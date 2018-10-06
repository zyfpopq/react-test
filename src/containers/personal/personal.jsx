import React,{Component} from 'react'
import {NavBar} from 'antd-mobile'

import PersonalInfo from '../../components/personalinfo/personalinfo'

export default class Personal extends Component {
    render(){
        return (
            <div>
                <NavBar>我的</NavBar>
                <PersonalInfo/>
            </div>
        )
    }
}
