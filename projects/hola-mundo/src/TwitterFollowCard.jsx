import {Button} from './Button/Button';
import './Button/Follow.css';
import { useState } from 'react';

export function TwitterFollowCard (props){
    const [isFollowing, setFollow] = useState(props.isFollowing);
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClass = isFollowing ? 'tw-users-button following' : 'tw-users-button';

    const handleClick = () => {
        setFollow(!isFollowing);
    }

    return (
        <article className='tw-users-article'>
            <header className='tw-users-header'>
                <img className='tw-users-img' src={`https://unavatar.io/${props.userName}`} alt="icono" />
                <div className='tw-users-div'>
                    <strong>{props.children}</strong>
                    <span>@{props.userName}</span>
                </div>
            </header>
            <aside>
                {/* <Button clase='buttonNormal'>Culo</Button> */}
                <button className={buttonClass} onClick={handleClick}>
                    <span className='tw-users-text'>{text}</span>
                    <span className='tw-users-text-unfollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}