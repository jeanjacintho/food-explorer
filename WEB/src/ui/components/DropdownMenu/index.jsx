import React, { useState } from "react";
import { DropdownContainer, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "./styles";

export function DropdownMenu({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <DropdownContainer>
            {React.Children.map(children, (child) => {
                if (child.type.displayName === 'DropdownMenuTrigger') {
                return React.cloneElement(child, { onClick: toggleMenu });
                }
                if (isOpen && child.type.displayName === 'DropdownMenuContent') { 
                return React.cloneElement(child);
                }
                return null;
            })}
        </DropdownContainer>
    )
}