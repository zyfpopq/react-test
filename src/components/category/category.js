import React,{Component} from 'react'
import {Grid} from 'antd-mobile'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class Category extends Component{
    static propTypes = {
        indexcategorys:PropTypes.array.isRequired
    }

    constructor(props){
        super(props)
        this.classification=[]
    }
    handleclick=(data)=>{
        const url=data.url
        this.props.history.push(`/${url}`)
    }
    render(){
        this.props.indexcategorys.forEach(
            data=>{
                this.classification.push({
                    icon:data.image_url,
                    text:data.title,
                    url:data.url
                })
            }
        )
        return (
            <div className="category">
                    <Grid
                        data={this.classification}
                        //onClick={(data)=>(this.handleclick(data))}
                        hasLine={false}
                        isCarousel={true}
                        columnNum='4'
                        carouselMaxRow='2'
                    />
            </div>
        )
    }
}

export default withRouter(Category)
