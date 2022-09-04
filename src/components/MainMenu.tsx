import { Layout, Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  getItem(<Link to={"/report"}>Thống kê</Link>, "1", <PieChartOutlined />, [
    getItem(
      <Link to={"/report/sales"}>Doanh số</Link>,
      "1.1",
      <PieChartOutlined />
    ),
  ]),
  getItem(<Link to={"/rooms"}>Phòng</Link>, "2", <PieChartOutlined />),
  getItem(<Link to={"/users"}>Người dân</Link>, "3", <UserOutlined />),
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

export const MainMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
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
  );
};
