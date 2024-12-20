import Image from "next/image";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BlogImage1 from "../../../public/blog1Image.png";
import BlogImage2 from "../../../public/blog2image.png";
import Content from "../utils/content.json";

export function ImageWithText({ imageList, index }: any) {
  const { Category, Description, IsfullImage, Date } = imageList;

  const CategoryImage: any = {
    "Bottle Pills": BlogImage1,
    Pills: BlogImage2,
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "300px",
        height: IsfullImage ? "150px" : "20px",
        marginTop: index == 4 || index == 6 ? "212px" : "",
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
          height={IsfullImage ? 360 : 160}
          width={280}
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "left",
          lineHeight: "36px",
          backgroundColor: "#003269",
          color: "#fff",
          marginTop: "10px",
          borderRadius: "15px 32px 30px 5px",
          width: "27%",
          marginLeft: "-5px",
        }}
      >
        &nbsp; &nbsp;{Date}
      </Box>

      <Typography
        variant="caption"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          lineHeight: "200px",
        }}
      >
        {Description}
      </Typography>
    </Box>
  );
}

export default function Blogs() {
  const { Blogs } = Content;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "90%" }}>
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
  );
}
