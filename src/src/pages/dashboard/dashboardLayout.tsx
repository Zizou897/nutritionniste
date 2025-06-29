import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'


type Props = {
    children: ReactNode
}
const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
