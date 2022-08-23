import './Philosophy.css'
import { SecondaryHeader, PrimaryHeader, EcosystemCard } from '../import'
import { philosophyData } from '../../variables/philosophy'

const Philosophy = () => {
    return (
		<div className='philosophy'>
			<SecondaryHeader title='Our Philosophy' />	
			<PrimaryHeader title='Sustainable wellness is a big-picture, inside out approach' />
			<p>Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. </p>
			<p> That’s why we’ve created an integrated ecosystem of:  </p>
			{
				philosophyData?.map(({img, text}, idx) => <EcosystemCard key={idx} img={img} text={text} />)
			}
		</div>
    )
}

export default Philosophy