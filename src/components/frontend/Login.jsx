import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [form, setForm] = useState({email: '', password: ''});

    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();

        setForm(
            {...form, [e.target.name]: e.target.value}
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        axios.post('/login', {
            email: form.email,
            password: form.password,
        })
          .then(function (response) {
            if (response.data.status == 'success') {
                localStorage.setItem('token', response.data.token);
                navigate('/profile');
            }

            if (response.data.status == 'error') {
                const errorMessage = response.data.message;
                toast.error(errorMessage);
                
            }

            console.log(response);
            
          })
          .catch(function (error) {
                console.log(error);
                let errors = error.response.data.errors;
                toast.error(errors.email[0]);
                toast.error(errors.password[0]);
          });

        setForm({email: '', password: ''});
    }
  return (
    <>
        <div className="container" >
            <div className="row">
                <div className="col-lg-8 m-auto" >
                    <div className="card" style={{marginTop: '200px'}}>
                        <div className="card-header bg-dark text-white">
                            <h3 className="m-auto text-center">Login Form</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                        
                            <div className="from-group my-2">
                                <label className='my-1'>Email</label>
                                <input type="email" name="email" onChange={handleChange} className='form-control' value={form.email}/>
                            </div>

                            <ToastContainer />

                            <div className="from-group my-2">
                            <label className='my-1'>Password</label>
                            <input type="password" name="password" onChange={handleChange} className='form-control' value={form.password}/>
                            </div>

                            <Link style={{textDecoration: 'none', float: 'right'}} to="/forgot-password">Forgot Password</Link>

                            Haven't any account? <Link to="/register"> Register</Link>

                            <div className="form-group my-3">
                                <button type='submit' className="btn btn-dark btn-sm">Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login;