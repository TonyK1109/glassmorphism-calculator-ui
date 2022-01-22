import { useState } from "react";

interface IBackgroundProps {
    className?: string;
    id?: string;
    widthSVG: string;
    heightSVG: string;
    viewBoxSVG: string;
    dPath: string;
    fillPath:string;
}

const CustomBackground = (props: IBackgroundProps) => {

    return (
        <div 
        className={props.className} 
        id={props.id}
        >
            <svg
            width={props.widthSVG}
            height={props.heightSVG}
            viewBox={props.viewBoxSVG}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
                <path d={props.dPath} fill={props.fillPath}/>
            </svg>
        </div>
    );
};

export default CustomBackground;