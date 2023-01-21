import React, { useState } from 'react'
import KochoComp from './KochoComp';
import KochoData from './KochoData'
import '../css/Kocho.css'
import Filter from './Filter';

function Kocho() {
    const [itemno, setItemno] = useState(1);
    const project = () => {
        setItemno(1);
    }

    const research = () => {
        setItemno(2);
    }

    console.log(itemno);

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
                        KochoData.map((val, ind) => {
                            return <KochoComp
                                imagesrc={val.imagesrc}
                                title={val.title}
                                text={val.text}
                                developerimg={val.developerimg}
                                developername={val.developername}
                                deploymentdate={val.deploymentdate}
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