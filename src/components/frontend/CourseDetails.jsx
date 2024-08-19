import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const CourseDetails = () => {
  const [courseItem, setCourseItem] = useState({ name: "", duration: "" });
  const [item, setItem] = useState({ name: "", duration: "" });
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const course = async () => {
      const response = await axios.get(`/course/${id}`);
      console.log(response);

      setCourseItem({
        name: response.data.data.name,
        duration: response.data.data.duration,
      });
    };

    course();
  }, []);

  const handleItem = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleItemSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/course/update/${id}`, {
        name: item.name,
        duration: item.duration,
      })

      .then(function (response) {
        console.log(response);

        if (response.data.status == "success") {
          toast.success(response.data.message);
          navigate('/');
        }

        if (response.data.status == "error") {
          const errorMessage = response.data.message;
          toast.error(errorMessage);
        }
      })
      .catch(function (error) {
        console.log(error);
        console.log(error);
        let errors = error.response.data.errors;
        toast.error(errors.name[0]);
        toast.error(errors.duration[0]);
      });
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="card">
              <div className="card-header bg-info">
                <h3 className="text-white text-center">Update Course</h3>
              </div>
              <div className="card-body">
                <form action="" onSubmit={handleItemSubmit}>

                    <ToastContainer />

                  <div className="form-group my-2">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      value={item.name}
                      onChange={handleItem}
                    />
                  </div>

                  <div className="form-group my-2">
                    <label htmlFor="">Duration</label>
                    <input
                      type="number"
                      name="duration"
                      placeholder="Duration"
                      className="form-control"
                      value={item.duration}
                      onChange={handleItem}
                    />
                  </div>

                  <div className="my-3">
                    <button className="btn btn-dark">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
