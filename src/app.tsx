import './index.css';
import {Header} from './lib/feature-root/components/Header';
import {LeftNavigation} from "./lib/feature-root/components/LeftNavigation.tsx";
import {Content} from './lib/shared/components/Content.tsx';
import {useState} from "react";
import {NavigationProperties} from "./lib/shared/interfaces/interfaces.ts";

export default function App() {

    const struct: NavigationProperties[] = [
        {
            top: {
                title: '3D Studies',
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
                <div className={'d-block d-xxl-none'}>
                    <Header sections={nav}></Header>
                </div>
                <div className="d-flex h-100 position-relative overflow-hidden">
                    <div className={'d-none d-xxl-flex'}>
                        <LeftNavigation sections={nav}></LeftNavigation>
                    </div>
                    <Content></Content>
                </div>
            </div>
        </>
    )
}
