import {ErrorBoundary, LocationProvider, Route, Router} from "preact-iso";
import {Root} from "../../feature-root/components/Root.tsx";
import {Reel} from "../../feature-reel/Reel.tsx";
import {Breakdown} from "../../feature-breakdown/Breakdown.tsx";
import {Research} from "../../feature-research/Research.tsx";
import {Header} from "../../feature-root/components/Header.tsx";
import {LeftNavigation} from "../../feature-root/components/LeftNavigation.tsx";
import {NavigationProperties} from "../interfaces/interfaces.ts";
import {useState} from "react";
export function Content() {
    const struct: NavigationProperties[] = [{
        top: { title: '3D Studies', path: '/', },
        items: [ { title: 'Demo Reel', path: '/reel', }, { title: 'Breakdown', path: '/breakdown', }, { title: 'Research', path: '/research', }, ]
    }];
    const [ nav ] = useState(struct);
    return (
        <>
            <div className="d-flex flex-column root-pane">
                <div className={'d-block d-xxl-none'}>
                    <Header sections={nav}></Header>
                </div>
                <div className="d-flex h-100 position-relative overflow-hidden">
                    <div className={'d-none d-xxl-flex'}>
                        <LeftNavigation sections={nav}></LeftNavigation>
                    </div>
                    <div className="col h-100">
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
                </div>
                <footer className="footer mt-auto bg-scheme border-top border-secondary sticky-bottom d-block d-md-none">
                    <nav className="navbar navbar-dark w-100">
                        <div className="container-fluid">
                            <ul className="nav nav-underline w-100">
                                <li className={'nav-item col text-center'}>
                                    <a className={'nav-link text-secondary'} href="/demo">Demo Reel</a>
                                </li>
                                <li className={'nav-item col text-center'}>
                                    <a className={'nav-link text-secondary'} href="/breakdown">Breakdown</a>
                                </li>
                                <li className={'nav-item col text-center'}>
                                    <a className={'nav-link text-secondary'} href="/research">Research</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </footer>
            </div>
        </>
    )
}