import './Projects.css';

interface ProjectsProps {
    projectName1: string;
    projectName2: string;
    projectName3: string;
    ProjectDescription1: string;
    ProjectDescription2: string;
    ProjectDescription3: string;
    Projectimageurl1: string;
    Projectimageurl2: string;
    Projectimageurl3: string;
    Projectgithuburl1: string;
    Projectgithuburl2: string;
    Projectgithuburl3: string;
    ProjectLiveUrl1: string;
    ProjectLiveUrl2: string;
    ProjectLiveUrl3: string;
  }
  
  function Projects({ projectName1, projectName2, projectName3, ProjectDescription1, ProjectDescription2, ProjectDescription3, Projectimageurl1, Projectimageurl2, Projectimageurl3, Projectgithuburl1, Projectgithuburl2, Projectgithuburl3, ProjectLiveUrl1, ProjectLiveUrl2, ProjectLiveUrl3 }: ProjectsProps) {
    return (
      <div id='Projects' className='projects-mainpage'>
        <h1 className='Project-page-title'>PROJECTS</h1>
        <div id="line3"></div>
        <div className='project-container-1'>
            <div className='project-description-container'>
                <h1 className='project-title'>{projectName1}</h1>
                <p id='description-1' className='project-description'>
                         {ProjectDescription1}
                </p>
                <a href={Projectgithuburl1}><button className='project-github-button'><a href="https://freeimage.host/i/Jgy1riP"><img className="project-button-github-logo" src="https://iili.io/Jgy1riP.md.png" alt="Github" /></a>
                </button></a>
              <a href={ProjectLiveUrl1}><button className='project-website-button'><a href="https://freeimage.host/i/Jr9250u"><img className="project-button-website-logo" src="https://iili.io/Jr9250u.th.png" alt="Jr9250u.th.png"/></a>
                </button></a> 
            </div>
            <div className='project-preview'>
                <img className='project-screenshot' src={Projectimageurl1}>
                </img>
            </div>
        </div>
  
        <div className='project-container-2'>
            <div className='project-description-container'>
                <h1 className='project-title'>{projectName2}</h1>
                <p id='description-2' className='project-description'>
                {ProjectDescription2}
                </p>
                <a href={Projectgithuburl2}><button className='project-github-button'><a href="https://freeimage.host/i/Jgy1riP"><img className="project-button-github-logo" src="https://iili.io/Jgy1riP.md.png" alt="Github" /></a>
                </button></a>
              <a href={ProjectLiveUrl2}><button className='project-website-button'><a href="https://freeimage.host/i/Jr9250u"><img className="project-button-website-logo" src="https://iili.io/Jr9250u.th.png" alt="Jr9250u.th.png" /></a>
                </button></a> 
            </div>
            <div className='project-preview'>
                <img className='project-screenshot' src={Projectimageurl2}></img>
            </div>
        </div>
  
        <div className='project-container-3'>
            <div className='project-description-container'>
                <h1 className='project-title'>{projectName3}</h1>
                <p id='description-3' className='project-description'>
               {ProjectDescription3}
                </p>
                <a href={Projectgithuburl3}><button className='project-github-button'><a href="https://freeimage.host/i/Jgy1riP"><img className="project-button-github-logo" src="https://iili.io/Jgy1riP.md.png" alt="Github" /></a>
                </button></a>
              <a href={ProjectLiveUrl3}><button className='project-website-button'><a href="https://freeimage.host/i/Jr9250u"><img className="project-button-website-logo" src="https://iili.io/Jr9250u.th.png" alt="Jr9250u.th.png" /></a>
                </button></a> 
            </div>
            <div className='project-preview'>
                <img className='project-screenshot' src={Projectimageurl3}></img>
            </div>
        </div> 
        </div>
    );
  }

  export default Projects;