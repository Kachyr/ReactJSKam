import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div> */}
            <div className={s.descriptionBlock}>
                <img className={s.profileImg} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
                <ProfileStatus status={'Hello'} />
                {props.profile.fullName }

            </div>
        </div>
    )
}
// != null ? props.profile.fullName:'There must be a name'
export default ProfileInfo;