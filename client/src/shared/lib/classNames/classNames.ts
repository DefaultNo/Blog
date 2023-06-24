type Mods = Record<string, boolean | string>

/*
    Record - обьект ключ которого это строка, а значение boolean или строка;

    classNames('main', {hovered: true, selecteble: false}, ['pdg'])
    Object.entries(mods) = ['hovered', true]

*/
export function classNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className
        )
    ].join(' ')
}
