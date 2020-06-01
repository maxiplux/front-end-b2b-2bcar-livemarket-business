import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Breadcrumb, Layout, Menu} from 'antd';
import ShareComponents from "../shares/ShareComponents";
import MainMenu from "../menus/MainMenu";


const {Header, Content, Footer, Sider} = Layout;


export default function DashBoard(props) {
    const {state, onCollapse} = {...props};
    return (
        <Router>

            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <MainMenu {...props} />
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <ShareComponents {...props} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>


        </Router>
    );

}
