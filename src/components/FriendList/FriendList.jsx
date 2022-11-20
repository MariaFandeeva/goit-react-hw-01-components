import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import { FrList, Friend } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FrList className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </Friend>
        );
      })}
    </FrList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
