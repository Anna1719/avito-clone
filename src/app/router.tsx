import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "@/layouts/mainLayout";
import { ROUTES } from "./routes";
import { ListPage } from "@/pages/listPage";
import { FormPage } from "@/pages/formPage";
import { ItemPage } from "@/pages/itemPage";

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
        element: <ListPage />,
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
        element: <div>404 Not Found</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
