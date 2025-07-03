import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../lib/axios';
import { toast } from 'react-hot-toast';

function BorrowBook() {



  const { bookId } = useParams();
  const navigate = useNavigate();

  const [bookTitle, setBookTitle] = useState('');
  const [form, setForm] = useState({
    book: bookId || '',
    quantity: 1,
    dueDate: ''
  });

  useEffect(() => {
    if (bookId) {
      axios.get(`/books/${bookId}`).then(res => {
        setBookTitle(res.data.data.title);
      });
    }
  }, [bookId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'quantity' ? parseInt(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/borrow', form);
      // alert('✅ Book borrowed successfully!');
      toast.success('Book Borrowed!');
      navigate('/books');
    } catch (err) {
      // alert('❌ Failed to borrow book');
      toast.error('Failed to borrow');
      console.error(err);
    }
  };

  return (

    <div className="p-6 bg-white dark:bg-gray-800 text-black dark:text-gray-200">
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="bg-green-100 text-2xl font-bold mb-4 p-6 bg-white dark:bg-gray-700 text-black dark:text-gray-200">📖 Borrow Book: {bookTitle}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
          name="quantity"
          type="number"
          min={1}
          value={form.quantity}
          onChange={handleChange}
          required
          className="input"
          placeholder="Quantity"
        />
        <input
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={handleChange}
          required
          className="input"
          placeholder="Due Date"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Borrow Book
        </button>
      </form>
    </div>
    </div>
      

    

  );
}

export default BorrowBook;