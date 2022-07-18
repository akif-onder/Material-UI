import { Button, Container, Typography } from "@mui/material";
const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h4"
          sx={{
            background: "lightgrey",
            mt: 4,
            border: "5px solid green",
            align: "left",
            color: "error",
          }}
        >
          Typography, Buttons, Container, Box
        </Typography>
        <Typography variant="body1" align="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          pariatur ea tempora ipsa ad illum, ipsum impedit, quibusdam unde
          adipisci suscipit doloremque blanditiis non! Soluta, illum tenetur.
          Reprehenderit, voluptatem sed!
        </Typography>
        <Typography
          variant="button"
          align="justify"
          color="secondary"
          sx={{ display: "inline-block", mt: 4 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          pariatur ea tempora ipsa ad illum, ipsum impedit, quibusdam unde
          adipisci suscipit doloremque blanditiis non! Soluta, illum tenetur.
          Reprehenderit, voluptatem sed!
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Button variant="contained" color="secondary">
          CLICK
        </Button>
        <Button variant="outlined" color="success">
          SEND
        </Button>
      </Container>
    </div>
  );
};

export default TypoButtons;
