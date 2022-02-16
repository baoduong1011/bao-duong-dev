import React from 'react'

export default function About() {
    return (
        <section className='about' id='about'>
            <div className='main-about'>
                <h1 className='heading'> About <span>Me</span></h1>
                <div className='row' >
                    <div className='image' >
                        <img className='tilt' src='images/bd2.jpg' />
                    </div>

                    <div className='content' >
                        <h3>My name is <span>Bao Duong</span></h3>
                        <p className='info'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <div className='box-container'>
                            <div className='box' >
                                <p><span> age : </span> 21 </p>
                                <p><span> Gender : </span> Male </p>
                                <p><span> experience : </span> 2 years </p>
                                <p><span> freelance : </span> Available </p>
                            </div>

                            <div className='box' >
                                <p><span> language : </span> English </p>
                                <p><span> phone : </span> +84345765272 </p>
                                <p><span> email : </span> 19520017@gm.uit.edu.vn </p>
                                <p><span> address : </span> Ben Tre City , Viet Nam </p>
                            </div>
                        </div>

                        <a href='/files/CV.pdf' download className='btn' >Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
