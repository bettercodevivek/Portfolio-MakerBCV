import './Homepage.css';

interface HomepageProps {
    name: string;
    role: string;
    resumelink:string;
  }
  
  function Homepage({ name, role , resumelink }: HomepageProps) {
    return (
      <div className="content-page-1">
        <div className="introduction-container">
          <h1 className="introduction-heading-1">Hello, I am {name}.</h1>
          <h3 className="introduction-heading-3">I am a {role}.</h3>
          <h5 className="introduction-heading-5">Passionate software artisan skilled and fluent in diverse coding languages.<br></br> A tenacious problem solver, committed to crafting elegant and scalable solutions for a seamless user experience.</h5>
         <a href={resumelink}> <button id="hire-button">Hire Me!</button></a>
        </div>
      </div>
    );
  }

  export default Homepage;