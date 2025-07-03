import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      if (dark) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  }, [dark]);

  return (
    <nav className="bg-blue-800 text-white px-6 py-3 mb-6 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-semibold bg-blue-600 p-2 rounded">Books Library System</h1>
        <div className="space-x-4">
          <Link to="/books" className="hover:bg-blue-600 p-2 rounded">All Books</Link>
          <Link to="/create-book" className="hover:bg-blue-600 p-2 rounded">Add Book</Link>
          <Link to="/borrow-summary" className="hover:bg-blue-600 p-2 rounded">Summary</Link>

          {/* Toggle Button */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={dark}
              onChange={() => setDark(!dark)}
              className="hidden"
            />
            <div className="w-10 h-5 bg-white dark:bg-gray-600 rounded-full p-1 flex items-center">
              <div className={`bg-blue-600 w-3 h-3 rounded-full shadow-md transform transition-transform ${dark ? 'translate-x-5' : ''}`}></div>
            </div>
          </label>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;