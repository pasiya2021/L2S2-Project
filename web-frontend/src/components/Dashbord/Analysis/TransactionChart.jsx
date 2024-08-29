// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// export default function TransactionChart() {
//     return (
//         <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
//             {/* Chart title */}
//             <strong className="text-gray-700 font-medium">Categories sell</strong>

//             {/* Chart container with ResponsiveContainer for dynamic resizing */}
//             <div className="mt-3 w-full flex-1 text-xs">
//                 <ResponsiveContainer width="100%" height="100%">
//                     {/* BarChart component from recharts */}
//                     <BarChart
//                         data={data}  // Data for the chart
//                         margin={{ top: 20, right: 10, left: -10, bottom: 0 }}  // Margins around the chart
//                     >
//                         {/* Grid lines configuration */}
//                         <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />

//                         {/* X-axis configuration */}
//                         <XAxis dataKey="name" />  {/* Displaying data on x-axis */}

//                         {/* Y-axis configuration */}
//                         <YAxis />  {/* Displaying data on y-axis */}

//                         {/* Tooltip configuration */}
//                         <Tooltip />  {/* Display data on the tooltip */}

//                         {/* Legend configuration */}
//                         <Legend />  {/* Displaying data on the chart */}

//                         {/* Bar components for each data series */}
//                         <Bar dataKey="Vegetable" fill="#008000" />  {/* Set the color */}

//                         <Bar dataKey="Fruit" fill="#ea580c" />  {/* Set the color */}

//                         <Bar dataKey="Grains" fill="#0ea5e9" />  {/* Set the color */}
//                     </BarChart>
//                 </ResponsiveContainer>
//             </div>
//         </div>
//     );
// }



import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for the bar chart
const data = [
    { name: 'Jan', Vegetable: 4000, Fruit: 2400, Grains: 3200 },
    { name: 'Feb', Vegetable: 3000, Fruit: 1398, Grains: 3100 },
    { name: 'Mar', Vegetable: 2000, Fruit: 9800, Grains: 4500 },
    { name: 'Apr', Vegetable: 2780, Fruit: 3908, Grains: 4200 },
    { name: 'May', Vegetable: 1890, Fruit: 4800, Grains: 3700 },
    { name: 'Jun', Vegetable: 2390, Fruit: 3800, Grains: 3400 },
    { name: 'July', Vegetable: 3490, Fruit: 4300, Grains: 4000 },
    { name: 'Aug', Vegetable: 2000, Fruit: 9800, Grains: 4100 },
    { name: 'Sep', Vegetable: 2780, Fruit: 3908, Grains: 3600 },
    { name: 'Oct', Vegetable: 1890, Fruit: 4800, Grains: 3300 },
    { name: 'Nov', Vegetable: 2390, Fruit: 3800, Grains: 3900 },
    { name: 'Dec', Vegetable: 3490, Fruit: 4300, Grains: 3700 },
];

// Example component to fetch data from backend
export default function TransactionChart() {
    // // State to store the fetched data
    // const [chartData, setChartData] = useState([]);

    // // useEffect hook to fetch data from backend when component mounts
    // useEffect(() => {
    //     // Mocking API call to fetch data from backend (replace with actual fetch call)
    //     const fetchData = async () => {
    //         try {
    //             // Replace with actual backend API endpoint
    //             const response = await fetch('https://api.example.com/data');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //             // Assuming backend returns data in a format similar to your sample data
    //             setChartData(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData(); // Call the fetch data function
    // }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            {/* Chart title */}
            <strong className="text-gray-700 font-medium">Categories sell</strong>

            {/* Chart container with ResponsiveContainer for dynamic resizing */}
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    {/* BarChart component from recharts */}
                    <BarChart
                        data={data} // Use fetched data for the chart
                        margin={{ top: 20, right: 10, left: -10, bottom: 0 }} // Margins around the chart
                    >
                        {/* Grid lines configuration */}
                        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />

                        {/* X-axis configuration */}
                        <XAxis dataKey="name" /> {/* Displaying data on x-axis */}

                        {/* Y-axis configuration */}
                        <YAxis /> {/* Displaying data on y-axis */}

                        {/* Tooltip configuration */}
                        <Tooltip /> {/* Display data on the tooltip */}

                        {/* Legend configuration */}
                        <Legend /> {/* Displaying data on the chart */}

                        {/* Bar components for each data series */}
                        <Bar dataKey="Vegetable" fill="#008000" /> {/* Set the color */}
                        <Bar dataKey="Fruit" fill="#ea580c" /> {/* Set the color */}
                        <Bar dataKey="Grains" fill="#0ea5e9" /> {/* Set the color */}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}