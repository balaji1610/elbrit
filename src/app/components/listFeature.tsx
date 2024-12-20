"use client";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Feature4 from "../../../public/feature04.png";
import Feature5 from "../../../public/feature05.png";
import Feature6 from "../../../public/feature06.png";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import Content from "../utils/content.json";

export default function ListFeature() {
  const { Features } = Content;

  const listFeatureImage: { [key: string]: StaticImageData } = {
    "clinically studied": Feature4,
    "Vegetarian Friendly": Feature5,
    "Made in India": Feature6,
    "Free shipping": Feature4,
    "No Risk": Feature5,
    "GMO free": Feature6,
  };
  const isDeskopScreen = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: isDeskopScreen ? "auto" : "0",
          marginTop: "-15vh",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            width: isDeskopScreen ? "80vw" : "100%",
            height: isDeskopScreen ? "auto" : "100%",
            marginBottom: "10vh",
            backgroundColor: "#103f4e",
            borderRadius: "10px",
          }}
        >
          <Grid container>
            {Features.map((el, index) => {
              const { Title, DescriptionOne, DescriptionTwo } = el;
              return (
                <Grid key={index} size={{ md: 4, sm: 4, xs: 12, xl: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      padding: "4vh",
                    }}
                  >
                    <Stack direction="column">
                      <Box>
                        <Image
                          src={listFeatureImage[Title]}
                          alt={Title}
                          style={{
                            objectFit: "fill",
                          }}
                          loading="lazy"
                          placeholder="blur"
                        />
                      </Box>
                      <Box sx={{ color: "#ffffff" }}>
                        <Typography variant="h6"> {Title}</Typography>
                      </Box>
                      <Box sx={{ color: "#c4d2d6" }}>
                        <Typography variant="caption">
                          {" "}
                          {DescriptionOne}
                        </Typography>
                      </Box>
                      <Box sx={{ color: "#c4d2d6" }}>
                        <Typography variant="caption">
                          {" "}
                          {DescriptionTwo}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
