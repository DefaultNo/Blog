import cls from './CommentCard.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Comment } from '../../model/types/comment'

// ICONS
import Calendar from 'shared/assets/icons/common/Calendar.svg'
import Reply from 'shared/assets/icons/common/CommentReply.svg'
import Like from 'shared/assets/icons/common/CommentLike.svg'
import Dislike from 'shared/assets/icons/common/CommentDislike.svg'

// SHARED
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { TextLH, TextSize, TextTheme } from 'shared/ui/Text/types'
import { Icon } from 'shared/ui/Icon/Icon'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { IBTheme, IconButton } from 'shared/ui/IconButton/IconButton'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
    className?: string
    isLoading?: boolean
    comment: Comment
}

export const CommentCard = (props: CommentCardProps) => {
    const {
        className,
        isLoading,
        comment
    } = props

    const {
        id,
        user,
        text
    } = comment

    const userPath = `${RoutePath.profile}${user.id}`

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, { [cls.isLoading]: isLoading }, [className])}>
                <div className={cls.header}>
                    <Skeleton borderRadius='50%' width='40px' height='40px' />
                    <div style={{ flex: '1 1 auto' }} className={cls.info}>
                        <Skeleton width='140px' height='16px' />
                        <Skeleton width='100px' height='12px' />
                    </div>
                </div>
                <div className={cls.body}>
                    <Skeleton width='600px' height='16px' />
                    <Skeleton width='460px' height='16px' />
                </div>
                <div className={cls.footer}>
                    <Skeleton width='80px' height='16px' />
                    <div style={{ flex: '1 1 auto' }} className={cls.estimate}>
                        <Skeleton width='30px' height='30px' />
                        <Skeleton width='30px' height='30px' />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                <AppLink to={userPath}>
                    <Avatar className={cls.avatar} src='#' size='40px' />
                </AppLink>
                <div className={cls.info}>
                    <AppLink to={userPath}>
                        <Text
                            className={cls.username}
                            type='h4' sx={{ fontWeight: '700' }}
                        >
                            {user.username}
                        </Text>
                    </AppLink>
                    <div className={cls.date}>
                        <Icon Svg={Calendar} size='12px' />
                        <Text
                            className={cls.dateText}
                            type='span'
                            sx={{ size: TextSize.FS14, fontWeight: '500' }}
                            theme={TextTheme.TEXT}
                        >
                            8:50 PM
                        </Text>
                    </div>
                </div>
            </div>
            <div className={cls.body}>
                <Text sx={{ fontWeight: '500', lineHeight: TextLH.LH125 }}>{text}</Text>
            </div>
            <div className={cls.footer}>
                <Button theme={ThemeButton.TEXT} className={cls.reply}>
                    <Icon Svg={Reply} />
                    <Text type='span' sx={{ fontWeight: '700' }}>Reply</Text>
                </Button>
                <div className={cls.estimate}>
                    <div className={cls.estimateItem}>
                        <IconButton theme={IBTheme.BORDER} className={cls.estimateIcon}>
                            <Icon Svg={Like} />
                        </IconButton>
                        <Text type='span' theme={TextTheme.TEXT} sx={{ fontWeight: '700' }}>23</Text>
                    </div>
                    <div className={cls.estimateItem}>
                        <IconButton theme={IBTheme.BORDER} className={cls.estimateIcon}>
                            <Icon Svg={Dislike} />
                        </IconButton>
                        <Text type='span' theme={TextTheme.TEXT} sx={{ fontWeight: '700' }}>5</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}
