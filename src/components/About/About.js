import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const {photo,name, role, description, resume, social } = about

  const handleDownload = () => {
    window.open('/path/to/your/pdf', '_blank');
  };

  return (
    <div className='about center'>
      {photo && (
       <img height="200px" alt="Avatar placeholder" src={photo} />
      )}
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
         
          <a href='file:///C:\Users\Administrator\Documents\NicProjects\NiccoloPortfolio\HW_20_Portfolio_withReact\public\myCV.pdf'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>

        {social && ( 
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
