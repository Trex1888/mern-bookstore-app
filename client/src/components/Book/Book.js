import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
import axios from "axios";

function Book(props) {
  const history = useNavigate();
  const { _id, name, image, author, price, description } = props.book;
  const deleteHandler = async () => {
    try {
      await axios
        .delete(`http://localhost:5000/books/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/books"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By: {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>${price}</h3>
      <Button
        LinkComponent={Link}
        to={`/books/${_id}`}
        variant="contained"
        sx={{ mt: "auto", background: "gray" }}
      >
        Update
      </Button>
      <Button
        onClick={deleteHandler}
        variant="contained"
        sx={{
          mt: "20px",
          mb: "20px",
          background: "red",
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export default Book;
