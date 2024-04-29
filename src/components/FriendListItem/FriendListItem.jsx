import css from "./FriendListItem.module.css";

export default function FriendListItem(
    { friend: { avatar, name, isOnline } })
{
    return (
        <div>
            <img src={avatar} alt="Avatar" width="70" />
            <p className={css.name}>{name}</p>
            {isOnline === true? <p className={css.isOnline}>Online</p> : <p className={css.isOffline}>Offline</p>  }
        </div>
    )
}