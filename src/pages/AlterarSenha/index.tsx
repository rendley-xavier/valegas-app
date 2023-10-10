import React, { useCallback, useState } from 'react'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  LockOutlined,
  MinusCircleOutlined
} from '@ant-design/icons'
import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd'
import { toast } from 'react-toastify'

interface AlterarSenhaProps {
  onClose: () => void
  visible: boolean
}

const AlterarSenha: React.FC<AlterarSenhaProps> = ({ onClose, visible }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const [lengthPass, setLengthPass] = useState(false)
  const [upperCasePass, setUpperCasePass] = useState(false)
  const [lowerCasePass, setLowerCasePass] = useState(false)
  const [specialCharPass, setSpecialCharPass] = useState(false)
  const [numberPass, setNumberPass] = useState(false)

  const handleCloseModal = useCallback(() => {
    onClose()
  }, [onClose])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = async () => {
    setLoading(true)
    try {
      const senha = {
        novaSenha: newPass,
        senhaAtual: oldPass
      }
      console.log(senha)
      // await funcionarioService.newPass(funcionario?.codigo_funcionario, senha)
      handleCloseModal()
      toast.success('Senha alterada com sucesso!')
    } catch (error) {
      if (error instanceof Error) {
        handleCloseModal()
        toast.error('Erro ao alterar senha! ' + error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const onCheckPass = useCallback((pass: string) => {
    setNewPass(pass)

    const isLengthValid = /(?=.{8,})/.test(pass)
    const hasUpperCase = /(?=.*[A-Z])/.test(pass)
    const hasLowerCase = /(?=.*[a-z])/.test(pass)
    const hasSpecialChar = /([^A-Za-z0-9])/.test(pass)
    const hasNumber = /(?=.*[0-9])/.test(pass)

    setLengthPass(isLengthValid)
    setUpperCasePass(hasUpperCase)
    setLowerCasePass(hasLowerCase)
    setSpecialCharPass(hasSpecialChar)
    setNumberPass(hasNumber)
  }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const CheckItem = ({ status, text }: { status: boolean; text: string }) => (
    <Col
      style={{
        color: status !== null ? (status ? 'green' : 'red') : 'black'
      }}
    >
      {status !== null ? (
        status ? (
          <CheckCircleOutlined />
        ) : (
          <CloseCircleOutlined />
        )
      ) : (
        <MinusCircleOutlined />
      )}{' '}
      {text}
    </Col>
  )

  return (
    <Drawer
      title={<strong style={{ color: '#fff' }}>Alterar senha</strong>}
      onClose={onClose}
      visible={visible}
      placement='left'
      closable={false}
      extra={
        <Space>
          <CloseOutlined
            onClick={handleCloseModal}
            style={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#fff'
            }}
          />
        </Space>
      }
    >
      <Form
        form={form}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onFinish={handleSubmit}
        name='changePass'
        layout='vertical'
      >
        <Row>
          <Col span={24}>
            <Form.Item
              name='oldPassword'
              label={<span>Senha atual:</span>}
              rules={[{ required: true, message: 'Este campo é obrigatório!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder='digite aqui a sua senha'
                value={oldPass}
                onChange={(e) => {
                  setOldPass(e.target.value)
                }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name='NewPassword'
              label={<span>Nova senha:</span>}
              rules={[{ required: true, message: 'Este campo é obrigatório!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder='digite aqui a sua senha'
                value={newPass}
                onChange={(e) => {
                  onCheckPass(e.target.value)
                }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name='ConfirmPassword'
              label={<span>Confirme a nova senha:</span>}
              dependencies={['NewPassword']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Este campo é obrigatório!'
                },
                ({ getFieldValue }) => ({
                  async validator(_, value) {
                    if (
                      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                      !value ||
                      (getFieldValue('NewPassword') as string) === value
                    ) {
                      await Promise.resolve()
                      return
                    }
                    return await Promise.reject(
                      new Error(
                        'A senha não é a mesma informada em *Nova Senha!'
                      )
                    )
                  }
                })
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder='digite aqui a sua senha'
                value={confirmPass}
                onChange={(e) => {
                  setConfirmPass(e.target.value)
                }}
              />
            </Form.Item>
          </Col>
          <Col style={{ padding: '1rem 0' }}>
            <Col style={{ fontSize: '0.75rem' }}>
              <CheckItem
                status={lengthPass}
                text='A senha deve ter no mínimo 8 caracteres.'
              />

              <CheckItem
                status={upperCasePass}
                text='A senha deve ter pelo menos uma letra maiúscula.'
              />

              <CheckItem
                status={lowerCasePass}
                text='A senha deve ter pelo menos uma letra minúscula.'
              />

              <CheckItem
                status={specialCharPass}
                text='A senha deve ter pelo menos um símbolo. Ex: * ! # $ % & + - / : ; = ? @ \ |'
              />

              <CheckItem
                status={numberPass}
                text='A senha deve ter pelo menos um número.'
              />
            </Col>
          </Col>
        </Row>
        <Row justify='end'>
          <Col style={{ padding: '1rem 0' }}>
            <Button
              htmlType='submit'
              type='primary'
              loading={loading}
              style={{
                height: '35px',
                background: 'var(--main-color)',
                color: '#fff',
                border: 'none'
              }}
            >
              Atualizar senha
            </Button>
          </Col>
        </Row>
      </Form>
    </Drawer>
  )
}

export default AlterarSenha
