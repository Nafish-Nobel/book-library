import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './pages/book/Books';
import CreateBook from './pages/book/CreateBook';
import EditBook from './pages/book/EditBook';
import BorrowBook from './pages/borrow/BorrowBook';
import BorrowSummary from './pages/borrow/BorrowSummary';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import NotFound from './pages/notFound/NotFound';
import BookCards from './pages/book/BookCards';

function App() {

  return (

    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
        <Route path="/borrow/:bookId" element={<BorrowBook />} />
        <Route path="/borrow-summary" element={<BorrowSummary />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/books" element={<BookCards />} />
        <Route path="/" element={<BookCards />} />
      </Routes>
    </Router>
      <Footer />


    </>
  )
}

export default App;