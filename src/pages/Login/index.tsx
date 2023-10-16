import { Button, Col, Form, Input, Layout, Row } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'

const Login: React.FC = () => {
  const onFinish = (values: any): void => {
    // Lógica para lidar com o envio do formulário
    console.log('Valores do formulário:', values)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 500,
          background: '#fff'
        }}
      >
        <Row gutter={16} justify={'center'}>
          <Col span={12}>
            <div style={{ textAlign: 'center' }}>imagem</div>
          </Col>
          <Col span={12}>
            <div style={{ padding: '20px', background: '#fff' }}>
              <h2>Faça login</h2>
              <Form name='login' onFinish={onFinish}>
                <Form.Item
                  name='username'
                  label='Nome de usuário'
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, insira seu nome de usuário!'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name='password'
                  label='Senha'
                  rules={[
                    { required: true, message: 'Por favor, insira sua senha!' }
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item>
                  <Button type='primary' htmlType='submit'>
                    Entrar
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Login
