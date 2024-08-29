import React from 'react'
import TransactionChart from './Analysis/TransactionChart'
import PopularFruits from './Analysis/PopularFruits'
import PopularVegetables from './Analysis/PopularVegetables'
import PopularGrains from './Analysis/PopularGrains'
import AreaChartCustomers from './Analysis/AreaChartCustomers'
import Piechart from './Analysis/Piechart'

export default function DataAnalysis() {
    return (
        <div className="bg-white h-100 px-14 flex flex-col items-center border-b border-gray-200 justify-between gap-10">
            <div className="bg-primary  rounded-lg p-2 flex-1 border border-gray-200 flex items-center w-full">
                <span className="text-2xl text-white "> Data Analysis </span>
            </div>

            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />

            </div>
            <div className="flex flex-row gap-10 w-full">
                <PopularFruits />
                <PopularVegetables />
                <PopularGrains />
            </div>

            <div className="flex flex-row gap-4 w-full">
                <AreaChartCustomers />
                <Piechart/>
                
            </div>
        </div>
    )
}