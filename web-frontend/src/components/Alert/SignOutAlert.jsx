import React from 'react';

// Functional component: SignOutAlert
const SignOutAlert = ({ onCancel, onSignOut }) => {
  // Prevents clicks on the overlay from propagating to elements behind
  const handleOverlayClick = (e) => {
    e.stopPropagation(); // Stops event propagation
  };

  // Prevents clicks inside the alert from dismissing it
  const handleAlertClick = () => {
    return; // No action taken when clicking inside the alert
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick} // Handles overlay click
    >
      <div
        id="alert-additional-content-5"
        className="p-6 border border-gray-300 rounded-lg bg-gray-50 text-center relative"
        onClick={handleAlertClick} // Handles alert click
      >
        <div className="flex justify-center mb-4">
          <h3 className="text-3xl font-medium text-gray-800 text-center">Sign out</h3>
        </div>
        <div className="mt-2 mb-4 text-lg text-gray-800">
          Are you sure you want to sign out?
        </div>
        <div className="flex justify-center gap-4">
          {/* Cancel button */}
          <button
            type="button"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-3 py-1.5 me-2 inline-flex items-center"
            onClick={onCancel} // Calls onCancel function passed as prop
          >
            Cancel
          </button>
          {/* Sign out button */}
          <button
            type="button"
            className="text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-3 py-1.5 text-center"
            onClick={onSignOut} // Calls onSignOut function passed as prop
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignOutAlert;