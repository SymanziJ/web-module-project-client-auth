import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../axios';

const AddFriends = () => {
    const {push } = useHistory();

    const initialForm = { name: '', age: '', email: '' };
    const [form, setForm] = useState(initialForm);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault(); 
        axiosWithAuth().post('/friends', form)
            .then(res => {
                setForm(res.data);
                push('/friends');
            })
            .catch(err => {
                debugger
            })
    }

  return (
    <div>
        <h1>Add Friend</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="friendName">Friend Name</label>
                <input type="text" id="friendName" name="name" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="friendAge">Friend Age</label>
                <input type="text" id="friendAge" name="age" onChange={handleChange}/> 
            </div>
            <div>
                <label htmlFor="friendEmail">Friend Email</label>
                <input type="email" id="friendEmail" name="email" onChange={handleChange}/> 
            </div>
            <button id="submitFriend" >Submit</button>
        </form>
    </div>
  )
}

export default AddFriends;