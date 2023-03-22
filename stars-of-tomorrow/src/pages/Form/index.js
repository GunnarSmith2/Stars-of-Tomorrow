import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import NavBarTemp from "../../components/NavBar/NavBarTemp";

const FormPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <Box>
        <NavBarTemp />
      </Box>
      {/* <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        paddingTop="1rem"
        textAlign="center"
      >
        <Typography
          fontFamily="Oswald, sans-serif"
          fontWeight="bold"
          fontSize="32px"
          paddingTop="1rem"
          style={{
            background:
              "-webkit-linear-gradient(45deg, #f2cd00 30%, #ffffff 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Stars of Tomorrow
        </Typography>
        </Box> */}
      <Box
        width={isNonMobileScreens ? "50%" : "70%"}
        p="2rem"
        m="6rem auto"
        borderRadius="1.5rem"
        backgroundColor="white"
        textAlign="center"
      >
        <Typography
          variant="h5"
          fontFamily="Oswald, sans-serif"
          sx={{ mb: "1rem" }}
        >
          Welcome to Stars of Tomorrow, Lets Scout!
        </Typography>
        <Form />
      </Box>
    </>
  );
};

export default FormPage;
