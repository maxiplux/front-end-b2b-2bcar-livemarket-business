import React, {createRef, useEffect, useState} from 'react';
import {Button, Form, Input, InputNumber, Layout} from 'antd';
import ProductServices from "../../../services/products/ProductServices";
const {Header, Footer, Content} = Layout;


export default function ProductEdit(props) {

    const [currentContext, setCurrentContext] = useState({ name:'jjuan' });
    const [form] = Form.useForm();
    const formRef = createRef();



    useEffect(() => {
        if (props?.context?.currentContext?.objectGoal)
        {

            form.setFieldsValue(props.context.currentContext.objectGoal);


        }


    }, [props?.context?.currentContext?.objectGoal]);

    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const onFinish = values => {
        console.log(values);
    };

    return (
        <Content
            style={{
                margin: '24px 18px',
                padding: 0,
                background: '#fff',
                minHeight: 280,
            }}
        >
            <h1> {currentContext.name}  </h1>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}


              form={form}
        >
            <Form.Item
                name={'name'}
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name={['user', 'age']}
                label="Age"
                rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                ]}
            >
                <InputNumber/>
            </Form.Item>
            <Form.Item name={['user', 'website']} label="Website">
                <Input/>
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Introduction">
                <Input.TextArea/>
            </Form.Item>
            <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </Content>
    );

}


