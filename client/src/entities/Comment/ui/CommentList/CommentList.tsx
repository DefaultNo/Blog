import cls from './CommentList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

import { Text } from 'shared/ui/Text/Text'
import { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/types'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
    const {
        className,
        isLoading,
        comments
    } = props

    const isComments = isLoading
        ? <CommentCard isLoading={true} comment={{ id: '1', user: { id: '1', username: 'Loading' }, text: '' }} />
        : comments?.length
            ? comments.map((comment) => {
                return <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />
            })
            : <Text
                position={TextAlign.CENTER}
                theme={TextTheme.TEXT}
                sx={{ size: TextSize.FS18, fontWeight: '600' }}
            >
                Здесь еще ничего нет :С
            </Text>

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            <div className={cls.comments}>
                {isComments}
            </div>
        </div>
    )
}
