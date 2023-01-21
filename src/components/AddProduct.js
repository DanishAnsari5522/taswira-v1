import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/AddProduct.css'

function AddProduct() {
    const [productDetail, setProductDetail] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategori, setproductCategori] = useState('');

    const onsubmit=()=>{
        console.log(productDetail);
    }

    return (
        <>
            <Form>
                <fieldset className='col-md-8 m-auto dan'>
                    <Form.Group className="mb-3 mt-2">
                        <Form.Label htmlFor="disabledTextInput">Product Detail</Form.Label>
                        <Form.Control placeholder="Product Detail" value={productDetail} onChange={(e) => setProductDetail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control type="number" maxLength={10} placeholder="Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">Product Categori</Form.Label>
                        <Form.Select>
                            <option selected disabled >Add Categori</option>
                            <option value="Organza">Organza</option>
                            <option value="Printed">Printed</option>
                            <option value="Double layered Hair bows">Double layered Hair bows</option>
                            <option value="Wristlets">Wristlets</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button type="submit" onClick={onsubmit}>Submit</Button>
                </fieldset>
            </Form>
        </>
    )
}

export default AddProduct;