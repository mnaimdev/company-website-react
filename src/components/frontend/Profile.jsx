import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import PageTop from './pages/PageTop';

const Profile = () => {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [info, setInfo] = useState({name: '', email: ''});
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

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


  const handleInfo = (e) => {

    setInfo({...info, [e.target.name]: e.target.value});
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  }

  const handleInfoSumbit = (e) => {
    e.preventDefault();

    axios.post('/profile/info/update', {
      name: info.name,
      email: info.email,
     
  })
    .then(function (response) {
      console.log(response);

      if (response.data.status == 'success') {
          toast.success(response.data.message);
          setName(response.data.name);
          setEmail(response.data.email);
          
      }

      if (response.data.status == 'error') {
          const errorMessage = response.data.message;
          toast.error(errorMessage);
          
      }
    })
    .catch(function (error) {
      console.log(error);
      console.log(error);
      let errors = error.response.data.errors;
      toast.error(errors.email[0]);
      toast.error(errors.name[0]);
    });

  setInfo({name: '', email: ''});
    }

    const handlePasswordSubmit = (e) => {
      e.preventDefault();
  
      axios.post('/profile/password/update', {
        password: password,
       
    })
      .then(function (response) {
        console.log(response);
  
        if (response.data.status == 'success') {
            toast.success(response.data.message);
        }
  
        if (response.data.status == 'error') {
            const errorMessage = response.data.message;
            toast.error(errorMessage);
            
        }
      })
      .catch(function (error) {
        console.log(error);
        console.log(error);
        let errors = error.response.data.errors;
        toast.error(errors.password[0]);
      });
  
    setPassword("");
      }


      const handleImageSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
    
        axios.post('/profile/image/update', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
         
      })
        .then(function (response) {
          console.log(response);
    
          if (response.data.status == 'success') {
              toast.success(response.data.message);
          }
    
          if (response.data.status == 'error') {
              const errorMessage = response.data.message;
              toast.error(errorMessage);
              
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log(error);
          let errors = error.response.data.errors;
          toast.error(errors.image[0]);
        });
     }


  return (
    <>
    <PageTop pagetitle="Profile" />
    
    <div className="container" style={{marginTop: '100px'}}>
      <ul className="list-group my-5">
        <li className="list-group-item">Name: {name}</li>
        <li className="list-group-item">Email: {email}</li>
       
      </ul>

      <div style={{margin: '100px 0px'}}>
        <p style={{color: 'red'}}>{errorText}</p>
      </div>

      <div className="row">
          <div className="col-lg-8">
          <div className="my-5">
              <div className="card">
                <div className="card-header bg-dark">
                  <h3 className="text-center m-auto text-white">
                    Update Profile Info
                  </h3>

                </div>
                <div className="card-body">
                  <form action="" onSubmit={handleInfoSumbit}>
                    
                    <ToastContainer />

                    <div className="form-group my-2">
                      <label htmlFor="">Name</label>
                      <input type="text" name="name" className="form-control" placeholder="Name" onChange={handleInfo} value={info.name} />
                    </div>

                    <div className="form-group my-2">
                      <label htmlFor="">Email</label>
                      <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleInfo} value={info.email} />
                    </div>

                    <div className="form-group my-3">
                      <button className="btn btn-dark btn-sm">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
          <div className="my-5">
              <div className="card">
                <div className="card-header bg-dark">
                  <h3 className="text-center m-auto text-white">
                    Update Password
                  </h3>

                </div>
                <div className="card-body">
                  <form action="" onSubmit={handlePasswordSubmit}>
                    
                    <ToastContainer />

                    <div className="form-group my-2">
                      <label htmlFor="">Password</label>
                      <input type="password" name="password" className="form-control" placeholder="Password" onChange={handlePassword} value={password} />
                    </div>

                    <div className="form-group my-3">
                      <button className="btn btn-dark btn-sm">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        <div className="col-lg-8">
          <div className="my-5">
              <div className="card">
                <div className="card-header bg-dark">
                  <h3 className="text-center m-auto text-white">
                    Update Profile Image
                  </h3>

                </div>
                <div className="card-body">
                  <form action="" onSubmit={handleImageSubmit}>
                    
                    <ToastContainer />

                    <div className="form-group my-2">
                      <label htmlFor="">Image</label>
                      <input type="file" name="image" className="form-control" placeholder="Image" onChange={handleImage} />
                    </div>

                    <div className="form-group my-3">
                      <button className="btn btn-dark btn-sm">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>

      </div>
  </div>
    </> 
  )
}

export default Profile;