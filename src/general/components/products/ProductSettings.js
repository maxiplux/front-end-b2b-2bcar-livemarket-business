import React from 'react';
import {Button} from 'antd';
import {Link} from "react-router-dom";

const ProductSettings = {
    productColumns: [
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
            render: (context) => {
                const currentItemEdit = `/products/edit/${context.id}/`
                const currentItemDelete = `/products/delete/${context.id}/`

                return (<>

                    <Link to={currentItemDelete}>
                        <Button type="primary">Delete</Button>
                    </Link>

                    <Link to={currentItemDelete}>
                        <Button type="danger">Edit</Button>
                    </Link>

                </>);
            },
        }
    ]
}

export default ProductSettings;
