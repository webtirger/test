import React from 'react'
import PropTypes from 'prop-types'

export default class Food extends React.Component{
static propTypes={
    RandomFood:PropTypes.func.isRequired
}
    render(){  
        return (
            <div className="snake_ate"><img src={require("../img/enemy.png")} alt=""/></div>
        )
    }
}