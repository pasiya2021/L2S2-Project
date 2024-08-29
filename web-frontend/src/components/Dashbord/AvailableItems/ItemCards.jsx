
// Import necessary libraries and styles
import React from 'react';
import 'tailwindcss/tailwind.css';

// Define the ItemCard component with props
function ItemCard({ imageSrc, name, title, description, rating, completion }) {
    return (
        <div className="relative mt-20 max-w-sm mx-auto">
            {/* Card container */}
            <div className="rounded-3xl overflow-hidden shadow-md bg-gray-100">
                {/* Profile image container */}
                <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                        <img
                            src={imageSrc} // Dynamic image source
                            className="rounded-full object-cover h-full w-full shadow-md"
                            alt="Profile"
                        />
                    </div>
                </div>
                {/* Card content */}
                <div className="px-6 mt-16">
                    <h1 className="font-bold text-2xl text-center mb-1">{name}</h1>
                    <p className="text-gray-800 text-sm text-center">{title}</p>
                    <p className="text-center text-gray-600 text-sm pt-2npm install ajv font-normal">
                        {description}
                    </p>
                    {/* Progress and rating section */}
                    <dl>
                        <dd className="flex items-center mb-3 gap-2">
                            <div className="w-full bg-gray-200 rounded h-2.5 mr-2">
                                <div
                                    className="bg-blue-600 h-2.5 rounded"
                                    style={{ width: `${completion}%` }}
                                ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500">{completion}%</span>
                            <div className="flex items-center">
                                <svg
                                    className="w-4 h-4 text-yellow-300 me-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}

// Export the ItemCard component
export default ItemCard;