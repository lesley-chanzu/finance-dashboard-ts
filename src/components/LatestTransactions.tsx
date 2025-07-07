import React, { useState } from 'react'
import { FaBolt, FaShoppingCart } from 'react-icons/fa'


    const transactions = [
    {
        icon: <FaBolt className='text-yellow-400'/>,
        description: 'Net Bill',
        type: 'Technology',
        amount: '+$394.00',
        date: '2023-10-01',
        amountColor: 'text-green-500',
    },
    {
        icon: <FaShoppingCart className='text-blue-400'/>,
        description: 'E-commerce Purchase', 
        type: 'Mobile connection',
        amount: '-$400.00',
        date: '2023-10-02',
        amountColor: 'text-red-500',
    },
    {
        icon: <FaBolt className='text-yellow-400'/>,
        description: 'Electricity Bill',
        type: 'Utilities',
        amount: '-$120.00',
        date: '2023-10-03',
        amountColor: 'text-red-500',
    },
    {
        icon: <FaShoppingCart className='text-blue-400'/>,
        description: 'Grocery Shopping',
        type: 'Groceries',
        amount: '-$80.00',
        date: '2023-10-04',
        amountColor: 'text-red-500',
    },
    {
        icon: <FaBolt className='text-yellow-400'/>,
        description: 'Internet Bill',
        type: 'Internet Services',
        amount: '-$60.00',
        date: '2023-10-05',
        amountColor: 'text-red-500',
    },
    {
        icon: <FaShoppingCart className='text-blue-400'/>,
        description: 'Clothing Purchase',
        type: 'Fashion',
        amount: '-$150.00',
        date: '2023-10-06',
        amountColor: 'text-red-500',
    },
    {
        icon: <FaBolt className='text-yellow-400'/>,
        description: 'Water Bill',
        type: 'Utilities',
        amount: '-$45.00',
        date: '2023-10-07',
        amountColor: 'text-red-500',
    },
    {
        icon: <FaShoppingCart className='text-blue-400'/>,
        description: 'Online Subscription',
        type: 'Entertainment',
        amount: '-$15.00',
        date: '2023-10-08',
        amountColor: 'text-red-500',
    },
];

const LatestTransactions = () => {
     const [showAll, setShowAll] = useState(false);
    const displayAll = showAll ? transactions : transactions.slice(0, 4);

  return (
    <div className='bg-[#232b4d] rounded-xl p-6 w-full mt-3 shadow-lg'>
        <div className='flex items-center justify-between mb-4'>
            <div>Latest Transaction</div>
            <button 
            className='text-xs bg-[#4f8cff] text-white rounded px-3 py-1 cursor-pointer'
            onClick={() => setShowAll(!showAll)}
            >{showAll ? 'Show Less' : 'All Transactions'}</button>
        </div>
        <div>
            <div className='grid grid-cols-4 text-white text-sm border-t border-[#69686f] mb-2 pt-2'>
                <div>Description</div>
                <div>Type</div>
                <div>Amount</div>
                <div>Date</div>
            </div>
            {displayAll.map((transaction, index) => (
                <div
                key={index}
                className='text-white text-sm grid grid-cols-4 py-2 border-b border-[#69686f] hover:bg-[#2c2f4d] transition-colors duration-200 items-center'
                >
                    <div className='flex items-center gap-2'>
                        {transaction.icon}
                        {transaction.description}
                    </div>
                    <div>{transaction.type}</div>
                    <div className={`${transaction.amountColor} font-semibold`}>{transaction.amount}</div>
                    <div>{new Date(transaction.date).toLocaleDateString()}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default LatestTransactions