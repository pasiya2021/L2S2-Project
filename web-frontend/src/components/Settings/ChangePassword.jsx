import React, { useState } from 'react';

export default function ChangePassword() {
    const [formData, setFormData] = useState({
        password: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [status, setStatus] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            setStatus('New password and confirm password do not match.');
            return;
        }

        const formDataObj = new FormData();
        for (const key in formData) {
            formDataObj.append(key, formData[key]);
        }

        try {
            const response = await fetch('/api/change-password', {
                method: 'POST',
                body: formDataObj
            });

            if (response.ok) {
                setStatus('Password updated successfully!');
            } else {
                setStatus('Failed to update password.');
            }
        } catch (error) {
            console.error('Error updating password:', error);
            setStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className="bg-black px-14 flex flex-col items-center border-b border-gray-200 justify-between">
            <div className="bg-blue-500 rounded-lg p-2 flex-1 border border-gray-200 flex items-center w-full">
                <span className="text-2xl text-white">Change Password</span>
            </div>

            <div className="bg-black h-20 px-14 p-4 flex items-center border-b border-gray-200 justify-between w-full">
                <span className="text-white">Update your Password</span>
            </div>

            <div className="bg-black px-14 p-4 flex items-center border-b border-gray-200 justify-between w-full">
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="relative z-0 w-full mb-10 group">
                        <input
                            type="password"
                            name="password"
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-lg font-bold text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="floating_password" className="peer-focus:font-bold absolute text-lg font-bold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Current Password
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-10 group">
                        <input
                            type="password"
                            name="newPassword"
                            id="floating_new_password"
                            className="block py-2.5 px-0 w-full text-lg font-bold text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="floating_new_password" className="peer-focus:font-bold absolute text-lg font-bold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            New Password
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-10 group">
                        <input
                            type="password"
                            name="confirmPassword"
                            id="floating_repeat_password"
                            className="block py-2.5 px-0 w-full text-lg font-bold text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-bold absolute text-lg font-bold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Confirm Password
                        </label>
                    </div>

                    <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center">
                        Change Password
                    </button>
                </form>
            </div>

            {status && <p className="mt-4 text-red-600">{status}</p>}
        </div>
    );
}
