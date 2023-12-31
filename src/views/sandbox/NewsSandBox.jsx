import React from 'react'
import {Outlet  } from 'react-router-dom'
import SiderMenu from '../../components/layout/Sider.jsx'
import TopHeader from '../../components/layout/topHeader.jsx'
import './layout.css'

import { Layout} from 'antd';
const { Content } = Layout;

export default function NewsSandBox() {
  return (
    <Layout>
      <SiderMenu></SiderMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
