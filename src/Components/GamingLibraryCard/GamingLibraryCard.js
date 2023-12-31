import './GamingLibraryCard.css';

import { SecondaryButton } from '../Buttons/Buttons';

const GamingLibraryCard = (props) => {
    return (
        <div className='gaming-library-card'>
            <ul>
                <li><img src={props.image} alt=''/></li>
                <li><h4>{props.title}</h4><span>{props.categorey}</span></li>
                <li><h4>Data Added</h4><span>{props.data_added}</span></li>
                <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
                <li><h4>Currently</h4><span>{props.download}</span></li>
                <SecondaryButton>
                    {props.download}
                </SecondaryButton>
            </ul>
        </div>
    )
}

export default GamingLibraryCard