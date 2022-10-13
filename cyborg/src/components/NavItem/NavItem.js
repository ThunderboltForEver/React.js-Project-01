import './NavItem.css';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <>
        <li className="nav-item">{props.children}</li>
        </>
    )
}


const LinkItem = (props) => {
    return (
        <>
        <Link to={props.href} className="nav-link">{props.children}</Link>
        </>
    )
}

export default NavItem;
export {LinkItem};