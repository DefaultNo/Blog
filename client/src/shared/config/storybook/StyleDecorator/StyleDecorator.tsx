import { type StoryFn } from '@storybook/react'
import 'app/styles/index.scss'

export const StyleDecorator = (story: () => StoryFn) => {
    return (
        <div>
            {
                story()
            }
        </div>
    )
}
