import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import axios from 'axios';
import ItemCard from './AvailableItems/ItemCards'; // Corrected import statement for ItemCard

export default function AvailableItems() {
    // State variable for search term
    const [searchTerm, setSearchTerm] = useState('');
    // State variable for storing fetched cards
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/product/allproducts");
                setCards(response.data); // Assuming response.data is an array of items/cards
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error here, e.g., set an error state or show a message to the user
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures fetchData runs only once on component mount

    // Filtered cards based on search term
    const filteredCards = cards.filter(card =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white px-14 flex flex-col items-center border-b border-gray-200 justify-between gap-10">
            {/* Top header section */}
            <div className="bg-primary rounded-lg p-2 flex-1 border border-gray-200 flex items-center w-full">
                <span className="text-2xl text-white">Available Items</span>
                <div className="flex justify-end gap-2 ml-auto">
                    {/* Search input container */}
                    <div className="relative w-72">
                        {/* Search icon */}
                        <HiOutlineSearch fontSize={20} className="text-gray-800 absolute top-1/2 left-3 -translate-y-1/2" />
                        {/* Search input field */}
                        <input
                            type="text"
                            placeholder="Search by name..."
                            className="text-sm focus:outline-none border border-gray-300 rounded-sm px-3 py-2 mb-"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Container for displaying filtered cards */}
            <div className="bg-white px-14 flex flex-col items-center border-b border-gray-200 justify-between gap-10 w-full">
                <div className='flex items-center gap-4 max-w-5xl mx-auto overflow-x-auto '>
                    {/* Iterate over filtered cards and render each card */}
                    {filteredCards.map((card) => (
                        <div key={card.id} className="flex-none w-full sm:w-64 md:w-80 lg:w-96 xl:w-80 snap-center">
                            {/* Render an ItemCard component for each card */}
                            <ItemCard
                                name={card.name}
                                imageSrc={card.imageUrl}
                                title={card.brand}
                                description={card.description}
                                completion={card.category}
                                rating={card.id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// import React, { useState } from 'react';
// import { HiOutlineSearch } from 'react-icons/hi';
// import ItemCard from './AvailableItems/ItemCards'; // Corrected import statement for ItemCard

// export default function AvailableItems() {
//     // State variable for search term
//     const [searchTerm, setSearchTerm] = useState('');

//     // Sample data for the cards
//     const cards = [
//         {
//             id: 1,
//             name: 'Potato',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Potato',
//             description: 'Versatile potato, great for mashing, roasting, and frying.',
//             completion: 90,
//             rating: 4.5,
//         },
//         {
//             id: 2,
//             name: 'Avocado',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Avocado',
//             description: 'Creamy avocado, delicious in salads, sandwiches, and guacamole.',
//             completion: 93,
//             rating: 4.8,
//         },
//         {
//             id: 3,
//             name: 'Onion',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Onion',
//             description: 'Flavorful onion, perfect for sautéing, grilling, and adding to dishes.',
//             completion: 87,
//             rating: 4.6,
//         },
//         {
//             id: 4,
//             name: 'Cherry',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Cherry',
//             description: 'Sweet and tangy cherries, great for snacking and desserts.',
//             completion: 89,
//             rating: 4.7,
//         },
//         {
//             id: 5,
//             name: 'Tomato',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Tomato',
//             description: 'Fresh and juicy tomato, great for salads and cooking.',
//             completion: 95,
//             rating: 4.8,
//         },
//         {
//             id: 6,
//             name: 'Apple',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Apple',
//             description: 'Crisp and sweet apple, perfect for snacking and baking.',
//             completion: 90,
//             rating: 4.9,
//         },
//         {
//             id: 7,
//             name: 'Spinach',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Spinach',
//             description: 'Nutrient-rich spinach, ideal for salads and smoothies.',
//             completion: 85,
//             rating: 4.7,
//         },
//         {
//             id: 8,
//             name: 'Orange',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Orange',
//             description: 'Refreshing and tangy orange, packed with vitamin C.',
//             completion: 88,
//             rating: 4.8,
//         },
//         {
//             id: 9,
//             name: 'Broccoli',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Broccoli',
//             description: 'Nutritious broccoli, great for steaming and stir-frying.',
//             completion: 91,
//             rating: 4.6,
//         },
//         {
//             id: 10,
//             name: 'Banana',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Banana',
//             description: 'Sweet and creamy banana, perfect for smoothies and desserts.',
//             completion: 89,
//             rating: 4.7,
//         },
//         {
//             id: 11,
//             name: 'Lettuce',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Lettuce',
//             description: 'Fresh and crisp lettuce, ideal for salads and sandwiches.',
//             completion: 87,
//             rating: 4.5,
//         },
//         {
//             id: 12,
//             name: 'Grapes',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Grapes',
//             description: 'Sweet and juicy grapes, great for snacking and desserts.',
//             completion: 93,
//             rating: 4.9,
//         },
//         {
//             id: 13,
//             name: 'Cucumber',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Cucumber',
//             description: 'Cool and refreshing cucumber, perfect for salads and pickling.',
//             completion: 84,
//             rating: 4.4,
//         },
//         {
//             id: 14,
//             name: 'Peach',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Peach',
//             description: 'Sweet and fragrant peach, delicious in desserts and smoothies.',
//             completion: 86,
//             rating: 4.6,
//         },
//         {
//             id: 15,
//             name: 'Bell Pepper',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Bell Pepper',
//             description: 'Colorful bell pepper, great for adding crunch and flavor to dishes.',
//             completion: 90,
//             rating: 4.7,
//         },
//         {
//             id: 16,
//             name: 'Blueberries',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Blueberries',
//             description: 'Juicy blueberries, rich in antioxidants and perfect for snacking.',
//             completion: 88,
//             rating: 4.8,
//         },
//         {
//             id: 17,
//             name: 'Watermelon',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Watermelon',
//             description: 'Refreshing watermelon, great for hydrating and enjoying in summer.',
//             completion: 92,
//             rating: 4.9,
//         },
//         {
//             id: 18,
//             name: 'Carrot',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Carrot',
//             description: 'Sweet and crunchy carrot, perfect for salads, cooking, and juicing.',
//             completion: 89,
//             rating: 4.6,
//         },
//         {
//             id: 19,
//             name: 'Strawberries',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Strawberries',
//             description: 'Sweet and juicy strawberries, delicious in desserts and smoothies.',
//             completion: 94,
//             rating: 4.9,
//         },
//         {
//             id: 20,
//             name: 'Mango',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Mango',
//             description: 'Exotic and flavorful mango, perfect for desserts, smoothies, and salads.',
//             completion: 91,
//             rating: 4.7,
//         },
//         {
//             id: 25,
//             name: 'Pineapple',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Pineapple',
//             description: 'Tropical pineapple, delicious fresh, grilled, or in smoothies.',
//             completion: 92,
//             rating: 4.9,
//         },
//     ];

//     // Filtered cards based on search term
//     const filteredCards = cards.filter(card =>
//         card.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="bg-white px-14 flex flex-col items-center border-b border-gray-200 justify-between gap-10">
//             {/* Top header section */}
//             <div className="bg-primary rounded-lg p-2 flex-1 border border-gray-200 flex items-center w-full">
//                 <span className="text-2xl text-white">Available Items</span>
//                 <div className="flex justify-end gap-2 ml-auto">
//                     {/* Search input container */}
//                     <div className="relative w-72">
//                         {/* Search icon */}
//                         <HiOutlineSearch fontSize={20} className="text-gray-800 absolute top-1/2 left-3 -translate-y-1/2" />
//                         {/* Search input field */}
//                         <input
//                             type="text"
//                             placeholder="Search by name..."
//                             className="text-sm focus:outline-none border border-gray-300 rounded-sm px-3 py-2 mb-"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Container for displaying filtered cards */}
//             <div className="bg-white px-14 flex flex-col items-center border-b border-gray-200 justify-between gap-10 w-full">
//                 <div className='flex items-center gap-4 max-w-5xl mx-auto overflow-x-auto '>
//                     {/* Iterate over filtered cards and render each card */}
//                     {filteredCards.map((card) => (
//                         <div key={card.id} className="flex-none w-full sm:w-64 md:w-80 lg:w-96 xl:w-80 snap-center">
//                             {/* Render an ItemCard component for each card */}
//                             <ItemCard
//                                 name={card.name}
//                                 imageSrc={card.imageSrc}
//                                 title={card.title}
//                                 description={card.description}
//                                 completion={card.completion}
//                                 rating={card.rating}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }





// // import React, { useState, useEffect } from 'react';
// // import { HiOutlineSearch } from 'react-icons/hi';
// // import ItemCard from './AvailableItems/ItemCard'; // Assuming corrected import statement for ItemCard

// // const AvailableItems = () => {
// //     const [searchTerm, setSearchTerm] = useState(''); // State variable for search term
// //     const [items, setItems] = useState([]); // State variable to store items fetched from backend

// //     useEffect(() => {
// //         // Simulated fetch from backend API (replace with actual API call)
// //         const fetchItems = async () => {
// //             try {
// //                 const response = await fetch('/api/items'); // Replace with actual endpoint
// //                 if (!response.ok) {
// //                     throw new Error('Failed to fetch items');
// //                 }
// //                 const data = await response.json();
// //                 setItems(data); // Update state with fetched items
// //             } catch (error) {
// //                 console.error('Error fetching items:', error);
// //             }
// //         };

// //         fetchItems(); // Call the fetch function when component mounts
// //     }, []); // Empty dependency array means it runs once when component mounts

// //     // Filtered items based on search term
// //     const filteredItems = items.filter(item =>
// //         item.name.toLowerCase().includes(searchTerm.toLowerCase())
// //     );

// //     return (
// //         <div className="bg-white px-14 flex flex-col items-center border-b border-gray-200 justify-between gap-10">
// //             {/* Top header section */}
// //             <div className="bg-primary rounded-lg p-2 flex-1 border border-gray-200 flex items-center w-full">
// //                 <span className="text-2xl text-white">Available Items</span>
// //                 <div className="flex justify-end gap-2 ml-auto">
// //                     {/* Search input container */}
// //                     <div className="relative w-72">
// //                         {/* Search icon */}
// //                         <HiOutlineSearch fontSize={20} className="text-gray-800 absolute top-1/2 left-3 -translate-y-1/2" />
// //                         {/* Search input field */}
// //                         <input
// //                             type="text"
// //                             placeholder="Search by name..."
// //                             className="text-sm focus:outline-none border border-gray-300 rounded-sm px-3 py-2"
// //                             value={searchTerm}
// //                             onChange={(e) => setSearchTerm(e.target.value)}
// //                         />
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Container for displaying filtered items */}
// //             <div className="bg-white px-14 flex flex-col items-center border-b border-gray-200 justify-between gap-10 w-full">
// //                 <div className='flex items-center gap-4 max-w-5xl mx-auto overflow-x-auto '>
// //                     {/* Iterate over filtered items and render each item */}
// //                     {filteredItems.map((item) => (
// //                         <div key={item.id} className="flex-none w-full sm:w-64 md:w-80 lg:w-96 xl:w-80 snap-center">
// //                             {/* Render an ItemCard component for each item */}
// //                             <ItemCard
// //                                 name={item.name}
// //                                 imageSrc={item.imageSrc}
// //                                 title={item.title}
// //                                 description={item.description}
// //                                 completion={item.completion}
// //                                 rating={item.rating}
// //                             />
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AvailableItems;