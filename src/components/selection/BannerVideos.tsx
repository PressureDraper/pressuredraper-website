import { useContext, useEffect, useRef, useState } from 'react';
import { PropsViewData } from '../../interfaces/selection/IViewData';
import UIContext from '../../context/UIContext';
import { PropsUIContext } from '../../interfaces/context/IUIContext';

export const BannerVideos = ({ ...viewData }: PropsViewData) => {
    const { setPageLoading, selectedUI, activeSection } = useContext<PropsUIContext>(UIContext);
    const [videoType, setVideoType] = useState(selectedUI === 'Sahib' ? '2' : '1');
    
    // Refs para controlar los elementos de video directamente
    const videoRef1 = useRef<HTMLVideoElement>(null);
    const videoRef2 = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setPageLoading(false);
    }, []);

    useEffect(() => {
        if (selectedUI === 'Sahib') {
            setVideoType('2');
            videoRef2.current?.play();
            videoRef1.current?.pause();
        } else {
            setVideoType('1');
            videoRef1.current?.play();
            videoRef2.current?.pause();
        }
    }, [selectedUI]);

    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const activeVideo = videoType === '1' ? videoRef1.current : videoRef2.current;
                if (!entry.isIntersecting) {
                    activeVideo?.pause();
                } else {
                    activeVideo?.play();
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = videoType === '1' ? videoRef1.current : videoRef2.current;
        if (currentRef) observer.observe(currentRef);

        return () => observer.disconnect();
    }, [videoType]);

    useEffect(() => {
        // Solo reproducir el video si la sección activa es "Selection"
        const activeVideo = videoType === '1' ? videoRef1.current : videoRef2.current;
        if (activeSection !== 'Selection') {
            activeVideo?.pause();
        } else {
            activeVideo?.play();
        }
    }, [activeSection, videoType]);

    const commonStyles: React.CSSProperties = {
        zIndex: -1,
        position: 'fixed', // Cambiado a fixed para que no "salte" con el scroll
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        willChange: 'transform',
        transform: 'translateZ(0)',
        pointerEvents: 'none',
    };

    return (
        <>
            <video
                ref={videoRef2}
                src={`${import.meta.env.VITE_APP_BASE_ROUTE}/city.webm`}
                className='sahibVideo'
                loop
                muted
                preload='auto'
                style={{
                    ...commonStyles,
                    display: videoType === '2' ? 'block' : 'none',
                }}
            />
            <video
                ref={videoRef1}
                src={`${import.meta.env.VITE_APP_BASE_ROUTE}/space.webm`}
                className='hidelineVideo'
                loop
                muted
                preload='auto'
                style={{
                    ...commonStyles,
                    display: videoType === '1' ? 'block' : 'none',
                }}
            />
        </>
    );
};