import { Button, Layout, Modal } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Report } from "./Report";
import { MainMenu } from "../components/MainMenu";
import { BreadcrumbCustom } from "../components/BreadcrumbCustom";
import { useState } from "react";
import { LoginForm } from "../components/LoginForm";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [isLoginFormModalVisible, setIsLoginFormModalVisible] = useState(false);

  const showLoginFormModal = () => {
    setIsLoginFormModalVisible(true);
  };

  const handleOk = () => {
    setIsLoginFormModalVisible(false);
  };

  const handleCancel = () => {
    setIsLoginFormModalVisible(false);
  };

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
              padding: "0px 10px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
              }}
            >
              <Button onClick={showLoginFormModal}>Đăng nhập</Button>
              <LoginForm
                handleOk={handleOk}
                handleCancel={handleCancel}
                isLoginFormModalVisible={isLoginFormModalVisible}
              />
            </div>
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            {/* Breadcrumb Custom */}
            <BreadcrumbCustom />
            {/* Breadcrumb Custom */}

            <div
              className="site-layout-background"
              style={{
                padding: 24,
                height: "100%",
              }}
            >
              <Routes>
                <Route path="/home" element={<Report />} />
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
