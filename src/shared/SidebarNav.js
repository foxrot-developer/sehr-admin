import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { AiOutlineDashboard, AiOutlineShop, AiOutlineShoppingCart, AiOutlineNotification } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im';
import { MdPeopleOutline, MdCardMembership, MdOutlineCategory } from 'react-icons/md';
import { TbTarget } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

import '../assets/css/sidebar-nav.css';

const SidebarNav = () => {

    return (
        <Sidebar collapsedWidth='70px' backgroundColor="#fff" className='main-navigation'>
            <Menu className='mt-3'>
                <NavLink to='/' className='menu-item-link'><MenuItem><AiOutlineDashboard className='menu-icon' />Dashboard</MenuItem></NavLink>
                <NavLink to='/dashboard/users' className='menu-item-link'><MenuItem><BsPeople className='menu-icon' /> Users</MenuItem></NavLink>
                <NavLink to='/dashboard/shops' className='menu-item-link'><MenuItem><AiOutlineShop className='menu-icon' /> Shops</MenuItem></NavLink>
                <NavLink to='/dashboard/commission' className='menu-item-link'><MenuItem><FaRegMoneyBillAlt className='menu-icon' /> Commissions</MenuItem></NavLink>
                <NavLink to='/dashboard/categories' className='menu-item-link'><MenuItem><MdOutlineCategory className='menu-icon' /> Categories</MenuItem></NavLink>
                <NavLink to='/dashboard/orders' className='menu-item-link'><MenuItem><AiOutlineShoppingCart className='menu-icon' /> Orders</MenuItem></NavLink>
                <NavLink to='/dashboard/blogs' className='menu-item-link'><MenuItem><ImBlog className='menu-icon' /> Blogs</MenuItem></NavLink>
                <NavLink to='/dashboard/staff' className='menu-item-link'><MenuItem><MdPeopleOutline className='menu-icon' /> Staff</MenuItem></NavLink>
                <NavLink to='/dashboard/notifications' className='menu-item-link'><MenuItem><AiOutlineNotification className='menu-icon' /> Notifications</MenuItem></NavLink>
                <NavLink to='/dashboard/memberships' className='menu-item-link'><MenuItem><MdCardMembership className='menu-icon' /> Memberships</MenuItem></NavLink>
                <NavLink to='/dashboard/milestones' className='menu-item-link'><MenuItem><TbTarget className='menu-icon' /> Milestones</MenuItem></NavLink>
            </Menu>
        </Sidebar>
    )
}

export default SidebarNav;
