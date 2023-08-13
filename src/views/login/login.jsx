import React from 'react'
import {useNavigate} from 'react-router-dom'
import Particless from '../../components/particles'
import { Button, Checkbox, Form, Input } from 'antd';
import './login.scss'

export default function Login(props) {
  const navigate = useNavigate()

  const onFinish = (values) => {
    localStorage.setItem('token',values.username)
    navigate('/home')
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='contione'>
      <Particless></Particless>
      <div className='formContainer'>
        <div className='login-title'>谢鹏飞管理系统</div>
        <Form
            name="basic"
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
            className='aaa'
              label={ <span style={{color:'white'}}>用户名</span> }
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item
              label={ <span style={{color:'white'}}>密码</span> }
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder="请输入密码"/>
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 5,
                span: 16,
              }}
            >
              <Checkbox className='remember'>记住密码</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 5,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
        </Form>
      </div>
    </div>
  )
}
