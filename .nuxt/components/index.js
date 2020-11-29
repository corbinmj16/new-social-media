export { default as IconComment } from '../../components/IconComment.vue'
export { default as IconHome } from '../../components/IconHome.vue'
export { default as IconLike } from '../../components/IconLike.vue'
export { default as IconLogo } from '../../components/IconLogo.vue'
export { default as IconMail } from '../../components/IconMail.vue'
export { default as IconUser } from '../../components/IconUser.vue'
export { default as NavBar } from '../../components/NavBar.vue'
export { default as NewPost } from '../../components/NewPost.vue'
export { default as Post } from '../../components/Post.vue'
export { default as PostComment } from '../../components/PostComment.vue'

export const LazyIconComment = import('../../components/IconComment.vue' /* webpackChunkName: "components/IconComment" */).then(c => c.default || c)
export const LazyIconHome = import('../../components/IconHome.vue' /* webpackChunkName: "components/IconHome" */).then(c => c.default || c)
export const LazyIconLike = import('../../components/IconLike.vue' /* webpackChunkName: "components/IconLike" */).then(c => c.default || c)
export const LazyIconLogo = import('../../components/IconLogo.vue' /* webpackChunkName: "components/IconLogo" */).then(c => c.default || c)
export const LazyIconMail = import('../../components/IconMail.vue' /* webpackChunkName: "components/IconMail" */).then(c => c.default || c)
export const LazyIconUser = import('../../components/IconUser.vue' /* webpackChunkName: "components/IconUser" */).then(c => c.default || c)
export const LazyNavBar = import('../../components/NavBar.vue' /* webpackChunkName: "components/NavBar" */).then(c => c.default || c)
export const LazyNewPost = import('../../components/NewPost.vue' /* webpackChunkName: "components/NewPost" */).then(c => c.default || c)
export const LazyPost = import('../../components/Post.vue' /* webpackChunkName: "components/Post" */).then(c => c.default || c)
export const LazyPostComment = import('../../components/PostComment.vue' /* webpackChunkName: "components/PostComment" */).then(c => c.default || c)
