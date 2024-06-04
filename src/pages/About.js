import { useState } from "react";
import { Navigate } from "react-router-dom";
import React from "react";

export default function About() {
  const [user, setUser] = useState("osman");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <h3>Welcome to JobForAll</h3>
      <p>
        At JobForAll, we are passionate about connecting job seekers with their
        dream careers. Our mission is to simplify the job search process,
        empower candidates, and foster meaningful connections between employers
        and talent
      </p>
      <p>
        JobForAll was founded in 2015 by a team of seasoned recruiters and tech
        enthusiasts. Frustrated by the complexity of existing job boards, we set
        out to create a platform that prioritizes user experience, transparency,
        and efficiency. Over the years, we have helped thousands of
        professionals find their ideal jobs, from entry-level positions to
        executive roles.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
