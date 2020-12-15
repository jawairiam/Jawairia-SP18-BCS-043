import React from 'react'

export const Form = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6' p-25>
                        <div className='extra'>
                    <h3>Quick Delivery </h3>
                <h1>ORDER A<br /> PIZZA NOW</h1>
                <p>nvestigationes demonstraverunt lectores legere me lius
                quod ii legunt saepius. Claritas est etiam processus.
                </p>
                </div>

                <form className='forms'>
                        <input type="text" placeholder='First Name' name="fname" id="fname" />
                        <input type="text" placeholder='Last Name' name="lname" id="lname" />
                        <input type="text" placeholder='Streat Name' name="sname" id="sname" />
                        <input type="numbers" placeholder='Phone Number' name="no" id="no"  />
                        <input type="text" placeholder='Pizza Type' name="no" id="pizza"  />
                        <input type="numbers" placeholder='Number of Pizza To Deliver' name="no" id="nopizza"  />
                        
                        </form>

                <div className='form__btn'>
                        <a href='' className='btn btn-smart'>
                            QUICK DELIVERY
                        </a>
                        
                    </div>
                    </div>
                    <div className='col-6'>
                        <div className='about__img3'>
                            <img src='/tray.jpg' alt='Pizza' />

                        </div>

                    </div>

                    </div>
            </div>
        </div>

    )
}

export default Form;