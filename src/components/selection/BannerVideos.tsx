import { PropsViewData } from '../../interfaces/selection/IViewData';

export const BannerVideos = ({ ...viewData }: PropsViewData) => {
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
                    visibility: 'visible',
                    transform: 'translate3d(0, 0, 0)'
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
                    visibility: viewData.videoSource === '1' ? 'visible' : 'hidden',
                    transform: 'translate3d(0, 0, 0)'
                }}
            />
        </>
    )
}
