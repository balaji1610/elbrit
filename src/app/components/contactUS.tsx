"use client";
import Image, { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import Content from "../utils/content.json";
import PhoneNumber from "../../../public/PhoneNumber.png";
import Email from "../../../public/Email.png";
import OfficeLocation from "../../../public/OfficeLocation.png";
import ElbertFooterLogo from "../../../public/elbrit_footer_logo.png";
import AddLocationIcon from "@mui/icons-material/AddLocation";

export default function ContactUS() {
  const {
    Contact: { ContactUS, Motta, Address },
  } = Content;

  const contactImage: { [key: string]: StaticImageData } = {
    "Phone Number": PhoneNumber,
    "Email Address": Email,
    "Office Location": OfficeLocation,
  };
  const isDeskopScreen = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "auto",
        backgroundColor: "#103f4e",
        marginTop: isDeskopScreen ? "30vh" : "25px",
      }}
    >
      <Box sx={{ width: "90%" }}>
        <Grid container spacing={isDeskopScreen ? 4 : 2}>
          {ContactUS.map((el, index) => {
            const { Source, Communication } = el;
            return (
              <Grid key={index} size={{ md: 4, sm: 4, xs: 12, xl: 4 }}>
                <Box
                  sx={{
                    marginTop: "5vh",
                    backgroundColor: "#1b5d73",
                    border: "1px solid #1b5d73",
                    borderRadius: "12px",
                    padding: "2vh",
                    color: "#ffffff",
                  }}
                >
                  <Stack direction="row">
                    <Box>
                      <Image
                        src={contactImage[Source]}
                        alt={Source}
                        loading="lazy"
                        placeholder="blur"
                      />
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                      <Stack direction="column" spacing={1}>
                        <Box>{Source}</Box>
                        <Box>{Communication}</Box>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            );
          })}

          <Grid size={{ md: 4, sm: 4, xs: 12, xl: 4 }}>
            <Image
              src={ElbertFooterLogo}
              alt="logo"
              style={{ objectFit: "contain" }}
              loading="lazy"
              placeholder="blur"
            />
          </Grid>
          <Grid size={{ md: 4, sm: 4, xs: 12, xl: 4 }}>
            <Typography variant="caption" color="#ffffff">
              {Motta}
            </Typography>
          </Grid>
        </Grid>

        <Grid size={{ md: 6, sm: 6, xs: 12, xl: 6 }}>
          <Stack direction="row" spacing={1} sx={{ marginTop: "15px" }}>
            <Box>
              <AddLocationIcon sx={{ color: "#ffffff" }} />
            </Box>
            <Box>
              <Typography variant="caption" color="#ffffff">
                {Address}
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Box>
    </Box>
  );
}
