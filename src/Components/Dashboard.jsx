import axios from 'axios'
import React, { useState, useEffect } from "react";
// import { Route } from 'react-router'
import { Books } from './Books';

export const Dashboard = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooksData();
    }, []);

    const getBooksData = async () => {
        let res = await axios.get("http://localhost:3000/books");
        setBooks(res.data);
    };

    const handleSortDate = async() => {
        let res = await axios.get(
            "http://localhost:3000/books?_sort=release_date"
        );
        setBooks(res.data);
    }
    const handleSortTitle = async () => {
        let res = await axios.get(
            "http://localhost:3000/books?_sort=title"
        );
        setBooks(res.data);
    };
    return (
        <div margin={{ margin: 'auto', width: '500px'}}>
            <button onClick={handleSortDate}>Sort By Date</button>
            <button onClick={handleSortTitle}>Sort By Title</button>
            <div style={{margin: 'auto'}}>
                {books.map(
                    ({
                        title,
                        author,
                        rating,
                        description,
                        poster,
                        id,
                        release_date,
                    }) => {
                        return (
                            <Books
                                key={id}
                                bookdata={{
                                    title,
                                    author,
                                    rating,
                                    description,
                                    poster,
                                    id,
                                    release_date,
                                }}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
}
