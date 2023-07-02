import React, {useState} from 'react';
import {Button, message, Modal, Space, Upload} from "antd";
import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";
import ImgCrop from "antd-img-crop";
import config from "../../../config";
import {updateProfileApi} from "../../../api";
import {updateProfileAction} from "../../../redux/actions/auth";
import AvatarImage from "../../../assets/img/avatar.jpg";

const {Dragger} = Upload;

const ProfilePhotoEdit = (props) => {
    const { visible, setVisible } = props

    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const [imgObj, setImgObj] = useState({});

    const [loading, setLoading] = useState(false);

    const [fileList, setFileList] = useState([]);

    const fileChange = (info) => {
        setLoading(true)
        setFileList([info.fileList[info.fileList.length - 1]])
        const {status} = info.file;
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            setImgObj(info.fileList[0].response)
            setLoading(false)
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
            setLoading(false)
        }
    }

    const updateProfileHandle = () => {
        updateProfileApi({photo: imgObj?.url})
            .then(({data}) => {
                dispatch(updateProfileAction(data))
                setVisible(false)
                message.success("Successfully updated your profile image.")
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <Modal
            open={visible}
            onCancel={()=>{setVisible(false)}}
            centered
            footer={false}
            closeIcon={<Icon icon="mdi:close"/>}
            title="Update Profile Photo"
        >
            <ImgCrop
                rotate
                aspect={1}
            >
                <Dragger
                    multiple={false}
                    accept="image/png,image/jpeg,image/gif"
                    listType="picture"
                    action={config.base_url + "/file/upload"}
                    onChange={fileChange}
                    showUploadList={false}
                    fileList={fileList}
                >
                    {
                        (imgObj?.url || auth?.user?.photo) ? (
                            <img src={imgObj?.url || auth?.user?.photo} alt=""/>
                        ) : (
                            <img src={auth?.user?.photo || AvatarImage} alt=""/>
                        )
                    }
                </Dragger>
            </ImgCrop>
            <Space
                style={{
                    width:"100%",
                    justifyContent: "flex-end",
                    marginTop: 24
                }}
            >
                <Button
                    className="btn-middle"
                    onClick={()=>{setVisible(false)}}
                >
                    Cancel
                </Button>
                <Button
                    type="primary"
                    className="btn-middle"
                    loading={loading}
                    onClick={updateProfileHandle}
                >
                    Update
                </Button>
            </Space>
        </Modal>
    );
};

export default ProfilePhotoEdit;
