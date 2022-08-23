import { GiHamburgerMenu } from 'react-icons/gi'
import { BsCart2 } from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiFillSignal, AiOutlineWifi } from 'react-icons/ai'
import { BsBatteryHalf } from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {

    return (
    	<div className='navbar'>
			<div className="navbar__statusBar">
				<div className="navbar__statusBar_time">9:20</div>
				<div className="navbar__space"></div>
				<div className="navbar__statusBar_signal navbar__icon_mr">
					<AiFillSignal />
				</div>
				<div className="navbar__statusBar_wifi navbar__icon_mr">
					<AiOutlineWifi />
				</div>
				<div className="navbar__statusBar_battery">
					<BsBatteryHalf />
				</div>
			</div>
			<div className="navbar__container">
				<div className="navbar__icon">
					<GiHamburgerMenu size={20} />
				</div>
				<div className="navbar__space"></div>
				<div className="navbar__icon_mr navbar__icon">
					<BsCart2 size={20} />
				</div>
				<div className="navbar__icon">
					<IoMdNotificationsOutline size={20} />
				</div>
			</div>

      	</div>
    )
}

export default Navbar