import React from 'react';
import { Col } from 'react-bootstrap';
import { MdOutlineAdd } from 'react-icons/md';

import CustomButton from './CustomButton';
import '../assets/css/page-header.css';

const PageHeader = ({ title, subtitle, btnText, ...props }) => {
    if (!btnText) {
        return (
            <React.Fragment>
                <Col>
                    <div>
                        <h3 className='header-title'>{title}</h3>
                        <h4 className='header-subtitle'>{subtitle}</h4>
                    </div>
                </Col>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <Col>
                    <div>
                        <h3 className='header-title'>{title}</h3>
                        <h4 className='header-subtitle'>{subtitle}</h4>
                    </div>
                </Col>
                <Col className='text-end'>
                    <CustomButton onClick={props.onClick}><MdOutlineAdd />{btnText}</CustomButton>
                </Col>
            </React.Fragment>
        )
    }
}

export default PageHeader;
