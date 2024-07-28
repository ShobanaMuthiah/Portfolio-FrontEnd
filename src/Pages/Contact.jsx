import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required('* Name is required'),
        email: Yup.string().email('* Invalid email address').required('* Email is required'),
        description: Yup.string().required('* Message is required'),
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            await axios.post('https://portfolio-backend-2e1w.onrender.com/api/comments', values);
            toast.success('Form submitted successfully!');
            resetForm();
        } catch (error) {
            console.error('Error submitting form', error);
            toast.error('Error submitting form');
        }
    };

    return (
        <div className='text-white'>
            <ToastContainer />
            <h1 className='text-2xl text-center about-heading'>Contact Me</h1>
            <div className='flex justify-center items-center'>
                <Formik
                    initialValues={{ name: '', email: '', description: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className='row row-span'>
                            <label htmlFor="name" className='col-3'>Name: </label>
                            <Field
                                type="text"
                                className='col input-field rounded text-black'
                                id="name"
                                name="name"
                            />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div><br />
                        <div className='row row-span'>
                            <label htmlFor="email" className='col-3'>Email: </label>
                            <Field
                                type="email"
                                className='col input-field rounded text-black'
                                id="email"
                                name="email"
                            />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div><br />
                        <div className=''>
                            <label htmlFor="description" className=''>Message: </label><br />
                            <Field
                                as="textarea"
                                id="description"
                                className='textarea-field rounded text-black'
                                name="description"
                            />
                            <ErrorMessage name="description" component="div" className="error" />
                        </div><br />
                        <div className='text-center'>
                            <button type="submit" className='btn btn-primary'>Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Contact;
