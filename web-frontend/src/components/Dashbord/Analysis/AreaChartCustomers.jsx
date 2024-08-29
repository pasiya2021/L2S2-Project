import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function AreaChartCustomers() {
    // Using useEffect to initialize the chart after the component is mounted
    useEffect(() => {
        // Configuration options for the ApexCharts area chart
        const options = {
            chart: {
                height: "100%",  // Full height
                width: "100%",  // Full width
                type: "area",  // Chart type is area
                fontFamily: "Inter, sans-serif",  // Custom font family
                dropShadow: {
                    enabled: false,  // No drop shadow
                },
                toolbar: {
                    show: false,  // Toolbar is hidden
                },
            },
            tooltip: {
                enabled: true,  // Tooltip is enabled
                x: {
                    show: false,  // Hide the x-axis tooltip
                },
            },
            fill: {
                type: "gradient",  // Fill type is gradient
                gradient: {
                    opacityFrom: 0.55,  // Starting opacity of gradient
                    opacityTo: 0,  // Ending opacity of gradient
                    shade: "#1C64F2",  // Gradient shade color
                    gradientToColors: ["#1C64F2"],  // End color of gradient
                },
            },
            dataLabels: {
                enabled: false,  // Data labels are disabled
            },
            stroke: {
                width: 6,  // Stroke width for the lines
            },
            grid: {
                show: false,  // Grid lines are hidden
                strokeDashArray: 4,  // Dashed lines for the grid
                padding: {
                    left: 2,
                    right: 2,
                    top: 0
                },
            },
            series: [
                {
                    name: "Users",  // Series name
                    data: [6500, 6418, 6456, 6526, 6356, 6456],  // Data points for the series
                    color: "#1A56DB",  // Line color
                },
            ],
            xaxis: {
                categories: [
                    '01 February', '02 February', '03 February', 
                    '04 February', '05 February', '06 February', 
                    '07 February'
                ],  // X-axis categories
                labels: {
                    show: false,  // Hide x-axis labels
                },
                axisBorder: {
                    show: false,  // Hide x-axis border
                },
                axisTicks: {
                    show: false,  // Hide x-axis ticks
                },
            },
            yaxis: {
                show: false,  // Hide y-axis
            },
        };

        // Get the chart container DOM element
        const areaChartElement = document.getElementById("area-chart");

        // Check if the chart element exists and ApexCharts is defined
        if (areaChartElement && typeof ApexCharts !== 'undefined') {
            // Initialize the chart with options
            const chart = new ApexCharts(areaChartElement, options);
            chart.render();  // Render the chart

            // Return a cleanup function to destroy the chart when the component unmounts
            return () => {
                chart.destroy();  // Destroy the chart to prevent memory leaks
            };
        }

        // Fallback: Check again and initialize chart if element and library are available
        if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
            const chart = new ApexCharts(document.getElementById("area-chart"), options);
            chart.render();
        }
    }, []);  // Empty dependency array means this effect runs once on mount

    return (
        <div className="w-full h-full bg-white rounded-lg shadow p-4 md:p-6">
            {/* Chart Header */}
            <div className="flex justify-between">
                <div>
                    <h5 className="leading-none text-3xl font-bold text-gray-900 pb-2">Customers</h5>
                </div>
            </div>

            {/* Chart Container */}
            <div id="area-chart" className="h-64"></div> {/* Specify height to ensure chart displays correctly */}

            {/* Additional Content (if any) */}
            <div className="grid grid-cols-1 items-center border-gray-200 border-t justify-between">
                {/* Content for additional elements like a legend, etc. */}
            </div>
        </div>
    );
}