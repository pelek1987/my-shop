import {FieldValues} from 'react-hook-form';
import {FormInputProps} from "./CheckoutFormInput.types";

const CheckoutFormInput = <FormData extends FieldValues>({ label, type, id, name, placeholder, autoComplete, useForm: { register , formState }, onChange }: FormInputProps<FormData>) => {

    const { errors } = formState;

    const maybeErrorMessage = errors[name]?.message;

    const errorMessage = typeof maybeErrorMessage === 'string' ? maybeErrorMessage : null;

    if(type === "checkbox") {
        return (
            <>
                <input
                    id={id}
                    type={type}
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    {...register(name, {
                        onChange
                    })}
                />
                <div className="ml-2">
                    <label htmlFor={id} className="text-sm font-medium text-gray-900">
                        {label}
                    </label>
                </div>
                {errorMessage && <span role="alert" className="text-red-500 text-sm">{errorMessage}</span>}
            </>
        )
    }

    return (
        <>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1">
                <input
                    type={type}
                    id={id}
                    autoComplete={autoComplete}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    {...register(name, {
                        onChange
                    })}
                    placeholder={placeholder}
                />
                {errorMessage && <span role="alert" className="text-red-500 text-sm">{errorMessage}</span>}
            </div>
        </>
    );
};

export default CheckoutFormInput;