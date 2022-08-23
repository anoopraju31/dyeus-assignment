import './Button.css'

const Button = ({text, bg}) => {
  return (
    <div className={`button ${bg}`}>
        {text}
    </div>
  )
}

export default Button