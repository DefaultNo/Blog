declare module '*.scss' {
    const content: Record<string, string>
    export default content
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
    import type React from 'react'
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare module '*.svg?url' {
    const SVGURL: string
    export default SVGURL
}

declare const __IS_DEV__: boolean
declare const __API__: string
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest'

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>
} : T
