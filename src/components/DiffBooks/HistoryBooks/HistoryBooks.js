import React from 'react';
import { Link } from 'react-router-dom';
import historyBook from '../../../Data/HistoryBook/HistoryBook';
import Book from '../../Books/Book';
import Hero from '../../Hero/Hero';
import NavigationMenu from '../../Shear/NavigationMenu/NavigationMenu';

const HistoryBooks = () => {
    return (
        <div>
            <Hero/>
            <NavigationMenu/>
            <div className='uponnas_banner'>
                <h2>ইতিহাস</h2>
            </div>
            <div className="container bg-light p-2">
                <h2 className="pb-3">Total Available Books {historyBook.length}</h2>
                <Link to="/home">Back to Home</Link>
                <div className="row_item">
                {historyBook.map((order) => (
                   <Book key={order.id} order={order}/>
                ))}
                </div>
            </div>
        </div>
    );
};

export default HistoryBooks;