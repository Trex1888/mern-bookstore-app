import React from "react";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems={"center"}>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD project
        </Typography>
        <Typography variant="h3">Using MERN STACK</Typography>
      </Box>
    </div>
  );
}

export default About;
