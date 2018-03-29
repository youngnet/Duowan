import React from 'react';
import './details.less'

export default class detalis extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        let h=document.documentElement.clientHeight;
        this.all.style.height=h+'px'
    }
    render(){
        return <div className='sta-data'>
            <div className='data-head'>
                <a href='javascript:;' className='iconfont icon-houtui'></a>
                <p><strong>帖子详情</strong></p>
                <span>楼主</span>
                <i className='iconfont icon-tiezi'></i>
            </div>
            <div ref={x=>{this.all=x}} className='data-all'>
                <div className='data-title'>
                    <div className='title-img'>
                        <img src="" alt=""/>
                    </div>
                    <div className='title-name'>
                        <p>游唱诗人<span>楼主</span></p>
                        <p>03-26&nbsp;16:33</p>
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
                            参与2018年PLP春季大赛，第十九周冠军获得者大新哥,赢得美人一个。
                        </p>
                    </div>
                </div>
                <div className='data-data'>
                    <div>
                        <p>获奖时间：2018-3-29--22:00</p>
                    </div>
                </div>
                <div className='data-body'>
                    <p>他们彼此深信
                        是瞬间迸发的热情让他们相遇。
                        这样的确定是美丽的，
                        但变幻无常更为美丽。
                        既然素未谋面，
                        所以他们确定彼此并无任何瓜葛。
                        但是自街道、楼梯、大堂传来的话语——
                        他们或许擦肩而过一百万次了吧？
                        我想问他们是否记得——
                        在旋转门
                        面对面那一刹？
                        或是在人群中喃喃道出的「不好意思」「对不起」？
                        或是在电话的另一端道出的「打错了」？
                        但是，我早知道答案。
                        是的，他们并不记得。他们会很诧异，
                        原来缘分已经戏弄他们多年。时机尚未成熟
                        成为他们的命运
                        缘分将他们推近，驱离，
                        阻挡他们的去路，
                        忍住笑声，然后闪到一旁。
                        有一些迹象和信号存在，
                        即使他们尚无法解读。
                        也许在三年前
                        或者就在上个星期二
                        有某片叶子飘舞于
                        肩与肩之间？
                        有东西掉了又捡了起来？
                        天晓得，也许是那个
                        消失于童年灌木丛中的球？还有事前已被触摸
                        层层覆盖的
                        门把和门铃。
                        检查完毕后并排放置的手提箱。
                        有一晚，也许同样的梦，
                        到了早晨变得模糊。每个开始
                        毕竟都只是续篇，
                        而充满情节的书本
                        总是从一半开始看起</p>
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
                           <p>因游唱诗人</p>
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