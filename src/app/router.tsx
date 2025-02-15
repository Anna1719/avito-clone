import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "@/layouts/mainLayout";
import { ROUTES } from "./routes";
import { ErrorPage, FormPage, ItemPage, SearchPage } from "@/pages";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Navigate to="/list" />,
        index: true,
      },
      {
        path: ROUTES.LIST,
        element: <SearchPage />,
      },
      {
        path: ROUTES.FORM,
        element: <FormPage />,
      },
      {
        path: ROUTES.ITEM,
        element: <ItemPage />,
      },
      {
        path: ROUTES.EDIT,
        element: <FormPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
