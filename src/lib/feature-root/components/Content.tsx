import {ErrorBoundary, LocationProvider, Route, Router,} from "preact-iso";
import {Root} from "../Root.tsx";
import {Reel} from "../../feature-reel/Reel.tsx";
import {Breakdown} from "../../feature-breakdown/Breakdown.tsx";
import {Research} from "../../feature-research/Research.tsx";
import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";
import {LeftNavigation} from "../../shared/components/LeftNavigation.tsx";
import {data} from "../definitions.ts";
import {useState} from "react";
export function Content() {
    const [ nav ] = useState(data);
    const definitions = data.items.reduce((acc, val) => {
        if (val.children?.length) {
            acc[val.path] = val.children
        }
        return acc;
    }, {});
    return (
        <>
            <LocationProvider>
                <div className="d-flex flex-column root-pane overflow-hidden">
                    <div className={'d-block d-xxl-none'}>
                        <Header section={nav} expand={definitions}></Header>
                    </div>
                    <div className="d-flex flex-grow-1 position-relative overflow-hidden">
                        <div className={'d-none d-xxl-flex'}>
                            <LeftNavigation sections={[nav]}></LeftNavigation>
                        </div>
                        <div className="col h-100">
                            <ErrorBoundary>
                                <Router>
                                    <Route default component={Root}></Route>
                                    <Route path="/reel" component={Reel}></Route>
                                    <Route path="/breakdown" component={Breakdown}></Route>
                                    <Route path="/breakdown/terracotta" component={ () => (<Breakdown view="terracotta"></Breakdown>)}></Route>
                                    <Route path="/breakdown/hachiman" component={ () => (<Breakdown view="hachiman"></Breakdown>)}></Route>
                                    <Route path="/breakdown/rubiks" component={ () => (<Breakdown view="rubiks"></Breakdown>)}></Route>
                                    <Route path="/breakdown/tornado" component={ () => (<Breakdown view="tornado"></Breakdown>)}></Route>
                                    <Route path="/breakdown/pointstars" component={ () => (<Breakdown view="pointstars"></Breakdown>)}></Route>
                                    <Route path="/research" component={Research}></Route>
                                    <Route path="/research/aov" component={ () => (<Research view="aov"></Research>) }></Route>
                                    <Route path="/research/pointclouds" component={ () => (<Research view="pointclouds"></Research>) }></Route>
                                    <Route path="/research/volumetrics1" component={ () => (<Research view="volumetrics1"></Research>) }></Route>
                                    <Route path="/research/volumetrics2" component={ () => (<Research view="volumetrics2"></Research>) }></Route>
                                    <Route path="/research/subsurface" component={ () => (<Research view="subsurface"></Research>) }></Route>
                                    <Route path="/research/magiclights" component={ () => (<Research view="magiclights"></Research>) }></Route>
                                    <Route path="/research/fluidprimitives" component={ () => (<Research view="fluidprimitives"></Research>) }></Route>
                                    <Route path="/research/python1" component={ () => (<Research view="python1"></Research>) }></Route>
                                    <Route path="/research/magnetforce" component={ () => (<Research view="magnetforce"></Research>) }></Route>
                                    <Route path="/research/zbrushexport" component={ () => (<Research view="zbrushexport"></Research>) }></Route>
                                    <Route path="/research/matcaptext" component={ () => (<Research view="matcaptext"></Research>) }></Route>
                                    <Route path="/research/usgs" component={ () => (<Research view="usgs"></Research>) }></Route>
                                </Router>
                            </ErrorBoundary>
                        </div>
                    </div>
                    <Footer section={nav}></Footer>
                </div>
            </LocationProvider>
        </>
    )
}