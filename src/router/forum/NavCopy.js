import React from 'react'
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import action from '../../store/actions/index'


import './NavCopy.less'

class Nav extends React.Component {
    static defaultProps = {
        data: []
    };
    static propTypes = {
        data: PropTypes.array.isRequired
    };

    constructor() {
        super();
    }

    componentDidMount() {
        let oLis = document.getElementsByClassName('menuNav')[0].getElementsByTagName('li');
        let allWidth = 0;
        for (let i = 0; i < oLis.length; i++) {
            allWidth += oLis[i].offsetWidth;
        }
        this.ul.style.width = allWidth + 1 + 'px';
        this.tip.style.left = this.ul.offsetLeft + oLis[this.props.typeIndex].offsetLeft + 'px';
    }

    componentDidUpdate(){
        let oLis = document.getElementsByClassName('menuNav')[0].getElementsByTagName('li');
        let oWidth = parseFloat(getComputedStyle(oLis[this.props.typeIndex]).width) + 'px';
        this.tip.style.width = oWidth;
        this.tip.style.left = this.ul.offsetLeft + oLis[this.props.typeIndex].offsetLeft + 'px';
    }
    render() {
        let {data,changeIndex} = this.props;
        return <div className='headerBox'>
            <ul className='menuNav clearfix' ref={x => this.ul = x}
                onClick={event => {
                    if (event.target.tagName === 'LI') {
                        let index = parseInt(event.target.dataset.index);
                        changeIndex(index);
                    }
                }}>
                {
                    data.map((item, index) => {
                        return <li data-index={`${index}`} key={index}
                                   className={this.props.typeIndex === index ? 'active' : ''}>
                            {item}
                        </li>
                    })
                }
            </ul>
            <div className='navTip' ref={x => this.tip = x}>

            </div>
        </div>

    }
}

export default connect(state=>({...state.star}),action.star)(Nav)