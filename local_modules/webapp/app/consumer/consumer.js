import React from 'react'
import { render } from 'react-dom'
import RFQForm from './RFQForm'

class Consumer extends React.Component {
  render () {
    return <div>
      <h1>Consumer</h1>
      <RFQForm />
    </div>
  }
}

export default Consumer
