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
        let loginId = await isLogin();
        // console.log(loginId);
        if (!Number(loginId)) {
            this.props.history.push("/login");
        } else {
            let data = await userInfo(loginId);
            this.setState({ info: data });
        }
        let {transStar,starData,typeItem} = this.props;
        if(starData[typeItem]&&starData[typeItem].length!==0)return;
        await transStar('type',typeItem);
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
                <p><strong>帖子详情</strong></p>
                <span>楼主</span>
                <i className='iconfont icon-tiezi'></i>
            </div>
            <Nav data={this.state.list}/>
            {this.props.starData[typeItem]?<StarItem data={this.handlStarData(this.props.starData[typeItem])}/>:null}
            <p className='starMore' style={this.state.show?{display:'block'}:{display:'none'}} onClick={this.handlClick}>加载更多...</p>
            <p className='starMore' style={this.state.show?{display:'none'}:{display:'block'}}>亲！没有更多了^_^</p>
            <Post/>
        </div>;
    }
}

ForumList.propTypes = {};

export default connect(state => ({...state.star}), action.star)(ForumList);
