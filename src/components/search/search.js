import React from 'react';
import './search.less'

export default class search extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        let div=document.getElementsByClassName('for-sear')[0];
        console.log(getComputedStyle(div).width);
    }
    render(){
        return <div className='for-sear'>
            <div className='for-click'> </div>
            <div className='for-all'>
                <div className='for-head'>
                    <input type="text"/>
                    <i> </i>
                </div>
                <div className='for-body'>
                    <p>历史搜索
                    <span>清除</span>
                    </p>
                    <ul>
                        <li>秘密</li>
                    </ul>
                </div>
                <div className='for-footer'>
                    <p>热门搜索</p>
                    <ul>
                        <li>秘密</li>
                    </ul>
                </div>
            </div>
        </div>
    }
}