import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { Link, useSearchParams } from "react-router-dom";
import { SearchBar } from "@/components/searchBar";
import { AdvertisementList } from "@/components/advertismentList";
import { Pagination } from "@/components/pagination";
import { useAdvertisements } from "@/hooks/useAdvertismentsResult";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { ROUTES } from "@/app/routes";

const ITEMS_PER_PAGE = 5;

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get("query") || "";
  const urlPage = searchParams.get("page") || "1";
  const urlCategory = searchParams.get("category") || "";

  const [query, setQuery] = useState(urlQuery);
  const [page, setPage] = useState(Number(urlPage));
  const [category, setCategory] = useState(urlCategory);

  const debouncedQuery = useDebounce(query, 300);

  const { data: allAdvertisements, isLoading, error } = useAdvertisements();

  const filteredAdvertisements = allAdvertisements
    ? allAdvertisements.filter((ad) => {
        const matchesQuery = ad.name
          .toLowerCase()
          .includes(debouncedQuery.toLowerCase());
        const matchesCategory = category ? ad.type === category : true;
        return matchesQuery && matchesCategory;
      })
    : [];

  const totalPages = Math.ceil(filteredAdvertisements.length / ITEMS_PER_PAGE);

  const paginatedAdvertisements = filteredAdvertisements.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value.trim());
    setPage(1);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setCategory(value);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const is404Error = error instanceof Error && error.message.includes("404");

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    if (page > 1) params.set("page", page.toString());
    if (category) params.set("category", category);
    setSearchParams(params);
  }, [query, page, category, setSearchParams]);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <SearchBar onChange={handleInputChange} value={query} />
      </Box>

      <Box sx={{ mb: 4 }}>
        <FormControl fullWidth>
          <InputLabel id="category-label">Категория</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={category}
            label="Категория"
            onChange={handleCategoryChange}
          >
            <MenuItem value="">Все категории</MenuItem>
            <MenuItem value="Недвижимость">Недвижимость</MenuItem>
            <MenuItem value="Авто">Авто</MenuItem>
            <MenuItem value="Услуги">Услуги</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {filteredAdvertisements.length > 0 && (
        <Typography variant="body1" sx={{ mb: 2 }}>
          Найдено объявлений: {filteredAdvertisements.length}
        </Typography>
      )}

      <Link to={ROUTES.FORM}>
        <Button variant="outlined" fullWidth sx={{ marginBottom: 4 }}>
          Создать объявление
        </Button>
      </Link>

      <Box>
        {isLoading && (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        )}
        {is404Error && (
          <Typography
            variant="body1"
            color="error"
            sx={{ textAlign: "center" }}
          >
            Ничего не найдено
          </Typography>
        )}
        {!is404Error && error && (
          <Typography
            variant="body1"
            color="error"
            sx={{ textAlign: "center" }}
          >
            Неожиданная ошибка
          </Typography>
        )}
        {filteredAdvertisements.length === 0 && !isLoading && !error && (
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Объявления не найдены
          </Typography>
        )}
        {paginatedAdvertisements.length > 0 && (
          <>
            <AdvertisementList advertisements={paginatedAdvertisements} />
            {totalPages > 1 && (
              <Box display="flex" justifyContent="center" mt={4}>
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </Box>
            )}
          </>
        )}
      </Box>
    </Container>
  );
};
