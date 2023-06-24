import webpack from 'webpack';

import { BuildOptions } from "./types/config";

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options

    return {
        mode: mode, // development или production
        entry: paths.entry, // Стартовая точка приложения
        output: {
          filename: "[name].[contenthash].js",    // Названия финального файла
          path: paths.build,    // Путь где будет храниться финальный файл
          clean: true,    // Чистит файлы при каждом запуске
        },
        plugins: buildPlugins(options),
        module: {
          rules: buildLoaders(options)  // Обработка файлов которые выходят за рамки обычного JS (examples: png, jpeg, gif, css, scss, ts)
        },
        resolve: buildResolvers(options), // Указывает для каких расширений не требуется указывать их тип (.js) при импорте - экспорте
        devtool: isDev ? 'inline-source-map' : undefined, // Карта показывает в каком конкретно файле произошла ошибка
        devServer: isDev ? buildDevServer(options) : undefined  // Сервер

    }
}