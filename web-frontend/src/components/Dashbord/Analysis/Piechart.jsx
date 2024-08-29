import React, { useState, useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

export default function Piechart() {
    // State for controlling the visibility of dropdowns
    const [dateRangeVisible, setDateRangeVisible] = useState(false);
    const [widgetDropdownVisible, setWidgetDropdownVisible] = useState(false);
    const [lastDaysDropdownVisible, setLastDaysDropdownVisible] = useState(false);

    // References to the DOM elements for dropdowns
    const chartRef = useRef(null);

    // Toggle the visibility of the dropdowns
    const toggleDateRange = () => setDateRangeVisible(!dateRangeVisible);
    const toggleWidgetDropdown = () => setWidgetDropdownVisible(!widgetDropdownVisible);
    const toggleLastDaysDropdown = () => setLastDaysDropdownVisible(!lastDaysDropdownVisible);

    // Initialize the chart using ApexCharts
    useEffect(() => {
        const options = {
            chart: {
                type: 'pie',
                height: 400,
            },
            series: [44, 55, 13],
            labels: [ 'Paid', 'Panding', 'Failed'],
            colors: ['#008450', '#EFB700', '#B81D13'], // Custom colors for the pie chart segments
            dataLabels: {
                style: {
                    colors: ['#ffffff', '#ffffff', '#ffffff'] // Data labels color
                }
            }
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        return () => {
            chart.destroy(); // Clean up the chart when the component unmounts
        };
    }, []);

    return (
        <div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6">
            <div className="flex justify-between items-start w-full">
                <div className="flex-col items-center">
                    <div className="flex items-center mb-1">
                        <h5 className="text-3xl font-bold leading-none text-gray-900  me-1">Orders status</h5>
                    </div>
                </div>    
            </div>
            <div ref={chartRef} id="pie-chart"></div>
        </div>
    );
}