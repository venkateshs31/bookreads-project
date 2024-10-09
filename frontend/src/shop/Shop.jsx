import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://bookreads-project-backend.onrender.com/all-books').then(res => res.json()).then(data => setBooks(data));
  },[])
  return (
    <div className='mt-28 px-4 lg:px-24'> 
      <h2 className='text-5xl text-center font-bold'>All Books Are Here</h2>

      <div className='grid gap-8 my-12 lg:gird-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card
          >
            <img src={book.imageURL} alt="" className='h-96' />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                {book.bookTitle}
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.authorName}
            </p>
            <button className='bg-blue-500 font-semibold py-2 rounded text-white'>Buy Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
