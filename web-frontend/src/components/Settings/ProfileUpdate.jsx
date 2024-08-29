import React, { useState } from 'react';

export default function ProfileUpdate() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        companyId: '',
        address: '',
        district: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {


            if (response.ok) {
                setSuccessMessage('Profile updated successfully');
                window.location.reload();
            } else {
                alert('Failed to update profile');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-black px-14 flex flex-col items-center border-b border-gray-600 justify-between">
            <div className="bg-gray-800 rounded-lg p-2 flex-1 border border-gray-600 flex items-center w-full">
                <span className="text-2xl text-white">Profile</span>
            </div>

            <div className="bg-black h-20 px-14 p-4 flex items-center border-b border-gray-600 justify-between w-full">
                <span className="text-white">Update your personal information here</span>
            </div>

            <div className="bg-black px-14 p-4 flex items-center border-b border-gray-600 justify-between w-full">
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-10 group">
                        <input
                            type="text"
                            name="fullName"
                            id="floating_full_name"
                            className="block py-2.5 px-0 w-full text-lg font-bold text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                            placeholder=" "
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="floating_full_name"
                            className="peer-focus:font-bold absolute text-lg font-bold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Full Name
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-10 group">
                        <input
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            name="phone"
                            id="floating_phone"
                            className="block py-2.5 px-0 w-full text-lg font-bold text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                            placeholder=" "
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="floating_phone"
                            className="peer-focus:font-bold absolute text-lg font-bold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Phone number
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-10 group">
                        <input
                            type="text"
                            name="companyId"
                            id="floating_company_id"
                            className="block py-2.5 px-0 w-full text-lg font-bold text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                            placeholder=" "
                            required
                            value={formData.companyId}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="floating_company_id"
                            className="peer-focus:font-bold absolute text-lg font-bold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Company ID (Ex. 467231258AD)
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-10 group">
                        <input
                            type="text"
                            name="address"
                            id="floating_address"
                            className="block py-2.5 px-0 w-full text-lg font-bold text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                            placeholder=" "
                            required
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="floating_address"
                            className="peer-focus:font-bold absolute text-lg font-bold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Address
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-10 group">
                        <input
                            type="text"
                            name="district"
                            id="floating_district"
                            className="block py-2.5 px-0 w-full text-lg font-bold text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                            placeholder=" "
                            required
                            value={formData.district}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="floating_district"
                            className="peer-focus:font-bold absolute text-lg font-bold text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            District
                        </label>
                    </div>

                    <div className="flex justify-end items-center w-full mt-10">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded">
                            Save
                        </button>
                    </div>

                    {successMessage && (
                        <div className="mt-4 p-2 bg-green-200 text-green-800 rounded">
                            {successMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
