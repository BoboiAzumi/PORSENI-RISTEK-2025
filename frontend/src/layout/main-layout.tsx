import { ReactNode } from "react";

export function MainLayout({children, color} : {children: ReactNode, color: string}){
    return (
        <div className={`flex justify-center w-full max-w-8xl ${color}`}>
            {children}
        </div>
    )
}