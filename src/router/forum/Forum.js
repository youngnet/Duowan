import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import action from "../../store/"
import { Link,Route } from 'react-router-dom'
import "./Forum.less"
import ForumList from "./ForumList/ForumList"
import PropTypes from 'prop-types';
import Search from '../../components/search/search'
import Footer from "../../components/footer/footer"
import "./touch-0.2.14.min.js"
import ReactSwipe from 'react-swipe';

//头部 尾部 高度 最好固定
//dispath right left 判断  联动的点击判断

class Forum extends Component {
    constructor(){
        super();
        this.state={
            step:0
        }
    }

    componentWillMount(){
        let h=document.documentElement.clientHeight;
            this.h=parseInt(h);
        let w=document.documentElement.clientWidth;
        this.w=parseInt(w);
        let maxL=0,
            minL=0;
        let total=0,
            step=this.state.step;
    }
    isSwiper=(strX,strY,endX,endY)=> {
        return Math.abs(endX-strX)>30||Math.abs(endY-strY)>30;
    };
    //判断哪个方向滑动 "right"/"left"/"down"/"up"
    swiperDir=(strX,strY,endX,endY)=> {
        return Math.abs(endX-strX)>=Math.abs(endY-strY)?(endX-strX>0?"right":"left"):(endY-strY>0?"down":"up");
        //状态判断  dispatch执行
    };
    //touchstrat 事件执行
    start=(ev)=> {
        let {Banner}=this.refs;
        let point=ev.touches[0];
        $(Banner).attr({
            strL:parseFloat($(Banner).css("left")),//记录手指刚放上的left
            strX:point.clientX,//记录手指刚放上的偏移X
            strY:point.clientY,//记录手指刚放上的偏移Y
            isMove:false,//是否滑动
            dir:null,//滑动方向
            changeX:0//滑动的距离
        })
    };
    //touchmove事件执行
    move=(e)=> {
        let {Banner}=this.refs;
        let point=e.touches[0];
        //获取现在的偏移和之前存起来的偏移以及left值
        let endX=point.clientX,
            endY=point.clientY,
            strX=parseFloat($(Banner).attr("strX")),
            strY=parseFloat($(Banner).attr("strY")),
            strL=parseFloat($(Banner).attr("strL")),
            changeX=endX-strX;
        var isMove=this.isSwiper(strX,strY,endX,endY),
            dir=this.swiperDir(strX,strY,endX,endY);
        if(isMove&&/(left|right)/.test(dir)){
            //满足条件之后将获取的值继续存起来
            $(Banner).attr({
                isMove:true,
                dir:dir,
                changeX:changeX
            });
            //改变banner的left  变成:strL+changeX
            let curL=strL+changeX;
            curL=curL>maxL?maxL:curL<minL?minL:curL;
            $(Banner)[0].style.webkitTransitionDuration="0s";
            $(Banner).css("left",curL);
        }

    };
    end=(e)=>{
        let {Banner}=this.refs;
        let isMove=$(Banner).attr("isMove"),
            dir=$(Banner).attr("dir"),
            changeX=parseFloat($(Banner).attr("changeX"));
        if(isMove&&/(left|right)/.test(dir)){
            //只要滑动的距离大于屏幕的1/3了就改变当前图片,根据dir的值是left还是right来决定是下一张还是上一张
            if(Math.abs(changeX)>=W/3){
                console.log(1);
                if(dir=="left"){
                    step++;
                }else {
                    step--;
                }
                if(step>data.length-1){
                    step=data.length-1;
                }else if(step<0){
                    step=0
                }
            }


            $(Banner)[0].style.webkitTransitionDuration=".2s";
            $(Banner).css("left",-step*W);
            //如果到达边界立马回到原来的位置,因为有过渡动画所以说要等等,等1s之后才回去

        }
    };

  render() {
      let {topIndex}=this.props.topIndex;
    return (<div style={{height:this.h+"px",background:"#888",paddingBottom:"1rem",paddingTop:"1rem",width:this.w+"px"}}>
        <div className="Banner" style={{position:"absolute",width:this.px*3+"px",flexShrink:8}}>
          <div className="BannerInner" style={{float:"left"}}  ref="Banner">
              <ul>
                  <li style={{overflow:"scroll",width:this.w+"px",display:"flex",flexWrap:"wrap"}}>
                      <Link to="./ForumList"><img src="" alt="" style={{flexGrow:1}}/></Link>
                      <Link to="./ForumList"><img src="" alt="" style={{flexGrow:1}}/></Link>
                      <Link to="./ForumList"><img src="" alt="" style={{flexGrow:1}}/></Link>
                  </li>
                  <li style={{overflow:"scroll",width:this.w+"px"}}>
                      <Link to="./ForumList"><img src="" alt=""/></Link>
                  </li>
                  <li style={{overflow:"scroll",width:this.w+"px"}}>
                      <Link to="./ForumList"><img src="" alt=""/></Link>
                  </li>
                  <li style={{overflow:"scroll",width:this.w+"px"}}>
                      <Link to="./ForumList"><img src="" alt=""/></Link>
                  </li>
              </ul>
          </div>
        </div>
        <Search/>
        <Footer style={{flexShrink:8}}/>
</div>);
  }
}

export default connect()(Forum);


