import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://portfolio-backend-2e1w.onrender.com/api/comments', formData);
            
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <div className='text-white'>
            <h1 className='text-2xl text-center about-heading'>Contact Me</h1>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit}>
                    <div className='row row-span'>
                        <label htmlFor="name" className='col-3'>Name: </label>
                        <input
                            type="text"
                            className='col input-field rounded text-black'
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div><br/>
                    <div className='row row-span'>
                        <label htmlFor="email" className='col-3'>Email: </label>
                        <input
                            type="email"
                            className='col input-field rounded text-black'
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div><br/>
                    <div className=''>
                        <label htmlFor="description" className=''>Description: </label><br/>
                        <textarea
                            id="description"
                            className='textarea-field rounded text-black'
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div><br/>
                    <div className='text-center'>
                        <button type="submit" className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
