import { PrimaryHeader, Button, SecondaryHeader, TertiaryHeader } from '../import'
import './Section.css'

const Section = ({contents, bg}) => {
    console.log(contents);
    return (
        <div className='section'>
            <div className={`section__container section${bg}`}>
                {contents?.secondaryHeader && <SecondaryHeader title={contents.secondaryHeader} /> }
                {contents?.primaryHeader !== undefined && <PrimaryHeader title={contents.primaryHeader} /> }
                {
                    contents?.imgTop &&
                    <div className="section__img__top ">
                        <img src={contents?.img[0]} alt="" />
                    </div>
                }
                <p> {contents?.content[0]} </p>
                <Button text={contents?.buttonTitle} bg={`button${bg}`} />
                { contents?.tertiaryheader !== undefined && <TertiaryHeader title={contents?.tertiaryheader} /> }
            </div>
            <div className="section__img">
                {
                    !contents?.imgTop && <img src={contents?.img[0]} alt="" />
                }
                
            </div>
        </div>
    )
}

export default Section