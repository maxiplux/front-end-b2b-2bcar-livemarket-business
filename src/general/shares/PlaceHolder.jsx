import React from 'react';
import {Col, Layout, Row} from "antd";

const {Header, Footer, Content} = Layout;

const PlaceHolder = (props) => {

    return (

        <Content
            style={{
                margin: '24px 18px',
                padding: 0,
                background: '#fff',
                minHeight: 280,
            }}
        >
            <Row>
                <Col span={10} aling={'left'}>{props.editCrudComponent}</Col>
                <Col span={14}>{props.listTable}</Col>
            </Row>
        </Content>
 );
}
export default PlaceHolder;
