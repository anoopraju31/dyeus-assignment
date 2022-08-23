import './App.css'
import { Footer, Navbar, Philosophy, Section } from './components/import'
import { sectionData } from './variables/sectionData'

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Philosophy />
			<Section contents={sectionData.wellness} bg='__bg__blue' />
			<Section contents={sectionData.trackPeriod} bg='__orange__gradient' />
			<Section contents={sectionData.consult} bg='__blue__gradient' />
			<Section contents={sectionData.personalize} bg='__bg__pink' />
			<Footer />
		</div>
	)
}

export default App
