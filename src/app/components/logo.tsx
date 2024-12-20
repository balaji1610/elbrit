import Box from "@mui/material/Box";
import Image from "next/image";
import ElbertLogo from "../../../public/elbrit_logo.png";
import Grid from "@mui/material/Grid2";
export default function Logo() {
  return (
    <>
      <Grid container>
        <Grid size={{ md: 6, sm: 6, xs: 12 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "2vh",
            }}
          >
            <Image
              src={ElbertLogo}
              alt="logo"
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
