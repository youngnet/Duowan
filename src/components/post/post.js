import React from 'react';
import './post.less';
import axios from 'axios';

export default class post extends React.Component{
    constructor(){
        super();
        this.state={flag:false}
    };
    componentDidMount(){
        this.setState({
            change:true
        })
        let h=document.documentElement.clientWidth;
        let H=document.documentElement.clientHeight;
        if(h<640){
            this.text.style.width=h+'px';
        }else {
            this.text.style.width=640+'px';
        }
        // this.text.style.left=h+'px';
         this.inp.style.height=H+'px';

    }
    render(){
        return <div ref={x=>{this.post=x}} className='star-post'>
            <div className='post-btn'>
                <a className='iconfont icon-bianji btn' href="javascript:;" onClick={ev=>{
                    if(parseInt(this.text.style.left)!==0){
                        this.text.style.left=0;
                        this.text.style.opacity=1;
                        return;
                    };
                }}></a>
            </div>
            <div ref={x=>this.text=x} className='post-text'>
                <div className='text-title'>
                    <div onClick={ev=>{
                        if(parseInt(this.text.style.left)==0){
                            this.text.style.left='6.4rem';
                            this.text.style.opacity=0;
                            return;
                        };
                    }}>
                        <a className='iconfont icon-houtui' href="javascript:;"></a>
                    </div>
                    <h4>发帖</h4>
                    <p onClick={this.changePost}>发布</p>
                </div>
                <div ref={x=>{this.inp=x}} className='text-input'>
                    <input ref={x=>this.inpa=x} placeholder='请输入标题（必填）' type="text"/>
                    <input ref={x=>this.inpb=x} placeholder='请输入内容' type="text"/>
                </div>
            </div>
        </div>
    }
    changePost=()=>{
        let userTitle=this.inpa.value,
            userText=this.inpb.value,
            obj={};
        if(userText.length!==0&&userTitle.length!==0){
            axios.post('',obj).then(data=>{}).catch(err=>{})
        }
    }
}