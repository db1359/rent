import axios from "axios";
import {loadToken} from "../utils/helper/storage.helper";
import config from "../config";

export const api = axios.create({
    baseURL: config.base_url,
})

const configHeader = () => {
    const token = loadToken();
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export const registerApi = async (data) => api.post('/auth/register', data,)
export const loginApi = async (data) => api.post('/auth/login', data,);
export const profileApi = async () => api.get('/auth/profile', {...configHeader()});
export const updateProfileApi = async (data) => api.post('/auth/update', data, {...configHeader()})
export const confirmEmailApi = async (token) => api.post('/auth/email-confirm', {token});

export const createFeedApi = async (data) => api.post('/feed/create', data, {...configHeader()})
export const myFeedsApi = async (id) => api.get('/feed/my', {...configHeader(), params: {id}})
export const feedsApi = async () => api.get('/feed', {...configHeader()})
export const likeFeedApi = async (id) => api.post('/feed/like', {id}, {...configHeader()})
export const deleteFeedApi = async (id) => api.post("/feed/delete", {id}, {...configHeader()})
export const parseLinkApi = async (link) => api.get("/feed/link", {params: {link}})
export const feedApi = async (id) => api.get(`/feed/single/${id}`, {...configHeader()})

export const commentsApi = async (id) => api.get(`/comment/${id}`)
export const createCommentApi = async (data) => api.post("/comment/create", data, {...configHeader()})

export const usersApi = async () => api.get('/user', {...configHeader()})
export const likeUsersApi = async () => api.get('/user/likes', {...configHeader()})
export const userApi = async (username) => api.get(`/user/${username}`, {...configHeader()})
export const followApi = async (id) => api.post('/user/follow', {id}, {...configHeader()})

export const createRecallApi = async (data) => api.post('/recall/create', data, {...configHeader()})
export const recallsApi = async (state) => api.get('/recall', {params: state});
export const allRecallsApi = async () => api.get('/recall');
export const recallApi = async (id) => api.get(`/recall/${id}`)
export const signRecallApi = async (data) => api.post('/recalls/sign', data)

export const directoriesApi = async (state) => api.get(`/directory?state=${state}`)
export const directoryApi = async (slug) => api.get(`/directory/${slug}`)
export const createDirectoryApi = async (data) => api.post('/directory/create', data, {...configHeader()})
export const updateDirectoryApi = async (data) => api.post('/directory/update', data, {...configHeader()})
export const getMyDirectoriesApi = async () => api.get('/directory/my', {...configHeader()})
export const followDirectoryApi = async (data) => api.post('/directory/follow', data, {...configHeader()})

export const createGroupApi = async (data) => api.post("/group/create", data, {...configHeader()})
export const getMyGroupsApi = async (data) => api.get("/group/my", {...configHeader()})
export const getGroupApi = async (slug) => api.get(`/group/${slug}`, {...configHeader()})
export const deleteGroupApi = async (id) => api.delete(`/group/${id}`, {...configHeader()})
export const getGroupFeedsApi = async (slug) => api.get(`/group/feed/${slug}`, {...configHeader()})
export const createGroupFeedApi = async (data) => api.post('/group/feed/create', data, {...configHeader()})
export const deleteGroupFeedApi = async (group, id) => api.delete(`/group/feed/${group}/${id}`, {...configHeader()})
export const accessRequestGroupApi = async (data) => api.post(`/group/access`, data, {...configHeader()})
export const approveRequestGroupApi = async (data) => api.post(`/group/approve`, data, {...configHeader()})
export const removeMemberApi = async (data) => api.post(`/group/remove`, data, {...configHeader()})
export const groupChannelsApi = async () => api.get("/group/channels/abc", {...configHeader()})
