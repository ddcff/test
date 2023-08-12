import React from 'react'
import { HashRouter,Routes, Route , Navigate ,Outlet  } from 'react-router-dom'
import Login from '../views/login/login.jsx'
import NewsSandBox from '../views/sandbox/NewsSandBox.jsx'
import Home from '../views/sandbox/home/home.jsx'
import RightList from '../views/sandbox/right-manage/rightList.jsx'
import RoleList from '../views/sandbox/right-manage/roleList.jsx'
import Userlist from '../views/sandbox/user-manage/userlist.jsx'
import NoPermission from '../components//Nodata'

export default function Index() {
  return (
    <HashRouter>
       <Routes>
            <Route path="/login" element={<Login />} />
            <Route exact  element={ <PrivateRoute  /> }>
              <Route  path="/" element={<NewsSandBox />}>
                 <Route path='home' element={<Home />}/>
                 <Route path='user-manage/list' element={<Userlist />}/>
                 <Route path='right-manage/Role/list' element={<RoleList />}/>
                 <Route path='right-manage/Right/list' element={<RightList />}/>
                 {/* 重定向到home */}
                 <Route path='/' element={<Navigate to="/home" exact replace/>}/>   
                 {/* 无页面匹配404 */}
                 <Route path='*' element={ <NoPermission/> }/>   
              </Route>
            </Route>
      </Routes>
    </HashRouter>
  )
}



//路由拦截函数
function PrivateRoute() {
      //这里可以根据具体需求判断用户是否登录
    const isAuthenticated = true;
     return (
        <>
          { isAuthenticated ? <Outlet  /> : <Navigate to="/login" replace/>}
        </>
     );
}


