import React from 'react'
import VideoCard from './VideoCard'

function View() {
  return (
    <>
        <h5>All Videos</h5>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-3 p-2">
                    <VideoCard/>
                </div>
                <div className="col-md-3 p-2">
                <VideoCard/>
                </div>
                <div className="col-md-3 p-2">
                <VideoCard/>
                </div>
                <div className="col-md-3 p-2">
                <VideoCard/>
                </div>
            </div>
        </div>
    </>
  )
}

export default View