import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, requestForUsers } from '../../redux/users-reducer';
import Users from './Users';
import Prealoder from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowingProgress } from '../../redux/Selectors/users-selectors';
import { useEffect } from 'react';

const UsersContainer = (props) => {
    useEffect(() => {
        props.requestForUsers(props.currentPage, props.pageSize);
    }, []);

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.requestForUsers(pageNumber, props.pageSize);
    }

    return (
        <div>
            {props.isFetching ? <Prealoder /> : null}
            <Users totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={onPageChanged}
                users={props.users}
                follow={props.follow}
                unfollow={props.unfollow}
                isFollowingProgress={props.isFollowingProgress} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state)
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow,
        setUsers, setCurrentPage, setTotalUsersCount,
        toggleIsFetching, requestForUsers
    })
)(UsersContainer);