import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { fetchDataById } from '../../data/db';

export default function CareerDetails() {

    const career = useLoaderData()
  
    return (
      <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
          <p>Description:</p>
          <p>{career.description}</p>
        </div>
      </div>
    )
  }
  
  // data loader
  export const careerDetailsLoader = async ({ params }) => {
    const { id } = params
    
    const res = await fetchDataById(Number(id));
  
    if (!res) {
      throw Error('Could not find that career.')
    }
  
    return res;
  }
