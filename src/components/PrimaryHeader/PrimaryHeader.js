import './PrimaryHeader.css'

const PrimaryHeader = ({title, tac}) => {
  return (
    <h1 className={`primaryHeader ${tac? 'tac': ''}`}> {title} </h1>
  )
}

export default PrimaryHeader