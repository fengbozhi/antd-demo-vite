import React, { useState } from "react";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Search from "./pages/Search";

const { Sider, Content } = Layout;

const menuItems = [
  {
    key: "search",
    icon: <SearchOutlined />,
    label: <Link to="/search">搜索</Link>,
  },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["search"]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route
              path="*"
              element={<Navigate to="/search" replace={true} />}
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
