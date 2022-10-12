import './Header.css';
import logo from '../../assests/images/logo.png';
import NavItem , {LinkItem} from '../../components/NavItem/NavItem';


const Header = () => {
    return (
        <>
            <div className="navbar navbar-expand-md navbar-dark text-white navbar-list">
                <div className="container">
                    <a href="/#" className="navbar-brand">
                        <img src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainmenu">
                        <ul className="navbar-nav ms-auto">
                            <NavItem><LinkItem href="#hero">Home</LinkItem></NavItem>
                            <NavItem><LinkItem href="#Browse">Browse</LinkItem></NavItem>
                            <NavItem><LinkItem href="#Details">Details</LinkItem></NavItem>
                            <NavItem><LinkItem href="#Streams">Streams</LinkItem></NavItem>
                            <NavItem><LinkItem href="#Profile">Profile</LinkItem></NavItem>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;