import React from 'react'
import { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        console.log('props==',props)
        this.state = {
            count: props.count || 0,
            hello: props.hello || '',
            inputKey:''
        }
    }
    updateBtn(){
        console.log('inputkey===',this.state.inputKey)
        if(this.state.inputKey === ''){
            return false
        } else if(this.state.inputKey !== '' && isNaN(Number(this.state.inputKey))){
            return false
        } else {
            this.props.onUpdateClick(Number(this.state.inputKey))
        }
    }
    handleChange(event) {
        console.log(event) // 这里打印的target是空 但是赋值成功
        this.setState({
            inputKey:  event.target.value
        })
        // 可以用 ref
        // let val=this.refs.inputtext.value;
        // console.log(val)
        // this.setState({
        //     inputKey: val
        // })
    }
    render() {
        const { count, hello, onIncreaseClick, onSayHello } = this.props
        return (
            <div className="my-button">
                <button onClick={onIncreaseClick}>Click Me</button>
                <button onClick={onSayHello}>Say Hello</button>
                <input type="text" ref="inputtext" value={this.state.inputKey} onChange={(e) => this.handleChange(e)}/>
                <button onClick={() => this.updateBtn()}>update state to input</button>
                <div>
                    <div>Click Count: {count}</div>
                    <div>Say: {hello}</div>
                </div>
            </div>
        )
    }
}

export default Counter