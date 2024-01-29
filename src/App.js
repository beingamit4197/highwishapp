import "./App.css";
import CostCalculator from "./components/CostCalculator/CostCalculator";
import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/cost_calculator",
    element: <CostCalculator />,
  },
  {
    path: "/",
    element: <LandingPage />,
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
