export interface ModalProps {
  title: React.ReactNode
  content: React.ReactNode
  onOk: () => void
  onCancel: () => void
  showModal: boolean
}
