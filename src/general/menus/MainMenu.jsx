import React from "react";

import {Link} from "react-router-dom";
import {Menu} from "antd";
import Icon from '@ant-design/icons';

const {SubMenu} = Menu;

export default function MainMenu(props) {
    return (
        <>


            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Link to="/products">
                    <Icon type="rocket"/>
                    <span>Products</span>
                </Link>

                <Menu.Item key="10" onClick={props.logout}>
                    <Icon type="logout"/>
                    <span>Logout</span>
                </Menu.Item>


                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>


        </>
    );
}
