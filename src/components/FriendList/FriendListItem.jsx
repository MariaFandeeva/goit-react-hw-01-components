import PropTypes from 'prop-types';
import { Pr, Item, IsOnline } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item className="item">
      <IsOnline IsOnline={isOnline}></IsOnline>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Pr className="name">{name}</Pr>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
