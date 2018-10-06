import React,{Component} from 'react'
import {
    Tabs,
    List,
    InputItem,
    WhiteSpace,
    Button,
    WingBlank,
    Switch,
    NavBar,
    Icon
} from 'antd-mobile'
import {connect} from 'react-redux'
import {createForm} from 'rc-form'

const Item = List.Item


class Login extends Component {
    // constructor(props){
    //     super(props)
    // }
    state = {
        phone:'',
        code:'',
        username:'',
        password:'',
        captcha:'',
        pwdtype:'password'
    }
    componentWillMount(){
        const logs=[
            {title:"短信登陆"},
            {title:"密码登陆"}
        ]
        this.logs = logs
    }
    login = () =>{
        console.log('登陆咯~')
    }
    userknows = () =>{
        console.log('跳转到用户协议页面')
    }
    handleChange = (name,val) => {
        this.setState({
            [name]:val
        })
    }
    pwdtoggle = (type) => {
        if (type){
            this.setState(
                {pwdtype:'text'}
            )
        }else {
            this.setState(
                {pwdtype:'password'}
            )
        }
    }
    render(){
        const {getFieldProps} = this.props.form
        return (
            <div className='loginpage'>
                <NavBar
                    mode='light'
                    icon={<Icon type='left'/>}
                    onLeftClick={() => this.props.history.goBack()}
                />
                <div className='loginplug'>
                    <section className='loginlog'>E外卖</section>
                    <section>
                        <WingBlank size='xl'>
                            <Tabs
                                tabs={this.logs}
                            >
                                <div>
                                    <List>
                                        <WhiteSpace size='lg'/>
                                        <InputItem
                                            type='phone'
                                            extra='获取验证码'
                                            onExtraClick={()=>console.log('右边按键')}
                                            onChange={val => {this.handleChange('phone',val)}}
                                        >
                                            手机号
                                        </InputItem>
                                        <WhiteSpace size='lg'/>
                                        <InputItem
                                            onChange={val => {this.handleChange('code',val)}}
                                        >
                                            验证码
                                        </InputItem>
                                        <WhiteSpace size='lg'/>
                                        <Item wrap style={{textDecoration:'none'}}>
                                            温馨提示：未注册E外卖账号的手机，登陆时将自动注册，且代表已同意《
                                            <a style={{color:'#0af'}} onClick={this.userknows}>用户服务协议</a>
                                            》
                                        </Item>
                                        <WhiteSpace size='lg'/>
                                        <Button type='primary' onClick={this.login}>登陆</Button>
                                    </List>
                                </div>
                                <div className='loginpwd'>
                                    <List>
                                        <WhiteSpace size='lg'/>
                                        <InputItem
                                            onChange={val => {this.handleChange('username',val)}}
                                        >
                                            用户名
                                        </InputItem>
                                        <WhiteSpace size='lg'/>
                                        <InputItem
                                            className='pwd'
                                            type={this.state.pwdtype}
                                            extra={<Switch
                                                {...getFieldProps('Switch2',{
                                                    initialValue:false,
                                                    valuePropName:'checked',
                                                })}
                                                color='#0af'
                                                onClick={val => {this.pwdtoggle(val)}}
                                            />}
                                            onChange={val => {this.handleChange('password',val)}}
                                        >
                                            密码
                                        </InputItem>
                                        <WhiteSpace size='lg'/>
                                        <InputItem
                                            className='checktask'
                                            extra={<img src={require(`../../assets/images/yanzhengma.png`)}/>}
                                            onExtraClick={()=>console.log('点击更换验证码')}
                                            onChange={val => {this.handleChange('captcha',val)}}
                                        >
                                            验证码
                                        </InputItem>
                                        <WhiteSpace size='lg'/>
                                        <Button type='primary' onClick={this.login}>登陆</Button>
                                    </List>
                                </div>
                            </Tabs>
                        </WingBlank>
                    </section>
                </div>
            </div>
        )
    }
}

const LoginEnter = createForm()(Login)

export default connect(

)(LoginEnter)
