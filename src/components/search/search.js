import React from 'react';
import './search.less'

export default class search extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        let h=document.documentElement.clientWidth;
        let H=document.documentElement.clientHeight;
        if(h<640){
            this.for.style.width=h+'px';
        }else {
            this.for.style.width=640+'px';
        }
        this.for.style.height=H+'px';
        this.for_all.style.left=h+'px';
    }
    render(){
        return <div ref={x=>{this.for=x}} className='for-sear'>
            <div className='for-click'> </div>
            <div ref={x=>{this.for_all=x}} className='for-all'>
                <div className='for-head'>
                    <a href="javascript:;" className='iconfont icon-houtui' onClick={ev=>{
                        if(this.for_all.style.left!==0){
                            this.for_all.style.left=0;
                        }
                    }}></a>
                    <div>
                        <input type="text" placeholder='请输入关键词'/>
                    </div>
                    <i className='iconfont icon-shuaxin'> </i>
                </div>
                <div className='for-body'>
                    <p>历史搜索
                    <span>清除</span>
                    </p>
                    <ul className='clearfix'>
                        <li>秘密</li>
                        <li>英雄联盟</li>
                        <li>我的世界</li>
                        <li>各种游戏</li>
                    </ul>
                </div>
                <div className='for-footer'>
                    <p>热门搜索</p>
                    <ul className='clearfix'>
                        <li>秘密</li>
                    </ul>
                </div>
            </div>
        </div>
    }

}