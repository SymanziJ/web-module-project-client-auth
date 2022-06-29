import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 
import axios from 'axios';
import axiosWithAuth from '../axios';

const Logout = () => {
    const { push } = useHistory();
    useEffect(() => {
        axiosWithAuth().post('/logout')
            .then(res => {
                localStorage.removeItem('token');
                push('/login');
            })
            .catch(err => {
                debugger
            })
    })

    return(<div></div>)
}

export default Logout;