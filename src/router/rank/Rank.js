import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Nav from "../../components/header/Nav";
import Banner from './bannerCopy/banner'
import Item from '../../components/rankItem/rankItem'
import Footer from '../../components/footer/footer'
import {rankData} from '../../api/dataInfo'
import './Rank.less'
let img1=require('../../common/img/banner1.jpg');
let img2=require('../../common/img/banner2.jpg');
let img3=require('../../common/img/banner3.jpg');
let img4=require('../../common/img/banner4.jpg');


class Rank extends Component {
    constructor(){
        super();
        this.state={
            banner: [
            {img: img1, title: '神秘吃鸡王的诞生！'},
            {img: img2, title: '深夜的4号楼为何频频传来哀嚎!'},
            {img: img3, title: '谁人才是珠峰真正的吃鸡王?'},
            {img: img4, title: '绝地求生系列游戏如何走上神坛?'}
        ],
            rankItems:[]
        }
    }
    async componentWillMount(){
        let result=await rankData();
        console.log(result);
        this.setState({
            rankItems:result
        })
    }
    render() {
        let data = {
            list: ['推荐', '手机游戏', '电脑游戏', '特权礼包']
        };
        return (
            <div className='rank-container'>
                <header>
                    <Nav data={data.list}/>
                    <Banner data={this.state.banner} auto={3000}/>
                </header>
                <section className='hotTitle'>
                    <div className='hotGame'>
                        <h2>热门游戏TOP榜</h2>
                    </div>
                </section>
                <section>
                    <Item data={this.state.rankItems}/>
                </section>
                <p className='more'>加载更多</p>
                <Footer/>
            </div>
        );
    }
}

Rank.propTypes = {};

export default Rank;