import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { ICategories } from '../../types/categories';

interface IProps {
    categories: ICategories[],
    oneRemoveCate: (_id: number) => void
}
interface DataType {
    key: string | number;
    name: string;

}

const ManagemetCategory = (props:IProps) => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'Category',
            dataIndex: 'name',
            key: 'name',
            render: (name) => <a>{name}</a>,
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} > <Link to={`${record._id}`}>Delete</Link> </Button>
                    <Button type="primary" style={{ backgroundColor: 'blue' }} > <Link to={`/admin/CategoryId/update/${record._id}`}>Update</Link> </Button>
                </Space>
            ),
        },
    ];
    const data: DataType[] = props.categories.map((items) => {
        console.log(items);
        
        return {
            key: items._id,
            ...items,
        }

    })

    return (

        <div>

            <h2 style={{ textAlign: "center" }}>Mangement Category</h2>
            <div style={{ display: 'flex', justifyContent: "flex-end", paddingRight: '50px' }}>
                <Link to={"/admin/categoryId/add"}><Button type="primary" style={{ backgroundColor: 'green', border: '1px soil green' }} >ADD NEW CATEGORY</Button> </Link>
            </div>
            <Table style={{ textAlign: "center" }} columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />

        </div>

    )
}

export default ManagemetCategory