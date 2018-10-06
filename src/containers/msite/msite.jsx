import React,{Component} from 'react'
import {NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {getAddress,getCategorys} from "../../redux/actions";

import Category from '../../components/category/category'
import ShopList from '../../components/shoplist/shoplist'

class Msite extends Component {
    componentDidMount() {
        const adress="30.6260815936,104.0695220232"
        this.props.getAddress(adress)
        this.props.getCategorys()
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
        },500)
    }
    render(){
        const {address} = this.props.useraddress
        console.log("获得地址",address)
        return (
            <div>
                <NavBar>{address}</NavBar>
                <Category indexcategorys={this.props.indexcategorys}/>
                <ShopList/>
            </div>
        )
    }
}

export default connect(
    state=>({useraddress:state.useraddress,indexcategorys:state.indexcategorys}),
    {getAddress,getCategorys}
)(Msite)
