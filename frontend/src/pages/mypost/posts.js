import React, {Fragment} from 'react';
import {Divider, Space} from "antd";
import FeedCardWrap from "../../components/card/feed/style/wrap";
import FeedCard from "../../components/card/feed";

const MyPosts = (props) => {

    const {feeds, getHandle} = props

    return (
        <Space
            direction="vertical"
            style={{width: "100%", marginTop: 24}}
            size={14}>
            <FeedCardWrap>
                {
                    feeds.length > 0 ? (
                        feeds.map((feed, key) => (
                            <Fragment key={`feed-${key}`}>
                                <FeedCard
                                    feed={feed}
                                    getHandle={getHandle}
                                />
                                {/* <Divider/> */}
                            </Fragment>
                        ))
                    ) : (
                        <h3>No posts yet.</h3>
                    )
                }
            </FeedCardWrap>
        </Space>
    );
};

export default MyPosts;
