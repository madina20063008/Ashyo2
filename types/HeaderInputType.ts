import { ChangeEventHandler } from "react"

export interface HeaderInputType {
    placeholder:string,
    type: 'text' | 'password' | 'number' | "tel",
    extraStyle?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: string;
}