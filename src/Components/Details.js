import React from 'react'

export default function Details(props) {
    return (
        <div className='d-flex justify-content-center'>
            <div className='w-50'>
                <div className='bg-container shadow-lg rounded p-4'>
                    <form onSubmit={props.submit}>
                        <div>
                            <label htmlFor="exampleInputEmail1" className='pb-2'><span className='fw-bold'>1.</span> Name</label>
                            <input type="name" name='name' className="form-control" placeholder="please enter your name" required></input>
                        </div>

                        <div className='mt-4'>
                            <label htmlFor="exampleInputEmail1" className='pb-2'><span className='fw-bold'>2.</span> Email</label>
                            <input type="email" name='email' className="form-control" placeholder="please enter your email" required></input>
                        </div>

                        <div className='mt-4'>
                            <button className='btn btn-primary'>Next</button>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-primary rounded-pill ps-3 pe-3 pt-0 pb-0'><span className="fw-bold">1</span></button>
                            <button className='btn btn-light rounded-pill ps-3 pe-3 pt-0 pb-0'><span className="fw-bold">2</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
