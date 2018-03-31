import React from 'react';
import './personal.less';
import {rankData} from '../../api/dataInfo'

export default class personal extends React.Component{
    constructor(){
        super();
        this.state={
            left:false,
            data:[]
        }
    }
    componentDidMount() {
        let h = document.documentElement.clientWidth;
        let H = document.documentElement.clientHeight;
        if (h < 640) {
            this.pers.style.width = h + 'px';
        } else {
            this.pers.style.width = 640 + 'px';
        }
        this.pers.style.height = H + 'px';
        rankData(7).then(data=>{
            this.setState({
                data
            })
        })
    }

    render(){
        let {data}=this.state;
        let {pers_left,changeLeft,info}=this.props;
        let style={left:pers_left?'0':'6.4rem',}
        return <div ref={x=>this.pers=x} style={style} className='Profile-personal'>
            {/*<div className='peR-click' onClick={ev=>{*/}
                {/*console.log(1);*/}
                {/*if(parseInt(this.peR.style.left)!==0){*/}
                    {/*console.log(2);*/}
                    {/*this.peR.style.left=0;*/}
                {/*};*/}
            {/*}}></div>*/}
            <div ref={x=>{this.peR=x}} className='peR-all'>
                <div className='peR-head'>
                    <div className='head-text'>
                        <a href="javascript:;" className='iconfont icon-houtui' onClick={ev=>{
                            changeLeft();
                        }}></a>
                        <a href="javascript:;" className='iconfont icon-xiaoxi'></a>
                        <div className='text-head'>
                            <img src={data.img} alt=""/>
                        </div>
                        <div className='text-name'>
                            <h3>{info.name}</h3>
                            <span>Lv.2</span>
                        </div>
                        <div className='text-p'>
                            <span>论坛年龄：{info.age} </span>
                            <span>积分：{info.num}  </span>
                            <span>威望：{info.master}</span>
                            <span className='iconfont icon-bianji'></span>
                        </div>
                        <div className='text-signature'>
                            <p>个性签名：{info.sign}</p>
                        </div>
                    </div>
                </div>
                <div className='peR-body'>
                    <ul>
                        <li>
                            <p><strong>0</strong></p>
                            <p>我的粉丝</p>
                        </li>
                        <li>
                            <p><strong>0</strong></p>
                            <p>我的粉丝</p>
                        </li>
                        <li>
                            <p><strong>0</strong></p>
                            <p>我的粉丝</p>
                        </li>
                        <li>
                            <p><strong>0</strong></p>
                            <p>我的粉丝</p>
                        </li>
                    </ul>
                </div>
                <div className='peR-footer'>
                   <div className='theme'>
                       <div onClick={ev=>{
                           this.i.style.left='1.35rem'
                       }}>主题</div>
                       <div onClick={ev=>{
                           this.i.style.left='4.55rem'
                       }}>回复</div>
                       <i ref={x=>{this.i=x}}></i>
                   </div>
                    <div className='footer-list'>
                        <ul>
                            <li>
                                <p>{data.content==undefined?'':data.title}</p>
                                <p>{data.content==undefined?'':data.content.article}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }
}