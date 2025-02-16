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
    linkUri?:string,
    footer: string
}

export interface DetailCardProperties {
    title: string,
    paragraphs: { text: string, format: string }[],
    imgUri?: string,
    vidUri?: string,
    footer: string
}

export interface BreakdownGraphicProperties {
    imgUri: string,
    vidUri: string,
    label: string
}

export interface BreakdownGraphicDuoProperties {
    imgUri1: string,
    imgUri2: string,
    label: string
}