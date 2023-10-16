import React from 'react'
import { Modal as ModalComponent, Button } from 'antd'
import { type ModalProps } from './ModalInteface'

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  onOk,
  onCancel,
  showModal
}) => {
  return (
    <ModalComponent
      title={title}
      open={showModal}
      onOk={onOk}
      onCancel={onCancel}
      centered
      footer={[
        <Button key='cancel' onClick={onCancel}>
          Cancelar
        </Button>,
        <Button key='ok' type='primary' onClick={onOk}>
          Confirmar
        </Button>
      ]}
    >
      {content}
    </ModalComponent>
  )
}

export default Modal
