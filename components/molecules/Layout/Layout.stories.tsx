import React, { ReactNode, useState } from 'react';
import type { Meta } from '@storybook/react';
import { Layout } from './Layout';
import { BarChart, Bell, Database, FileText, Home, LaptopIcon, Menu, Settings, User, UserRound } from 'lucide-react';
import { MenuItem } from './Sidebar';
import { Row } from '../Grid/Row';
import { Col } from '../Grid/Col';
import Button from '@/components/atoms/Button';

const { Header, Footer, Sidebar, Content } = Layout;

const meta: Meta<typeof Layout> = {
  title: 'Molecules/Layout',
  tags: ['autodocs'],
  component: Layout,
};
export default meta;





export const BasicLayout = () => {
  const headerStyle = 'text-white text-center h-16 leading-[64px] bg-blue-500';
  const contentStyle = 'text-white text-center min-h-[120px] leading-[120px] bg-blue-800';
  const sidebarStyle = 'text-white text-center leading-[120px] bg-blue-600 h-full';
  const footerStyle = 'text-white text-center h-12 leading-[48px] bg-blue-500';

  const layoutStyle = 'rounded-lg overflow-hidden w-[calc(50%-8px)] max-w-[calc(50%-8px)]';

  return (
    <div className="flex flex-wrap gap-4">
      {/* Basic */}
      <Layout className={layoutStyle}>
        <Header className={headerStyle}>Header</Header>
        <Content className={contentStyle}>Content</Content>
        <Footer className={footerStyle}>Footer</Footer>
      </Layout>

      {/* Sidebar left */}
      <Layout className={layoutStyle}>
        <Header className={headerStyle}>Header</Header>
        <Row>
          <Col span={6}><Sidebar className={sidebarStyle} >Sidebar</Sidebar></Col>
          <Col span={18}><Content className={contentStyle}>Content</Content></Col>
        </Row>
        <Footer className={footerStyle}>Footer</Footer>
      </Layout>

      {/* Sidebar right */}
      <Layout className={layoutStyle}>
        <Header className={headerStyle}>Header</Header>
        <Row>
          <Col span={18}><Sidebar className={sidebarStyle} style={{ width: '100%' }}>Sidebar</Sidebar></Col>
          <Col span={6}><Content className={contentStyle}>Content</Content></Col>
        </Row>
        <Footer className={footerStyle}>Footer</Footer>
      </Layout>

      {/* Sidebar outside */}
      <Row className={`flex ${layoutStyle}`}>
        <Col span={6}>
          <Sidebar className={sidebarStyle}>
            Sidebar
          </Sidebar>
        </Col>
        <Col span={18}>
          <Layout className="flex-1 overflow-hidden w-full">
            <Header className={headerStyle}>Header</Header>
            <Content className={contentStyle}>Content</Content>
            <Footer className={footerStyle}>Footer</Footer>
          </Layout>
        </Col>
      </Row>
    </div>
  );
};

export const HeaderContentFooter = () => {
  return (
    <Layout className="min-h-screen border shadow flex flex-col">
      <Header className="bg-gray-800 text-white flex items-center px-6 h-16">
        <div className="text-xl font-bold mr-6">Logo</div>
        <ul className="flex space-x-4 flex-1 min-w-0 overflow-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="hover:underline cursor-pointer">
              nav {index + 1}
            </li>
          ))}
        </ul>
      </Header>

      <Content className="px-12 py-6 bg-gray-100 flex-1 flex flex-col">
        <div className="text-sm text-gray-600 mb-4">Home / List / App</div>
        <div className="bg-white flex-1 p-6 rounded-lg shadow">
          Content
        </div>
      </Content>

      <Footer className="text-center text-gray-500 text-sm py-4 h-12">
        Footer ©{new Date().getFullYear()} Created by Van Loi
      </Footer>
    </Layout>
  );
};

export const SidebarWithToggle = () => {
  const [collapsed, setCollapsed] = useState(false);
  const menuItems: MenuItem[] = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: <Home className="w-4 h-4" />,
    },
    {
      key: 'projects',
      label: 'Projects',
      icon: <FileText className="w-4 h-4" />,
      children: [
        { key: 'project1', label: 'Website Redesign', icon: <BarChart className="w-4 h-4" /> },
        { key: 'project2', label: 'Mobile App', icon: <Database className="w-4 h-4" /> },
        { key: 'project3', label: 'API Development', icon: <Settings className="w-4 h-4" /> },
      ],
    },
    {
      key: 'users',
      label: 'Users',
      icon: <User className="w-4 h-4" />,
      children: [
        { key: 'all-users', label: 'All Users' },
        { key: 'active-users', label: 'Active Users' },
        { key: 'inactive-users', label: 'Inactive Users' },
      ],
    },
    {
      key: 'analytics',
      label: 'Analytics',
      icon: <BarChart className="w-4 h-4" />,
      children: [
        { key: 'reports', label: 'Reports' },
        { key: 'charts', label: 'Charts' },
      ],
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={collapsed}
        onCollapse={(c) => setCollapsed(c)}
        className="bg-gray-800 text-white"
        width={200}
        collapsedWidth={80}
        menu={menuItems}
      />
      <div className="flex flex-col flex-1 min-h-screen">
        <Header className="flex items-center h-16 px-4 border-b bg-white">
          <Button
            icon={<Menu className="w-5 h-5" />}
            type="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="w-10 h-10 p-0"
          >
          </Button>
          <h1 className="ml-4 text-lg font-semibold">Header</h1>
        </Header>
        <Content className="flex-1 p-6 bg-gray-50">
          <div className="bg-white p-6 rounded-lg shadow">Content</div>
        </Content>
      </div>
    </div>
  );
};





export const FixedHeaderLayout = () => {
  const [selectedKey, setSelectedKey] = useState("2");
  const menuItems = [
    { key: "1", label: "nav 1" },
    { key: "2", label: "nav 2" },
    { key: "3", label: "nav 3" },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <Header className="sticky top-0 z-50 bg-gray-800 text-white h-16 flex items-center px-6 shadow">
        <div className="mr-8 font-semibold text-lg">MyLogo</div>
        <nav className="flex space-x-6">
          {menuItems.map((item) => (
            <div
              key={item.key}
              className={`cursor-pointer ${selectedKey === item.key
                ? "border-b-2 border-white text-white font-medium"
                : "text-gray-300 hover:text-white"
                }`}
              onClick={() => setSelectedKey(item.key)}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </Header>

      {/* Content Area */}
      <Content className="flex-1 px-12 py-6 bg-gray-50">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home / List / <span className="text-gray-800 font-medium">App</span>
        </div>

        {/* Main box */}
        <div className="bg-white p-6 rounded-lg shadow min-h-[200px] ">
          Content.
          {Array.from({ length: 100 }).map((_, idx) => (
            <p key={idx}>This is line {idx + 1}</p>
          ))}
        </div>
      </Content>

      {/* Footer */}
      <Footer className="text-center py-4 text-gray-500 border-t">
        Footer ©{new Date().getFullYear()} Created by Van Loi
      </Footer>
    </div>
  );
};
