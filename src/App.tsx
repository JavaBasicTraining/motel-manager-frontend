import "./index.css";

import { Breadcrumb, Layout, Menu, MenuProps } from "antd";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  getItem(<Link to={"/home"}>Thống kê</Link>, "1", <PieChartOutlined />),
  getItem(<Link to={"/rooms"}>Phòng</Link>, "2", <PieChartOutlined />),
  getItem(<Link to={"/user"}>Người dân</Link>, "3", <UserOutlined />),
];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Router>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
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
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Thống kê</Breadcrumb.Item>
            </Breadcrumb>
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
