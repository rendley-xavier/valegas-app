export interface MenuItem {
  key: React.Key
  icon?: React.ReactNode
  label: React.ReactNode
  children?: MenuItem[]
}
