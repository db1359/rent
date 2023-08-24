import React, {Fragment, useState} from 'react';
import {Avatar, Button, Card, Divider, Dropdown, Input, message, Modal, Timeline} from "antd";
import {FacebookShareButton, TwitterShareButton} from "react-share";
import {Icon} from "@iconify/react";
import {useNavigate} from "react-router-dom";
import {commentsApi, createCommentApi, deleteFeedApi, deleteGroupFeedApi, likeFeedApi} from "../../../api";
import {useSelector} from "react-redux";
import config from "../../../config";
import {getOffsetTime} from "../../../utils/helper/time.helper";

const FeedCard = (props) => {
    const {feed, getHandle, group} = props

    const navigate = useNavigate()

    const auth = useSelector(state => state.auth)

    const [vComment, setVComment] = useState(false);

    const [id, setId] = useState(null);

    const [comments, setComments] = useState([]);

    const [cmt, setCmt] = useState("")

    const likeHandle = (id) => {
        likeFeedApi(id)
            .then(({data}) => {
                getHandle()
                message.success("Successfully update your like.")
            })
            .catch((e) => {
                console.log(e)
                message.error("An error was created when you do like this post. Try again later")
            })
    }

    const commentHandle = (id) => {
        setId(id)
        setVComment(true)
        commentsApi(id)
            .then(({data}) => {
                setComments(data)
                getHandle()
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const addCommentHandle = () => {
        createCommentApi({
            comment: cmt,
            feed: id,
        })
            .then(({data}) => {
                getHandle()
                setVComment(false)
                setCmt("")
                message.success("Successfully added an comment!")
            })
            .catch((e) => {
                console.log(e)
                message.error("An error was created when add comment. try it again later.")
            })
    }

    const shareHandle = (e, id) => {
        if (e.key.includes('view')) {
            navigate(`/${feed?.author?.username}/status/${feed?._id}`)
        } else {
            navigate(`/?repost=${feed?._id}`)
        }
    }

    const deleteHandle = (id) => {
        Modal.confirm({
            title: 'Are you sure?',
            icon: <Icon style={{fontSize: 32, color: "#ff0000"}} icon="material-symbols:warning"/>,
            content: 'Do you want to delete this post?',
            okText: 'Delete',
            cancelText: 'Cancel',
            onOk: () => {
                if(group) {
                    deleteGroupFeedApi(group, id)
                        .then(() => {
                            getHandle()
                            message.success("Successfully deleted the post.")
                        })
                        .catch((e) => {
                            console.log(e)
                            message.error("An error was created during delete the post. try again later")
                        })
                } else {
                    deleteFeedApi(id)
                        .then(() => {
                            getHandle()
                            message.success("Successfully deleted the post.")
                        })
                        .catch((e) => {
                            console.log(e)
                            message.error("An error was created during delete the post. try again later")
                        })
                }
            }
        })
    }

    return (
        <Fragment>
            <div className="content-wrap">
                <div>
                    <div className="feed-header">
                        <div>
                            <Avatar
                                size={50}
                                style={{fontSize: 24, cursor: "pointer"}}
                                src={feed?.author?.photo}
                                onClick={() => {
                                    navigate(`/${feed?.author?.username}`)
                                }}>
                                {feed?.author?.['firstname']?.[0]}
                            </Avatar>
                            <h4
                                onClick={() => {
                                    navigate(`/${feed?.author?.username}`)
                                }}
                                style={{cursor: "pointer"}}>
                                {feed?.author?.['firstname']} {feed?.author?.['lastname']}
                            </h4>
                            <p>@{feed?.author?.username} - {getOffsetTime(feed?.createdAt)}</p>
                        </div>
                        <Dropdown
                            placement="bottomRight"
                            className="share-drop"
                            trigger={['click']}
                            menu={{
                                className: "share-drop-content",
                                onClick: (e) => {
                                    shareHandle(e, feed["_id"])
                                },
                                items: [
                                    {
                                        icon: (
                                            <a
                                                className="react-share__ShareButton social-share-button ant-dropdown-menu-item-icon">
                                                <Icon icon="ic:baseline-remove-red-eye"/>
                                            </a>
                                        ),
                                        key: `view-${feed["_id"]}`,
                                    },

                                    {
                                        icon: (
                                            <FacebookShareButton
                                                className="social-share-button"
                                                url={`${config.host_url}/${feed?.author?.username}/status/${feed?._id}`}>
                                                <Icon icon="ri:facebook-fill"/>
                                            </FacebookShareButton>
                                        ),
                                        key: `facebook-${feed["_id"]}`,
                                    },
                                    {
                                        icon: (
                                            <TwitterShareButton
                                                className="social-share-button"
                                                url={`${config.host_url}/${feed?.author?.username}/status/${feed?._id}`}>
                                                <Icon icon="mdi:twitter"/>
                                            </TwitterShareButton>
                                        ),
                                        key: `twitter-${feed["_id"]}`
                                    }
                                ]
                            }}>
                            <button>
                                <Icon icon="material-symbols:share"/>
                            </button>
                        </Dropdown>
                    </div>
                    {
                        !!feed?.image && (
                            <img className="feed-image" src={feed.image} alt=""/>
                        )
                    }
                    <div className="feeds-content" dangerouslySetInnerHTML={{__html: feed.feed}}/>
                    {
                        feed?.preview?.title && (
                            <Card
                                style={{marginTop: 12}}
                                className="link-preview-card"
                                cover={<img alt="example" src={feed?.preview?.image}/>}
                                onClick={() => {
                                    window.open(feed?.link, "_blank")
                                }}>
                                <h4>{feed?.preview?.title}</h4>
                                <p>
                                    {feed?.preview?.description}
                                </p>
                            </Card>
                        )
                    }

                    {
                        feed?.repost?._id && (
                            <div className="repost-wrap">
                                <div>
                                    <div className="feed-header">
                                        <div>
                                        <Avatar
                                            size={20}
                                            style={{fontSize: 24, cursor: "pointer"}}
                                            src={feed?.repost?.author?.photo}
                                            onClick={() => {
                                                navigate(`/${feed?.repost?.author?.username}`)
                                            }}>
                                            {feed?.repost?.author?.['firstname']?.[0]}
                                        </Avatar>
                                        <h4
                                            onClick={() => {
                                                navigate(`/${feed?.repost?.author?.username}`)
                                            }}
                                            style={{cursor: "pointer"}}>
                                            {feed?.repost?.author?.['firstname']} {feed?.repost?.author?.['lastname']}
                                        </h4>
                                        <p>@{feed?.repost?.author?.username} - {getOffsetTime(feed?.repost?.createdAt)}</p>
                                        </div>
                                    </div>
                                    {
                                        !!feed?.repost?.image && (
                                            <img className="feed-image" src={feed?.repost.image} alt=""/>
                                        )
                                    }
                                    <div
                                        className="feeds-content" dangerouslySetInnerHTML={{__html: feed?.repost.feed}}/>
                                    {
                                        feed?.repost?.preview?.title && (
                                            <Card
                                                style={{marginTop: 12}}
                                                className="link-preview-card"
                                                cover={<img alt="example" src={feed?.repost?.preview?.image}/>}
                                                onClick={() => {
                                                    window.open(feed?.repost?.link, "_blank")
                                                }}>
                                                <h4>{feed?.repost?.preview?.title}</h4>
                                                <p>
                                                    {feed?.repost?.preview?.description}
                                                </p>
                                            </Card>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }

                    <div className="feed-footer">
                        <div>
                            <button
                                onClick={() => {
                                    commentHandle(feed?.['_id'])
                                }}>
                                <Icon icon="ant-design:message-outlined"/> {feed?.comments}
                            </button>
                            <button
                                onClick={() => {
                                    likeHandle(feed?.['_id'])
                                }}
                                className={feed['likes']?.includes(auth?.user?.id) ? "active" : ""}>
                                <Icon icon="mdi:cards-heart"/> {feed["likes"]?.length}
                            </button>
                            <button
                                onClick={() => {
                                    navigate(`/?repost=${feed?._id}`)
                                }}>
                                {/*@TODO: CHANGE THE ICON in icon="[icon name]"*/}
                                <Icon icon="ps:retweet-1"/>
                            </button>
                        </div>
                        <div>
                            {
                                feed?.author?.username === auth?.user?.username && (
                                    <button
                                        onClick={() => {
                                            deleteHandle(feed["_id"])
                                        }}>
                                        <Icon icon="material-symbols:delete-outline-sharp"/>
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Divider/>
            <Modal
                open={vComment}
                centered
                closeIcon={<Icon icon="material-symbols:close"/>}
                title="Comment"
                onCancel={() => {
                    setVComment(false)
                }}
                footer={false}>
                <Timeline
                    style={{padding: '20px 10px'}}>
                    <Timeline.Item
                        dot={
                            <Avatar
                                src={auth?.user?.["photo"]}
                                style={{
                                    backgroundColor: "#ce3daf",
                                    fontSize: 12
                                }}
                                size={32}>
                                {auth?.user?.["firstname"]?.[0]}
                            </Avatar>
                        }
                        style={{paddingBottom: 34}}>
                        <Input.TextArea
                            type="text"
                            placeholder="Type your reply"
                            style={{
                                borderRadius: 12,
                            }}
                            value={cmt}
                            onChange={(e) => {
                                setCmt(e.target.value)
                            }}/>
                    </Timeline.Item>
                    {
                        comments?.map((comment) => (
                            <Timeline.Item
                                key={comment["_id"]}
                                dot={
                                    <Avatar
                                        src={comment?.author?.["photo"]}
                                        style={{
                                            backgroundColor: "#ce3daf",
                                            fontSize: 12
                                        }}
                                        size={32}>
                                        {comment?.author?.["firstname"]?.[0]}
                                    </Avatar>
                                }
                                style={{paddingBottom: 34}}>
                                {comment.comment}
                            </Timeline.Item>
                        ))
                    }

                </Timeline>
                <div style={{textAlign: "right"}}>
                    <Button
                        type="primary"
                        disabled={!cmt}
                        onClick={addCommentHandle}>
                        Write Comment
                    </Button>
                </div>
            </Modal>
        </Fragment>
    );
};

export default FeedCard;
