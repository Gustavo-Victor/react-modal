import { ModalStyle } from "./styled"; 
import { modalProps } from "../../types/modalProps"; 


export default function Modal({ isOpen, children } : modalProps) {    
    return (
        <>
        {isOpen && (
            <ModalStyle>
                {children}
            </ModalStyle>
        )}
        </>
    )
}