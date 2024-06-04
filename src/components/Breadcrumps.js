import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumps() {

    const location = useLocation();
    console.log(location);

    let currentLink = '';
    const crumbs = location.pathname.split('/')
                    .filter(crumb => (crumb !== '' && crumb !== 'search'))
                    .map(crumb => {
                        currentLink += `/${crumb}`;
                        return (
                            <div key={crumb} className='crumb'>
                                <Link to={currentLink}>{crumb}</Link>
                            </div>
                        )
                    })

  return (
        <div className="breadcrumbs">
            {crumbs}    
        </div>
    )
}
