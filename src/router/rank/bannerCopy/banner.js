import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ReactSwipe from "react-swipe";
import "./banner.less";

class Banner extends Component {
    // 自动轮播的时间,初始显示第几张图片,过渡时间,是否显示 焦点 左右箭头等,初始样式设置,添加类名
    static defaultProps = {
        startSlide: 0,
        auto: 2000,
        style: {},
        data: []
    };

    constructor(props) {
        super(props);
        this.state = {
            index: this.props.startSlide
        };
    }

    render() {
        let {data, auto} = this.props;
        if (data.length === 0) {
            return null;
        }
        let {index} = this.state;
        return (
            <div className='bannerContainer'>
                <div className="bannerBox">
                    <ReactSwipe
                        className="carousel"
                        swipeOptions={{
                            auto: auto,
                            callback: (index, ele) => {
                                this.setState({index});
                            }
                        }}
                    >
                        {data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img src={item.img} alt={item.title}/>
                                </div>
                            );
                        })}
                    </ReactSwipe>
                    <ul className="focus clearfix">
                        {data.map((item, i) => {
                            return <li key={i} className={i === index ? "active" : ""}/>;
                        })}
                    </ul>
                </div>
                <ul className='titleList'>
                    {
                        data.map((item,i)=>{
                            return i===index?<li key={i}>{item.title}</li>:null
                        })
                    }
                </ul>
            </div>
        );
    }
}

Banner.propTypes = {
    startSlide: PropTypes.number,
    data: PropTypes.array,
    auto: PropTypes.number
};

export default withRouter(connect()(Banner));
