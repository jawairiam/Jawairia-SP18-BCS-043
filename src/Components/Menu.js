import React from 'react'

export const Menu = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    
                    <div className='col-6'>
                        <div className='about__img2'>
                            <img src='/pix.jpg' alt='Pizza' />

                        </div>

                    </div>
                    <div className='col-6' p-25>
                        <div className='menu__text'>
                    <h3>The Pizza Menu </h3>
                <h1>CHICAGO<br />
THIN CRUST</h1>
                <p>nvestigationes demonstraverunt lectores legere me lius
                quod ii legunt saepius. Claritas est etiam processus dynaus,
                quise sequitur mutationem consuetudium lectorum.
                </p>
                <div className='about__btn'>
                        <a href='' className='btn btn-smart'>
                            VIEW MORE
                        </a>

                        </div>
                    </div>

                    </div>
            </div>
        </div>
            
        </div>
    )
}
export default Menu;