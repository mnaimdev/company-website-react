import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorText, setErrorText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate('/');
          // return;
        }
  
        
        const response = await axios.get('/auth/user/',{
          headers:{
              Authorization: `Bearer ${token}`,
          },
      });
  
      setName(response.data.name);
      setEmail(response.data.email);
      setErrorText("");
      } catch(error) {
        setErrorText(error.response.data.message);
        setName("");
        setEmail("");
      }
  }

  fetchUser();

  }, []);
  
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">Name: {name}</li>
        <li className="list-group-item">Email: {email}</li>
       
      </ul>

      <div style={{margin: '100px 0px'}}>
        <p style={{color: 'red'}}>{errorText}</p>
      </div>
    </> 
  )
}

export default Profile;