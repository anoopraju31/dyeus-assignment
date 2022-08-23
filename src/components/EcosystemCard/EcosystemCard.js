import './EcosystemCard.css'

const EcosystemCard = ({img, text}) => {
  return (
    <div className='ecosystemCard'>
        <div className="ecosystemCard__img">
            <img src={img} alt="" />
        </div>

        <div className="ecosystem__text">
            <p> {text} </p>
        </div>
    </div>
  )
}

export default EcosystemCard