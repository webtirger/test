import React from 'react'
import PropTypes from 'prop-types'

import SnakeBody from './snake_body'
import SnakeHead from './snake_head'

import SnakeTail from '../img/snake_tail.png'
const { log } = console;
export default class Snake extends React.Component {
    static propTypes = {
        flag: PropTypes.bool.isRequired,
        snakeBody: PropTypes.array.isRequired
    }
    state = {
        timer_snake: 0,
        currentOffsetW: 0,
        currentOffsetH: 0,
        snake_head: '',
        box_borderW: '',
        box_borderH: '',
        self_offsetW: 0,
        self_offsetH: 0,
        self_width: 0,
        snake_long: '',
        turn_flag: false,
        turn_direction: '',
        moveFlag: false
    }
    componentDidMount() {
        const snake_head = document.getElementsByClassName('snake_head')[0];
        const box_borderW = snake_head.parentNode.parentNode.offsetWidth;
        const box_borderH = snake_head.parentNode.parentNode.offsetHeight;
        const self_offsetW = snake_head.offsetLeft;
        const self_offsetH = snake_head.offsetTop;
        const self_width = snake_head.offsetWidth;
        const snake_long = document.getElementsByClassName('snake')[0].getElementsByTagName('div');
        this.setState({ snake_head, box_borderW, box_borderH, self_offsetW, self_width, self_offsetH, snake_long });
        document.addEventListener('keyup', this.handleKeyUp);
    }
    //向上运动
    MoveTop = () => {
        const { flag } = this.props;
        let { timer_snake, snake_head, box_borderW, box_borderH, self_offsetW, self_offsetH, currentOffsetW, currentOffsetH, snake_long, turn_direction } = this.state;
        log('top')
        turn_direction = 'top';
        this.setState({ turn_direction })


    }
    //向下运动
    MoveBottom = () => {
        const { flag } = this.props;
        let { timer_snake, snake_head, box_borderW, box_borderH, self_offsetW, self_offsetH, self_width, currentOffsetW, currentOffsetH, snake_long, turn_direction } = this.state;
        log('bottom')
        turn_direction = 'bottom';
        this.setState({ turn_direction })
    }
    //向左运动
    MoveLeft = () => {
        const { flag } = this.props;
        let { timer_snake, snake_head, box_borderW, box_borderH, self_offsetW, self_offsetH, currentOffsetW, currentOffsetH, snake_long, turn_direction } = this.state;
        log('left')
        turn_direction = 'left';
        this.setState({ turn_direction })
    }
    //向右运动
    MoveRight = () => {
        let { timer_snake, snake_head, box_borderW, box_borderH, self_offsetW, self_offsetH, currentOffsetW, currentOffsetH, snake_long, turn_flag, turn_direction } = this.state;
        const { flag } = this.props;
        log('right');
        turn_direction = 'right';
        this.setState({ turn_direction })
        snake_head.style.transform = `translate(${50}px,${50}px)`;
        this.setMoveFlag();
    }

    turnTop = () => {
        let { timer_snake, snake_head, box_borderW, box_borderH, self_offsetW, self_offsetH, self_width, currentOffsetW, currentOffsetH, snake_long, turn_direction } = this.state;

    }

    turnBottom = () => {
        let { timer_snake, snake_head, box_borderW, box_borderH, self_offsetW, self_offsetH, self_width, currentOffsetW, currentOffsetH, snake_long } = this.state;
        let among = snake_long.length;
        let count = 0;

    }

    turnLeft = () => {
        let { timer_snake, snake_head, box_borderW, box_borderH, self_offsetW, self_offsetH, self_width, currentOffsetW, currentOffsetH, snake_long } = this.state;

    }
    turnRight = () => {
        let { timer_snake, snake_head, box_borderW, box_borderH, self_offsetW, self_offsetH, self_width, currentOffsetW, currentOffsetH, snake_long } = this.state;

    }
    //键盘控制
    handleKeyUp = (e) => {
        //上 38 下 40 左 37 右 39
        switch (e.keyCode) {
            case 38: this.MoveTop(); break;
            case 40: this.MoveBottom(); break;
            case 37: this.MoveLeft(); break;
            case 39: this.MoveRight(); break;
            default: break;
        }

    }
    parentMove = (direct) => {
        switch (direct) {
            case 'top': this.MoveTop(); break;
            case 'bottom': this.MoveBottom(); break;
            case 'left': this.MoveLeft(); break;
            case 'right': this.MoveRight(); break;
        }
    }
    setMoveFlag = () => {
        this.setState({ moveFlag: true })
    }

  
    render() {
        const { snakeBody } = this.props;
        const { turn_direction, moveFlag } = this.state;
        return (
            <div className='snake'>
                <div className="snake_tail"><img src={SnakeTail} alt="" /></div>
                {snakeBody.map((value, index) => <SnakeBody key={index} parentMove={this.parentMove} turnDirect={turn_direction} moveFlag={moveFlag} isMove={this.isMove}>{value}</SnakeBody>)}
                <SnakeHead onKeyUp={this.handleKeyUp} setMoveFlag={this.setMoveFlag}></SnakeHead>
            </div>
        )
    }
}