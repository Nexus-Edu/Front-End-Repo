import {Modal, Button} from "react-bootstrap"
import {useState} from 'react'

function MakeCommentModel(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button onClick={handleShow}>
          Make a Comment
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              here the form is gonna go in. 
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Make Post
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}


export default MakeCommentModel