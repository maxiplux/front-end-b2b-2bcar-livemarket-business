import React from 'react';

import {AutoComplete, Input, Select} from 'antd';


const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;
const FormFactoryBuilder = (props) => {
    const {getFieldDecorator} = props.form;
    {
        getFieldDecorator('name', {
            initialValue: props.dataSource.name,
            rules: [{required: true, message: 'Please input   name'}],
        })
        (<Input placeholder="Please input   name"/>)
    }


    return (<></>)
}
export default ProductEditBase;
