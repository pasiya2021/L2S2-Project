import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../Context/AdminContext';
import mastercardIcon from '../images/mastercard.png';
import visaIcon from '../images/visa.png';
import paypalIcon from '../images/paypal.png';

const transactionData = [
  { status: 'FAILED', amount: 'Rs 20,000', method: 'MasterCard', transactionID: '10034', date: '17/03/2024' },
  { status: 'FAILED', amount: 'Rs 30,000', method: 'MasterCard', transactionID: '10045', date: '16/03/2024' },
  { status: 'PENDING', amount: 'Rs 10,000', method: 'Visa', transactionID: '10047', date: '15/03/2024' },
  { status: 'PAID', amount: 'Rs 15,000', method: 'PayPal', transactionID: '10089', date: '10/03/2024' },
  { status: 'FAILED', amount: 'Rs 35,000', method: 'MasterCard', transactionID: '10056', date: '07/03/2024' },
  { status: 'FAILED', amount: 'Rs 25,000', method: 'MasterCard', transactionID: '10049', date: '04/03/2024' },
  { status: 'PENDING', amount: 'Rs 40,000', method: 'Visa', transactionID: '10023', date: '01/03/2024' },
  { status: 'PAID', amount: 'Rs 20,000', method: 'PayPal', transactionID: '10067', date: '27/02/2024' },
  { status: 'PAID', amount: 'Rs 10,000', method: 'PayPal', transactionID: '10090', date: '24/02/2024' },
  { status: 'FAILED', amount: 'Rs 8,000', method: 'MasterCard', transactionID: '10012', date: '20/02/2024' },
  { status: 'PENDING', amount: 'Rs 9,000', method: 'Visa', transactionID: '10066', date: '15/02/2024' },
];

const statusColors = {
  'FAILED': 'bg-red-500',
  'PENDING': 'bg-yellow-500',
  'PAID': 'bg-primary',
};

const methodIcons = {
  'MasterCard': mastercardIcon,
  'Visa': visaIcon,
  'PayPal': paypalIcon,
};

export default function Orders() {
  const { setHeaderName } = useContext(AdminContext);

  useEffect(() => {
    setHeaderName("Orders");
  }, [setHeaderName]);

  return (
    <div className="flex flex-col items-start w-full p-8">
      <h2 className="mb-4 text-2xl font-bold">Transactions</h2>
      <table className="w-full overflow-hidden bg-white rounded-lg shadow-md">
        <thead className="text-white bg-primary">
          <tr>
            <th className="p-4">Status</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Method</th>
            <th className="p-4">Transaction ID</th>
            <th className="p-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-4">
                <span className={`inline-block px-2 py-1 text-white rounded ${statusColors[transaction.status]}`}>
                  {transaction.status}
                </span>
              </td>
              <td className="p-4">{transaction.amount}</td>
              <td className="p-4">
                <img src={methodIcons[transaction.method]} alt={transaction.method} className="w-8 h-8" />
              </td>
              <td className="p-4">{transaction.transactionID}</td>
              <td className="p-4">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
