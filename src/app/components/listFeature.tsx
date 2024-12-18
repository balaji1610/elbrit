import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Feature1 from "../../../public/feature01.png";
import Feature2 from "../../../public/feature02.png";
import Feature3 from "../../../public/feature03.png";
import Feature4 from "../../../public/feature04.png";
import Feature5 from "../../../public/feature05.png";
import Feature6 from "../../../public/feature06.png";
import Image, { StaticImageData } from "next/image";
import Content from "../utils/content.json";
import Typography from "@mui/material/Typography";
export default function ListFeature() {
  const { Features } = Content;

  const FeaturePartOne = Features.slice(0, 3);
  const FeaturePartTwo = Features.slice(3, 6);

  const listFeatureImage: { [key: string]: StaticImageData } = {
    "clinically studied": Feature1,
    "Vegetarian Friendly": Feature2,
    "Made in India": Feature3,
    "Free shipping": Feature4,
    "No Risk": Feature5,
    "GMO free": Feature6,
  };
  return (
    <>
      <Grid container>
        <Grid size={{ md: 2, sm: 2, xs: 12 }}></Grid>

        {FeaturePartOne.map((el) => {
          const { Title, DescriptionOne, DescriptionTwo } = el;
          return (
            <Grid
              size={{ md: 3, sm: 3, xs: 12 }}
              sx={{
                backgroundColor: "#103f4e",
                color: "#fff",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                {" "}
                <Stack direction="column">
                  <Box>
                    <Image
                      src={listFeatureImage[Title]}
                      alt="Probiotics"
                      style={{
                        objectFit: "fill",
                      }}
                    />
                  </Box>
                  <Box component="h3">{Title}</Box>
                  <Box component="h6" sx={{ color: "#c4d2d6" }}>
                    {DescriptionOne}
                  </Box>
                  <Box component="h6" sx={{ color: "#c4d2d6" }}>
                    {DescriptionTwo}
                  </Box>
                </Stack>
              </Box>
            </Grid>
          );
        })}

        <Grid size={{ md: 2, sm: 2, xs: 12 }}></Grid>
      </Grid>
      <Grid container>
        <Grid size={{ md: 2, sm: 2, xs: 12 }}></Grid>

        {FeaturePartTwo.map((el) => {
          const { Title, DescriptionOne, DescriptionTwo } = el;
          return (
            <Grid
              size={{ md: 3, sm: 3, xs: 12 }}
              sx={{ backgroundColor: "#103f4e", color: "#fff" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <Stack direction="column">
                  <Box>
                    <Image
                      src={listFeatureImage[Title]}
                      alt="Probiotics"
                      style={{
                        objectFit: "fill",
                      }}
                    />
                  </Box>
                  <Box component="h3">{Title}</Box>
                  <Box component="h6" sx={{ color: "#c4d2d6" }}>
                    {DescriptionOne}
                  </Box>
                  <Box component="h6" sx={{ color: "#c4d2d6" }}>
                    {DescriptionTwo}
                  </Box>
                </Stack>
              </Box>
            </Grid>
          );
        })}

        <Grid size={{ md: 2, sm: 2, xs: 12 }}></Grid>
      </Grid>
    </>
  );
}
