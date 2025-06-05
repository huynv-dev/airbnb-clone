import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

const { Header, Footer, Sidebar, Content } = Layout;

describe('Layout Component', () => {
  it('renders Header, Content, Footer correctly', () => {
    render(
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('renders Sidebar when included', () => {
    render(
      <Layout>
        <Sidebar>Sidebar</Sidebar>
        <Content>Content</Content>
      </Layout>
    );

    expect(screen.getByText('Sidebar')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies custom className to Layout and children', () => {
    render(
      <Layout className="layout-wrapper">
        <Header className="header-style">Header</Header>
        <Content className="content-style">Content</Content>
      </Layout>
    );

    expect(screen.getByText('Header').className).toContain('header-style');
    expect(screen.getByText('Content').className).toContain('content-style');
  });

  test('renders collapsed Sidebar if prop is set', () => {
    render(
      <Layout>
        <Sidebar collapsed collapsedWidth={80} data-testid="sidebar">
          Sidebar
        </Sidebar>
        <Content>Content</Content>
      </Layout>
    );

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveStyle('width: 80px');
  });
});
