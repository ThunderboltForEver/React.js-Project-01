import './SectionWrapper.css';

const SectionWrapper = (props) => {
    return (
        <>
        <div className="wrapper"><div className = "wrapper-text"><h2>{props.title}</h2> <h3 className='nextTitle'>{props.nextTitle}</h3></div>{props.children}</div>
        </>
    )
}
export default SectionWrapper;