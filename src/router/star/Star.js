import React, {Component} from "react";
import PropTypes from "prop-types";
import Post from '../../components/post/post';
import Footer from "../../components/footer/footer"
import StarItem from '../../components/starItem/starItem'
import Nav from "../../components/header/Nav";
import {connect} from 'react-redux'
import action from "../../store/actions";
import Tab from "../../components/header/Tab";
import './Star.less'


class Star extends Component {
    constructor() {
        super();
        this.state = {
            num:0,
            list: ['最新', '置顶', '精华', '装备', '视频', '经验技巧',]
        }
    }

    async componentWillMount() {
        let {transStar,starData} = this.props;
        if(starData&&starData.length!==0)return;
        await transStar('type','dixiacheng');
    }
    /*handlScroll=()=>{
        console.log(1);
        let n=this.state.num;
        let starH=document.getElementsByClassName('starCon')[0].scrollTop,
            wH=document.documentElement.clientHeight,
            moreH=document.getElementsByClassName('starMore')[0].offsetTop;
        if(starH>wH-moreH-80){
            this.setState({
                num:n+10
            })
        }
    };*/
    handlStarData=(data)=>{
        let n=this.state.num;
        return data.slice(0,n+10);
    };
    handlClick=()=>{
        let n=this.state.num;
        this.setState({
            num:n+10
        })
    };

    render() {
        return <div className='starCon'>
            <Tab/>
            <Nav data={this.state.list}/>
            <StarItem data={this.handlStarData(this.props.starData)}/>
            <p className='starMore' onClick={this.handlClick}>加载更多...</p>
            <Post/>
            <Footer/>
        </div>;
    }
}

Star.propTypes = {};

export default connect(state => ({...state.star}), action.star)(Star);
