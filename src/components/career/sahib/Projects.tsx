import { Button, useMediaQuery } from '@mui/material';
import { projectsInfo } from '../../../helpers/projects/data';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { keyframes } from '@mui/system';
import { useState } from "react";
import { PhoneCardsView } from './PhoneCardsView';
import { DesktopCardsView } from './DesktopCardsView';

export const Projects = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");
    const [showAll, setShowAll] = useState<boolean>(false);
    const visibleProjects = projectsInfo.filter((_, index) => showAll || index < 4);
    const [renderKey, setRenderKey] = useState<number>(0);

    const fadeArrow = keyframes`
        0% {
            opacity: 0;
            transform: translateY(0);
        }
        50% {
            opacity: 1;
            transform: translateY(${showAll ? '-6px' : '6px'});
        }
        100% {
            opacity: 0;
            transform: translateY(${showAll ? '-12px' : '12px'});
        }
        `;

    const handleToggle = () => {
        setShowAll(prev => !prev);
        setRenderKey(prevKey => prevKey + 1);
    };

    return (
        <>
            {
                responsive ?
                    <PhoneCardsView visibleProjects={visibleProjects} renderKey={renderKey} />
                    :
                    <DesktopCardsView visibleProjects={visibleProjects} renderKey={renderKey} />
            }

            {/* Show more / less button */}
            <Button
                startIcon={
                    showAll &&
                    <KeyboardDoubleArrowUpIcon
                        sx={{
                            width: 'auto',
                            height: '27px',
                            mr: '-15px',
                            mb: '-5px',
                            animation: `${fadeArrow} 1.5s ease-in-out infinite`,
                        }}
                    />
                }
                endIcon={
                    !showAll &&
                    <KeyboardDoubleArrowDownIcon
                        sx={{
                            width: 'auto',
                            height: '27px',
                            ml: '-13px',
                            animation: `${fadeArrow} 1.5s ease-in-out infinite`,
                        }}
                    />}
                onClick={handleToggle}
                sx={{
                    mt: 2,
                    mx: 'auto',
                    display: 'block',
                    backgroundColor: 'transparent',
                    color: 'primary.dark',
                    fontStyle: 'italic',
                    transition: 'color 0.4s ease',
                    '&:hover': {
                        color: 'primary.400',
                    },
                    width: '120px'
                }}
                variant="text"
            >
                {showAll ? 'Show Less' : 'Show More'}
            </Button>
        </>
    )
}
