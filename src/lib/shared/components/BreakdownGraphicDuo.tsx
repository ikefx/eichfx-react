import {BreakdownGraphicDuoProperties} from "../interfaces/interfaces.ts";
export function BreakdownGraphicDuo(properties: BreakdownGraphicDuoProperties) {
    return (
        <>
            <div className="mt-4">
                <div className="d-inline-block w-50" style={'height: fit-content'}>
                    <img src={properties.imgUri1} alt="img" className={'d-flex w-100 rounded-0 rounded-start shadow'}/>
                </div>
                <div className="d-inline-block w-50" style={'height: fit-content'}>
                    <img src={properties.imgUri2} alt="img" className={'d-flex w-100 rounded-0 rounded-end shadow'}/>
                </div>
                <div className="w-100 text-center">
                    <span className="text-secondary small">{properties.label}</span>
                </div>
            </div>
        </>
    )
}