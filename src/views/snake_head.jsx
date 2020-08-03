import React from 'react'
import PropTypes from 'prop-types'

export default class SnakeHead extends React.Component {
    static propTypes = {
    //    KeyUp: PropTypes.func.isRequired,
        setMoveFlag:PropTypes.func.isRequired
    }
   
    render() {
        // const { KeyUp } = this.props;
        return (
            <div className="snake_head"><img src={require('../img/snake_head.png')} alt="" /></div>
        )
    }
}