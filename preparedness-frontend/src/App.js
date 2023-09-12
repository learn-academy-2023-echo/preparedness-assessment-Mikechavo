import React, { useState } from "react"
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

import background from "./assets/background-image.jpeg"

//imported bootstrap/reactstrap Modal after running 
// - yarn add bootstrap
// - yarn add reactstrap
// added to index.js - import "bootstrap/dist/css/bootstrap.min.css"
// Placed reactstrap components in the correct places. (imported Modal&reactstrap)
// needed to create usestate for the userinput field, onChange (e)
// created a usestate for the modal to appear using a toggle function, !modal




const App = (args) => {
  // created a usestate for Modal
  const [modal, setModal] = useState(false)
// created a useState for userinput
  const [userInput, setUserInput] = useState('')


// Modal useState
//imodal, if modal is true it becomes false, and if modal is false it becomes true
//when toggle is called upon, the variable will toggle between true and false. For showing or hiding the modal dialog
  const toggle = () => setModal(!modal)

 

  return (
    <div className="background-image" style={{ backgroundImage: `url(${background})` }}>
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label className="label" for="name">Enter your name</Label>
          {/* needed to create a useState for the user input so we could call upon it durin the Modal, for the header*/}
          <Input className="input"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          />

        </div>
        <Button color="danger" onClick={toggle}>Click Me</Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>

        <ModalHeader toggle={toggle}>Hello there {userInput}</ModalHeader>

        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      {/* reset button onClick to the userinput being empty */}
        <Button color="danger" onClick={() => setUserInput('')}>Reset</Button>
        <ModalComponent />
      </div>
    </div>
  </div>
  )
}

export default App
