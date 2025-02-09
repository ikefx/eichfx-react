export interface LeftNavigationProperties {
    top: {
        title: string,
        path: string
    },
    items: {
        title: string,
        path: string
    }[]
}

export interface MarqueeCardProperties {
    title: string,
    description: string,
    imgUri?: string,
    vidUri?: string,
    footer: string
}