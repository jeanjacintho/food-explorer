import { NumberPickerContainer } from "./styles";

import { PiPlus, PiMinus } from "react-icons/pi";

export function NumberPicker({number, setNumber}) {
    const incrementNumber = () => {
        setNumber(number + 1);
    };

    const decrementNumber = () => {
        if (number > 1) {
            setNumber(number - 1);
        }
    };

    return (
        <NumberPickerContainer>
            <button onClick={decrementNumber}><PiMinus /></button>
            <span>{number < 10 ? `0${number}` : number}</span>
            <button onClick={incrementNumber}><PiPlus /></button>
        </NumberPickerContainer>
    )
}