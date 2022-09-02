import "./index.css";

import { Breadcrumb, Layout } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import { MainMenu } from "./components/MainMenu";
import { BreadcrumbCustom } from "./components/BreadcrumbCustom";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >

        {/* Main menu */}
        <MainMenu />
        {/* Main menu */}

        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <BreadcrumbCustom/>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Routes>
                <Route path="/home" element={<Home />} />
              </Routes>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Quản lý nhà trọ ©2022
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
