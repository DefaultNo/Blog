import cls from './ChangeArticleDisplayType.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import Compact from 'shared/assets/icons/common/DisplayTypeCompact.svg'
import Single from 'shared/assets/icons/common/DisplayTypeSingle.svg'

import { ArticleDisplayType } from 'entities/Article'
import { IBTheme, IconButton } from 'shared/ui/IconButton/IconButton'
import { Icon } from 'shared/ui/Icon/Icon'
import { memo } from 'react'

export interface ChangeArticleDisplayTypeProps {
    className?: string
    currentDisplayType: ArticleDisplayType
    onChangeDisplayType?: (displayType: ArticleDisplayType) => void
}

const displayTypes = [
    {
        displayType: ArticleDisplayType.COMPACT,
        icon: Compact
    },
    {
        displayType: ArticleDisplayType.SINGLE,
        icon: Single
    }
]

export const ChangeArticleDisplayType = memo((props: ChangeArticleDisplayTypeProps) => {
    const {
        className,
        currentDisplayType,
        onChangeDisplayType
    } = props

    const onClickDisplayType = (newDisplayType: ArticleDisplayType) => () => {
        onChangeDisplayType?.(newDisplayType)
    }

    return (
        <div className={classNames(cls.changeArticleDisplayType, {}, [])}>
            {
                displayTypes.map(displayType => {
                    const isSelected = displayType.displayType === currentDisplayType

                    return (
                        <IconButton
                            key={displayType.displayType}
                            className={classNames(cls.button)}
                            theme={IBTheme.BORDER}
                            selected = {isSelected}
                            onClick={onClickDisplayType(displayType.displayType)}
                        >
                            <Icon size='20px' Svg={displayType.icon} />
                        </IconButton>
                    )
                })
            }
        </div>
    )
})
