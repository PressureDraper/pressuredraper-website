import { Tooltip, TooltipProps, styled } from "@mui/material";

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))();

export default CustomTooltip;