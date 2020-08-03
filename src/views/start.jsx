import React from 'react'
import PropTypes from 'prop-types'



export default class Start extends React.Component {
    static propTypes={
        startGame:PropTypes.func.isRequired
        // 接收父组件方法
    }
    state = {
        flag: true,
        currentTime: 0,
    }

handleClick=(e)=>{
this.props.startGame(e);
}
    render() {
        return (
            <div>
                <i className='start' onClick={this.handleClick} ></i>
            </div>
        )
    }
}