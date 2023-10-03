import React, { Component } from 'react'

export class Card extends Component {
  constructor(props) {
    super(props)
  
    this.props = props;
  }
  render() {
    return (
      <div className='d-flex justify-content-center mb-4'>
        <div className='w-50'>
          <div className='bg-container shadow-lg rounded p-4 mt-3'>
            <form onSubmit={this.props.Qsubmit}>
              <label htmlFor="exampleInputEmail1" className='pb-2'><span className='fw-bold'>3.</span> What are you currently doing?</label>

              <div className='mt-2'>
                <input type='radio' className='form-check-input m-1' name='work' value={"Teaching"}></input><span>Teaching</span>
                <input type='radio' className='form-check-input m-1' name='work' value={"Student"}></input><span>Student</span>
                <input type='radio' className='form-check-input m-1' name='work' value={"Programmer"}></input><span>Programmer</span>
                <input type='radio' className='form-check-input m-1' name='work' value={"Other"}></input><span>Other</span>
              </div>

              <input type="text" name="other" className="form-control mt-3" placeholder="Type here if not listed"></input>

              <label htmlFor="exampleInputEmail1" className='pb-2 mt-4'><span className='fw-bold'>4.</span> Please rate your course.</label>

              <div className='mt-2'>
                <input type='radio' className='form-check-input m-1' name='crate' value={"Poor"}></input><span>Poor</span>
                <input type='radio' className='form-check-input m-1' name='crate' value={"Good"}></input><span>Good</span>
                <input type='radio' className='form-check-input m-1' name='crate' value={"Excellent"}></input><span>Excellent</span>
              </div>


              <div className='mt-4'>
                <label htmlFor="exampleInputEmail1" className='pb-2'><span className='fw-bold'>5.</span> Write your review here.</label>
                <textarea name="review" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

              <div className='mt-4'>
                <button className='btn btn-primary'>Next</button>
              </div>

              <div className='d-flex justify-content-center'>
                <button className='btn btn-light rounded-pill ps-3 pe-3 pt-0 pb-0'><span className="fw-bold">1</span></button>
                <button className='btn btn-primary rounded-pill ps-3 pe-3 pt-0 pb-0'><span className="fw-bold">2</span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Card