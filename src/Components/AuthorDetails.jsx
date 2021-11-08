import {  useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const AuthorDetails = () => {
    const [author, setAuthor] = useState([]);
    const { id } = useParams();
    const { name, age, image, about_books, book } = author;
    console.log('author:', author)

    useEffect(() => {
        getBookData();
    });

    const getBookData = async () => {
        let res = await axios.get("http://localhost:3000/authors", {
            params: {
                id: id,
            },
        });
        setAuthor(res.data[0]);
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
            <span><b>Name: </b>{name}</span>
            <img src={image} alt="" width="50px" />
            <span><b>Age: </b>{age}</span>
            <span><b>About: </b>{about_books}</span>
            <span>
                <b>Books:</b>{" "}
                {book !== undefined ? (
                    book.map((item) => {
                        return (
                            <>
                                <span>{item}</span> <br />
                            </>
                        );
                    })
                ) : (
                    <span></span>
                )}
            </span>
        </div>
    );
};
