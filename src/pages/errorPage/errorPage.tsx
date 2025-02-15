import { Button, Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/list");
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          К сожалению, страница не найдена
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          Возможно, страница была удалена или перемещена. Попробуйте вернуться
          на главную страницу.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoBack}
          sx={{ mt: 3 }}
        >
          Вернуться на главную страницу
        </Button>
      </Box>
    </Container>
  );
};
