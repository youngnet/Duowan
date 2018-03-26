import React from 'react'
import PropTypes from "prop-types"
import './Nav.less'

export default class Nav extends React.Component{
    constructor(){
        super();
        this.state={
            title:['推荐','手机游戏','电脑游戏','特权礼包','推荐','手机游戏','电脑游戏','特权礼包']
        }
    }
    componentWillMount(){
    }
    render(){
        return <header className='headerBox'>
            <ul className='menuNav clearfix' ref={x=>this.ul=x} style={{}}>
                <li>推荐</li>
                <li>手机游戏</li>
                <li>电脑游戏</li>
                <li>特权礼包</li>
                <li>推荐</li>
                <li>手机游戏</li>
                <li>电脑游戏</li>
                <li>特权礼包</li>
            </ul>
        </header>
    }
}