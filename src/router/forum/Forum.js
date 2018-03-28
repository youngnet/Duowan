import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Link,Route } from 'react-router-dom'
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import "./Forum.less"
import ForumList from "./ForumList/ForumList"
import PropTypes from 'prop-types';
import Footer from "../../components/footer/footer"


class Forum extends Component {
  render() {
    return (
      <div>
                <Carousel dots={false} infinite={false}  adaptiveHeight={true} className="bbn">
                <Row style={{ overflow: 'scroll'}}>
                <Col span={8}><Link to="/ForumList"><img src="" alt=""/></Link></Col>
                <Col span={8}><Link to="/ForumList"><img src="" alt=""/></Link></Col>
                </Row>
                </Carousel>
          <Route path="/ForumList" component={ForumList}/>
        <Footer/>
      </div>
    );
  }
}

export default  Forum;


