import { useEffect, useState } from 'react';
import axios from '../../lib/axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    author: '',
    genre: 'FICTION',
    isbn: '',
    copies: 1
  });

  useEffect(() => {
    if (!id) return;
    axios.get(`/books/${id}`).then(res => {
      const book = res.data.data;
      setForm({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        copies: book.copies
      });
    });
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'copies' ? parseInt(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`/books/${id}`, form);
      alert('✅ Book updated!');
      navigate('/books');
    } catch (err) {
      alert('❌ Failed to update book');
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-2 rounded text-green-600">✏️ Edit Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" required className="input" value={form.title} onChange={handleChange} />
        <input name="author" placeholder="Author" required className="input" value={form.author} onChange={handleChange} />
        <input name="isbn" placeholder="ISBN" required className="input" value={form.isbn} onChange={handleChange} />
        <select name="genre" className="input bg-gray-100" value={form.genre} onChange={handleChange}>
          <option value="FICTION">FICTION</option>
          <option value="NON_FICTION">NON_FICTION</option>
          <option value="SCIENCE">SCIENCE</option>
          <option value="FANTASY">FANTASY</option>
        </select>
        <input name="copies" type="number" min={1} placeholder="Copies" required className="input" value={form.copies} onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-700">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
