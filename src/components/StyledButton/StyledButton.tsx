import {styled} from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps{
    children:ReactNode
    onClick: () => void
}


const styledButton: React.FC<StyledButtonProps> = ({children,onClick}) =>{

    const StyledButton = styled("button")(({theme})=>({
        background: "transparent",
        border:`1px solid ${theme.palette.primary.contrastText}`,
        borderRadius:"3px",
        padding:"5px 15px",
        width:"100%",
        display:"inline-flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"10px",
        cor:theme.palette.primary.contrastText,
        '&:hover':{
            backgroundColor: theme.palette.secondary.light,
        }
    }))

    return(
        <>
        <StyledButton onClick={onClick}>
        {children}
        </StyledButton>
        </>
    )

}


export default styledButton;