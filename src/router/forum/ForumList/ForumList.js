import React, {Component} from "react";
import PropTypes from "prop-types";
import Post from '../../../components/post/post';
import Footer from "../../../components/footer/footer"
import StarItem from '../../../components/starItem/starItem'
import Nav from "../../../components/header/Nav";
import {connect} from 'react-redux'
import action from "../../../store/actions";
import Tab from "../../../components/header/Tab";
import './ForumList.less'
import { isLogin,userInfo } from "../../../api/profile";


class ForumList extends Component {
    constructor() {
        super();
        this.state = {
            show:true,
            num:0,
            list: ['最新', '置顶', '精华', '装备', '视频', '经验技巧'],
        }
    }

    async componentWillMount() {
        // console.log(loginId);
        this.type=this.props.match.params.type.split(":")[0];
        this.title=this.props.match.params.type.split(":")[1];
        let {transStar,starData} = this.props;
        console.log(this.props);
        if(starData[this.type]&&starData[this.type].length!==0)return;
        await transStar('type',this.type);
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
        if(n>10){
            this.setState({
                num:n+10,
                show:false
            });
            return;
        }
        this.setState({
            num:n+10
        })
    };

    render() {
        // console.log(this.props);
        let {typeItem}=this.props;
        return <div className='starCon'>
            <div className='data-head'>
                <a href='javascript:;' className='iconfont icon-houtui' onClick={event => {
                    this.props.history.goBack();
                }}></a>
                <p><strong>{this.title}</strong></p>
                <span>关注</span>
                <i className='iconfont icon-tiezi'></i>
            </div>
            <Nav data={this.state.list}/>
            {this.props.starData[this.type]?<StarItem data={this.handlStarData(this.props.starData[this.type])}/>:null}
            <p className='starMore' style={this.state.show?{display:'block'}:{display:'none'}} onClick={this.handlClick}>加载更多...</p>
            <p className='starMore' style={this.state.show?{display:'none'}:{display:'block'}}>亲！没有更多了^_^</p>
            <Post/>
        </div>;
    }
}

ForumList.propTypes = {};

export default connect(state => ({...state.star}), action.star)(ForumList);
