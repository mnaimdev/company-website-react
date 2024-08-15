import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState(''); 

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/forgot-password', {
      email: email,
      
  })
    .then(function (response) {
      if (response.data.status == 'success') {
          toast.success(response.data.message);
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
    });

    setEmail('');

  }

  return (
    <>
       <div className="container" >
            <div className="row">
                <div className="col-lg-8 m-auto" >
                    <div className="card" style={{marginTop: '200px'}}>
                        <div className="card-header bg-dark text-white">
                            <h3 className="m-auto text-center">Forgot Password</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                        
                            <div className="from-group my-2">
                                <label className='my-1'>Email</label>
                                <input type="email" name="email" onChange={handleChange} className='form-control' value={email}/>
                            </div>

                            <ToastContainer />
                            
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

export default ForgotPassword;