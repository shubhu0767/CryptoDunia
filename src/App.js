import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar, Homepage, Cryptocurrencies, News } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer" level={5} style={{ textAlign: "center" }}>
          <Typography.Title>
            <span style={{ color: "white" }}>
              CryptoDunia <br />
              All rights reserved
            </span>
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
