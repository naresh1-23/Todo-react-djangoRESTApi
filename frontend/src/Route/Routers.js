import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ViewSingle from "../Pages/Viewsingle";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/view/:id" Component={ViewSingle} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
