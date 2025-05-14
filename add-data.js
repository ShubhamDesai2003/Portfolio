import { db, collection, addDoc } from "./src/firebase.js";

async function addProjectsAndCertificates() {
  try {
    // Add Projects
    const projects = [
      {
        Title: "RoomieSync",
        Description: "A roommate collaboration tool to resolve scheduling conflicts, streamline bill payments, and manage shared households. Features intuitive room creation and expense tracking.",
        TechStack: ["React", "Spring Boot", "MongoDB"],
        Img: "p1.PNG", // Replace with Firebase Storage URL
        Link: "https://github.com/ShubhamDesai2003/roomiesync" // Replace with real URL
      },
      {
        Title: "CampusBite",
        Description: "A zero-waste campus mess management platform using dynamic QR codes to streamline meal purchases and reduce food waste. Includes Google OAuth and QR-based coupon redemption.",
        TechStack: ["React", "Node.js", "Express.js", "MongoDB", "Google OAuth"],
        Img: "p2.png",
        Link: "https://github.com/ShubhamDesai2003/campusbite"
      },
      {
        Title: "FreshMeal",
        Description: "A restaurant website with menu browsing, order placement, and admin management. Features user-friendly interfaces and optimized database management.",
        TechStack: ["React", "PHP", "MySQL"],
        Img: "freshmeal.PNG",
        Link: "https://github.com/ShubhamDesai2003/freshmeal"
      }
    ];

    for (const project of projects) {
      await addDoc(collection(db, "projects"), project);
      console.log(`Added project: ${project.Title}`);
    }

    // Add Certificates
    const certificates = [
      {
        Title: "Java Built in Data Structures",
        Img: "java_DataStructure_Coursera.jpg", // Replace with Firebase Storage URL
        Issuer: "Coursera",
        Date: "2024"
      },
      {
        Title: "Java Programming For Beginners",
        Img: "java_beginer_Smililearn.jpg",
        Issuer: "Coursera",
        Date: "2024"
      },
      {
        Title: "Java (Basics)",
        Img: "java(hackerRank)_page-0001.jpg",
        Issuer: "HackerRank",
        Date: "2024"
      },
      {
        Title: "Introduction to MERN Stack",
        Img: "MERN stack_page-0001.jpg",
        Issuer: "Simplilearn",
        Date: "2024"
      },
      {
        Title: "React JS Projects For Beginners",
        Img: "React.jpg",
        Issuer: "Simplilearn",
        Date: "2024"
      },
      {
        Title: "Build and Deploy APIs with a Serverless CI/CD",
        Img: "AWS.jpg",
        Issuer: "AWS",
        Date: "2024"
      },
      {
        Title: "Master C++ Programming From Beginner To Advance 2025 Edition",
        Img: "c++.jpg",
        Issuer: "Udemy",
        Date: "April 2025"
      }
    ];

    for (const cert of certificates) {
      await addDoc(collection(db, "certificates"), cert);
      console.log(`Added certificate: ${cert.Title}`);
    }

    console.log("All data added successfully!");
  } catch (error) {
    console.error("Error adding data:", error);
  }
}

// Run the function
addProjectsAndCertificates();





// import { db, collection, addDoc } from "./src/firebase.js";

// async function addProjectsAndCertificates() {
//   try {
//     // Add Projects
//     const projects = [
//       {
//         Title: "RoomieSync",
//         Description: "A roommate collaboration tool to resolve scheduling conflicts, streamline bill payments, and manage shared households. Features intuitive room creation and expense tracking.",
//         TechStack: ["React", "Spring Boot", "MongoDB"],
//         Img: "./src/assets/projects/p1.PNG", // Replace with Firebase Storage URL
//         Link: "https://github.com/ShubhamDesai2003/roomiesync" // Replace with real URL
//       },
//       {
//         Title: "CampusBite",
//         Description: "A zero-waste campus mess management platform using dynamic QR codes to streamline meal purchases and reduce food waste. Includes Google OAuth and QR-based coupon redemption.",
//         TechStack: ["React", "Node.js", "Express.js", "MongoDB", "Google OAuth"],
//         Img: "./src/assets/projects/p2.png",
//         Link: "https://github.com/ShubhamDesai2003/campusbite"
//       },
//       {
//         Title: "FreshMeal",
//         Description: "A restaurant website with menu browsing, order placement, and admin management. Features user-friendly interfaces and optimized database management.",
//         TechStack: ["React", "PHP", "MySQL"],
//         Img: "./src/assets/projects/freshmeal.PNG",
//         Link: "https://github.com/ShubhamDesai2003/freshmeal"
//       }
//     ];

//     for (const project of projects) {
//       await addDoc(collection(db, "projects"), project);
//       console.log(`Added project: ${project.Title}`);
//     }

//     // Add Certificates
//     const certificates = [
//       {
//         Title: "Java Built in Data Structures",
//         Img: "./src/assets/certificates/java_DataStructure_Coursera.jpg", // Replace with Firebase Storage URL
//         Issuer: "Coursera",
//         Date: "2024"
//       },
//       {
//         Title: "Java Programming For Beginners",
//         Img: "./src/assets/certificates/java_beginer_Smililearn.jpg",
//         Issuer: "Coursera",
//         Date: "2024"
//       },
//       {
//         Title: "Java (Basics)",
//         Img: "https://via.placeholder.com/150",
//         Issuer: "HackerRank",
//         Date: "2024"
//       },
//       {
//         Title: "Introduction to MERN Stack",
//         Img: "https://via.placeholder.com/150",
//         Issuer: "Simplilearn",
//         Date: "2024"
//       },
//       {
//         Title: "React JS Projects For Beginners",
//         Img: "https://via.placeholder.com/150",
//         Issuer: "Simplilearn",
//         Date: "2024"
//       },
//       {
//         Title: "Build and Deploy APIs with a Serverless CI/CD",
//         Img: "https://via.placeholder.com/150",
//         Issuer: "AWS",
//         Date: "2024"
//       },
//       {
//         Title: "Master C++ Programming From Beginner To Advance 2025 Edition",
//         Img: "https://via.placeholder.com/150",
//         Issuer: "Udemy",
//         Date: "April 2025"
//       }
//     ];

//     for (const cert of certificates) {
//       await addDoc(collection(db, "certificates"), cert);
//       console.log(`Added certificate: ${cert.Title}`);
//     }

//     console.log("All data added successfully!");
//   } catch (error) {
//     console.error("Error adding data:", error);
//   }
// }

// // Run the function
// addProjectsAndCertificates();
