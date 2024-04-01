import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendWrapper}>
      <img src={avatar} alt={name} width="72" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.marker, isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
