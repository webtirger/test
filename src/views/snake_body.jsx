import React from 'react'
import PropTypes from 'prop-types'

import Snake_Body from '../img/enemybody.png'

export default class SnakeBody extends React.Component {
    static propTypes = {
        parentMove: PropTypes.func.isRequired,
        moveFlag: PropTypes.bool.isRequired,
        turnDirect: PropTypes.string.isRequired
    }
    state = {
        x: 0,
        y: 0,
        moveFlag:false,
        originalMove: 'Right',  //原来的移动方式
        newMove: '',      //新的移动方式
        throughNodes: 0  //要经过的节点数
    }
    componentWillReceiveProps() {
        // this.props.moveFlag = !this.props.move;
        // console.log(this.props.moveFlag)
        // this.setState({newMove:this.props.turnDirect,moveFlag:this.props.moveFlag})
        console.log(1);
        this.isMove();
    }
    // isMove = (props) => {
    //     const { moveFlag, turnDirect } = props;
    //     // const { moveFlag, newMove} = this.state;
    //     // console.log(moveFlag);
    //     if (moveFlag) {
    //         this.props.parentMove(turnDirect);
    //         console.log('aa');
    //         console.log(turnDirect)
    //     }
    // }

    // onClick={()=>this.isMove(this.props)}
    isMove = () => {
        const { moveFlag, turnDirect } = this.props;
        // const { moveFlag, newMove} = this.state;
        // console.log(moveFlag);
        if (moveFlag) {
            this.props.parentMove(turnDirect);
            console.log('aa');
            console.log(turnDirect)
        }
    }
    render() {
        return (
            <div className="snake_body"><img src={Snake_Body} alt="" /></div>
        )
    }
}