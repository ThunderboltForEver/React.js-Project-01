import './Container.css';

const Container = (props) => {
    return (
        <>
        <div className="page-content">{props.children}</div>
        </>
    )
}

export default Container;