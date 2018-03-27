import React from 'react'
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import './rankItem.less'

export default class item extends React.Component {
    constructor() {
        super()
    }

    render() {
        let article = this.props.data;
        let id=0;
        return <div className='itemsContainer'>
            <ul>
                {
                    article.map((item, index) => {
                        return <li key={index}>
                            <Link to={`/detail/${id}`}>
                                <img src={item.img}/>
                                <h4>{item.title}</h4>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}