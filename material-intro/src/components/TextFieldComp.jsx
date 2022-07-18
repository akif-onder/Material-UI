import React from "react";
import { Typography, Container, Button, Box, TextField } from "@mui/material";

const TextFieldComp = () => {
    let error = false;
  return (
    <Container maxWidth="md">
        <Typography variant="h4" align="center" mt={4} color="error">
          Textfield
        </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent:'center',
          // alignItems:'center',
          gap: 2,
          mt: 4,
        }}
      >
        <TextField
        id='email'
        label='email'
        type='email'
        placeholder='Enter your email'
        fullWidth
        error={error}
        helperText={error && 'Incorrect Email Format'}/>

        <TextField
        id='password'
        label='password'
        type='password'
        placeholder='Enter your password'
        fullWidth
        error={error}
        helperText={error && 'Incorrect Password Format'}/>
        <Button type="submit" variant="contained" sx={{mt:4}}>Submit</Button>
      </Box>
    </Container>
  );
};

export default TextFieldComp;
