import cls from './AddCommentForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'

import Send from 'shared/assets/icons/common/Send.svg'

import { Input, ThemeInput } from 'shared/ui/Input/Input'
import { IBTheme, IconButton } from 'shared/ui/IconButton/IconButton'
import { Icon } from 'shared/ui/Icon/Icon'
import { getAddNewCommentError, getAddNewCommentText } from '../../model/selectors/addNewCommentSelectors'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/addNewCommentSlice'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer
}

const AddCommentForm = (props: AddCommentFormProps) => {
    const {
        className,
        onSendComment
    } = props

    const dispatch = useAppDispatch()
    const text = useSelector(getAddNewCommentText)
    const error = useSelector(getAddNewCommentError)

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addNewCommentActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input theme={ThemeInput.PRIMARY} value={text} placeholder='Введите ваш комментарий' onChange={onCommentTextChange} />
                <IconButton onClick={onSendHandler} size='large' theme={IBTheme.PRIMARY}>
                    <Icon size='20px' Svg={Send} />
                </IconButton>
            </div>
        </DynamicModuleLoader>
    )
}

export default AddCommentForm
