import React, { useEffect, useState } from 'react'
import { IProduct } from '../types/product'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form, Input ,Select} from 'antd';


interface IProps {
    products: IProduct[],
    onUpdate: (product: IProduct) => void
}
const ProductUpdate = (props) => {
    const optionss = props.categories;
    const { _id } = useParams()

    const navigate = useNavigate()
    //category
    const [category, setCategory] = useState()
    useEffect(() => {
        const currentCategory = props.categories.find((category) => category._id == _id)
        setCategory(currentCategory)
    }, [props])

    useEffect(() => {
        setFields()
        console.log(category);
    }, [category])
    
    //product
    const [product, setProduct] = useState()
    useEffect(() => {
        const currentProduct = props.products.find((product) => product._id == _id)
        setProduct(currentProduct)
    }, [props])

    useEffect(() => {
        setFields()
        console.log(product);
    }, [product])
    const [form] = Form.useForm();
    const setFields = () => {// hàm này để set lại giá trị cho các input
        form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
            _id: product?._id,
            categoryId: product?.categoryId?._id,
            name: product?.name,
            price: product?.price,
            description: product?.description,
            image: product?.image
        })
    }
    const onFinish = (values: any) => {
        delete values._id
        props.onUpdate(_id, values);
        
        
        navigate('/admin/products')
    };
    return (
        <div className='update'>
            <h3>UPDATE PRODUCTS</h3>
            
            <Form
                form={form}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Category"
                    name="categoryId"
                    rules={[{ required: true, message: 'Please input your Product categoryId!' }]}
                >
                   <Select style={{ maxWidth: 600 }}>
                        {optionss.map((values, index) => {
                            return (
                                <Select.Option key={index} value={values._id}>
                                    {values.name}
                                </Select.Option>
                            );
                        })}
                    </Select>
                </Form.Item>
                {/* đoạn này cần truyền cả id vào form khi submit để lấy được giá trị id truyền lên component App */}
                <Form.Item
                    label=""
                    name="_id"
                    style={{ display: 'none' }} // ẩn input này đi
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Descriton"
                    name="description"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )
}

export default ProductUpdate