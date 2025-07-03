import { useEffect, useState } from 'react';
import axios from '../../lib/axios';

type Summary = {
  title: string;
  isbn: string;
  totalQuantity: number;
};

function BorrowSummary() {
  const [summary, setSummary] = useState<Summary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/borrow')
      .then(res => setSummary(res.data.data))
      .catch(err => console.error('Failed to load summary', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 bg-green-100 text-center p-2">📊 Borrow Summary</h1>

      {loading ? (
        <p>Loading summary...</p>
      ) : (
        <table className="table-auto w-full border">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 bg-blue-100">Title</th>
              <th className="p-2 bg-blue-100">ISBN</th>
              <th className="p-2 bg-blue-100">Total Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {summary.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-2 bg-gray-100">{item.title}</td>
                <td className="p-2 bg-yellow-100">{item.isbn}</td>
                <td className="p-2 bg-gray-100">{item.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BorrowSummary;
