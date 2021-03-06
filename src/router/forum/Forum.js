import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import action from "../../store/actions";
import { Link,Route,HashRouter } from 'react-router-dom'
import "./Forum.less"
import ForumList from "./ForumList/ForumList"
import PropTypes from 'prop-types';
import Search from '../../components/search/search'
import Footer from "../../components/footer/footer"
import {getClass}  from "../../api/dataInfo";
import Nav from  "./NavCopy"

class Forum extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            list: ['热门', '网游']
        };
    }

    async componentWillMount(){
        let h=document.documentElement.clientHeight;
        this.h=parseInt(h);
        let w=document.documentElement.clientWidth;
        this.w=parseInt(w);
        let data=await getClass();
        this.setState({data});
    }

    componentWillUpdate(nextProps, nextState){
        let {typeIndex}=nextProps;
        if (typeIndex > 1) {
            this.props.changeIndex(1);
            return false;
        }
        if (typeIndex <0) {
            this.props.changeIndex(0);
            return false;
        }
        return true;
    }

    //判断是否滑动 true/false
    isSwiper=(strX,strY,endX,endY)=> {
        return Math.abs(endX-strX)>30||Math.abs(endY-strY)>30;
    };
    //判断哪个方向滑动
    swiperDir=(strX,strY,endX,endY)=> {
        return Math.abs(endX-strX)>=Math.abs(endY-strY)?(endX-strX>0?"right":"left"):(endY-strY>0?"down":"up");
        //left 时  left值为正    right left值为负
    };
    //onMouseEnter 事件执行
    start=(e)=> {
        let point=e.changedTouches[0];
        this.obj={
            strX:point.clientX,//记录手指刚放上的偏移X
            strY:point.clientY,//记录手指刚放上的偏移Y
            isMove:false,//是否滑动
            dir:null,//滑动方向
            // 滑动的距离
            changeX:null  //变动的距离
        };
    };
    //touchmove事件执行
    move=(e)=> {
        //onMouseMove 鼠标移动
        let point = e.changedTouches[0];
        //获取现在的偏移
        let endX = point.clientX,
            endY = point.clientY,
            strX = parseFloat(this.obj.strX),
            strY = parseFloat(this.obj.strY),
            changeX = endX - strX;

        let isMove=this.isSwiper(strX,strY,endX,endY),
            dir=this.swiperDir(strX,strY,endX,endY);
        if(isMove&&/(left|right)/.test(dir)){
            //满足条件之后将获取的值继续存起来
            this.obj={...this.obj,
                isMove:true,
                dir:dir,
                changeX:changeX
            };
        }

    };

    end=(e)=>{
        //onMouseLeave 鼠标抬起
        let step=this.props.typeIndex;
        let isMove=this.obj.isMove,
            dir=this.obj.dir,
            changeX=parseFloat(this.obj.changeX);
        if(isMove&&/(left|right)/.test(dir)){
            if(Math.abs(changeX)>=this.w/3){
                if(dir=="left"){
                    step++;
                }else if(dir=='right'){
                    step--;
                }
            }
        }
        this.props.changeIndex(step);
    };

    render() {
        let {data}=this.state;
        let step=this.props.typeIndex;
        // console.log(step);
        return <div className="Swiper" style={{height:this.h+"px"}}>
            <Search/>
            <div className="Banner">
                <Nav data={this.state.list}/>
                <ul className="BannerInner" style={{width:this.w*2+"px",left:-this.w*step+"px"}} onTouchStart={this.start} onTouchMove={this.move} onTouchEnd={this.end}>
                    <li style={{width:this.w}}>
                        {
                            data?data.map((item,index)=>{
                                return (<Link to={`/forumList/${item.type}:${item.title}`} key={index}>
                                    <img src={item.img} alt=""/>
                                    <p>{item.title}</p>
                                </Link>)
                            }):null
                        }
                    </li>
                    <li style={{width:this.w}}>
                        {
                            data?data.map((item,index)=>{
                                return (<Link to={`/forumList/${item.type}:${item.title}`} key={index}>
                                    <img src={item.img} alt=""/>
                                    <p>{item.title}</p>
                                </Link>)
                            }):null
                        }
                    </li>
                </ul>
            </div>
            <Footer/>
        </div>
    }
}

export default connect((state)=>({...state.star}),action.star)(Forum);


