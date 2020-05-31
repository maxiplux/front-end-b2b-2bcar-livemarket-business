import React, {useEffect, useState} from 'react';
import {AutoComplete, Button, Form, Input, Select} from 'antd';
import {useParams} from "react-router-dom";

import ProductServices from "../../../services/products/ProductServices";
import PlaceHolder from "../../shares/PlaceHolder";

const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;

export default  function ProductEdit  (props) {

    let {id} = useParams();


    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    const [dataSource, setDataSource] = useState({});
    const formLayout = 'horizontal';
    const formItemLayout = {labelCol: {span: 4}, wrapperCol: {span: 14}};
    const buttonItemLayout = {
        wrapperCol: {span: 14, offset: 4},
    };

    useEffect(() => {
        if (id) {

            ProductServices.getEdit(props.user.Authorization, id).then(response => {

                setDataSource(response.data);
            });

        }


    }, [id]);

    return (<>


        <PlaceHolder>
            <Form layout={formLayout} onSubmit={handleSubmit}>

                <Form.Item name="name" {...formItemLayout} rules={[{ required: true, message: "Please type name!" }]}>
                    <Input placeholder="Please input   name"/>
                </Form.Item>

                    <Select name="Category"  placeholder="Please select a country">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                    </Select>,


                <Form.Item name="quality" {...formItemLayout}   rules={[{ required: true, message: "Please type quality!" }]} >
                     <Input placeholder="Please input quality"/>
                </Form.Item>


                <Form.Item name="price" {...formItemLayout} rules={[{ required: true , message: 'Please input your price'}]}>
                    <Input placeholder="Please input your price"/>
                </Form.Item>


                <Form.Item {...buttonItemLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </PlaceHolder>


    </>);
}


