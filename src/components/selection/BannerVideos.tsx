import { PropsViewData } from '../../interfaces/selection/IViewData';

export const BannerVideos = ({ ...viewData }: PropsViewData) => {
    return (
        <>
            <video
                className="animate__animated animate__fadeIn 1"
                src="/background2.mp4"
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
                className="animate__animated animate__fadeIn"
                src="/background1.mp4"
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
