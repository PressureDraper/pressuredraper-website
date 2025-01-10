import { PropsViewData } from '../../interfaces/selection/IViewData';

export const BannerVideos = ({ ...viewData }: PropsViewData) => {
    return (
        <>
            <video
                src={`${import.meta.env.VITE_APP_REACT_ENVIRONMENT === "development" ? '' : '/pressuredraper-website'}/background2.webm`}
                autoPlay
                loop
                muted
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
                src={`${import.meta.env.VITE_APP_REACT_ENVIRONMENT === "development" ? '' : '/pressuredraper-website'}/background1.mp4`}
                autoPlay
                loop
                muted
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
