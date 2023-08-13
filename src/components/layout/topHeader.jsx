import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { collapsed_Change } from '../../redux/actions/collapse'
import { connect } from 'react-redux';
import { Layout, Button, Dropdown, Space,Avatar  } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  UserOutlined, 
} from '@ant-design/icons';
const { Header} = Layout;

function TopHeader(props) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()

  const changeCollapsed = () => {
    setCollapsed((state) => {
      props.collapsed_Change(!state)
      return !state
    })
  } 

  console.log(props);

  const GoOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
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
        <div onClick={GoOut}>退出</div>
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
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
        onClick={() => changeCollapsed() }
      />
      <div>
        <span style={{paddingRight:"15px"}}>欢迎谢鹏飞回来</span>
        <Dropdown
            arrow={false}
            menu={{
              items
            }}
        >
              <Space>
                <Avatar size="large" icon={ <UserOutlined />} />
                <DownOutlined />
              </Space>
        </Dropdown>
      </div>
    </div>
  </Header>
  )
}


const mapStateToProps = (state) => ({
  collapse:state.collapsedReducer
})
const mapDispatchToProps = {
  collapsed_Change
}

export default connect(mapStateToProps,mapDispatchToProps)(TopHeader)