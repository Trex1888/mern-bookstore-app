import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);

  const handleAddChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    try {
      await axios
        .post("http://localhost:5000/books", {
          name: String(inputs.name),
          author: String(inputs.name),
          description: String(inputs.description),
          price: String(inputs.price),
          image: String(inputs.image),
          available: Boolean(checked),
        })
        .then((response) => response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/books"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={`center`}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}
      >
        <FormLabel>Name </FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          value={inputs.name}
          onChange={handleAddChange}
        ></TextField>
        <FormLabel>Author </FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
          value={inputs.author}
          onChange={handleAddChange}
        ></TextField>
        <FormLabel>Description </FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
          value={inputs.description}
          onChange={handleAddChange}
        ></TextField>
        <FormLabel>Price </FormLabel>
        <TextField
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          value={inputs.price}
          onChange={handleAddChange}
        ></TextField>
        <FormLabel>Image </FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
          value={inputs.image}
          onChange={handleAddChange}
        ></TextField>

        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
        <Button
          disabled={inputs.name.length < 1}
          type="submit"
          sx={{ background: "green" }}
          variant="contained"
        >
          Add Book
        </Button>
      </Box>
    </form>
  );
}

export default AddBook;
