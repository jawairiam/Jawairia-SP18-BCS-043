import React from 'react'

export const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6' p-25>
                    <h3>About Us </h3>
                <h1>Welcome To<br /> Maestro Pizinni</h1>
                <p>nvestigationes demonstraverunt lectores legere me lius
                quod ii legunt saepius. Claritas est etiam processus dynaus,
                quise sequitur mutationem consuetudium lectorum.
                </p>
                <div className='about__btn'>
                        <a href='' className='btn btn-smart'>
                            READ MORE
                        </a>

                    </div>
                    </div>
                    <div className='col-6'>
                        <div className='about__img'>
                            <img src='/pi.jpg' alt='Pizza' />

                        </div>

                    </div>

                
            </div>
        </div>
        </div>
    )
}

export default About;