import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "../../lib/axios";
import { Link } from "react-router-dom";

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
}

export default function BookCards() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/books")
      .then((res) => setBooks(res.data.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {books.map((book) => (
        <Card key={book._id} className="bg-white dark:bg-gray-900">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-500">by {book.author}</p>
            <p className="text-sm">Genre: {book.genre}</p>
            <p className="text-sm">ISBN: {book.isbn}</p>
            <p className="text-sm">
              Copies: {book.copies} |{' '}
              <span className={book.available ? "text-green-600" : "text-red-600"}>
                {book.available ? "Available" : "Unavailable"}
              </span>
            </p>
            <Link to={`/borrow/${book._id}`}>
              <Button variant="default" className="mt-2 w-full">
                Borrow
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}