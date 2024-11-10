import "./style.css";
import vk from "./../../img/icons/vk.png";
import mailru from "./../../img/icons/mailru.png";
import moodle from "./../../img/icons/moodle.png";

const Footer = () => {
    return (  
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://vk.com"><img src={vk} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://mail.ru"><img src={mailru} /></a></li>
                    <li className="social__item"><a href="https://moodle.rea.perm.ru"><img src={moodle} /></a></li>
                </ul>
                <div className="copyright">
                    
                </div>
            </div>
        </div>
    </footer>
    );
}
 
export default Footer;