import React from 'react'

export default class Queue extends React.Component {
    state = {
        count: 0,
        obj: [{}],
        queueHead: 0
    }
    isEmpty = (Q) => {
        const { count } = this.state;
        if (count === 0) return true;
        else return false;

    }
    insertQueue = (ele) => {
        const { count, obj } = this.state;
        obj[count] = ele;
        count++;
        this.setState({ count })


    }
    leaveQueue = () => {
        const { obj } = this.state;
        if(this.isEmpty()){
            return undefined;
        }
        obj.shift(obj[0]);
        count--;
        this.setState({obj})
    }

    clearQueue=()=>{
        const { count, obj } = this.state;
        count=0;
        obj=[{}];
        this.setState({count,obj})
    }
    getQueueTail=()=>{
        const { count,obj } = this.state;
        return obj[count];
    }
    getQueueHead=()=>{
        const { count,obj } = this.state;
        return obj[0];
    }
    getQueueLength=()=>{
        return this.state.count;
    }
}