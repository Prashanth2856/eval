import { Link, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const BookDetails = () => {
    const [book, setBook] = useState([]);
    const { id } = useParams();
    const {
        title,
        author,
        rating,
        description,
        poster,
        release_date,
        reviews,
        authorId
    } = book;

    useEffect(() => {
        getBookData();
    }, []);

    const getBookData = async () => {
        let res = await axios.get("http://localhost:3000/books", {
            params: {
                id: id,
            },
        });
        setBook(res.data[0]);
    };

    return (
        <div
            style={{
                border: "1px solid black",
                display: "grid",
                gridTemplateColumns: "200px 200px 200px",
                justifyContent: "center",
                width: "600px",
                margin: "auto",
            }}
        >
            <span>
                <b>Title: </b>
                {title}
            </span>
            <img src={poster} alt="" width="50px" />
            <span>
                <b>Rating: </b>
                {rating}
            </span>
            <span>
                <Link to={`/authors/${authorId}`}><b>Author: </b>{author}</Link>
            </span>
            <span>
                <b>Description: </b>
                {description}
            </span>
            <span>
                <b>Release Date:-  </b>
                {release_date}
            </span>
            <span>
                <b>Review:</b> {reviews}
            </span>
        </div>
    );
};
