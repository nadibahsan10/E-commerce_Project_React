import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Flash from "./Components/Flash";
import Category from "./Components/Category";
import Best from "./Components/Best";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Flash />
      <Category />
      <Best />
    </>
  );
}
function Test() {
  return <h1>This is tests</h1>;
}
const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/home", Component: Test },
]);

export default function Main() {
  return <RouterProvider router={router} />;
}
