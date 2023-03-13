import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PageHeader from '../shared/PageHeader';
import SidebarNav from '../shared/SidebarNav';
import TopBar from '../shared/TopBar';
import { useNavigate } from 'react-router-dom';

import BlogsTable from '../components/blogs/BlogsTable';

const Blogs = () => {

    const navigate = useNavigate();

    return (
        <Row className='w-100'>
            <div className='page-container'>
                <SidebarNav />
                <main className='main-container'>
                    <Container fluid>
                        <TopBar />
                        <Row>
                            <PageHeader title="Blogs List" subtitle="Manage Blogs" btnText="Add New Blog" onClick={() => navigate('/dashboard/blogs/new-blog')} />
                        </Row>
                        <Row>
                            <BlogsTable />
                        </Row>
                    </Container>
                </main>
            </div>
        </Row>
    )
}

export default Blogs;
