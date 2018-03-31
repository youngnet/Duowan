import React from 'react'
import PropTypes from "prop-types"
import './Register.less'
import {register} from '../../api/profile';
class Register extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        let h=document.documentElement.clientHeight;
        this.sing.style.height=h+'px'
    }
    render(){
        return <div ref={s=>{this.sing=s}} className="sing">
            <div className="singin">
                <span className="iconfont icon-guanbi arrow"></span>
                <img className="xxx" src={require("../../common/img/105628v3943kuuzudkekdk.png")} alt =""/>
                <div className="current">
                    <div className="current-one">
                        <input ref={a=>this.name1=a} className="current-two" type="text" placeholder='   手机号/YY通行证'/>
                        <input ref={a=>this.pass1=a} className="current-two" type="password" placeholder='   登录密码'/>
                        <input ref={a=>this.pass2=a} className="current-two" type="password" placeholder='   确认密码'/>
                    </div>
                </div>
            </div>
            <div className="password">
                <p className="password-one" onClick={async (e) => {
                    if (this.pass1.value!==this.pass2.value) {
                        alert('两次密码不一致')
                    }else{
                        let result = await register(this.name1.value,this.pass1.value);
                        result==='success'?this.props.history.push('/forum'):null;
                    }
                }} ><span>立即注册</span></p>
            </div>
        </div>
    }
}

export default Register;