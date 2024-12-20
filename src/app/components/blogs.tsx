import Image from "next/image";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BlogImage1 from "../../../public/blog1Image.png";
import BlogImage2 from "../../../public/blog2image.png";
import Content from "../utils/content.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";

export function ImageWithText({ imageList, index }: any) {
  const { Category, Description, IsfullImage, Date } = imageList;

  const CategoryImage: any = {
    "Bottle Pills": BlogImage1,
    Pills: BlogImage2,
  };
  const isDeskopScreen = useMediaQuery("(min-width:600px)");
  return (
    <Box
      sx={{
        position: "relative",
        width: "300px",
        height: isDeskopScreen ? (IsfullImage ? "150px" : "20px") : "25vh",
        marginTop: isDeskopScreen
          ? index == 4 || index == 6
            ? "212px"
            : ""
          : "",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Image
          src={CategoryImage[Category]}
          alt={Category}
          height={isDeskopScreen ? (IsfullImage ? 360 : 160) : 180}
          width={280}
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          lineHeight: "36px",
          backgroundColor: "#003269",
          color: "#fff",
          marginTop: "20px",
          borderRadius: "15px 32px 30px 5px",
          width: "27%",
          marginLeft: "-5px",
        }}
      >
        &nbsp; &nbsp;{Date}
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "#ffffff",
          width: "auto",
          fontWeight: "bold",
          marginLeft: "20px",
          marginTop: "10px",
        }}
      >
        <Typography variant="subtitle1">{Description}</Typography>
      </Box>
    </Box>
  );
}

export default function Blogs() {
  const {
    Blogs: { Blogs, TITLE, SUBTITLE },
  } = Content;
  const isDeskopScreen = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Stack direction="column">
          <Box sx={{ color: "#103f4e" }}>
            <Typography align="center">{TITLE}</Typography>
          </Box>
          <Box sx={{ color: "#103f4e" }}>
            {" "}
            <Typography variant="h4">{SUBTITLE}</Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: isDeskopScreen ? "90%" : "70%" }}>
          <Grid container spacing={2}>
            {Blogs.map((item, index) => {
              return (
                <Grid key={index} size={{ md: 3, sm: 3, xs: 12, xl: 3 }}>
                  <ImageWithText imageList={item} index={index} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
