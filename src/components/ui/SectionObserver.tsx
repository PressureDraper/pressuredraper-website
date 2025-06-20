import { useContext, useEffect, useRef } from "react";
import { PropsUIContext } from "../../interfaces/context/IUIContext";
import { Box } from "@mui/material";
import { useInView } from "framer-motion";
import { UIContext } from "../../context/UIContext";

interface Props {
    sectionId: string;
}

export const SectionObserver = ({ sectionId }: Props) => {
    const { setActiveSection, setDynamic } = useContext<PropsUIContext>(UIContext);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        if (isInView) {
            setActiveSection(sectionId);
            setDynamic(0);
        }
    }, [isInView, setActiveSection, setDynamic]);

    return <Box ref={ref} sx={{ position: 'absolute' }} />;
}
