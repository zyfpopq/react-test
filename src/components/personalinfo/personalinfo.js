import React,{Component} from 'react'
import {List} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

const Item = List.Item
const Brief = Item.Brief


class PersonalInfo extends Component{
    loginplace = () => {
        this.props.history.push('/login')
    }
    render(){
        return(
            <div className='personalinfo'>
                <List className='personlogin'>
                    <Item
                        arrow="horizontal"
                        thumb={require(`./images/personal.png`)}
                        multipleLine
                        onClick={this.loginplace}
                    >&nbsp;登陆/注册<Brief><img style={{width:'30px',height:'30px'}} src={require(`./images/phone.png`)} alt=''/>暂无绑定手机号</Brief></Item>
                </List>
                <div className='personmsg'>
                    <div>
                        <div>
                            <section>
                            <span style={{color:'rgb(0, 152, 251)',fontSize:'30px',fontWeight:'700'}}>
                                0.00
                            </span>
                                元
                            </section>
                            <section style={{fontSize:'16px'}}>
                                我的余额
                            </section>
                        </div>
                    </div>
                    <div>
                        <div>
                            <section>
                            <span style={{color:'rgb(255, 95, 62)',fontSize:'30px',fontWeight:'700'}}>
                                0
                            </span>
                                个
                            </section>
                            <section style={{fontSize:'16px'}}>
                                我的优惠
                            </section>
                        </div>
                    </div>
                    <div>
                        <div>
                            <section>
                            <span style={{color:'rgb(106, 194, 11)',fontSize:'30px',fontWeight:'700'}}>
                                0
                            </span>
                                分
                            </section>
                            <section style={{fontSize:'16px'}}>
                                我的积分
                            </section>
                        </div>
                    </div>
                </div>
                <List className='personlist'>
                    <Item
                        arrow="horizontal"
                        thumb={require(`./images/order.png`)}
                    >我的订单</Item>
                    <Item
                        arrow="horizontal"
                        thumb={require(`./images/jifenshangcheng.png`)}
                    >积分商城</Item>
                    <Item
                        arrow="horizontal"
                        thumb={require(`./images/huiyuan.png`)}
                    >E外卖会员卡</Item>
                </List>
                <List className="personfuwu">
                    <Item
                        arrow="horizontal"
                        thumb={require(`./images/fuwu.png`)}
                    >服务中心</Item>
                </List>
            </div>
        )
    }
}

export default withRouter(PersonalInfo)
