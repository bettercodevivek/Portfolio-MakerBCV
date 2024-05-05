import './Skills.css';

interface SkillsProps {
    urlforskilllogo1: string;
    altname1: string;
    urlforskilllogo2: string;
    altname2: string;
    urlforskilllogo3: string;
    altname3: string;
    urlforskilllogo4: string;
    altname4: string;
    urlforskilllogo5: string;
    altname5: string;
    urlforskilllogo6: string;
    altname6: string;
    urlforskilllogo7: string;
    altname7: string;
    urlforskilllogo8: string;
    altname8: string;
    urlforskilllogo9: string;
    altname9: string;
  }
  
  function Skills({ urlforskilllogo1,urlforskilllogo2,urlforskilllogo3,urlforskilllogo4,urlforskilllogo5,urlforskilllogo6,urlforskilllogo7,urlforskilllogo8,urlforskilllogo9, altname1,altname2,altname3,altname4,altname5,altname6,altname7,altname8,altname9 }: SkillsProps) {
    return (
      <div id='Skills' className='Skills-mainpage'>
        <h1 className='Skills-heading'>MY SKILLS</h1>
        <div id="line2"></div>
        <div className='skills-container'>
            <div className='skill-item'>
                <img className="icon" src={urlforskilllogo1} alt={altname1}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo2} alt={altname2}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo3} alt={altname3}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo4} alt={altname4}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo5} alt={altname5}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo6} alt={altname6}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo7} alt={altname7}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo8} alt={altname8}></img>
                </div>
                <div className='skill-item'>
                <img className="icon" src={urlforskilllogo9} alt={altname9}></img>
                </div>
               
        </div>
    </div>
    );
  }

  export default Skills;