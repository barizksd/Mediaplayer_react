import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Watchhistory() {
  return (
    <>
      <div className='container d-flex justify-content-between align-items-center mt-5'>
        <h5>Watch History</h5>
         <Link to={'/home'} style={{textDecoration:'none'}}><h5 className='d-flex justify-content-between aling-item-center'> <span className="d-none d-md-flex fs-5 me-3">Back Home</span> <FontAwesomeIcon icon={faHouse} /> </h5></Link>
      </div>
      <div className='container mt-5 table-responsive'>
        <table className='table table-bordered border-1 border border-primary  '>
          <thead className='border-1 border border-primary'>
            <tr>
              <th className='p-3 text-center border-1 border border-primary'>S1:No</th>
              <th className='p-3 text-center border-1 border border-primary'>Caption</th>
              <th className='p-3 text-center border-1 border border-primary'>Url</th>
              <th className='p-3 text-center border-1 border border-primary'>TimeStamp</th>
              <th className='p-3 text-center border-1 border border-primary'>Action</th>
            </tr>

          </thead>
          <tbody >
            <tr>
              <td className='border-1 border border-primary'>dummy</td>
              <td className='border-1 border border-primary'>dummy</td>
              <td className='border-1 border border-primary'><Link to={''}>dummy</Link></td>
              <td className='border-1 border border-primary'>dummy</td>
              <td className='border-1 border border-primary'>dummy</td>
            </tr>
          </tbody>

        </table>

      </div>


    </>
  )
}

export default Watchhistory