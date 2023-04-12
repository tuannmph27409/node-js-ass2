import React from 'react'
import { IProduct } from "../types/product";
import { useState, useEffect } from 'react';
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';


interface IProps {
    products: IProduct[],
    oneRemove: (_id: number) => void
}
interface DataType {
    key: string | number;
    name: string;
    price: number;
    description:string;
}


const ManagementProduct = (props:IProps) => {

    function removeProduct(_id: number) {
        props.oneRemove(_id)
      
    } 

    const columns: ColumnsType<DataType> = [
        {
            title: 'ProductName',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <div style={{textAlign:'center'}} ><img style={{maxWidth:"50%"}} src={image} alt="" /></div>,
        },
    
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text) => <p>{text}</p>,
        },
        
        {
            title: 'Category',
            dataIndex: `categoryId`,
            key: 'categoryId',
            render: (categoryId) => <p>{categoryId?.name}</p>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (

                <Space size="middle">
                    <Button type="primary" style={{backgroundColor:'red'}} onClick={() =>{removeProduct(record._id)}}>Remove</Button>
                    <Button type="primary" style={{backgroundColor:'blue'}} > <Link to={`/admin/products/update/${record._id}`}>Update</Link> </Button>
                </Space>
            ),
        },
    ];
    const data: DataType[] = props.products.map((item) =>{
        return{
            key:item._id,
            ...item
        }
    })
 

    return <div>    
        <h2 style={{textAlign:"center"}}>Mangement Product</h2>
        <div style={{display:'flex',justifyContent:"flex-end",paddingRight:'50px'}}>
        <Link to={"/admin/products/add"}><Button type="primary" style={{backgroundColor:'green', border:'1px soil green'}} >ADD NEW PRODUCT</Button> </Link>
        </div>
        <Table style={{textAlign:"center"}} columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        
        </div>  
    
}

export default ManagementProduct