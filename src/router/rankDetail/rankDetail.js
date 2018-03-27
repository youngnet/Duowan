import React from 'react'
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"
import {rankData} from '../../api/dataInfo'
import './rankDetail.less'

class rankDetail extends React.Component{
    constructor(){
        super();
        this.state={
            rankItem:[]
        }

    }
    async componentWillMount(){
        let {search}=this.props.location;
        let id=Number(search.split('=')[1]);
        let result=await rankData(id);
        this.setState({
            rankItem:result
        })
    }
    render(){
        let {rankItem,rankItem:{content}}=this.state;
        return <div className='rankDetail'>
            <div className='detailHeader'>
                <h4>{rankItem.title}</h4>
                <p><span>{!content?"":content.author}</span><span>{!content?"":content.date}</span></p>
            </div>
            <main>
                <img src={rankItem.img}/>
                <p>{!content?"":content.article}</p>
            </main>
        </div>
    }
}
export default withRouter(rankDetail);