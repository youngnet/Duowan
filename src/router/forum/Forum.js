import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Link,Route } from 'react-router-dom'
import "./Forum.less"
import ForumList from "./ForumList/ForumList"
import PropTypes from 'prop-types';
import Search from '../../components/search/search'
import Footer from "../../components/footer/footer"


class Forum extends Component {
  render() {
    return (
      <div>
        {/* <Route path="/ForumList" component={ForumList}/> */}
        <Search/>
        <Footer/>
      </div>
    );
  }
}

export default  Forum;


