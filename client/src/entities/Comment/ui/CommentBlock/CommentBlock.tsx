import cls from './CommentBlock.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { CommentList } from '../CommentList/CommentList'
import { type Comment } from 'entities/Comment/model/types/comment'
import { TextSize } from 'shared/ui/Text/types'
import { Text } from 'shared/ui/Text/Text'
import AddCommentForm from 'features/addNewComment/ui/AddCommentForm/AddCommentForm'

interface CommentBlockProps {
    className?: string
    isLoading?: boolean
    comments: Comment[]
    onSendComment: (text: string) => void
}

export const CommentBlock = (props: CommentBlockProps) => {
    const {
        className,
        isLoading,
        comments,
        onSendComment
    } = props

    return (
        <div className={classNames(cls.CommentBlock, {}, [className])}>
            <Text sx={ { size: TextSize.FS24, fontWeight: '700' } }>Комментарии:</Text>
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments} isLoading={isLoading} />
        </div>
    )
}
