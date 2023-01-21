import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/AddProduct.css'

function UserForm() {
    function hi(){
        console.log("hii");
    }
    return (
        <>
            <Form>
                <fieldset className='col-md-8 m-auto dan'>
                    <Form.Group className="mb-3 mt-2">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="Full Name..." />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2">
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control type="number" placeholder="Phone No..." />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control placeholder="Email ID" />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-2">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Address" />
                    </Form.Group>

                    <Button type="submit" onSubmit={hi}>Submit</Button>
                </fieldset>
            </Form>
        </>
    )
}

export default UserForm;