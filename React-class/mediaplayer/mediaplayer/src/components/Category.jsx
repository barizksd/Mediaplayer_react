
import React from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import VideoCard from './VideoCard';

function Category() {
  return (
  <>
   <h5>Category</h5>
    <Button variant="warning"  className='form-control mt-3'>Add category</Button>
    <form action="" className='mt-3 border rounded p-3'>
      <div className="cat-1 d-flex justify-content-between ">
        <p>Tamil Songs</p>
        <Button variant="danger"><FontAwesomeIcon icon={faTrashCan}/></Button>

      </div>
      <input placeholder="Tupe songs here" className='p-3 form-control mt-3'/>
    </form>
    <form action="" className='mt-3 border rounded p-3'>
      <div className="cat-1 d-flex justify-content-between ">
        <p>Malayalam Songs</p>
        <Button variant="danger"><FontAwesomeIcon icon={faTrashCan}/></Button>
        
      </div>
      <VideoCard/>
    </form>

   </>
  )
}

export default Category
