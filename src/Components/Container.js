import React, { Component } from 'react'
import Card from './Card'
import Details from './Details'
import { v4 as uuidv4 } from 'uuid';
import connection from './firebase'
import { getDatabase, ref, set } from 'firebase/database'

const firebaseDB = getDatabase(connection);

export class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: uuidv4(),
      name: null,
      email: null,
      question: {
        work: null,
        crate: null,
        review: null,
        other: null,
      },
      isSubmitted: false,
    }
  }

  detailsSubmitHandler = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;

    event.preventDefault();
    this.setState({ name, email }, () => {
      console.log(this.state)
    })
  }

  questionSubmitHandler = (event) => {
    const question = {};
    question.work = event.target.work.value;
    question.crate = event.target.crate.value;
    question.review = event.target.review.value;
    question.other = event.target.other.value;

    console.log("Qu", question)
    event.preventDefault();

    var isSubmitted = true;
    this.setState({ question, isSubmitted }, () => {
      console.log("question", question)
    })

    const DBColl = ref(firebaseDB, `details/${this.state.id}`);
    set(DBColl, {
      name: this.state.name,
      email: this.state.email,
      question: this.state.email,
    })
      .then(() => {
        // Data successfully saved
        console.log("Data saved successfully");
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error saving data: ", error);
      });
  }
  render() {
    console.log("All", this.state);
    return (
      <div className='container'>
        <div className='bg-container shadow-lg text-primary text-center rounded'>
          <h1>Simba Institute Survey</h1>
        </div>
        {/* <Details></Details>
        <Card></Card> */}
        { this.state.isSubmitted ? (
          <div className='d-flex justify-content-center'>
            <div className='w-50'>
              <div className='bg-container shadow-lg rounded p-4'>
                <h1 className='text-center'>Thank You</h1>
              </div>
            </div>
          </div>
        ):
        this.state.name === null && this.state.email === null ? <Details submit={this.detailsSubmitHandler}></Details> : <Card Qsubmit={this.questionSubmitHandler}></Card>}
        
      </div>
    )
  }
}

export default Container