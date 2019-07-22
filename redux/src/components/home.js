import React from 'react'
import { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        console.log('props==',props)
    }
    gotoCount() {
        this.props.history.push('/count')
    }
    render() {
        return (
            <div className="my-button">
                <div >i am the homepage</div>
                <button onClick={()=>{this.gotoCount()}}>to count</button>
            </div>
        )
    }
}

export default Home