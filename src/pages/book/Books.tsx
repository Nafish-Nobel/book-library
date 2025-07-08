import { useEffect, useState } from 'react';
import axios from '../../lib/axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@/components/ui/button"
import BookCards from './BookCards';

type Book = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
};

function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // <-- Search state

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/books/${id}`);
      toast.success('Book deleted');
      setBooks(books.filter(b => b._id !== id));
    } catch {
      toast.error('Delete failed');
    }
  };

  useEffect(() => {
    axios.get('/books')
      .then(res => {
        setBooks(res.data.data);
      })
      .catch(err => {
        console.error('Failed to load books', err);
      })
      .finally(() => setLoading(false));
  }, []);

  // Filter books by title or ISBN
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.genre.toLowerCase().includes(search.toLowerCase()) ||
      book.isbn.toLowerCase().includes(search.toLowerCase())
  );

  return (
    
    <div className="p-6 bg-white dark:bg-gray-800 text-black dark:text-black-200">
      <div className="p-6 text-2xl max-w-7xl mx-auto font-italic text-center">
        <h1 className="p-2 text-4xl text-gray-600 bg-green-200 rounded text-center font-bold mb-4">🔖All Books</h1>
        
        {/* Search input */}
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Search by title or ISBN or author or genre..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-1/2"
          />
        </div>

        {loading ? (
          <p>Loading books...</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className="min-w-full table-auto border border-gray-300 text-xs sm:text-sm md:text-base">
              <thead className="bg-orange-100 text-center">
                <tr>
                  <th className="p-2 text-gray-600">Title</th>
                  <th className="p-2 text-gray-600">Author</th>
                  <th className="p-2 text-gray-600">Genre</th>
                  <th className="p-2 text-gray-600">ISBN</th>
                  <th className="p-2 text-gray-600">Copies</th>
                  <th className="p-2 text-gray-600">Available</th>
                  <th className="p-2 text-gray-600">Edit</th>
                  <th className="p-2 text-gray-600">Borrow</th>
                  <th className="p-2 text-gray-600">Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map((book) => (
                  <tr key={book._id} className="border-t">
                    <td className="p-2 bg-green-100">{book.title}</td>
                    <td className="p-2 bg-red-100">{book.author}</td>
                    <td className="p-2 bg-yellow-100">{book.genre}</td>
                    <td className="p-2 bg-blue-100">{book.isbn}</td>
                    <td className="p-2 bg-purple-100">{book.copies}</td>
                    <td className="p-2 bg-gray-100">
                      <span className={book.available ? 'text-green-600' : 'text-red-600'}>
                        {book.available ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="p-2">
                      <Button variant="outline">
                        <Link to={`/edit-book/${book._id}`} className="text-blue-600 ">Edit</Link>
                      </Button>
                    </td>
                    <td className="p-2 bg-gray-400">
                      <Button variant="outline">
                        <Link to={`/borrow/${book._id}`} className="text-purple-600 ">Borrow</Link>
                      </Button>
                    </td>
                    <td className="p-2 hover:bg-red-100">
                      <Button variant="destructive" onClick={() => handleDelete(book._id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <BookCards />
    </div>
  );
}

export default Books;