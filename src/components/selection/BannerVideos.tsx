import { useContext, useEffect, useState } from 'react';
import { PropsViewData } from '../../interfaces/selection/IViewData';
import UIContext from '../../context/UIContext';
import { PropsUIContext } from '../../interfaces/context/IUIContext';

export const BannerVideos = ({ ...viewData }: PropsViewData) => {
    const { setPageLoading, selectedUI } = useContext<PropsUIContext>(UIContext);
    const [video, setVideo] = useState(viewData.videoSource)

    useEffect(() => {
        setPageLoading(false);
    }, []);

    useEffect(() => {
        if (selectedUI === 'Sahib') {
            setVideo('2');
        } else {
            setVideo('1');
        }
    }, [selectedUI]);

    return (
        <>
            <video
                src={`${import.meta.env.VITE_APP_BASE_ROUTE}/background2.webm`}
                autoPlay
                loop
                muted
                preload='auto'
                style={{
                    zIndex: -1,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    visibility: video === '2' ? 'visible' : 'hidden'
                }}
            />
            <video
                src={`${import.meta.env.VITE_APP_BASE_ROUTE}/background1.mp4`}
                autoPlay
                loop
                muted
                preload='auto'
                style={{
                    zIndex: -1,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    visibility: video === '1' ? 'visible' : 'hidden'
                }}
            />
        </>
    )
}
