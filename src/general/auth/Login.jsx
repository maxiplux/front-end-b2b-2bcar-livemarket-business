import React from "react";
import { Form, Input, Button, Checkbox,Row, Col,Modal ,Layout  } from "antd";
import Icon from '@ant-design/icons';




import AuthServices from "../../services/auth/AuthServices";

const { Header, Footer,  Content } = Layout;




export default class LoginComponent extends React.Component {
    state = { Modavisible: false };



    handleSubmit = values => {


                AuthServices.doLogin(values).then(response => {
                    this.props.setUser(response.data);
                }).catch(error => {
                    Modal.error({ title: 'Error',  content: error.response.data.error_description});
                });

    };
    toggleModal = () => {
        this.setState({
            Modavisible: !this.state.Modavisible,
        });
    };
    render() {
        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                </Header>
                <Content>
                    <Row type="flex">
                        <Col span={9} order={1}>
                            <Modal
                                title="Modal"
                                visible={this.state.Modavisible}
                                onOk={this.toggleModal}
                                okText="Ok"
                            />

                        </Col>
                        <Col span={6} order={2}>
                            <Form   className="login-form"  placeholder="Username"


                                  onFinish={this.handleSubmit}
                                  onFinishFailed={onFinishFailed}
                            >
                                <Form.Item name="username" rules={[{ required: true, message: "Please input your username!" }]} >
                                    <Input
                                        prefix={
                                            <Icon
                                                type="user"
                                                style={{ color: "rgba(0,0,0,.25)" }}
                                            />
                                        }
                                        placeholder="Username"
                                    />
                                </Form.Item>
                                <Form.Item  name="password" rules={[{ required: true, message: "Please input your Password!" }]} >
                                    <Input
                                        prefix={
                                            <Icon
                                                type="lock"
                                                style={{ color: "rgba(0,0,0,.25)" }}
                                            />
                                        }
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item name="remember" rules={[{ valuePropName: "checked", initialValue: true }]}>

                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                    <br />
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                    >
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}
