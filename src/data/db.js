const careers = [
    {
      "id": 1,
      "title": "Senior React Developer",
      "salary": 50000,
      "location": "Cape Town",
      "description": "Are you a passionate React Developer looking for an exciting opportunity to work at the forefront of marketing technology? We're on the lookout for a talented developer to join our Front-End team in the Development Department.",
      "date": new Date()
    },
    {
      "id": 2,
      "title": "Plumber",
      "salary": 40000,
      "location": "Durban, SA",
      "description": "This is a full-time on-site role for a Plumber located in Brackenfell. The Plumber will be responsible for diagnosing plumbing problems, installing and repairing pipes, and performing regular maintenance and repairs. They will also be responsible for providing excellent customer service.",
      "date": new Date()
    },
    {
      "id": 3,
      "title": "Gym Leader",
      "salary": 75000,
      "location": "Johannesburg, SA",
      "description":"Looking for a person that can take responsibility of a 5 star Gym and Spa facility. Must be able to take His/Her own decisions and build a relaxed environment where people want to come and train and relax. Someone with a pleasant personality and that loves people.",
      "date": new Date()
    },
    {
      "id": 4,
      "title": "Vue Developer",
      "salary": 40000,
      "location": "Johannesburg, SA",
      "description":"Are you ready to be at the forefront of revolutionizing sports technology? Look no further! We are seeking a highly skilled and motivated front-end developer to join our dynamic team. This pivotal role involves building cutting-edge sports technology products, and we're on the lookout for developers with a keen eye for detail and the ability to work on complex code bases.",
      "date": new Date()
    },
    {
      "id": 5,
      "title": "Online English Teacher",
      "salary": 35000,
      "location": "Johannesburg, SA",
      "description":"A Global Leader in Online English Teaching requires Online English Tutors. The successful candidates will be based in Cape Town CBD . Join us and become an Online English Tutor if you are looking for a job or side hustle. As a tutor, we provide you with all the training and skills development you will need.",
      "date": new Date()
    },
    {
      "id": 6,
      "title": "Website Designer",
      "salary": 50000,
      "location": "Cape Town, SA",
      "description":"Be part of a dynamic and innovative company that values design excellence. We are seeking an innovative and creative WordPress Web Designer / Graphic Designer with a minimum of 1 years' experience, for a permanent role. This position offers a fully remote working environment with flexible hours.",
      "date": new Date()
    },
    {
      "id": 7,
      "title": "Chef",
      "salary": 30000,
      "location": "Cape Town, SA",
      "description": "ANEW Hotel Green Point is looking for a Head Chef to provide an efficient and cost-effective food service to the establishment. The successful candidate will be based in Cape Town, Green Point.",
      "date": new Date()
    },
    {
      "id": 8,
      "title": "Senior React Developer",
      "salary": 50000,
      "location": "Cape Town",
      "description": "Are you a passionate React Developer looking for an exciting opportunity to work at the forefront of marketing technology? We're on the lookout for a talented developer to join our Front-End team in the Development Department.",
      "date": new Date()
    },
    {
      "id": 9,
      "title": "Plumber",
      "salary": 40000,
      "location": "Durban, SA",
      "description": "This is a full-time on-site role for a Plumber located in Brackenfell. The Plumber will be responsible for diagnosing plumbing problems, installing and repairing pipes, and performing regular maintenance and repairs. They will also be responsible for providing excellent customer service.",
      "date": new Date()
    },
    {
      "id": 10,
      "title": "Gym Leader",
      "salary": 75000,
      "location": "Johannesburg, SA",
      "description":"Looking for a person that can take responsibility of a 5 star Gym and Spa facility. Must be able to take His/Her own decisions and build a relaxed environment where people want to come and train and relax. Someone with a pleasant personality and that loves people.",
      "date": new Date()
    },
    {
      "id": 11,
      "title": "Vue Developer",
      "salary": 40000,
      "location": "Johannesburg, SA",
      "description":"Are you ready to be at the forefront of revolutionizing sports technology? Look no further! We are seeking a highly skilled and motivated front-end developer to join our dynamic team. This pivotal role involves building cutting-edge sports technology products, and we're on the lookout for developers with a keen eye for detail and the ability to work on complex code bases.",
      "date": new Date()
    },
    {
      "id": 12,
      "title": "Online English Teacher",
      "salary": 35000,
      "location": "Johannesburg, SA",
      "description":"A Global Leader in Online English Teaching requires Online English Tutors. The successful candidates will be based in Cape Town CBD . Join us and become an Online English Tutor if you are looking for a job or side hustle. As a tutor, we provide you with all the training and skills development you will need.",
      "date": new Date()
    },
    {
      "id": 13,
      "title": "Website Designer",
      "salary": 50000,
      "location": "Cape Town, SA",
      "description":"Be part of a dynamic and innovative company that values design excellence. We are seeking an innovative and creative WordPress Web Designer / Graphic Designer with a minimum of 1 years' experience, for a permanent role. This position offers a fully remote working environment with flexible hours.",
      "date": new Date()
    },
    {
      "id": 14,
      "title": "Chef",
      "salary": 30000,
      "location": "Cape Town, SA",
      "description": "ANEW Hotel Green Point is looking for a Head Chef to provide an efficient and cost-effective food service to the establishment. The successful candidate will be based in Cape Town, Green Point.",
      "date": new Date()
    },
    
  ]

  export const fetchData = ( ) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(careers));
    });
  };

  export const fetchDataBySearch = (searchValue) => {
    const searchedCareers = careers.filter((career) => 
          career.title.toLowerCase().includes(searchValue.toLowerCase()));
    return new Promise((resolve) => {
      setTimeout(() => resolve(searchedCareers))
    })
  }

  export const fetchDataById = (id) => {
    const career = careers.find((career) => career.id === id);
    console.log('career = ', career);
    return new Promise((resolve) => {
      setTimeout(() => resolve(career));
    })
  }