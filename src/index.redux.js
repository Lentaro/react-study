const ADD = 'add'
const JIAN = 'jian'
//reducer
export function counter (state=10,action){
    // console.log(state)
    switch(action.type){
        case ADD:
            return state+1
        case JIAN:
            return state-1
        default:
            return 10
    }
}   
//action creator
export function addGUN(){
    return {type:ADD}
}

export function jianGUN(){
    return {type:JIAN}
} 

export function addGUNAsync(){
    //使用thunk中间件后action cteator可以返回一个函数
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGUN())
        },2000)
    }
}