import { TextAreaComponent } from "./styles";

export function TextArea({...rest}) {
    return (
        <TextAreaComponent>
            <textarea {...rest}/>
        </TextAreaComponent>
    )
}