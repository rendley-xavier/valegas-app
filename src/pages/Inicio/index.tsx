import { Button, Divider } from 'antd'
import React, { useState } from 'react'
import Modal from '../../components/Modal'
import Card from '../../components/Card'

const Inicio: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = (): void => {
    setIsModalVisible(true)
  }

  const handleOk = (): void => {
    // Lógica a ser executada quando o botão "Confirmar" é clicado.
    setIsModalVisible(false)
  }

  const handleCancel = (): void => {
    // Lógica a ser executada quando o botão "Cancelar" é clicado.
    setIsModalVisible(false)
  }

  return (
    <div id='sectionMain'>
      <div className='container-section'>
        <h2>PÁGINA INICIAL</h2>
        <Button type='primary' onClick={showModal}>
          Abrir Modal
        </Button>
        <Modal
          title={
            <>
              <strong>Título do Modal</strong>
              <Divider />
            </>
          }
          content='Conteúdo do Modal'
          onOk={handleOk}
          onCancel={handleCancel}
          showModal={isModalVisible}
        />
        <Card
          loading={false}
          title={
            <>
              <strong>Título do Card</strong>
              <Divider />
            </>
          }
          description='Descrição do Card'
        />
      </div>
    </div>
  )
}

export default Inicio
