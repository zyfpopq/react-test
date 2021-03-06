import React,{Component} from 'react'
import {TabBar} from 'antd-mobile'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

const Item = TabBar.Item

class NavFooter extends Component{

    static porpTypes = {
        navList:PropTypes.array.isRequired
    }
    render(){
        let {navList} = this.props
        const path = this.props.location.pathname
        return (
            <TabBar>
                {
                    navList.map((nav) =>
                        <Item
                            key = {nav.path}
                            title = {nav.text}
                            icon = {{uri:require(`./images/nav/${nav.icon}.png`)}}
                            selectedIcon = {{uri:require(`./images/nav/${nav.icon}-selected.png`)}}
                            selected = {path===nav.path}
                            onPress = {() => this.props.history.replace(nav.path)}
                        />
                    )
                }
            </TabBar>
        )
    }
}

export default withRouter(NavFooter)