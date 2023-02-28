import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const FormPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Stars of Tomorrow
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        textAlign="center"
      >
        <Typography variant="h5" sx={{ mb: "1rem" }}>
          Welcome to Stars of Tomorrow, Lets Scout!
        </Typography>
        <Form />
      </Box>
    </>
  );
};

export default FormPage;