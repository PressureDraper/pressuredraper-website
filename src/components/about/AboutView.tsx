import { Grid2, useMediaQuery } from "@mui/material"
import { navBarHeigth, navBarHeigthResponsive } from "../../pages/HomePage";

export const AboutView = () => {
    const responsive: boolean = useMediaQuery("(max-width : 1050px)");

    return (
        <Grid2 sx={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1671%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1672%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1440 0L1421.68 0L1440 9.61z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1421.68 0L1440 9.61L1440 194.66000000000003L1147.76 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M1147.76 0L1440 194.66000000000003L1440 303.46000000000004L1031.01 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M1031.01 0L1440 303.46000000000004L1440 483.88L641.56 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L662.24 560L0 297.45z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 297.45L662.24 560L686.04 560L0 237.44z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 237.44L686.04 560L758.3 560L0 123.53z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 123.52999999999997L758.3 560L1103.53 560L0 111.57999999999997z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1671'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1672'%3e%3cstop stop-color='rgba(245%2c 244%2c 241%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(125%2c 103%2c 81%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: `calc(100vh - ${responsive ? navBarHeigthResponsive : navBarHeigth }px)`
        }}></Grid2>
    )
}
