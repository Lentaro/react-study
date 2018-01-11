import {Button} from 'antd-mobile'
import React,{Component} from 'react'
class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const store = this.props.store
    //获取store的内部状态
    const num = store.getState()
    const addGUN = this.props.addGUN
    const jianGUN = this.props.jianGUN
    const addGUNAsync = this.props.addGUNAsync
    return(
      <div>
        <h1>现在有机枪{num}把</h1>
        <Button onClick={()=>store.dispatch(addGUN())}>申请武器</Button>
        <Button onClick={()=>store.dispatch(addGUNAsync())}>2秒后申请武器</Button>
        <Button onClick={()=>store.dispatch(jianGUN())}>上交武器</Button>
      </div>
    )
  }
}
export default App