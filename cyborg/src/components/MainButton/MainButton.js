import './MainButton.css';

const MainButton = (props) => {
    return (
        <>
        <a href = {props.LinkTo} alt='' className='main-button'>{props.children}</a>
        </>
    );
}
export default MainButton;