import path from 'path'
import { type BuildPaths } from '../build/types/config'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import { DefinePlugin, type RuleSetRule } from 'webpack'
import type webpack from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    if (config.resolve?.modules) {
        config.resolve.modules.push(paths.src)
    }

    if (config.resolve?.extensions) {
        config.resolve.extensions.push('.ts', '.tsx')
    }

    if (config.module?.rules) {
        // @ts-expect-error @ts-ignore
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            // eslint-disable-next-line @typescript-eslint/prefer-includes
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i }
            }

            return rule
        })
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })
        config.module.rules.push(buildCssLoaders(true))
    }

    if (config.plugins) {
        config.plugins.push(new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook')
        }))
    }

    return config
}
