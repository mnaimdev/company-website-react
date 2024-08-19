import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import PageTop from './pages/PageTop';

const Register = () => {

    useEffect(() => {
        window.scroll(0, 0);
      }, []);
    

    const [form, setForm] = useState({name: '', email: '', password: ''});
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();

        setForm(
            {...form, [e.target.name]: e.target.value}
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        axios.post('/register', {
            name: form.name,
            email: form.email,
            password: form.password,
        })
          .then(function (response) {
            console.log(response);

            if (response.data.status == 'success') {
                toast.success(response.data.message);
                localStorage.setItem('token', response.data.token);
                navigate('/profile');
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
            toast.error(errors.password[0]);
          });

        setForm({name: '', email: '', password: ''});
    }
  return (
    <>
     <PageTop pagetitle="Register Page" />
        <div className="container" >
            <div className="row">
                <div className="col-lg-8 m-auto" >
                    <div className="card" style={{marginTop: '200px'}}>
                        <div className="card-header bg-dark text-white">
                            <h3 className="m-auto text-center">Register Form</h3>
                        </div>

                        

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                            <ToastContainer />

                            <div className="from-group my-2">
                                <label className='my-1'>Name</label>
                                <input type="text" name="name" onChange={handleChange} className='form-control' value={form.name}/>
                            </div>

                            <div className="from-group my-2">
                                <label className='my-1'>Email</label>
                                <input type="email" name="email" onChange={handleChange} className='form-control' value={form.email}/>
                            </div>

                            <div className="from-group my-2">
                            <label className='my-1'>Password</label>
                            <input type="password" name="password" onChange={handleChange} className='form-control' value={form.password}/>
                            </div>

                            <div className="form-group my-3 d-flex justify-content-between">
                                <button type='submit' className="btn btn-dark btn-sm">Submit</button>
                                <p>Already registered? <Link to="/login">Login</Link></p>
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

export default Register;