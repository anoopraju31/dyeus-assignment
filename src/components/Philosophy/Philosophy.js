import './Philosophy.css'
import { SecondaryHeader, PrimaryHeader, TertiaryHeader, EcosystemCard, HorizontalSeperator } from '../import'
import { philosophyData } from '../../variables/philosophy'

const Philosophy = () => {
    return (
		<div className='philosophy'>
			<PrimaryHeader title='About Diana' />
			<SecondaryHeader title='A platform that looks out for you' />
			<p className='first'>  Diana empowers you to understand how your body works so you can look and feel your best. </p>

			<HorizontalSeperator color='#000' />

			<SecondaryHeader className='mt20' title='Our Philosophy' />	
			<PrimaryHeader title='Sustainable wellness is a big-picture, inside out approach' />
			<p className='bold'>Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. </p>
			<p className='bold mt20'> That’s why we’ve created an integrated ecosystem of:  </p>
			{
				philosophyData?.map(({img, text}, idx) => <EcosystemCard key={idx} img={img} text={text} />)
			}

			<p className='mt20'> Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday. </p>
		</div>
    )
}

export default Philosophy