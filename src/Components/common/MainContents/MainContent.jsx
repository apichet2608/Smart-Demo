// MainContent.js
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import RouteComponents from "../../../Route";
import Navbar from "../Navbar/Navbar";

export default function MainContent() {
  return (
    <>
      <Navbar />
      <Box component="div" sx={{ mb: 2 }} />
      <RouteComponents />
    </>
  );
}
