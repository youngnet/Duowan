import React from 'react'
import PropTypes from "prop-types"
import './Login and registration.less'
import { login } from "../../api/profile";

class SignIn extends React.Component{
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
                            <input ref = {a=>this.name1=a} className="current-two" type="text" placeholder='   手机号/YY通行证'/>
                            <input ref={a=>this.pass=a} className="current-two" type="password" placeholder='   登录密码'/>
                    </div>
                </div>
            </div>
            <div className="password">
                <p className="password-one"  onClick={(e) => {
                    let data = null;
                   login(this.name1.value,this.pass.value).then((d) => {
                       console.log(d);
                       data= d;
                       if (data==='ok') {
                        this.props.history.push("/profile")
                    }else{
                        alert('sorry');
                    }
                   })
                   
                }}><span>登录</span></p>
                <p className="password-two"><span>忘记密码 </span><span onClick={(e) => {
                    this.props.history.push("/register");
                }} >立即注册</span></p>
            </div>
            <div className="logo">
                <div className="logo-one">
                    <span>--------------------------  其它方式登录  --------------------------</span>
                </div>
                <div className="logo-qq">
                    <ul>
                        <li className="logo-weixin">
                            <img src={require("../../common/img/qqqq.png")} alt=""/>
                        </li>
                        <li className="logo-weixin">
                            <img src={require("../../common/img/weixin.png")} alt=""/>
                        </li>
                        <li className="logo-weixin">
                            <img src={require("../../common/img/weibo.png")} alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <span className="bottom-one">登录代表你同意</span>
                <span className="bottom-two">多玩论坛用户协议</span>
            </div>
        </div>
    }
}

export default SignIn;