import './Skills.css';

interface SkillsProps {
    urlforskilllogo: string;
    altname: string;
  }
  
  function Skills({ urlforskilllogo, altname }: SkillsProps) {
    return (
      <div id='Skills' className='Skills-mainpage'>
        <h1 className='Skills-heading'>MY SKILLS</h1>
        <div id="line2"></div>
        <div className='skills-container'>
            <div className='skill-item'>
                <img className="icon" src={urlforskilllogo} alt={altname}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo} alt={altname}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo} alt={altname}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo} alt={altname}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo} alt={altname}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo} alt={altname}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo} alt={altname}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo} alt={altname}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo} alt={altname}></img>
                </div>
               
        </div>
    </div>
    );
  }

  export default Skills;