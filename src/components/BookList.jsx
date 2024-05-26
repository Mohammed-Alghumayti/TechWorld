import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';


const booksData = [
  {
    id: 1,
    title: 'Mastering Java from Scratch',
    description: 'Master Java from the ground up. This guide covers everything from basic syntax to advanced topics like multithreading and networking, featuring hands-on projects to enhance your skills.',
    price: 10.99,
    image: 'https://wallpapercave.com/wp/wp7250087.jpg',
  },
  {
    id: 2,
    title: 'React Modern Web Interfaces',
    description: 'Transform your web development skills with React. Learn to build dynamic, responsive interfaces and explore advanced concepts like performance and optimization.',
    price: 12.99,
    image: 'https://wallpaperaccess.com/full/3949080.png',
  },
  {
    id: 3,
    title: 'Developing Robust ASP.NET Applications',
    description: 'Develop robust web applications with ASP.NET Core. This book covers everything from setup to deployment, including MVC architecture and security best practices.',
    price: 15.99,
    image: 'https://ded9.com/wp-content/uploads/2021/06/aspdotnet.jpg',
  },
  {
    id: 4,
    title: 'Crafting Elegant Laravel Solutions',
    description: 'Create elegant web solutions with Laravel. Dive into fundamentals like Eloquent ORM and Blade templating, and build sophisticated applications through practical examples.',
    price: 8.99,
    image: 'https://yourserveradmin.com/wp-content/uploads/2020/03/laravel.jpg',
  },
];

const BookList = () => {
  const dispatch = useDispatch();

  const handleBuy = (book) => {
    dispatch(addToCart(book));
  };

  return (
    <div className="container">
      <h2>Book List</h2>
      <div className="row">
        {booksData.map((book) => (
          <div className="col-md-3 mb-4" key={book.id}>
            <div className="card">
              <img src={book.image} className="card-img" height={150} alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <p className="card-text"><strong className='badge bg-success fs-6'>Price: ${book.price}</strong></p>
                <button className="btn btn-primary" onClick={() => handleBuy(book)}>Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
