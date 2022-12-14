import PostPreviewListItem from './PostPreviewListItem'
import styles from './PostPreviewList.module.scss'
import type { PostPreview } from 'types/PostPreview'

export type PostPreviewListProps = {
  postPreviewList: PostPreview[]
}

function PostPreviewList({ postPreviewList }: PostPreviewListProps) {
  if (postPreviewList.length === 0) {
    return null
  }

  return (
    <div className={styles.container}>
      {postPreviewList.map((postPreview) => {
        return (
          <PostPreviewListItem
            key={postPreview.postPath}
            postPreview={postPreview}
          />
        )
      })}
    </div>
  )
}

export default PostPreviewList
