import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../Hero/Hero';
import NavigationMenu from '../../Shear/NavigationMenu/NavigationMenu';
import novelBook from "../../../Data/NovelBook/NovelBook";
import './NovelBooks.css'
import Book from '../../Books/Book';

const NovelBooks = () => {
    return (
        <div>
            <Hero/>
            <NavigationMenu/>
            <div className='uponnas_banner'>
                <h2>উপন্যাস</h2>
            </div>
            <div className="container bg-light p-2">
                <h2 className="pb-3">Total Available Books {novelBook.length}</h2>
                <Link to="/home">Back to Home</Link>
                <div className="row_item">
                {novelBook.map((order) => (
                   <Book key={order.id} order={order}/>
                ))}
                </div>
            </div>
        </div>
    );
};

export default NovelBooks;