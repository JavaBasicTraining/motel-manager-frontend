import { Button, Layout } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Report } from "./Report";
import { MainMenu } from "../components/MainMenu";
import { BreadcrumbCustom } from "../components/BreadcrumbCustom";
import { useEffect, useState } from "react";
import { LoginForm } from "../components/LoginForm";
import AuthService from "../api/auth/AuthService";
import { UserInfo } from "../components/UserInfo";
import User from "../interfaces/User";
import confirm from "antd/lib/modal/confirm";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Users } from "./Users";
import { Rooms } from "./Rooms";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [user, setUser] = useState<User>({});
  const [isLoginFormModalVisible, setIsLoginFormModalVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(
    AuthService.getCurrentAuth() ? true : false
  );

  const showDeleteConfirm = () => {
    confirm({
      title: "Xác nhận",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn sẽ muốn thoát ra khỏi hệ thống?",
      okText: "Vâng",
      okType: "danger",
      cancelText: "Quay lại",
      onOk() {
        AuthService.logout();
        setUser({});
        setIsLogin(false);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const showLoginFormModal = () => {
    setIsLoginFormModalVisible(true);
  };

  const handleOk = (values: any) => {
    AuthService.login({
      username: values.username,
      password: values.password,
    }).then((response) => {
      var data = response.data.data;
      if (data.access_token) {
        localStorage.setItem("auth", JSON.stringify(response.data));
        console.log(data);
        setUser(data.user_info);
        setIsLogin(true);
      } else {
        console.log("login fail");
      }
    });
    setIsLoginFormModalVisible(false);
  };

  const handleCancel = () => {
    setIsLoginFormModalVisible(false);
  };

  useEffect(() => {
    setUser(AuthService.getUserInfo());
  }, []);

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
              {!isLogin ? (
                <Button onClick={showLoginFormModal}>Đăng nhập</Button>
              ) : (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <UserInfo
                    email={user?.email}
                    firstName={user?.firstName}
                    lastName={user?.lastName}
                    avatarUrl={user?.avatarUrl}
                  />
                  <Button onClick={showDeleteConfirm}>Đăng xuất</Button>
                </div>
              )}
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
              {!isLogin ? (
                <></>
              ) : (
                <Routes>
                  <Route path="/report/sales" element={<Report />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/rooms" element={<Rooms />} />
                </Routes>
              )}
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
