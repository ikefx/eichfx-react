import {BreakdownGraphicDuoProperties} from "../interfaces/interfaces.ts";
export function CardElementGraphicDuo(properties: BreakdownGraphicDuoProperties) {
    return (
        <>
            <div className="row mt-4 mx-0">
                <img src={properties.imgUri1} alt="img" className={'col-6 shadow rounded-0 rounded-start p-0'}/>
                <img src={properties.imgUri2} alt="img" className={'col-6 shadow rounded-0 rounded-end p-0'}/>
                <div className="w-100 my-1 text-center">
                    <span className="text-secondary small">{properties.label}</span>
                </div>
            </div>
        </>
    )
}