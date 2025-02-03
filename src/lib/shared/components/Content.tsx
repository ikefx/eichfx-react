import {ErrorBoundary, LocationProvider, Route, Router} from "preact-iso";
import {RootContent} from "../../feature-root/components/RootContent.tsx";
import {ReelContent} from "../../feature-reel/ReelContent.tsx";
import {BreakdownContent} from "../../feature-breakdown/BreakdownContent.tsx";
import {ResearchContent} from "../../feature-research/ResearchContent.tsx";

export function Content() {
    return (
        <>
            <div className="col h-100 bg-white">
                <LocationProvider>
                    <ErrorBoundary>
                        <Router>
                            <Route default component={RootContent}></Route>

                            <Route path="/reel" component={ReelContent}></Route>

                            <Route path="/breakdown" component={BreakdownContent}></Route>
                            <Route path="/breakdown/terracotta" component={ () => (<BreakdownContent view="terracotta"></BreakdownContent>)}></Route>
                            <Route path="/breakdown/hachiman" component={ () => (<BreakdownContent view="hachiman"></BreakdownContent>)}></Route>
                            <Route path="/breakdown/rubiks" component={ () => (<BreakdownContent view="rubiks"></BreakdownContent>)}></Route>
                            <Route path="/breakdown/tornado" component={ () => (<BreakdownContent view="tornado"></BreakdownContent>)}></Route>
                            <Route path="/breakdown/pointstars" component={ () => (<BreakdownContent view="pointstars"></BreakdownContent>)}></Route>

                            <Route path="/research" component={ResearchContent}></Route>
                            <Route path="/research/aov" component={ () => (<ResearchContent view="aov"></ResearchContent>) }></Route>
                            <Route path="/research/pointclouds" component={ () => (<ResearchContent view="pointclouds"></ResearchContent>) }></Route>
                            <Route path="/research/volumetrics1" component={ () => (<ResearchContent view="volumetrics1"></ResearchContent>) }></Route>
                            <Route path="/research/volumetrics2" component={ () => (<ResearchContent view="volumetrics2"></ResearchContent>) }></Route>
                            <Route path="/research/subsurface" component={ () => (<ResearchContent view="subsurface"></ResearchContent>) }></Route>
                            <Route path="/research/magiclights" component={ () => (<ResearchContent view="magiclights"></ResearchContent>) }></Route>

                            <Route path="/research/fluidprimitives" component={ () => (<ResearchContent view="fluidprimitives"></ResearchContent>) }></Route>
                            <Route path="/research/python1" component={ () => (<ResearchContent view="python1"></ResearchContent>) }></Route>
                            <Route path="/research/magnetforce" component={ () => (<ResearchContent view="magnetforce"></ResearchContent>) }></Route>
                            <Route path="/research/zbrushexport" component={ () => (<ResearchContent view="zbrushexport"></ResearchContent>) }></Route>
                            <Route path="/research/matcaptext" component={ () => (<ResearchContent view="matcaptext"></ResearchContent>) }></Route>

                        </Router>
                    </ErrorBoundary>
                </LocationProvider>
            </div>
        </>
    )
}