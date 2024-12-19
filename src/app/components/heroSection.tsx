"use client";
import Logo from "@/app/components/logo";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import Content from "../utils/content.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import Image, { StaticImageData } from "next/image";
import Probiotics from "../../../public/probiotics2.png";
import Vitamins from "../../../public/vitamins.png";
import WeigthLoss from "../../../public/weightLoss.png";
import functionalFood from "../../../public/functionalfoods.png";
import TwoDot from "../../../public/twoDot.png";

export default function HeroSection() {
  const {
    HeroSection: {
      Heading,
      LeftSideContent: { LeftHeading, SubHeading, Button },
      RigthSideContent,
    },
  } = Content;

  const isDeskopScreen = useMediaQuery("(min-width:600px)");

  const listImages: { [key: string]: StaticImageData } = {
    Vitamins: Vitamins,
    "Weight Loss": WeigthLoss,
    "Functional Foods": functionalFood,
  };

  return (
    <>
      <Logo />
      <Grid
        container
        sx={{
          backgroundColor: "#e3f5fb",
          margin: isDeskopScreen ? "3vh" : "2vh 2vh 15vh 2vh",
          height: isDeskopScreen ? "110vh" : "auto",
        }}
      >
        <Grid size={{ md: 12, sm: 12, xs: 12 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              color: "#003269",
              marginTop: "5vh",
              height: isDeskopScreen ? "2vh" : "0",
            }}
          >
            <Typography variant={isDeskopScreen ? "h1" : "h4"} gutterBottom>
              {Heading}
            </Typography>
          </Box>
        </Grid>

        <Grid container size={{ md: 12, sm: 12, xs: 12 }}>
          <Grid size={{ md: 1, sm: 2, xs: 12 }}></Grid>
          <Grid
            size={{ md: 3, sm: 2, xs: 12 }}
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Stack>
                <Box sx={{ color: "#c4d2d6" }}>
                  {" "}
                  <Typography
                    variant={isDeskopScreen ? "h5" : "h4"}
                    gutterBottom
                  >
                    {LeftHeading}
                  </Typography>
                </Box>
                <Box sx={{ color: "#103f4e" }}>
                  {" "}
                  <Typography
                    variant={isDeskopScreen ? "h4" : "h4"}
                    gutterBottom
                  >
                    {SubHeading}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    backgroundColor: "#103f4e",
                    width: "100px",
                    color: " #fff",
                    borderRadius: "14px",
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="caption" gutterBottom>
                    {Button}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ md: 4, sm: 4, xs: 12 }}>
            <Box>
              <Image
                src={Probiotics}
                alt="Probiotics"
                style={{
                  objectFit: "fill",
                  height: "50vh",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ md: 4, sm: 4, xs: 12 }} sx={{}}>
            {RigthSideContent.map((el, index) => {
              const { Title, DescriptionOne, DescriptionTwo } = el;
              return (
                <Box key={index} sx={{ marginTop: "15px" }}>
                  <Stack direction="row" spacing={2}>
                    <Box>
                      <Image
                        src={listImages[Title]}
                        alt="Title"
                        style={{
                          objectFit: "fill",
                        }}
                      />
                    </Box>
                    <Stack direction="column">
                      <Box sx={{ color: "#103f4e", fontWeight: "bold" }}>
                        <Typography variant="subtitle1">{Title}</Typography>
                      </Box>
                      <Box sx={{ color: "#c4d2d6" }}>
                        <Typography variant="subtitle2">
                          {DescriptionOne}
                        </Typography>
                        <Typography variant="subtitle2">
                          {DescriptionTwo}
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
              );
            })}
          </Grid>
          <Grid size={{ md: 1, sm: 2, xs: 12 }}></Grid>
        </Grid>
        <Grid size={{ md: 4, sm: 4, xs: 12 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              src={TwoDot}
              alt="TwoDot"
              style={{
                objectFit: "fill",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
