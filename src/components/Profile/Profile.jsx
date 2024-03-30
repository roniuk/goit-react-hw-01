import css from './Profile.module.css';

export default function Profile(
   {
    name,
    tag,
    location,
    image,
    stats
  }
) {
  return (
    <div className={css.container}>
      <div className={css.likes}>
        <img className={css.imageUser}  src={image} alt="User avatar" />
        <h1 className={css.user}>{name}</h1>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.likesList}>
        <li className={css.lishka}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.lishka}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.lishka}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
