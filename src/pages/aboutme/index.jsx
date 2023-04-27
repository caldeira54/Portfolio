import React from 'react';

import Header from '../../components/header';
import './aboutme.css';

import Photo from '../../assets/img/selfie.jpeg';

function AboutMe() {
    return (
        <>
            <Header />

            <div className='container-aboutme'>
                <div className='photo'>
                    <img src={Photo} />
                </div>

                <div className='teste'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eum voluptas? Quia, quae vero facilis {"\n"}voluptate similique iste illo ducimus dolor laudantium. Vero esse doloribus praesentium error nulla obcaecati unde.</p>
                </div>
            </div>
        </>
    )
}

export default AboutMe;