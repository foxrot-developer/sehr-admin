import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { GrNotification } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';

import '../assets/css/topbar.css';

const TopBar = () => {
    return (
        <Row>
            <Col>
                <div className='bar-icons'>
                    {/**<BsSearch className='bar-icon' />
    <GrNotification className='bar-icon' />**/}
                    <CgProfile className='bar-icon' />
                </div>
            </Col>
        </Row>
    )
}

export default TopBar;
