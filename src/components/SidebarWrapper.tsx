import Sidebar, { SidebarItem } from './Sidebar'
import { BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle } from 'lucide-react'

const SidebarWrapper = () => {
    return (
        <Sidebar>
            <SidebarItem icon={<LayoutDashboard size={20} />} text={'Dashboard'} href="" alert />
            <SidebarItem icon={<BarChart3 size={20} />} text={'Statistics'} href="" active />
            <SidebarItem icon={<UserCircle size={20} />} text={'Users'} href="" />
            <SidebarItem icon={<Boxes size={20} />} text={'Inventory'} href="" />
            <SidebarItem icon={<Package size={20} />} text={'Orders'} href="" alert />
            <SidebarItem icon={<Receipt size={20} />} text={'Billings'} href="" />
            <hr className='my-3' />
            <SidebarItem icon={<Settings size={20} />} text={'Settings'}  />
            <SidebarItem icon={<LifeBuoy size={20} />} text={'Help'} href="https://google.com" />
        </Sidebar> 
    )
}

export default SidebarWrapper