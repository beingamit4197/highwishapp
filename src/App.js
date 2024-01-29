import "./App.css";
import CostCalculator from "./components/CostCalculator/CostCalculator";
import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WhyUs from "./components/Nav/WhyUs";

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
]);

function App() {
  return (
    <>
      <Nav />
      {/* <Routes>
        <div>
          <Route path="/cost_calculator" component={CostCalculator} />
          <Route path="/" component={LandingPage} />
        </div>
      </Routes> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
