import React from 'react'
import PropTypes from "prop-types"
import './starItem.less'
import utils from '../../common/js/utils'
import {Link} from 'react-router-dom'

let img = require('../../common/img/120026h03698ee7i83ermv.png');

export default class starItem extends React.Component {
    constructor() {
        super();
    }

    queryTime = (date) => {
        let reg = /\d+-(\d+)-(\d+)T(\d+):(\d+):\d+/g;
        let s = date.replace(reg, function (...arg) {
            return `${arg[1]}-${arg[2]} ${arg[3]}:${arg[4]}`
        });
        return s;
    };
    reduceContent = (data) => {
        data.length > 100 ? data = data.slice(0, 101) : null;
        return data
    };

    render() {
        let {data} = this.props;
        return <div>
            {data.map((it, index) => {
                return <div key={index} className='starItem'>
                    <Link to={`/details/${it.posterId}`}>
                        <div className='starItem_header'>
                            <div className='portraitBox'>
                    <span className='portrait'>
                </span>
                            </div>
                            <div className='header_left'>
                                <h5>{it.posterScreenName}</h5>
                                <p>{this.queryTime(it.publishDateStr)}</p>
                            </div>
                            <div className='header-right'>
                                <span><i className='iconfont icon-xiaoxi'></i>{it.commentCount}</span>
                                <span><i className='iconfont icon-browse'></i>{it.viewCount}</span>
                            </div>
                        </div>
                        <div className='starItemCon'>
                            <div className='conTitle'>{it.title}</div>
                            {
                                (it.imageUrls && it.imageUrls.length == 0) ? <div className='conArticle'>
                                    {this.reduceContent(utils.filterContent(it.content))}
                                </div> : <ul className='conImg clearfix' ref={x => this.ul = x}>
                                    {it.imageUrls.length == 1 ?
                                        <li className='oneImg'><img src={it.imageUrls[0]}/>
                                        </li> : it.imageUrls.map((item, i) => {
                                            return <li key={i} className='moreImg'>
                                                <img src={item}/>
                                            </li>
                                        })}
                                </ul>
                            }
                        </div>
                    </Link>
                </div>
            })}
        </div>
    }
}