import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContainer from "../components/organisms/MainContainer";
import HomePage from "../components/pages/HomePage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <MainContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainContainer>
    </Router>
  );
};

export default AppRouter;
