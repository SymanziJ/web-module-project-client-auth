import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from '../axios'

const FriendsList = () => {
  const [ friends, setFriends ] = useState([]);

  useEffect(()=> {
    axiosWithAuth().get('/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        debugger
      });
  },[]);

  return (
  <div>
      <h1>Friends List</h1>
      <ul>
        {
          friends.map(friend => {
           return <li key={friend.id} id={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>
          })
        }
      </ul>

  </div>
  )
}

export default FriendsList;