import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-800 text-white px-6 py-3 mb-6 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-semibold bg-blue-600 p-2 rounded">Books Library System</h1>
        <div className="space-x-4">
          <Link to="/books" className="hover:bg-blue-600 p-2 rounded">All Books</Link>
          <Link to="/create-book" className="hover:bg-blue-600 p-2 rounded">Add Book</Link>
          <Link to="/borrow-summary" className="hover:bg-blue-600 p-2 rounded">Summary</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
// This component defines a simple navigation bar with links to different pages in the library system.
// It uses React Router's Link component to navigate between routes without reloading the page.