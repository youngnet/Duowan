import React from 'react';
import './search.less';
import {getData} from '../../api/dataInfo';
import {Link} from 'react-router-dom'
import utils from "../../common/js/utils";


export default class search extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let h=document.documentElement.clientWidth;
        let H=document.documentElement.clientHeight;
        if(h<640){
            this.for_all.style.width=h+'px';
        }else {
            this.for_all.style.width=640+'px';
        }
        // this.for_all.style.height=H+'px';
        // this.for_all.style.left=h+'px';
    }
    render(){
        let {data}=this.state;
        return <div ref={x=>{this.for=x}} className='for-sear'>
            <div className='for-click' onClick={ev=>{
                this.for_all.style.left='0';
                this.for_all.style.opacity='1';

            }
            }>
                <div> <p>请输入关键词</p><i className='iconfont icon-bianji'></i></div>
            </div>
            <div ref={x=>{this.for_all=x}} className='for-all'>
                <div  className='for-head'>
                    <a href="javascript:;" className='iconfont icon-houtui' onClick={ev=>{
                            this.for_all.style.left='6.4rem';
                            this.for_all.style.opacity='0';
                        this.da.style.display="none";
                            this.setState({
                                data:['']
                            })
                    }}></a>
                    <div>
                        <input ref={x=>{this.kw=x}} type="text" placeholder='请输入关键词' onChange={ev=>{
                            this.setState({
                                data:[]
                            })
                        }}/>
                    </div>
                    <i className='iconfont icon-shuaxin' onClick={this.search_end}> </i>
                </div>
                <div ref={x=>{this.da=x}} className='for-data'>
                    <ul className='clearfix'>
                        {
                            data.length==0?<li>没有</li>:data.map((item,index)=>{
                                return (<li key={index}>
                                        <Link to={`/searchDetail/${item.posterId}`}>
                                            <p>{item.posterScreenName}</p>
                                            <p >{item.content?utils.filterContent(item.content):null}</p>
                                            {
                                                item.imageUrls?(item.imageUrls.map((it,i)=>{

                                                    if(1<item.imageUrls.length){
                                                        return <img className='data-i' key={i} src={it} />
                                                    }
                                                    return <img key={i} src={it} />})):null
                                            }
                                        </Link>
                                </li>)
                            })
                        }
                    </ul>
                </div>
                <div className='for-body'>
                    <p>历史搜索
                    <span>清除</span>
                    </p>
                    <ul className='clearfix' onClick={ev=>{
                        if(ev.target.tagName!=='UL'){
                            this.kw.value=ev.target.innerText
                        }
                    }}>
                        <li>秘密</li>
                        <li>英雄联盟</li>
                        <li>我的世界</li>
                        <li>各种游戏</li>
                    </ul>
                </div>
                <div className='for-footer'>
                    <p>热门搜索</p>
                    <ul className='clearfix' onClick={ev=>{
                        if(ev.target.tagName!=='UL'){
                            this.kw.value=ev.target.innerText
                        }
                    }}>
                        <li>秘密</li>
                    </ul>
                </div>
            </div>
        </div>
    }
    search_end=(ev)=>{

        this.da.style.display="block";
        let user=this.kw.value;
        this.kw.value='';
        getData('kw',user).then(data=>{
            this.setState(
                {data}
            )
        })
    }

}