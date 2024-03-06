import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userProfileAsync } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import ProfileAvatar from '../features/user/Components/ProfileAvatar';
import ProfileSideNav from '../features/user/Components/ProfileSideNav';
import ProfileInfo from '../features/user/Components/ProfileInfo';
import ProfileOrder from '../features/user/Components/ProfileOrder';
import ProfileAddress from '../features/user/Components/ProfileAddress';

const ProfilePage = () => {
    document.title = "Profile";

    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handelProfilePage = () => {
        dispatch(userProfileAsync());
        if(!user) {
            navigate("/login");
        }
    }
    
    useEffect(() => {
        handelProfilePage();
    }, []);

    return (
        // TODO: add the customizations avatar images based on the gender.
        <section className='bg-section'>
            {
                user &&
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <ProfileAvatar />
                            <ProfileSideNav />
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <ProfileInfo />
                            </div>
                            <div className="row">
                                <ProfileOrder />
                                <ProfileAddress />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default ProfilePage