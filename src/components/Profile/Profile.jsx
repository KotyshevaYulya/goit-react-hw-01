import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
    return (
        <div className={css.container}>
        <div className={css.profileInfo}>
    <img
            src={image}
            alt="User avatar"
            className={css.avatar}
          />
    <p className={css.textName}>{name}</p>
    <p className={css.textTag}>@{tag}</p>
    <p className={css.textLocation}>{location}</p>
  </div>
<ul className={css.profileList}>
          <li className={css.profileItem}>
            <div>
      <span>Followers</span>
              <span className={css.quantity}>{followers}</span>
              </div>
    </li>
    <li className={css.profileItem}>
      <span>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li className={css.profileItem}>
      <span>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
        </div>

    );
}