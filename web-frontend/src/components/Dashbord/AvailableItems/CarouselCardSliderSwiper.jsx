import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import ItemCard from "./ItemCards"; // Corrected import statement for ItemCard

function SwipeCards() {
    // Define the state variables
    const [searchTerm, setSearchTerm] = useState('');

    // Sample data for the cards
    const cards = [
        {
            id: 1,
            name: 'Carole Steward',
            imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
            title: 'Chief Executive Officer',
            description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
            completion: 88,
            rating: 4.95,
        },
        {
            id: 2,
            name: 'John Doe',
            imageSrc: 'https://example.com/path-to-image.jpg',
            title: 'Chief Financial Officer',
            description: 'John Doe is an experienced CFO with a strong background in financial management and strategic planning. He has successfully led numerous organizations through periods of growth and transformation.',
            completion: 75,
            rating: 4.8,
        },
        {
            id: 3,
            name: 'Jane Smith',
            imageSrc: 'https://example.com/another-image.jpg',
            title: 'Chief Technology Officer',
            description: 'Jane Smith is a skilled CTO specializing in technology innovation and digital transformation. She has a passion for creating cutting-edge solutions that drive business efficiency and customer satisfaction.',
            completion: 92,
            rating: 4.9,
        },
        // Add more card objects as needed
        {
            id: 4,
            name: 'Michael Johnson',
            imageSrc: 'https://example.com/michael-johnson.jpg',
            title: 'Chief Marketing Officer',
            description: 'Michael Johnson is a creative CMO known for his strategic marketing campaigns and brand management expertise. He has successfully launched numerous products and initiatives that have driven significant revenue growth.',
            completion: 80,
            rating: 4.7,
        },
    ];

    // Filtered cards based on search term
    const filteredCards = cards.filter(card =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='flex items-center gap-4 max-w-5xl mx-auto overflow-x-auto '>
            {/* Search input field */}
            <input
                type="text"
                placeholder="Search by name..."
                className="text-sm focus:outline-none border border-gray-300 rounded-sm px-3 py-2 mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Render cards based on filteredCards */}
            {filteredCards.map((card) => (
                <div key={card.id} className="flex-none w-full sm:w-64 md:w-80 lg:w-96 xl:w-80 snap-center">
                    {/* Render an ItemCard component for each card */}
                    <ItemCard
                        name={card.name}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                        completion={card.completion}
                        rating={card.rating}
                    />
                </div>
            ))}
        </div>
    );
}

export default SwipeCards;





// import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css';
// import ItemCards from "./ItemCards"; // Import the ItemCard component

// function SwipeCards() {
//     // Define the state variables
//     const [isDown, setIsDown] = useState(false);
//     const [startX, setStartX] = useState(0);
//     const [scrollLeft, setScrollLeft] = useState(0);

//     // Sample data for the cards
//     const cards = [
//         {
//             id: 1,
//             name: 'Carole Steward',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Chief Executive Officer',
//             description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
//             completion: 88,
//             rating: 4.95,
//         },
//         {
//             id: 2,
//             name: 'Carole Steward',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Chief Executive Officer',
//             description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
//             completion: 98,
//             rating: 4.95,
//         },
//         {
//             id: 3,
//             name: 'Carole Steward',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Chief Executive Officer',
//             description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
//             completion: 18,
//             rating: 4.95,
//         },
//         {
//             id: 3,
//             name: 'Carole Steward',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Chief Executive Officer',
//             description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
//             completion: 18,
//             rating: 4.95,
//         },
//         {
//             id: 3,
//             name: 'Carole Steward',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Chief Executive Officer',
//             description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
//             completion: 18,
//             rating: 4.95,
//         },
//         {
//             id: 3,
//             name: 'Carole Steward',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Chief Executive Officer',
//             description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
//             completion: 18,
//             rating: 4.95,
//         },
//         {
//             id: 3,
//             name: 'Carole Steward',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Chief Executive Officer',
//             description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
//             completion: 18,
//             rating: 4.95,
//         },
//         {
//             id: 3,
//             name: 'Carole Steward',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Chief Executive Officer',
//             description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
//             completion: 18,
//             rating: 4.95,
//         },
//         {
//             id: 3,
//             name: 'Carole Steward',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Chief Executive Officer',
//             description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
//             completion: 18,
//             rating: 4.95,
//         },
//         {
//             id: 3,
//             name: 'Carole Steward',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Chief Executive Officer',
//             description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
//             completion: 18,
//             rating: 4.95,
//         },
//         {
//             id: 3,
//             name: 'Carole Steward',
//             imageSrc: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
//             title: 'Chief Executive Officer',
//             description: 'Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth.',
//             completion: 18,
//             rating: 4.95,
//         },

//         // Add more card objects as needed
//         // ...
//     ];

//     // Event handlers for mouse events
//     const handleMouseDown = (e) => {
//         setIsDown(true);
//         setStartX(e.pageX - e.currentTarget.offsetLeft);
//         setScrollLeft(e.currentTarget.scrollLeft);
//     };

//     const handleMouseLeave = () => setIsDown(false);
//     const handleMouseUp = () => setIsDown(false);

//     const handleMouseMove = (e) => {
//         if (!isDown) return;
//         e.preventDefault();
//         const x = e.pageX - e.currentTarget.offsetLeft;
//         const walk = (x - startX) * 1;
//         e.currentTarget.scrollLeft = scrollLeft - walk;
//     };

//     return (
//         <div className='flex items-center gap-4 max-w-5xl mx-auto overflow-x-auto '>
//     {cards.map((card) => (
//         <div key={card.id} className="flex-none w-full sm:w-64 md:w-80 lg:w-96 xl:w-80 snap-center">
//             {/* Render an ItemCard component for each card */}
//             <ItemCards
//                 name={card.name}
//                 imageSrc={card.imageSrc}
//                 title={card.title}
//                 description={card.description}
//                 completion={card.completion}
//                 rating={card.rating}
//             />
//         </div>
//     ))}
// </div>
//     );
// }

// export default SwipeCards;
