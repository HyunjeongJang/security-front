import React, {useState} from 'react';
import './index.css'
import {Link, useNavigate} from "react-router-dom";
import kakaoBtn from '../../assets/img/kakao_login_large_wide.png'
import {signIn} from '../../api/sign';
import {useDispatch} from 'react-redux';
import {authActions} from '../../store/index';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({email: '', password: ''});

    const loginUser = () => {
        // console.log(userInfo)
        signIn(userInfo).then((res) => {
            if (res.status === 200 && res.statusText === 'OK') {
                dispatch(authActions.login(res.data));
                navigate('/')
            }
        });
    }
    const handleEnter = (e) => {
        if (e.key === 'Enter') loginUser();
    }
    return (
        <div className='loginPage'>
            <h1>로그인</h1>
            <input className='input_holder' type='text' placeholder='이메일을 입력해주세요'
                   onChange={(e) => setUserInfo((prevState) => {
                       return {...prevState, email: e.target.value}
                   })}/>
            <br/>
            <br/>
            <input className='input_holder' type='password' placeholder='비밀번호를 입력해주세요' onKeyPress={handleEnter}
                   onChange={(e) => setUserInfo((prevState) => {
                       return {...prevState, password: e.target.value}
                   })}/>
            <br/>
            <br/>
            <button className='login_btn' onClick={loginUser}>로그인</button>
            <br/>
            <a href={'http://localhost:8080/oauth2/authorization/kakao'}><img className='login_btn_kakao' src={kakaoBtn}
                                                                              alt={kakaoBtn}/></a>
            <br/>
            <div className='login_extra'>
                <Link to='/signup'>회원가입</Link>
            </div>
        </div>
    )
}

export default LoginPage