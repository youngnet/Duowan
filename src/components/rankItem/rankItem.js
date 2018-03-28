import React from 'react'
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import './rankItem.less'

export default class item extends React.Component {
    constructor() {
        super()
    }

    render() {
        let data = this.props.data;
        return <div className='itemsContainer'>
            <ul>
                {
                    data.map((item, index) => {
                        return <li key={index}>
                            <Link to={`/rankDetail?id=${index+1}`}>
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