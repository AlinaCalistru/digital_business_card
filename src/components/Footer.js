
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Footer(){
    return(
    <>
    <div className="section footer"> 
        <a className="social-lin"  onClick={() =>
              (window.open( "https://www.linkedin.com/in/alina-calistru/", "_blank"))
            }><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        <a className="social-git"  target="_blank" onClick={() =>
              (window.open( "https://bitbucket.org/alinacalistru/", "_blank"))
            }><FontAwesomeIcon icon={['fab', 'github']} /></a>
  
    </div>
    </>
    );
};

