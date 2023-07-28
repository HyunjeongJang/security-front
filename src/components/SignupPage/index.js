import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css'
import {signUp} from '../../api/sign';


const SignUpPage = () => {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({email: '', nickname: '', password: ''});

    const onUserInfoChange = (target, e) => {
        if (target === 'USER_EMAIL') {
            setUserInfo((prevState) => {
                return {...prevState, email: e.target.value}
            })
        } else if (target === 'USER_NICKNAME') {
            setUserInfo((prevState) => {
                return {...prevState, nickname: e.target.value}
            })
        } else if (target === 'USER_PASSWORD') {
            setUserInfo((prevState) => {
                return {...prevState, password: e.target.value}
            })
        }

    }

    const handleSignup = () => {
        signUp(userInfo).then((res) => {
            if (res.status === 200) {
                if (!alert("회원가입 완료!")) navigate('/login');
            }
        });
    }
    return (
        <div className='signupPage'>
            <h1>회원가입</h1>
            <br/>
            <br/>
            <input className='input_holder' type='text' placeholder='닉네임을 입력해주세요.'
                   onChange={(e) => onUserInfoChange('USER_NICKNAME', e)}/>
            <br/>
            <br/>
            <input className='input_holder' type='text' placeholder='이메일을 입력해주세요.'
                   onChange={(e) => onUserInfoChange('USER_EMAIL', e)}/>
            <br/>
            <br/>
            <input className='input_holder' type='password' placeholder='비밀번호를 입력해주세요.'
                   onChange={(e) => onUserInfoChange('USER_PASSWORD', e)}/>
            <br/>
            <br/>
            <button className='signup_btn' onClick={handleSignup}>회원가입</button>
            <br/>
        </div>
    )
}

export default SignUpPage