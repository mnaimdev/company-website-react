import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ResetPassword = () => {
    const [form, setForm] = useState({otp: '', password: ''});
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();

        setForm(
            {...form, [e.target.name]: e.target.value}
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        axios.post('/reset-password', {
            otp: form.otp,
            password: form.password,
        })
          .then(function (response) {
            console.log(response);

            if (response.data.status == 'success') {
                toast.info(response.data.message);
               
                navigate('/login');
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
            toast.error(errors.otp[0]);
            toast.error(errors.password[0]);
          });

        setForm({otp: '', password: ''});
    }

  return (
    <>
  <div className="container" >
            <div className="row">
                <div className="col-lg-8 m-auto" >
                    <div className="card" style={{marginTop: '200px'}}>
                        <div className="card-header bg-dark text-white">
                            <h3 className="m-auto text-center">Reset Password</h3>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                            <ToastContainer />

                            <div className="from-group my-2">
                                <label className='my-1'>OTP</label>
                                <input type="text" name="otp" onChange={handleChange} className='form-control' value={form.otp}/>
                            </div>

                            <div className="from-group my-2">
                            <label className='my-1'>Password</label>
                            <input type="password" name="password" onChange={handleChange} className='form-control' value={form.password}/>
                            </div>

                            <div className="form-group my-3 d-flex justify-content-between">
                                <button type='submit' className="btn btn-dark btn-sm">Reset</button>
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

export default ResetPassword;