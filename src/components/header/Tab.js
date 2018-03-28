import React from 'react'
import PropTypes from "prop-types"
import './Tab.less'

export default class Tab extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='tabContainer'>
            <h4>地下城<span className='iconfont icon-houtui'></span></h4>
        </div>
    }
}