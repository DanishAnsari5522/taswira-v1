import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/AddProduct.css'

function AddProduct() {
    const [productDetail, setProductDetail] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategori, setProductCategori] = useState('');
    const [productImage, setProductImage] = useState('');
    const [error, setError] = useState('');
    console.log(productImage);


    const onSubmit = () => {
       console.log( productDetail, productPrice, productCategori,productImage);
        const data=new FormData()
        data.append("productDetail",productDetail)
        data.append("productPrice",productPrice);
        data.append("productCategori",productCategori);
        data.append("productImage",productImage);
        
        if (!productDetail) {
            setError("productDetail Required")
        } else if (!productPrice) {
            setError("productPrice Required")
        } else if (!productCategori) {
            setError("productCategori Required")
        } else if (!productImage) {
            setError("productImage Required")
        } else {
            console.log(productDetail);
            fetch('http://localhost:5000/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:data
            })
                .then(res => res.json()).then(
                    data => {
                        console.log(data);
                        if (data.error) {
                            setError(data.error);
                        } else {
                            // navigation.navigate('Home');
                        }
                    }
                )
        }
    }

    return (
        <>
            {/* <Form> */}
            <fieldset className='col-md-8 m-auto dan'>
            {error && <h1>{error}</h1>}
                <Form.Group className="mb-3 mt-2">
                    <Form.Label htmlFor="disabledTextInput">Product Detail</Form.Label>
                    <Form.Control placeholder="Product Detail" value={productDetail} onChange={(e) => setProductDetail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 mt-2">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="number" maxLength={10} placeholder="Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Product Categori</Form.Label>
                    <Form.Select value={productCategori} onChange={(e) => setProductCategori(e.target.value)}>
                        <option selected disabled >Add Categori</option>
                        <option value="Organza">Organza</option>
                        <option value="Printed">Printed</option>
                        <option value="Double layered Hair bows">Double layered Hair bows</option>
                        <option value="Wristlets">Wristlets</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control type="file" name="image_hii" onChange={(e) => setProductImage(e.target.files[0])}/>
                </Form.Group>
                <Button type="submit" onClick={onSubmit}>Submit</Button>
            </fieldset>
            {/* </Form> */}
        </>
    )
}

export default AddProduct;