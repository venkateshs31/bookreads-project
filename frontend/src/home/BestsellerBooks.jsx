import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestsellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/all-books')
        .then(res => res.json())
        .then(data => setBooks(data.slice(0,10)))
    },[])
  return (
    <div> <BookCards books={books} headline="Best Seller Books"/> </div>
  )
}

export default BestsellerBooks