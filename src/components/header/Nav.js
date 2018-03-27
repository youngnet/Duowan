import React from 'react'
import PropTypes from "prop-types"

import './Nav.less'

export default class Nav extends React.Component {
    static defaultProps = {
        data: []
    };
    static propTypes = {
        data: PropTypes.array.isRequired
    };

    constructor() {
        super();
        this.state = {
            cur: 0
        }
    }

    componentDidMount() {
        let oLis = document.getElementsByClassName('menuNav')[0].getElementsByTagName('li');
        let allWidth = 0;
        for (let i = 0; i < oLis.length; i++) {
            allWidth += oLis[i].offsetWidth;
        }
        this.ul.style.width = allWidth + 1 + 'px';
    }

    render() {
        let {data} = this.props;
        return <div className='headerBox'>
            <ul className='menuNav clearfix' ref={x => this.ul = x}
                onClick={event => {
                    if (event.target.tagName === 'LI') {
                        let index = parseFloat(event.target.dataset.index);
                        let oLis = document.getElementsByClassName('menuNav')[0].getElementsByTagName('li');
                        let oWidth = parseFloat(getComputedStyle(oLis[index]).width) + 'px';
                        this.tip.style.width = oWidth;
                        this.tip.style.left = this.ul.offsetLeft + oLis[index].offsetLeft + 'px';
                        this.setState({
                            cur: index
                        });
                    }
                }}>
                {
                    data.map((item, index) => {
                        return <li data-index={`${index}`} key={index}
                                   className={this.state.cur === index ? 'active' : ''}>
                            {item}
                        </li>
                    })
                }
            </ul>
            <div className='navTip' ref={x => this.tip = x} style={{}}>

            </div>
        </div>

    }
}