import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { login } from './Auth.redux'
import { Redirect } from 'react-router-dom'
import { Button } from 'antd-mobile'
//有两个reducers 每个都有state
//合并reducers
@connect(
    state=>state.auth,
    {login}
)

class Auth extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <div>
                {this.props.isAuth?<Redirect to='/dashboard'></Redirect>:null}
                <h2>你需要登录才能进入</h2>
                <Button onClick={this.props.login}>登陆</Button>
            </div>
        )
    }
}

export default Auth