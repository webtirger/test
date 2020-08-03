import React from 'react';

import Time from '../views/time'
import Start from '../views/start'
import Score from '../views/score'

import Snake from '../views/snake'
import Food from '../views/food'

import StartMusic from '../music/TheSpire.mp3'
class App extends React.Component {
    state = {
        currentTime: '',
        flag: false,
        timer: 0,
        // snakeBody: [{ body: 'body' }, { body: 'body' }, { body: 'body' }]
        snakeBody: [{ body: 'body' }]
        // timer_snake: 0,
        // currentOffsetW: 0,
        // currentOffsetH:0,
        // snake_head: '',
        // box_borderW: '',
        // box_borderH:'',
        // self_offsetW: 0,
        // self_offsetH:0,
        // snake_long: ''

    }
    //加载完成时获取所有元素
    // componentDidMount() {
    //     const snake_head = document.getElementsByClassName('snake_head')[0];
    //     const box_borderW = snake_head.parentNode.parentNode.offsetWidth;
    //     const box_borderH = snake_head.parentNode.parentNode.offsetHeight;
    //     const self_offsetW = snake_head.offsetLeft;
    //     const self_offsetH = snake_head.offsetTop;
    //     const snake_long = document.getElementsByClassName('snake')[0].getElementsByTagName('div');
    //     this.setState({ snake_head, box_borderW,box_borderH, self_offsetW,self_offsetH, snake_long });
    //     document.addEventListener('keyup',this.handleKeyUp);
    // }
    //改变按钮状态，开始或暂停
    //开始计时，再次点击时间重新计时
    startGame = (e) => {
        let audio = new Audio();
        audio.src = StartMusic;
        audio.loop = true;
        const { flag } = this.state;
        if (!flag) {  e.target.className = 'paused'; this.setState({ flag: !flag }); this.startTime(); this.startMove() }
        else { audio.pause(); e.target.className = 'start'; this.setState({ flag: !flag }); clearInterval(this.state.timer); clearInterval(this.state.timer_snake) }
        
        // this.setState({ flag: !flag });
    }
    //游戏计时控制函数
    startTime = () => {
        const start = new Date();
        const timer = setInterval(() => {
            let runTime = new Date();
            let countTime = parseInt((runTime - start) / 1000);
            this.setState({ currentTime: countTime })
        }, 1000);
        this.setState({ timer })
    }
    //控制蛇运动、停止
    startMove = () => {
        // this.MoveRight();
    }


    RandomFood = () => {
        let x = parseInt(Math.random() * 16 + 1);
        let y = parseInt(Math.random() * 10 + 1);

    }
    render() {
        const { currentTime } = this.state;
        return (
            <div>
                <div className='top'>
                    <Time currentTime={`${currentTime}`} />
                    <Start startGame={this.startGame} />
                    <Score />
                </div>
                <div className="bottom">
                    <Snake flag={this.state.flag} snakeBody={this.state.snakeBody}></Snake>
                    <Food RandomFood={this.RandomFood}></Food>
                </div>
            </div>
        );
    }

}

export default App;
