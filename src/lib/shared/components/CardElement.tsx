import {
    BreakdownGraphicDuoProperties,
    BreakdownGraphicProperties,
    Card,
    DetailCardProperties,
    MarqueeCardProperties
} from "../interfaces/interfaces.ts";
import {CardElementMarquee} from "./CardElementMarquee.tsx";
import {CardElementDescription} from "./CardElementDescription.tsx";
import {CardElementGraphic} from "./CardElementGraphic.tsx";
import {CardElementGraphicDuo} from "./CardElementGraphicDuo.tsx";
export function CardElement(properties: Card) {
    const component = () => {
        switch (properties.type) {
            case 'marquee':
                return CardElementMarquee(properties as MarqueeCardProperties);
            case 'detail':
                return CardElementDescription(properties as DetailCardProperties);
            case 'graphic':
                return CardElementGraphic(properties as BreakdownGraphicProperties);
            case 'graphic_duo':
                return CardElementGraphicDuo(properties as BreakdownGraphicDuoProperties);
        }
    }
    return (<>{component()}</>)
}