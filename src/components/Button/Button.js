import { MdKeyboardArrowRight } from 'react-icons/md'
import { GoMail } from 'react-icons/go'
import './Button.css'

const Button = ({text, bg, leftIcon, rightIcon}) => {
    return (
      <div className={`button ${bg}`}>
        	{  leftIcon && <GoMail /> }
			<h5> {text} </h5>
			{ rightIcon && <MdKeyboardArrowRight /> }
      </div>
  )
}

export default Button