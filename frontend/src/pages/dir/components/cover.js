import React, {useState} from 'react';
import {Button, message, Modal, Space, Upload} from "antd";
import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";
import ImgCrop from "antd-img-crop";
import config from "../../../config";
import {updateDirectoryApi, updateProfileApi} from "../../../api";
import {updateProfileAction} from "../../../redux/actions/auth";
import AvatarImage from "../../../assets/img/banner.jpg";

const {Dragger} = Upload;

const DirCoverEdit = (props) => {
    const { open, setOpen, dir, getHandle } = props

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
        updateDirectoryApi({cover: imgObj?.url, _id: dir._id})
            .then(({data}) => {
                getHandle(dir.slug)
                setOpen(false)
                message.success("Successfully updated the directory cover.")
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <Modal
            open={open}
            onCancel={()=>{setOpen(false)}}
            centered
            footer={false}
            closeIcon={<Icon icon="mdi:close"/>}
            title="Update Cover"
        >
            <ImgCrop
                rotate
                aspect={3}
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
                        (imgObj?.url || dir?.cover) ? (
                            <img src={imgObj?.url || dir?.cover} alt=""/>
                        ) : (
                            <img src={dir?.cover || AvatarImage} alt=""/>
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
                    onClick={()=>{setOpen(false)}}
                >
                    Cancel
                </Button>
                <Button
                    type="primary"
                    className="btn-middle"
                    loading={loading}
                    onClick={updateProfileHandle}>
                    Update
                </Button>
            </Space>
        </Modal>
    );
};

export default DirCoverEdit;
