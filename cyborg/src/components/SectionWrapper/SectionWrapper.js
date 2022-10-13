import './SectionWrapper.css';
import MainButton from '../MainButton/MainButton';

const SectionWrapper = (props) => {
    return (
        <>
            <div className="wrapper"><div className="wrapper-text"><h2>{props.title}</h2> <h3 className='nextTitle'>{props.nextTitle}</h3></div>{props.children}</div>
            <div className='wrapper-button'><MainButton LinkTo='/#'>{props.ButtonValue}</MainButton></div>
        </>
    )
}
export default SectionWrapper;