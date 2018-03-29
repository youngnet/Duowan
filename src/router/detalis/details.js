import React from 'react';
import './details.less'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import action from '../../store/actions';
import {getComment} from '../../api/comment'

class details extends React.Component{
    constructor(){
        super();
        this.state= {
            data: {},
            list: []
        }
    }
    componentWillMount(){
        /*let result=this.props.starData.find((item)=>{
            return item.posterId==this.props.match.params.id
        });*/
        let data=this.props.starData;
        let result=null;
        for(let key in data){
            result=data[key].find((item)=>{
                return item.posterId==this.props.match.params.id
            });
        }

        getComment(this.props.match.params.id).then(data=>{
            console.log(data);
        })
        this.setState({
            data:result
        })
    }
    componentDidMount(){
        let h=document.documentElement.clientHeight;
        this.all.style.height=h+'px'
    }

    render(){
        let {data}=this.state;

        return <div className='sta-data'>
            <div className='data-head'>
                <a href='javascript:;' className='iconfont icon-houtui' onClick={event => {
                   this.props.history.goBack();
                }}></a>
                <p><strong>帖子详情</strong></p>
                <span>楼主</span>
                <i className='iconfont icon-tiezi'></i>
            </div>
            <div ref={x=>{this.all=x}} className='data-all'>
                <div className='data-title'>
                    <div className='title-img'>
                        <img src={require('../../common/img/hdqb.png')}/>
                    </div>
                    <div className='title-name'>
                        <p>{data.posterScreenName}<span>楼主</span></p>
                        <p>{data.publishDateStr}</p>
                    </div>
                    <div className='title-list'>
                        <div>
                            <i className='iconfont icon-xiaoxi'></i>
                            <p>666</p>
                        </div>
                        <div>
                            <i className='iconfont icon-browse'></i>
                            <p>777</p>
                        </div>
                    </div>
                </div>
                <div className='data-name'>
                    <div>
                        <p>
                            <span>[活动]</span>
                            {data.title}
                        </p>
                    </div>
                </div>
                <div className='data-data'>
                    <div>
                        <p>{data.publishDateStr}</p>

                    </div>
                </div>
                <div className='data-body'>
                    <p>{data.content}</p>
                    <div>{
                        data.imageUrls.map((item,index)=>{
                            return<img src={item} alt=""/>
                        })
                    }</div>
                </div>
                <div className='data-like'>
                    <ul>
                        <li>
                            <i className='iconfont icon-iconfuzhi'></i>
                            0
                        </li>
                        <li>
                            <i className='iconfont icon-wanyouxi'></i>
                            引用
                        </li>
                        <li>
                            <i className='iconfont icon-bianji'></i>
                            点评
                        </li>
                    </ul>
                </div>
                <div className='data-comment'>
                   <div className='comment-all'>
                       <div className='comment-name'>
                           <div className='name-img'>
                               <img src="" alt=""/>
                           </div>
                           <p>{data.posterScreenName}</p>
                           <p className='comment-you'>多玩游戏</p>
                           <i className='iconfont icon-bianji'></i>
                       </div>
                       <div className='comment-title'>
                           <p>评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论</p>
                       </div>
                   </div>
                    <div className='comment-all'>
                        <div className='comment-name'>
                            <div className='name-img'>
                                <img src="" alt=""/>
                            </div>
                            <p>因游唱诗人</p>
                            <p className='comment-you'>多玩游戏</p>
                            <i className='iconfont icon-bianji'></i>
                        </div>
                        <div className='comment-title'>
                            <p>评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论</p>
                        </div>
                    </div> <div className='comment-all'>
                    <div className='comment-name'>
                        <div className='name-img'>
                            <img src="" alt=""/>
                        </div>
                        <p>因游唱诗人</p>
                        <p className='comment-you'>多玩游戏</p>
                        <i className='iconfont icon-bianji'></i>
                    </div>
                    <div className='comment-title'>
                        <p>评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论</p>
                    </div>
                </div> <div className='comment-all'>
                    <div className='comment-name'>
                        <div className='name-img'>
                            <img src="" alt=""/>
                        </div>
                        <p>因游唱诗人</p>
                        <p className='comment-you'>多玩游戏</p>
                        <i className='iconfont icon-bianji'></i>
                    </div>
                    <div className='comment-title'>
                        <p>评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论</p>
                    </div>
                </div>

                </div>
            </div>
            <div className='data-post'>
                <div className='post-ye'>
                   <p>
                       <span>1</span>
                       /
                       <span>17</span>
                   </p>
                </div>
                <div className='post-hui' onClick={ev=>{this.luce.style.display="block"}}>
                    <p>回帖</p>
                </div>
                <div ref={x=>{this.luce=x}} className='post-luce'>
                    <div className='luce-inp'>
                        <input type="text" placeholder='说点什么吧'/>
                    </div>
                    <div className='luce-fa'>
                        <p>发送</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default withRouter(connect(state=>({...state.star}),action.star)(details))