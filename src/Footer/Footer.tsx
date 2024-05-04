import './Footer.css';

interface FooterProps {
    mailaddress: string;
    GithubUserUrl: string;
    LinkedinUserUrl: string;
    InstagramUserUrl: string;
  }
  
  function Footer({ mailaddress, GithubUserUrl, LinkedinUserUrl, InstagramUserUrl }: FooterProps) {
    return (
      <div id='Footer' className='Footer-mainpage'>
        <div className='Footer-container'>
          <h1 className='footer-title'>Get In Touch</h1>
          <p className='footer-paragraph-1'>
            Thank you for exploring my portfolio.<br></br> I'd love to connect with you!<br></br> Feel free to reach out for collaborations,
            opportunities, or just to say hello.<br></br>
          </p>
          <a href={mailaddress}> <button className='Say-hello-button'>Say Hello</button></a>
          <div className='social-handle-container'>
            <a href={GithubUserUrl} className='github-link' id='github-link'>
              <img className="github-logo" src="https://iili.io/Jgy1riP.md.png" alt="Github" />
            </a>
            <a href={LinkedinUserUrl} className='linkedin-link' id='linkedin-link'>
              <img className="linkedin-logo" src="https://iili.io/JgyNYhu.md.png" alt="LinkedIn" />
            </a>
            <a href={InstagramUserUrl} className='instagram-link' id='instagram-link'>
              <img className="instagram-logo" src="https://iili.io/JgyNaLb.md.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  
  export default Footer;