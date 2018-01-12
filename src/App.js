import {Button} from 'antd-mobile'
import React,{ Component } from 'react'
import { connect } from 'react-redux'

import { addGUN, jianGUN, addGUNAsync } from './index.redux'

//表明这个组件中需要store中的哪些数据
// const mapStatetoProps = (state) => {
//   return {num:state}
// }
//表明这个组件中需要用到的action creator
// const actionCreator  = { addGUN, jianGUN, addGUNAsync }
//装饰器模式
// App = connect(mapStatetoProps,actionCreator)(App)
//安装了babel-plugin-transform-decorators-legacy后的新写法
@connect(
  //你需要state中的什么属性
  state=>({num:state.counter}),
  //你需要state中的什么方法，会自动放到props内dispatch
  { addGUN, jianGUN, addGUNAsync }
)
//有了以上三步以后被表明的内容就会自动存入本组件中的props内

class App extends Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    //使用了react-redux后不再需要传入store
    // const store = this.props.store
    // //获取store的内部状态
    // const num = store.getState()
    return(
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <Button onClick={this.props.addGUN}>申请武器</Button>
        <Button onClick={this.props.addGUNAsync}>2秒后申请武器</Button>
        <Button onClick={this.props.jianGUN}>上交武器</Button>
      </div>
    )
  }
}
export default App