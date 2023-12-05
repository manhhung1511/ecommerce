import React from 'react';
import DefaultLayout from './DefaultLayout';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/admin/SideBar';
import NavBar from '../components/admin/NavBar';


const AdminLayout = () => {
    return (
        <>  
            <div class="admin-layout">
                <div class="sidebar">
                    <Sidebar />
                </div>
                <div class="layout_content">
                    <div>
                        <NavBar />
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminLayout;