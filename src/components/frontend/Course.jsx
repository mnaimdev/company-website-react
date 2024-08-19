import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Course = () => {
    const [course, setCourse] = useState([
        {
            name: '',
            duration: '',
            location: ''
        }
    ]);

    useEffect(() => {
        const fetchCourse = async () => {
            const response = await axios.get('/courses');
            console.log(response.data.data);
            setCourse(response.data.data);
            
        }

        fetchCourse();
    }, []);


    const removeItem = (id) => {
        axios.get(`/course/delete/${id}`)
        .then(function (response) {
            console.log(response);

            if (response.data.status == 'success') {
                toast.success(response.data.message);
                // setCourse(response.data.data);
                setCourse((prev) => prev.filter((item) => item.id !== id));

               
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
            
          });
    }

  return (
    <>
    {
        course.map((item) => {
            return (<>
               <table className='table table-bordered'>
               <tr>
               <th>Name</th>
                <th>Duration</th>
                <th>Action</th>
               </tr>
               <tr>
                <td>{item.name}</td>
                <td>{item.duration}</td>
                <td>
                    <Link class="btn btn-primary" to={`/course/${item.id}`}>Edit</Link>
                    <button className="btn btn-danger btn-sm mx-2" onClick={() => removeItem(item.id)}>x</button>
                </td>
               </tr>
               </table>
            </>)
            
        })
    }
    </>
  )
}

export default Course;