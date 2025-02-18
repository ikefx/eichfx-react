import {
    BreakdownGraphicDuoProperties,
    BreakdownGraphicProperties,
    Card,
    DetailCardProperties,
    MarqueeCardProperties
} from "../interfaces/interfaces.ts";
import {MarqueeCard} from "./MarqueeCard.tsx";
import {BreakdownDescription} from "./BreakdownDescription.tsx";
import {BreakdownGraphic} from "./BreakdownGraphic.tsx";
import {BreakdownGraphicDuo} from "./BreakdownGraphicDuo.tsx";

export function CardElement(properties: Card) {
    const component = () => {
        switch (properties.type) {
            case 'marquee':
                return MarqueeCard(properties as MarqueeCardProperties);
            case 'detail':
                return BreakdownDescription(properties as DetailCardProperties);
            case 'graphic':
                return BreakdownGraphic(properties as BreakdownGraphicProperties);
            case 'graphic_duo':
                return BreakdownGraphicDuo(properties as BreakdownGraphicDuoProperties);
        }
    }
    return (<>{component()}</>)
}