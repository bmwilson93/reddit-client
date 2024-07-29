import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";


const PostModal = ({ post }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modal-btn">
      <Button variant="primary" onClick={handleShow}>
        Expand
      </Button>

      <Modal 
        show={show} 
        onHide={handleClose}
        // dialogClassName="modal-wide"
        contentClassName='modal-wide'
      >
        <Modal.Header closeButton>
          <Modal.Title>{post.data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <img className='modal-image' src={post.data.url} />
          <p className='modal-text'>{post.data.selfText}</p>

          
        </Modal.Body>
        <Modal.Footer>
          <div className='votes'>
            <p className='ups'>{post.data.ups}</p>
            <p className='downs'>{post.data.downs}</p>
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PostModal;