import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants";
import MainContainer from "../components/organisms/MainContainer";
import HomePage from "../components/pages/HomePage";
import FeaturePage from "../components/pages/FeaturePage";
import TablePage from "../components/pages/TablesPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <MainContainer>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.FEATURES} element={<FeaturePage />} />
          <Route path={ROUTES.TABLE_SETUP} element={<TablePage />} />
        </Routes>
      </MainContainer>
    </Router>
  );
};

export default AppRouter;
