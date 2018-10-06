import React,{Component} from 'react'
import {SearchBar} from 'antd-mobile'

export default class Searchbar extends Component{
    state = {
        value:'',
    };
    search = () =>{
        console.log('搜索了',this.state.value)
    }
    render(){
        return(
            <div className='searchbar'>
                <SearchBar placeholder="搜索" onChange={val => this.setState({value:val})} onSubmit={this.search}/>
            </div>
        )
    }
}
