import { NavLink, Outlet, ScrollRestoration, createSearchParams, useNavigate } from "react-router-dom"
import Breadcrumps from "../components/Breadcrumps"
import SearchBar from "../components/SearchBar"
import React from 'react'

export default function RootLayout() {

    const navigate = useNavigate();

    const handleSearch = (searchValue) => {
      
      console.log('search value = ', searchValue);
      const params = createSearchParams({key: searchValue})
      navigate({pathname: '/careers', search: `?${params}`});
    }

    return (
      <div className="root-layout">
        <ScrollRestoration />
        <header>
          <nav>
            <h1>JobForAll</h1>
            <SearchBar callBack={handleSearch}/>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="help">Help</NavLink>
            <NavLink to="careers">Careers</NavLink>
          </nav>
          <Breadcrumps />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    )
  }
 
