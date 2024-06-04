import { Link, useLoaderData } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import { fetchData, fetchDataBySearch } from '../../data/db'
import { useEffect, useState } from 'react';
import React from 'react'
import { formatDistanceToNow } from 'date-fns';

export default function Careers() {

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

    const careers = useLoaderData();

    const lastItemIndex = currentPage * itemsPerPage;
    const firsItemIndex = lastItemIndex - itemsPerPage;
    const pageItems = careers.slice(firsItemIndex, lastItemIndex);
    
    return (
      <div className="careers">
        {pageItems.map(career => (
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <div>
              <p>Based in {career.location}</p>
              <p>{formatDistanceToNow(career.date, { addSuffix: true})}</p>
            </div>
           
            
          </Link>
        ))}
        <Pagination 
          totalItems={careers.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    )
  }
  
  // data loader
  export const careersLoader = async ({ request }) => {

    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('key')
    if(searchTerm) {
      const res = await fetchDataBySearch(searchTerm);
      if (!res) {
        throw Error('Could not fetch the list of careers')
      }
      return res;
    }

    const res = await fetchData();
  
    if (!res) {
      throw Error('Could not fetch the list of careers')
    }
  
    return res
  }