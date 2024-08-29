import React, { useState, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import SignOutAlert from '../Alert/SignOutAlert'; // Import the SignOutAlert component

const UserProfile = ({ headerName }) => {
    const [showSignOutAlert, setShowSignOutAlert] = useState(false);
    const [userData, setUserData] = useState(null); // State to store user data
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user profile data from local storage
        const storedData = localStorage.getItem('profileData');
        if (storedData) {
            setUserData(JSON.parse(storedData)); // Update state with fetched user data
        }
    }, []); // Empty dependency array means it runs once when component mounts

    const handleSignOut = () => {
        setShowSignOutAlert(true);
        const alertElement = document.getElementById('alert-additional-content-5');
        if (alertElement) {
            alertElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handleCancel = () => {
        setShowSignOutAlert(false);
    };

    const handleConfirmSignOut = () => {
        alert('Signing out...'); // Replace with your sign-out logic
        // Example: call a logout function or clear session
        // Add your sign-out logic here
    };

    return (
        <div>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="inline-flex gap-2 bg-white ">
                            {/* User profile image */}
                            <div className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                                <span className="sr-only">Open user menu</span>
                                <div
                                    className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                                    style={{ backgroundImage: `url(${userData?.profilePhotoUrl || 'default-image-url'})` }}
                                >
                                    <span className="sr-only">User Profile Picture</span>
                                </div>
                            </div>
                            {/* User name and email */}
                            <div className="text-left gap-2">
                                <span className="font-extrabold text-gray-900 pb-2">{userData?.fullName}</span>
                                <div>
                                    <span>{userData?.email}</span>
                                </div>
                            </div>
                        </Popover.Button>
                        <Transition
                            as={React.Fragment}
                            show={open}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                    {/* User profile details */}
                                    <div className="p-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <a href="#">
                                                <img
                                                    className="w-20 h-20 rounded-full"
                                                    src={userData?.profilePhotoUrl}
                                                    alt="Profile Picture"
                                                />
                                            </a>
                                        </div>
                                        <p className="text-2xl font-semibold leading-none text-gray-900">
                                            <a href="#">{userData?.fullName}</a>
                                        </p>
                                        <p className="mb-3 text-m font-normal">
                                            <a href="#" className="hover:underline">
                                                {userData?.email}
                                            </a>
                                        </p>
                                        <p className="mb-3 text-m font-normal">
                                            <a href="#" className="hover:underline">
                                                {userData?.companyId}
                                            </a>
                                        </p>
                                        <p className="mb-3 text-m font-normal">
                                            <a href="#" className="hover:underline">
                                                {userData?.phone}
                                            </a>
                                        </p>
                                        <p className="mb-3 text-m font-normal">
                                            <a href="#" className="hover:underline">
                                                {userData?.address}
                                            </a>
                                        </p>
                                        <p className="mb-3 text-m font-normal">
                                            <a href="#" className="hover:underline">
                                                {userData?.district}
                                            </a>
                                        </p>
                                        <div>
                                            <ul className="flex text-sm md:gap-16">
                                                <li className="mr-2">
                                                    {/* Edit profile button */}
                                                    <div>
                                                        <button
                                                            onClick={() => navigate('/settings')}
                                                            type="button"
                                                            className="text-white bg-primary hover:bg-green-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-s px-3 py-1.5"
                                                        >
                                                            Edit profile
                                                        </button>
                                                    </div>
                                                </li>
                                                <li>
                                                    {/* Sign out button */}
                                                    <div>
                                                        <button
                                                            type="button"
                                                            className="text-white bg-primary hover:bg-green-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-s px-3 py-1.5"
                                                            onClick={handleSignOut}
                                                        >
                                                            Sign out
                                                        </button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>

            {/* Sign out alert */}
            {showSignOutAlert && <SignOutAlert onCancel={handleCancel} onSignOut={handleConfirmSignOut} />}
        </div>
    );
};

export default UserProfile;
