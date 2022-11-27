import {FieldValues, FormState, Path, UseFormRegister} from "react-hook-form";
import {ChangeEventHandler, HTMLInputTypeAttribute} from "react";

export interface FormInputProps<FormData extends FieldValues> {
    label: string;
    id: string;
    name: Path<FormData>;
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    autoComplete?: string;
    useForm: {
        register: UseFormRegister<FormData>;
        formState: FormState<FormData>;
    };
    onChange?: ChangeEventHandler;
}