import React,{useLayoutEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

function SiderMenu(props) {
  const navigate = useNavigate()

  function getItem(label, key,  children, type) {
    return {
      label,
      key,
      children,
      type,
    };
  }

  const Menuitems = [
    getItem('首页', '/home'),
    getItem('用户管理', '/user-manage', [
      getItem('用户列表', '/user-manage/list'),
    ]),
    getItem('权限管理', '/right-manage',  [
      getItem('角色列表', '/right-manage/Role/list'),
      getItem('用户列表', 'right-manage/Right/list'),
    ]),
  ];

  //侧边栏跳转
  const Choose_menu = (e) => {
    navigate(`${e.key}`)
  }

  useLayoutEffect(() => {
    navigate('/home')
  },[])

  return (
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <div className="demo-logo-vertical" >
            <div className='title'>
                谢鹏飞管理系统
            </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/home']}
          items={Menuitems}
          onClick={ Choose_menu }
        />
      </Sider>
  )
}

const mapStateToProps = (state) => ({
  collapsed: state.collapsedReducer
})

export default connect(mapStateToProps)(SiderMenu)