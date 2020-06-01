import React from 'react';
import {Button} from 'antd';
import {Link} from "react-router-dom";

const ProductSettings = {
    productColumns: ( context={}) => {

       return [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'price',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: 'category',
                dataIndex: 'category.name',
                key: 'category',
            },

            {
                title: 'Action',
                key: 'action',
                render: (rowContext) => {


                    return (<>


                            <Button key={rowContext.id} type="primary" onClick={() => context.setCurrentContext({action:'delete',objectGoal:rowContext}) }>Delete</Button>

                            <Button key={rowContext.id} type="danger" onClick={() => context.setCurrentContext({action:'edit',objectGoal:rowContext}) }>Edit</Button>


                    </>);
                },
            }
        ];

    }
}

export default ProductSettings;
