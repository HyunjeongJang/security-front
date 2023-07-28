// import React, {useEffect, useState} from "react";
// import {useSelector, useDispatch} from 'react-redux';
// import './index.css'
// import mainImage from '../../assets/img/security-login.png';
// import {getUser} from "../../api/user";
// import {useNavigate} from "react-router-dom";
// import {authActions} from "../../store";
//
// const MainPage = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//
//     const accessToken = useSelector(state => state.accessToken);
//     const [userInfo, setUserInfo] = useState({nickname: '', email: ''});
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//
//     useEffect(() => {
//         document.dispatchEvent(new CustomEvent('하이하이', {detail: {available: true}}));
//     }, [])
//
//     useEffect(() => {
//         if (accessToken !== '') {
//             let splitToken = accessToken.split('.');
//             let id = JSON.parse(atob(splitToken[1])).sub;
//
//             getUser(accessToken).then((res) => {
//                 setUserInfo(prevState => {
//                     return {...prevState, nickname: res.data.nickname, email: res.data.email}
//                 })
//                 setIsLoggedIn(true);
//                 let data = {
//                     accessToken: accessToken,
//                     userInfo: res.data,
//                     debugMode: true,
//                 };
//                 document.dispatchEvent(new CustomEvent('authListener', {detail: data}));
//             })
//         }
//     }, [accessToken])
//     return (<div className='mainPage'>
//         <h1>Spring Security JWT OAuth2</h1>
//         {isLoggedIn ||
//             <>
//                 <h1>하이하이</h1>
//                 <div><img className='main_image' src={mainImage} alt={mainImage}/></div>
//                 <button className='login_btn' onClick={() => {
//                     navigate('/login')
//                 }}>로그인
//                 </button>
//             </>
//         }
//         {isLoggedIn &&
//             <>
//                 {/*<h1>*/}
//                 {/*    {userInfo.nickname}님!*/}
//                 {/*</h1>*/}
//                 <button onClick={() => {
//                     dispatch(authActions.logout())
//                     setIsLoggedIn(false);
//                 }}>로그아웃
//                 </button>
//                 회원탈퇴
//             </>
//         }
//     </div>)
// }
//
// export default MainPage;



import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import mainImage from '../../assets/img/security-login.png';
import { getUser } from "../../api/user";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const accessToken = useSelector(state => state.accessToken);
    const [userInfo, setUserInfo] = useState({ nickname: '', email: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        document.dispatchEvent(new CustomEvent('하이하이', { detail: { available: true } }));
    }, []);

    useEffect(() => {
        if (typeof accessToken === 'string' && accessToken.trim() !== '') {
            getUser(accessToken)
                .then((res) => {
                    setUserInfo({ nickname: res.data.nickname, email: res.data.email });
                    setIsLoggedIn(true);
                    console.log("User logged in:", userInfo);
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    setIsLoggedIn(false);
                });
        } else {
            console.log("안됨")
            setIsLoggedIn(false);
        }
    }, [accessToken, userInfo]);

    console.log("isLoggedIn:", isLoggedIn);

    return (
        <div className='mainPage'>
            <h1>Spring Security JWT OAuth2</h1>
            {isLoggedIn ? (
                <>
                    <h1>{userInfo.nickname}님!</h1>
                    <button className='logout_btn' onClick={() => navigate('/logout')}>로그아웃</button>
                    <span>회원탈퇴</span>
                </>
            ) : (
                <>
                    <h1>하이하이</h1>
                    <div><img className='main_image' src={mainImage} alt={mainImage} /></div>
                    <button className='login_btn' onClick={() => navigate('/login')}>로그인</button>
                </>
            )}
        </div>
    );
};

export default MainPage;

