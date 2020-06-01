import React, { useState,useEffect, useDebugValue } from 'react';

import { Table, Divider, Tag,Form, Icon, Input, Button, Checkbox,Row, Col,Modal ,Layout  } from "antd";
import ProductServices from "../../../services/products/ProductServices";
import PlaceHolder from "../../shares/PlaceHolder";
import ProductSettings from "./ProductSettings";
import ProductEdit from "./ProductEdit";




const ProductList = (props)=> {
    const [dataSource, setDataSource] = useState([]);
    const [currentContext, setCurrentContext] = useState({});



    useEffect(() => {
        if (props.user)
        {

            ProductServices.getAll(props.user.Authorization,0).then(response => {

                setDataSource(response.data.content);
            });

        }


    }, [props.user]);


    const listTable=<Table dataSource={dataSource} columns={ProductSettings.productColumns({currentContext,setCurrentContext})}   />;
    const editCrudComponent=<ProductEdit dataSource={dataSource.map( data=> { return {...data, key:data.id }} )} context={{currentContext:currentContext,setCurrentContext:setCurrentContext}}   />;
    return (
        <PlaceHolder listTable={listTable}  editCrudComponent={editCrudComponent}  />



    )
}

export default ProductList;
