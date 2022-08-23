import './FooterLink.css'

const FooterLink = ({link ,title}) => {
  return (
    <div className='footerLink'>
        <a href={link}> 
            {title}  
            <span> {'>'} </span>
        </a>
    </div>
  )
}

export default FooterLink