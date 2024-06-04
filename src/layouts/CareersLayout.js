import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>Click the the link of the job you are willing to apply. Read the job requirements before you apply to see 
          if you qualify for the job. We hope you find what you are looking for</p>

           <Outlet />
    </div>
  )
}
