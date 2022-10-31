import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import logo from "assets/img/hubLogo.svg";
import icon from "assets/img/Rectangle.svg";

export const LoggingScreen: React.FC = () => {
  return (
    <Box>
      <Container
        sx={{
          padding: "77px 0px 110px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "#414141",
          fontFamily: "Inter",
        }}
      >
        <img src={logo} />
        <Box>
          <Typography
            mt="95px"
            variant="h1"
            sx={{
              fontSize: "43px",
              lineHeight: "52.04px",
              fontWeight: "700",
            }}
          >
            Request for OAuth Integration:
          </Typography>
          <Typography
            variant="h3"
            mt="35px"
            sx={{
              fontSize: "24px",
              lineHeight: "29px",
              fontWeight: "400",
              color: "#A8A8A8",
            }}
          >
            <Typography
              component={"span"}
              variant="inherit"
              ml="27px"
              sx={{ fontWeight: "700", color: "#414141" }}
            >
              Application{" "}
            </Typography>
            will send access request for:
          </Typography>
          <Box
            ml="27px"
            mt="35px"
            mb="54px"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img src={icon} />
            <Box ml="12px" sx={{ fontSize: "18px", lineHeight: "22px" }}>
              <Typography sx={{ fontWeight: "700" }}>
                User and Account Information
              </Typography>
              <Typography sx={{ fontWeight: "400", color: "#A8A8A8" }}>
                This includes access to read information about the user and
                account
              </Typography>
            </Box>
          </Box>
          <Button
            sx={{
              backgroundColor: "#EF8162",
              padding: "15px 28px",
              color: "#FFF",
              textTransform: "none",
              textDecoration: "none",
              fontSize: "16px",
              lineHeight: "19px",
              fontWeight: "700",

              "&:hover": {
                backgroundColor: "#ee8d73",
                cursor: "pointer",
              },
            }}
          >
            Grant access
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
