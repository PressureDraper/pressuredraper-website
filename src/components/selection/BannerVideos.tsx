import { useContext, useEffect } from 'react';
import { PropsViewData } from '../../interfaces/selection/IViewData';
import UIContext from '../../context/UIContext';
import { PropsUIContext } from '../../interfaces/context/IUIContext';

export const BannerVideos = ({ ...viewData }: PropsViewData) => {
    const { setPageLoading } = useContext<PropsUIContext>(UIContext);

    useEffect(() => {
        setPageLoading(false);
    }, [])

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
                    visibility: viewData.videoSource === '2' ? 'visible' : 'hidden'
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
                    visibility: viewData.videoSource === '1' ? 'visible' : 'hidden'
                }}
            />
        </>
    )
}
