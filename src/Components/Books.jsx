import React from "react";
import { Link } from "react-router-dom";

export const Books = ({ bookdata }) => {
    const { title, author, rating, description, poster, id, release_date } =
        bookdata;

    return (
        <Link to={`/bookdetail/${id}`}>
            {" "}
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
                    <b>Rating:</b> {rating}
                </span>
                <span>
                    <b>Author:</b> {author}
                </span>
                <span>
                    <b>Description: </b>
                    {description}
                </span>
                <span>
                    <b>Release Date: </b>
                    {release_date}
                </span>
            </div>
        </Link>
    );
};
