import './NavItem.css';

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
        <a href={props.href} className="nav-link">{props.children}</a>
        </>
    )
}

export default NavItem;
export {LinkItem};