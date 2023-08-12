import React,{useState} from 'react'
import { Layout, Button, Dropdown, Space,Avatar  } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  UserOutlined, 
} from '@ant-design/icons';
const { Header} = Layout;

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);

  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  } 

  //下拉数据
  const items = [
    {
      label: (
        <div>个人中心</div>
      ),
      key: '0',
    },
    {
      label: (
        <div>退出</div>
      ),
      key: '1',
    },
  ];

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
      }}
    >
    <div style={{display:'flex',justifyContent:'space-between',padding:'0px 10px 0px 0px'}}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined  onClick={() => changeCollapsed() }/> : <MenuFoldOutlined onClick={() => changeCollapsed() }/>}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
      <div>
        <span style={{paddingRight:"15px"}}>欢迎谢鹏飞回来</span>
        <Dropdown
            arrow={false}
            menu={{
              items
            }}
        >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar size="large" icon={ <UserOutlined />} />
                <DownOutlined />
              </Space>
            </a>
        </Dropdown>
      </div>
    </div>
  </Header>
  )
}
