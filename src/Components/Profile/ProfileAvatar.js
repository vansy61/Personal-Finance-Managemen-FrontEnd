import React, { useState } from 'react';
import UserApi from "../../Apis/UserApi";
import Helper from "../../utils/helpers";
import Skeleton from "react-loading-skeleton";

const ProfileAvatar = ({user}) => {
  const [uploading, setUploading] = useState(false);
  const [avatar, setAvatar] = useState(user.avatar ? Helper.imageHostUrl(user.avatar) : "./images/avatar.png");

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append('avatar', selectedFile);

    try {
      setUploading(true);
      await Helper.delay(3000); // simulate upload delay
      await UserApi.uploadAvatarCurrentUser(formData);
      Helper.toastSuccess('Tải ảnh đại diện thành công!');
      setAvatar(URL.createObjectURL(selectedFile));
    } catch (err) {
      Helper.toastError('Tải ảnh đại diện thất bại!');
    } finally {
      setUploading(false);
    }
  };

  return (
      <label className="user-con big-con text-center d-block position-relative">
        {
          uploading? (
            <Skeleton width={155} height={155} borderRadius={"50%"} />
          ) : (
            <div>

              <img src={avatar}/>
              <input type="file" onChange={handleFileChange} className="d-none"/>
              <div className="overlay-upload-icon">
                <i className="fa-solid fa-upload"></i>

              </div>
            </div>
          )
        }

      </label>
  )
    ;
};

export default ProfileAvatar;