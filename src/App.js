import "./App.css";
import CostCalculator from "./components/CostCalculator/CostCalculator";
import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WhyUs from "./components/Nav/WhyUs";
import ContactUs from "./components/ContactUs";
import { useEffect } from "react";
import Services from "./components/Nav/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/cost_calculator",
    element: <CostCalculator />,
  },
  {
    path: "/why_us",
    element: <WhyUs />,
  },
  {
    path: "/contact_us",
    element: <ContactUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
