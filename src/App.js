import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import  Home  from './pages/Home.js'
import React from 'react'
import  About  from './pages/About.js';
import HelpLayout from "./layouts/HelpLayout.js";
import Faq from "./pages/help/Faq.js";
import Contact, { contactAction } from "./pages/help/Contact.js";
import NotFound from "./pages/NotFound.js";
import CareersLayout from "./layouts/CareersLayout.js";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails.js";
import CareersError from "./pages/careers/CareersError.js";
import RootLayout from "./layouts/RootLayout.js";
import Careers, { careersLoader } from "./pages/careers/Careers.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} action={contactAction} />
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader}
          // errorElement={<CareersError />}
        />
        <Route 
          path=":id" 
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
