import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Nav from "../../components/header/Nav";
import Banner from './bannerCopy/banner'
import Item from '../../components/rankItem/rankItem'
import './Rank.less'
import Footer from "../../components/footer/footer"
let img1=require('../../common/img/banner1.jpg');
let img2=require('../../common/img/banner2.jpg');
let img3=require('../../common/img/banner3.jpg');
let img4=require('../../common/img/banner4.jpg');


class Rank extends Component {
    componentDidMount(){
    }
    render() {
        let data = {
            banner: [
                {img: img1, title: '神秘吃鸡王的诞生！'},
                {img: img2, title: '深夜的4号楼为何频频传来哀嚎!'},
                {img: img3, title: '谁人才是珠峰真正的吃鸡王?'},
                {img: img4, title: '绝地求生系列游戏如何走上神坛?'}
                ],
            list: ['推荐', '手机游戏', '电脑游戏', '特权礼包']
        };
        let article=[{img:"http://img1.dwstatic.com/www/1803/386072636537/1522117574558.jpg",title:'吃鸡盛行！使命召唤15和荒野大嫖客2或将加入大逃杀模式',content:{
                id:1,
                title:'吃鸡盛行！使命召唤15和荒野大嫖客2或将加入大逃杀模式',
                date:'2018-03-27',
                article:''
            }},
            {img:"http://img3.dwstatic.com/www/1803/386071344428/1522118087787.jpg",title:'《绝地求生》PC版更新公告 武器皮肤已上线测试服',content:{}},
            {img:"http://img5.dwstatic.com/www/1803/386070508223/1522115403856.jpg",title:'《星际公民》注册用户突破200万 众筹金额超11亿元',content:{}},
            {img:"http://img.dwstatic.com/www/1803/386002958400/1522048060261.jpg",title:'《怪物猎人：世界》游戏总监：游戏首月销量750万套大作的背后',content:{}},
            {img:"http://img2.dwstatic.com/www/1803/386001339769/1522046196976.jpg",title:'最火吉祥物上线 《幻想全明星》新英雄“熊本熊”登场',content:{}},
            {img:"http://img4.dwstatic.com/www/1803/385987419203/1522032500485.jpg",title:'《黑色沙漠》Xbox One X版演示 性感小姐姐与PC版无异',content:{}},
            {img:"http://img5.dwstatic.com/www/1803/385900779443/1521945659001.png",title:'《绝地求生》手游获IGN8.7分好评：这是个技术奇迹',content:{}},
            {img:"http://img2.dwstatic.com/www/1803/385900640801/1521945519834.jpg",title:'DOTA2超级Major六月在上海举办 奖金150万美元',content:{}},
            {img:"http://img3.dwstatic.com/www/1803/385839407796/1521884659168.jpg",title:'主播死亡宣告声讨斗鱼：无权扣押观众打赏的礼物！',content:{}},
            {img:"http://img.dwstatic.com/www/1803/385827679265/1521872547852.jpg",title:'Switch《狮蝎号 浴火银河》无限期跳票 现已经登陆iOS和安卓',content:{}},]
        let {banner} = data;
        return (
            <div className='rank-container'>
                <header>
                    <Nav data={data.list}/>
                    <Banner data={banner} auto={3000}/>
                </header>
                <section className='hotTitle'>
                    <div className='hotGame'>
                        <h2>热门游戏TOP榜</h2>
                    </div>
                </section>
                <section>
                    <Item data={article}/>
                </section>
                <p className='more'>加载更多</p>
                <Footer/>
            </div>

        );
    }
}

Rank.propTypes = {};

export default Rank;