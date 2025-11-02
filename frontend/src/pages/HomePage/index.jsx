// Please feel free to modify the boilerplate code below.
// The use of MUI is optional, you can use any other library/styled components or none at all.

import { Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container
      id="root"
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">Welcome to the Home Page</Typography>
      <Typography variant="h3">
        This is the main landing page of the application.
      </Typography>
      <Typography variant="h3">
        Please use this page to complete the technical test.
      </Typography>
    </Container>
  );
};
export default HomePage;
