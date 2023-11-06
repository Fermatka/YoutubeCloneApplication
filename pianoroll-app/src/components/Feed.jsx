import React from "react";
import { useState, useEffect } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Link } from "react-router-dom";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          pd: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          © 2023 created by Fermatka
          <IconButton
            href="https://www.github.com/Fermatka"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            className="iconButton"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/agata-misiak"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            className="iconButton"
          >
            <LinkedInIcon />
          </IconButton>
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
