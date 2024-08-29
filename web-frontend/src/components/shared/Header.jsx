import React, { Fragment, useContext, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { HiOutlineBell } from 'react-icons/hi';
import { AdminContext } from '../../Context/AdminContext';
import UserProfile from '../Popover/UserProfile'; // Import the UserProfile component



export default function Header({ name }) {
  const { headerName } = useContext(AdminContext);
  

  return (
    <div className="bg-white h-40 px-14 flex items-center justify-between">
      <div className="relative">
        <div>
          <span className="text-4xl font-extrabold text-gray-900 pb-2">{headerName}</span>
          <div>
            <span>Welcome Back!</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-11 mr-2">
        <Popover className="relative gap-4">
          {({ open }) => (
            <>
              <Popover.Button
                className={`bg-white group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none ${
                  open && 'bg-gray-100 active:bg-gray-100'
                }`}
              >
                <HiOutlineBell fontSize={26} />
              </Popover.Button>
              <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80 ">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">Notifications</strong>
                    <div className="mt-2 py-1 text-sm">This is notification panel.</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        {/* Use the UserProfile component here */}
        <UserProfile headerName={headerName} />
      </div>

      
    </div>
  );
}