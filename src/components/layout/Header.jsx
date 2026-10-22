import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Stack,
} from "@mui/material";

import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Login", path: "/login" },
  ];

  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      sx={{
        backgroundColor: "#ffffff",
        color: "#222222",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: "72px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Application Logo and Name */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              My To-Do List
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            {navLinks.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    color: "#1976d2",
                    backgroundColor: "#f0f6ff",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Register Button */}
            <Button
              component={Link}
              to="/register"
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                px: 2.5,
                ml: 1,
              }}
            >
              Register
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;