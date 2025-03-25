import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function VideoCard() {

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    <>
     <Card style={{ width: '100%' }} >
      <Card.Img variant="top" src="https://i.pinimg.com/736x/c4/b4/85/c4b485423960e84bd816d583b0f6c4c7.jpg" style={{height:'300px'}} onClick={handleShow}/>
      <Card.Body className='d-flex justify-content-between aling-item-center'>
        <Card.Title>Card Title</Card.Title>

        <Button variant="primary" className='btn btn-warning  text-dark'><FontAwesomeIcon icon={faTrash} /></Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Modal heading</Modal.Title>
        </Modal.Header>
        {/* <iframe width="695" height="391" src="https://www.youtube.com/embed/V7s4o-ZWgg0" title="Ishq Mega Mashup | Faheem Abdullah | Emraan Hashmi | Best Of Soulful Mashups | Chillout Vibes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe> */}
        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/V7s4o-ZWgg0?autoplay=1" title="Ishq Mega Mashup | Faheem Abdullah | Emraan Hashmi | Best Of Soulful Mashups | Chillout Vibes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen className='p-2'></iframe>
        
      </Modal>
    </>
  )
}

export default VideoCard