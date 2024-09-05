// app/page.js
import Image from 'next/image';
import profilePic from '../public/MyProfilePic.jpg';



export default function HomePage() {
  return (
    <div className="portfolio-container">
     <section className="hero">
        <Image src={profilePic} alt="My Profile" width={300} height={400} />
        <h2>Muhammad Owais Shahid</h2>
        <p>"MERN Stack Developer"</p>
      </section>
      

      <section className="education">
        <h3>Education</h3>
        <ul>
          <li>Bachelor of Science in Computer Science - University Of Lahore (Year 2024)</li>
        </ul>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>Next.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>MongoDB</li>
          <li>MySql</li>
          <li>Dtabase</li>
          <li>Software Quality Assurance</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      <section className="projects">
        <h3>Projects</h3>
        <ul>
          <li>
            <strong>Traffic light Controller :</strong> "Developed a Traffic Light Controller as a semester project, utilizing Arduino to create a system that adapts traffic light operations based on real-time traffic conditions."
          </li>
          <li>
            <strong>Rent a Car Management system : </strong> "Developed a Rent-A-Car Management System using C++, designed to efficiently handle and streamline car rental operations."
          </li>
          <li>
            <strong>Construct datawarehouse of superstore : </strong> "Designed and implemented a data warehouse for a superstore using MySQL and Talend. The project involved extracting, transforming, and loading (ETL) data to create a robust, scalable data warehouse that supports comprehensive business analytics and reporting."
          </li>
          <li>
            <strong>Company website :</strong> 
            "Developed a company website using HTML, CSS, JavaScript, and PHP. The project encompassed designing a responsive and visually appealing front-end interface with HTML and CSS, implementing interactive features with JavaScript, and creating dynamic content management functionality with PHP.
          </li>
        </ul>
      </section>
      <section className="projects">
      <h3>Final Year Project </h3>
      <ul>
      <li>
            <strong>Facial Recognition attendance system : </strong> 
            
"Developed a Facial Recognition Attendance System using Python and React.js. The system integrates Python-based facial recognition technology to accurately identify and record attendees, while React.js was used to create an intuitive and responsive user interface for managing attendance data."
          </li>
      </ul>
      </section>
    </div>
  );
}
