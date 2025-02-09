import {ErrorBoundary, LocationProvider, Route, Router} from "preact-iso";
import {Root} from "../../feature-root/components/Root.tsx";
import {Reel} from "../../feature-reel/Reel.tsx";
import {Breakdown} from "../../feature-breakdown/Breakdown.tsx";
import {Research} from "../../feature-research/Research.tsx";
export function Content() {
    return (
        <>
            <div className="col h-100 bg-white">
                <LocationProvider>
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
                </LocationProvider>
            </div>
        </>
    )
}