import React, { useState,useEffect, useDebugValue } from 'react';

import { Table, Divider, Tag,Form, Icon, Input, Button, Checkbox,Row, Col,Modal ,Layout  } from "antd";
import ProductServices from "../../../services/products/ProductServices";
import PlaceHolder from "../../shares/PlaceHolder";
import ProductSettings from "./ProductSettings";




const ProductList = (props)=> {
    const [dataSource, setDataSource] = useState([]);


    useEffect(() => {
        if (props.user)
        {

            ProductServices.getAll(props.user.Authorization,0).then(response => {

                setDataSource(response.data.content);
            });

        }


    }, [props.user]);

    return (
        <PlaceHolder >
            <Table dataSource={dataSource} columns={ProductSettings.productColumns} />
        </PlaceHolder>
    )
}

export default ProductList;
