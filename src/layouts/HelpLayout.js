import { NavLink, Outlet } from "react-router-dom";
import React from 'react'


export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Website Help</h2>
        <p>Please click the FAQ link before you contact us. You may find useful questions and their answers from there</p>
    
        <nav>
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>

        <Outlet />
        
    </div>
  )
}
