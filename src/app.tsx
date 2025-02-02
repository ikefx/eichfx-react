import './index.css';
import {Header} from './lib/feature-root/components/Header';
import {LeftNavigation} from "./lib/feature-root/components/LeftNavigation.tsx";
import {Content} from './lib/shared/components/Content.tsx';
import {useState} from "react";
import {NavigationData} from "./lib/shared/interfaces/interfaces.ts";

export default function App() {

    const struct: NavigationData[] = [
        {
            top: {
                title: 'Directory',
                path: '/',
            },
            items: [
                {
                    title: 'Demo Reel',
                    path: '/reel',
                },
                {
                    title: 'Breakdown',
                    path: '/breakdown',
                },
                {
                    title: 'Research',
                    path: '/research',
                },
            ]
        }
    ];

    const [ nav ] = useState(struct);
    return (
        <>
            <div className="d-flex flex-column root-pane">
                <div className="sticky-top">
                    <Header></Header>
                </div>
                <div className="h-100">
                    <div className="d-flex h-100">
                        <LeftNavigation sections={nav}></LeftNavigation>
                        <Content></Content>
                    </div>
                </div>
            </div>
        </>
    )
}
