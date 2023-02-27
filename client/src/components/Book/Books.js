import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import "./Book.css";
import axios from "axios";
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  try {
    return await axios.get(URL).then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
};

function Books() {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);

  return (
    <div>
      <ul>
        {books &&
          books.map((book) => (
            <li key={book._id}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Books;
