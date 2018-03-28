import React, {Component} from "react";
import PropTypes from "prop-types";
import Post from '../../components/post/post';
import Footer from "../../components/footer/footer"
import StarItem from '../../components/starItem/starItem'
import Nav from "../../components/header/Nav";
import {getData} from '../../api/dataInfo'
import {connect} from 'react-redux'
import action from "../../store/actions";

class Star extends Component {
    constructor() {
        super();
        this.state = {
            list: ['最新', '置顶', '精华', '装备', '视频', '经验技巧',]
        }
    }

    async componentWillMount() {
        let {transStar} = this.props;
        await transStar('type','dixiacheng');
    }

    render() {
        return <div>
            <Nav data={this.state.list}/>
            <StarItem data={this.props.starData}/>
            <Post/>
            <Footer/>
        </div>;
    }
}

Star.propTypes = {};

export default connect(state => ({...state.star}), action.star)(Star);
