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
import useMediaQuery from "@mui/material/useMediaQuery";
import Content from "../utils/content.json";
import Typography from "@mui/material/Typography";
export default function ListFeature() {
  const { Features } = Content;

  const listFeatureImage: { [key: string]: StaticImageData } = {
    "clinically studied": Feature1,
    "Vegetarian Friendly": Feature2,
    "Made in India": Feature3,
    "Free shipping": Feature4,
    "No Risk": Feature5,
    "GMO free": Feature6,
  };
  const isDeskopScreen = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: isDeskopScreen ? "70vw" : "100%",
            height: isDeskopScreen ? "60vh" : "100%",
            backgroundColor: "#103f4e",
            borderRadius: "10px",
          }}
        >
          <Grid container>
            {Features.map((el, index) => {
              const { Title, DescriptionOne, DescriptionTwo } = el;
              return (
                <Grid key={index} size={{ md: 4, sm: 4, xs: 12 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: "-54px",
                      marginBottom: "100px",
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
                        />
                      </Box>
                      <Box component="h3" sx={{ color: "#fff" }}>
                        {Title}
                      </Box>
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
          </Grid>
        </Box>
      </Box>
    </>
  );
}
