import './styles.scss';
import { FaLinkedinIn, FaAt, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return(
  <div className="footer">
    <div  className='footer__links'>
    <a href="https://twitter.com/Dehcimal" title="Twitter"><FaTwitter/></a>
    <a href="https://www.linkedin.com/feed/update/urn:li:activity:6855897129152602112/" title="Linkedin"> <FaLinkedinIn/></a>
    <a href="mailto:deh2win@gmail.com" title="Email"> <FaAt/> </a>
    </div>
  </div>
)
  };

export default Footer;
