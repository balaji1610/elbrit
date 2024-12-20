"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Content from "../utils/content.json";
import Image, { StaticImageData } from "next/image";
import vitaminsBlank from "../../../public/vitaminsBlank.png";
import VitaminC from "../../../public/VitaminC.png";
import VitaminB3 from "../../../public/VitaminB3.png";
import Hyaluronic from "../../../public/Hyaluronic.png";
import Laactobacillus from "../../../public/Lactobacillus.png";
import Magnesium from "../../../public/Magnesium.png";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Ingredients() {
  const {
    Ingredients: {
      Title,
      SUBTITLE,
      DescriptionOne,
      DescriptionTwo,
      IngredientsList,
    },
  } = Content;
  const isDeskopScreen = useMediaQuery("(min-width:600px)");

  const listVitaminsImage: { [key: string]: StaticImageData } = {
    "Vitamin C": VitaminC,
    "Vitamin B3": VitaminB3,
    Magnesium: Magnesium,
    "Hyaluronic Acid": Hyaluronic,
    Lactobacillus: Laactobacillus,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: isDeskopScreen ? "flex-end" : "center",
      }}
    >
      <Box sx={{ width: "90%" }}>
        <Grid container spacing={2}>
          <Grid size="auto">
            <Stack direction="column">
              <Box sx={{ color: "#2a5361" }}>
                <Typography variant="subtitle2" gutterBottom>
                  {Title}
                </Typography>
              </Box>
              <Box sx={{ color: "#2a5361" }}>
                <Typography variant="h3" gutterBottom>
                  {SUBTITLE}
                </Typography>
              </Box>
              <Box sx={{ color: "#7a97a0" }}>
                <Typography variant="caption" gutterBottom>
                  {DescriptionOne}
                </Typography>
              </Box>
              <Box sx={{ color: "#7a97a0" }}>
                <Typography variant="caption" gutterBottom>
                  {DescriptionTwo}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          {IngredientsList.map((item, index) => {
            const { Title, Description, button } = item;
            return (
              <Grid
                key={index}
                size={{
                  md: 3,
                  sm: 3,
                  xs: 12,
                  xl: 3,
                }}
              >
                <Box
                  sx={{
                    height: "30vh",
                    backgroundImage: `url(${listVitaminsImage[Title].src})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: "auto",
                  }}
                >
                  <Stack
                    direction="column"
                    sx={{ marginLeft: "20px", padding: "10px" }}
                  >
                    <Box sx={{ color: "#103f4e", fontWeight: "bold" }}>
                      <Typography variant="h6" gutterBottom>
                        {Title}
                      </Typography>
                    </Box>
                    <Box sx={{ color: "#3c5a63" }}>
                      <Typography variant="body1" gutterBottom>
                        {Description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        color: "#1b3b46",
                        textDecoration: "underline",
                        cursor: "pointer",
                        marginTop: "40px",
                        textUnderlineOffset: "5px",
                      }}
                    >
                      <Typography variant="caption">{button}</Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            );
          })}

          <Grid size={{ md: 3, sm: 3, xs: 12, xl: 3 }}>
            <Image
              src={vitaminsBlank}
              alt="vitaminsBlank"
              style={{
                objectFit: "fill",
              }}
              loading="lazy"
              placeholder="blur"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
