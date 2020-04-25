import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, setFollowingProgress, requestForUsers } from '../../redux/users-reducer';
import Users from './Users';
import Prealoder from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowingProgress } from '../../redux/Selectors/users-selectors';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestForUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestForUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <div>
            {this.props.isFetching ? <Prealoder /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFollowingProgress={this.props.isFollowingProgress}
                setFollowingProgress={this.props.setFollowingProgress} />
                </div>
    }
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
        toggleIsFetching, setFollowingProgress, requestForUsers
    })
)(UsersContainer);