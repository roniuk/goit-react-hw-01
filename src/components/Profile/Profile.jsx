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
    <div>
      <div>
        <img src={image} alt="User avatar" />
        <h1 className={css.user}>{name}</h1>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
