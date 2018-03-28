import React from 'react';
import ReactDOM from 'react-dom';
import { Link,Route } from 'react-router-dom'
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import "./Forum.less"
import ForumList from "./ForumList/ForumList"

export default class Banner extends React.Component{
    constructor(){
        super();
    }
    render (){

        return <Carousel dots={false} infinite={false}  adaptiveHeight={true} className="bbn">
            <Row style={{ overflow: 'scroll'}}>
              <Col span={8}><Link to="/ForumList?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
            </Row>
            <Row style={{ overflow: 'scroll'}}>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>

            </Row>
            <Row style={{ overflow: 'scroll'}}>
              <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col><Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col><Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col><Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Star?id"><img src={img} alt=""/></Link></Col>
                <Col span={8}><Link to="/Forum/ForumList?"><img src={img} alt=""/></Link></Col>

=======
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from "../../components/footer/footer"

class Forum extends Component {
  render() {
    return (
      <div>
        Forum
        <Footer/>
      </div>
    );
  }
}
>>>>>>> 58756f6f387dcd26137baa3dd4dcf0406c2af0e4



            </Row>
            <Row style={{ overflow: 'scroll'}}>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>

              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>

              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>

              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>

              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
              <Col span={8}><Link to="/Star?id"><img src="" alt=""/></Link></Col>
            </Row>

            <Route path="/ForumList" component={ForumList}/>
        </Carousel>
    }
}

