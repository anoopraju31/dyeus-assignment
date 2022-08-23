import './App.css'
import { Difference, Footer, Navbar, Philosophy, Quote, Section } from './components/import'
import { sectionData } from './variables/sectionData'

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Philosophy />
			<Difference />
			<Section contents={sectionData.wellness} bg='__bg__blue' button_bg='__orange__gradient' />
			<Section contents={sectionData.mood} bg='' button_bg='__blue__gradient' />
			<Section contents={sectionData.trackPeriod} bg='__orange__gradient' button_bg='__orange__gradient' />
			<Section contents={sectionData.consult} bg='__blue__gradient' button_bg='__blue__gradient' />
			<Section contents={sectionData.personalize} bg='__bg__pink' button_bg='__bg__black' />
			<Quote />
			<Footer />
		</div>
	)
}

export default App
