import React, {useEffect} from "react";
import {getUserToken} from "../../api/sign";
import {useDispatch} from 'react-redux';
import {authActions} from '../../store/index';
import {useNavigate} from 'react-router-dom';

const RedirectPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search)
    getUserToken(params.get('code'), params.get('state')).then((res) => dispatch(authActions.login(res)));
    useEffect(() => {
        navigate('/');
    }, [navigate])
}

export default React.memo(RedirectPage);