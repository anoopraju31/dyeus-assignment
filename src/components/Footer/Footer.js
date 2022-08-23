import './Footer.css'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { sectionData } from '../../variables/sectionData'
import { FooterLink, HorizontalSeperator, Button } from '../import'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__icon__container">
            <FiFacebook size={24} />
            <FiTwitter size={24} />
        </div>

        <div className="footer__link__container">
            {
                sectionData.footer.links.map(({title, link}, idx) => <FooterLink key={idx} title={title} link={link} />)
            }
        </div>

        <HorizontalSeperator color='#fff' />

        <div className="footer__form__container">
            <p> Subscribe to our Newsletter </p>
            <div className="footer__form">
                <input type="email" placeholder='Enter Eour Email' />
                <Button text='Activate' bg='button__bg__purple' leftIcon />
            </div>
        </div>

    </div>
  )
}

export default Footer