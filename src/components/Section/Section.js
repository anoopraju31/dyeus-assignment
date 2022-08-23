import { PrimaryHeader, Button, SecondaryHeader, TertiaryHeader } from '../import'
import './Section.css'

const Section = ({contents, bg, button_bg}) => {
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
                <Button text={contents?.buttonTitle} bg={`button${button_bg}`} rightIcon={contents.buttonIcon} />
                { contents?.tertiaryheader !== undefined && <TertiaryHeader title={contents?.tertiaryheader} /> }
            </div>
            {
                !contents?.imgTop &&
                <div className="section__img">
                    {
                        (contents?.img.length === 1)? 
                        <img src={contents?.img[0]} alt="" />:
                        <div className="section__img__grid">
                            { contents?.img.map((img, idx) => <img key={idx} src={img} alt='' />) }
                        </div>
                    }
                    
                </div>
            }
            
        </div>
    )
}

export default Section