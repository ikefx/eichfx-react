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

export interface Card {
    type: 'marquee' | 'detail' | 'graphic' | 'graphic_duo';
}

export interface MarqueeCardProperties extends Card {
    title: string,
    description: { text: string, format: string }[],
    imgUri?: string,
    vidUri?: string,
    linkUri?:string,
    footer: string
}

export interface DetailCardProperties extends Card {
    title: string,
    paragraphs: { text: string, format: string }[],
    imgUri?: string,
    vidUri?: string,
    linkUri?: string,
    footer: string,
    footerClass?: string
}

export interface BreakdownGraphicProperties extends Card {
    imgUri: string,
    vidUri: string,
    label: string
}

export interface BreakdownGraphicDuoProperties extends Card {
    imgUri1: string,
    imgUri2: string,
    label: string
}