import React, { useState } from 'react';
import { CiImageOn } from "react-icons/ci";
import { MdGif } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const Input = () => {
    const [formData, setFormData] = useState({
        text: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data
        console.log(formData);
    };

    return (
        <>
            <header>
                {/* Header content */}
            </header>
            <main>
                {/* Main content */}
                <div className="h-36 w-full bg-black-200 border-white border-transparent justify-center h-screen flex items-center  text-center">
                    {/* Form */}
                    <div class="p-4 mt-4 w-full">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="text"
                                placeholder="What's happening?"
                                value={formData.text}
                                onChange={handleChange}
                                className="outline-none w-full my-2 border border-white bg-black rounded br-4 p-2 text-black::placeholder"
                            />
                            <p className='mt-4 ml-4 text-blue-500 text-base text-center'>Everyone can reply</p>
                            <button type="submit" className="bg-blue-500 text-white px-8 py-2 rounded br-6">Post</button>
                        </form>
                    </div>
                    {/* Other content */}
                </div>
                {/* Other content */}
            </main>
        </>
    );
};

export default Input;
