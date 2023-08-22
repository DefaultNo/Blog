// Этот файл возвращает массив лоудеров которые используются в webpack.config.ts
import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { buildBabelLoader } from './loaders/buildBabelLoaders'

export function buildLoaders (options: BuildOptions): RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        type: 'asset',
        resourceQuery: /url/
    }

    const svgUrlLoader = {
        test: /\.svg$/i,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: ['file-loader']
    }

    const typeScriptLoader = {
        test: /\.tsx?$/, // Указываем регулярное выражение по которому находим файлы этого типа
        use: 'ts-loader', // Указываем какой loader использовать для обработки
        exclude: /node_modules/ // Исключаем папку node_modules
    }

    const cssLoader = buildCssLoaders(options.isDev)

    const babelLoader = buildBabelLoader(options)

    return [
        fileLoader,
        svgLoader,
        svgUrlLoader,
        babelLoader,
        typeScriptLoader,
        cssLoader
    ]
}
