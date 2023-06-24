import React from "react";

type Props = {
    children?: React.ReactNode
    onClick?: React.MouseEventHandler,

}

export default function FancyButton({children, onClick}: Props): JSX.Element {
    return (
        <button onClick={onClick} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {/* <button onClick={onClick}  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> */}
            {children}
        </button>
    )
}