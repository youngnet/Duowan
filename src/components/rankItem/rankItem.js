import React from 'react'
import PropTypes from "prop-types"
import './rankItem.less'

export default class item extends React.Component{
    constructor(){
        super()
    }
    render(){
        let article=this.props.data;
        return <div className='itemsContainer'>
            <ul>
            {
                article.map((item,index)=>{
                    return <li key={index}>
                        <img src={item.img}/>
                        <h4>{item.title}</h4>
                    </li>
                })
            }
            </ul>
        </div>
    }
}