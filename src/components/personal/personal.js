import React from 'react';
import './personal.less';
import Nav from '../../components/header/Nav'

export default class personal extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        let h=document.documentElement.clientWidth;
        let H=document.documentElement.clientHeight;
        if(h<640){
            this.peR.style.width=h+'px';
        }else {
            this.peR.style.width=640+'px';
        }
        this.peR.style.height=H+'px';
        this.peR.style.left=h+'px';
    }

    render(){
        let arr=["主题","回复"];
        return <div ref={x=>this.pers=x} className='Profile-personal'>
            <div className='peR-click' onClick={ev=>{
                if(parseInt(this.peR.style.left)!==0){
                    this.peR.style.left=0;
                };
            }}></div>
            <div ref={x=>{this.peR=x}} className='peR-all'>
              <div className='peR-head'>
               <div className='head-text'>
                   <a href="javascript:;" className='iconfont icon-houtui' onClick={ev=>{
                       this.peR.style.left='6.4rem';
                   }}></a>
                   <a href="javascript:;" className='iconfont icon-xiaoxi'></a>
                   <div className='text-head'>
                       {/*<img src={require("../../common/img/noavatar_small.jpg")} alt=""/>*/}
                   </div>
                   <div className='text-name'>
                       <h3>北城霸主 </h3>
                       <span>Lv.2</span>
                   </div>
                   <div className='text-p'>
                       <span>论坛年龄：0.0 </span>
                       <span>积分：15  </span>
                       <span>威望：0</span>
                       <span className='iconfont icon-bianji'></span>
                   </div>
                   <div className='text-signature'>
                       <p>个性签名：</p>
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
                  <Nav data={arr}/>
                  <div className='footer-list'>
                      <ul>
                          <li>
                            <p><strong>题目</strong></p>
                              <p>内容</p>
                          </li>
                      </ul>
                  </div>
              </div>
            </div>
        </div>
    }
}