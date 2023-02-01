import React, { useState, useEffect } from 'react'
import KochoComp from './KochoComp';
import '../css/Kocho.css'
import Filter from './Filter';

function Kocho() {
    const [itemno, setItemno] = useState(1);
    const [product, setProduct] = useState([]);
    const project = () => {
        setItemno(1);
    }

    const research = () => {
        setItemno(2);
    }

    console.log(itemno);

    let getProduct = async () => {

        let result = await fetch(`http://localhost:5000/v1/upload/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        );
        result = await result.json();

        if (result) {
            console.log(result);
            var data1 = result.data.reverse();
            setProduct(data1);
        }
    }
    useEffect(() => {
        getProduct()
    }, [])

    if (itemno === 1) {
        return (
            <div className='ds2'>
                <div className="container pb-5">
                    <div className='row'>
                        <h1 className='best'> Best Scunchies</h1>
                        <div className='navigationbtn'>
                            {/* <button onClick={project} activeClassName="navbtn">Project</button>
                        <button onClick={research} activeClassName="navbtn">Research</button> */}
                            <Filter />

                        </div>
                        {
                            product.map((val, ind) => {
                                return <KochoComp
                                    productImage={val.productImage}
                                    productDetail={val.productDetail}
                                    productPrice={val.productPrice}
                                    productCategori={val.productCategori}
                                    id={val.id}
                                />
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
    else if (itemno === 2) {
        return (
            <div className="container pb-5">
                <div className='row'>
                    <div className='navigationbtn'>
                        <button onClick={project}>Project</button>
                        <button onClick={research}>Research</button>
                    </div>
                    <div>
                        Research
                    </div>

                </div>

            </div>
        )
    }
}

export default Kocho;