import { Box, Button, Typography } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      sx={{
        marginTop: 4,
        marginBottom: 4,
      }}
    >
      <Button
        variant="contained"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        sx={{
          textTransform: "none",
        }}
      >
        Назад
      </Button>
      <Typography variant="body1">
        {currentPage} / {totalPages}
      </Typography>
      <Button
        variant="contained"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        sx={{
          textTransform: "none",
        }}
      >
        Вперед
      </Button>
    </Box>
  );
};
