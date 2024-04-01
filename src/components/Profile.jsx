import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.cardWrapper}>
      <div className={css.firstChapter}>
        <img
          className={css.avatar}
          src={image}
          alt={name}
          width="160"
          height="160"
        />
        <p className={css.username}> {name} </p>
        <p className={css.tag}> {tag} </p>
        <p className={css.location}> {location} </p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span className={css.stats}>Followers</span>
          <span className={css.numbers}>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.stats}>Views</span>
          <span className={css.numbers}>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.stats}>Likes</span>
          <span className={css.numbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
