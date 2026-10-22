import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #e0e0e0",
        py: 2.5,
        mt: "auto",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            color: "#1976d2",
          }}
        >
          My To-Do List
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          © {new Date().getFullYear()} My To-Do List. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;