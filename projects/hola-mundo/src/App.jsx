import { TwitterFollowCard } from './TwitterFollowCard';
import './App.css';

export function App(){
    //const addAt = (userName) => `@${userName}`;
    const users = [
        {
            name: 'Jesus Canelon',
            key: 1,
            userName: 'jesus',
            isFollowing: true
        },
        {
            name: 'Angel Torres',
            key: 2,
            userName: 'angel',
            isFollowing: false
        },
        {
            name: 'Elon Musk',
            key: 3,
            userName: 'elornmusk',
            isFollowing: false
        },
        {
            name: 'Jeff Bezos',
            key: 4,
            userName: 'jeffbezos',
            isFollowing: true 
        }
    ];

    return (
        <>
        {users.map(user => {
            const {name, key, userName, isFollowing} = user;
            return(
                <TwitterFollowCard userName={userName} key={key} isFollowing={isFollowing}>{name}</TwitterFollowCard>
            )
        })}
        </>

    )
}