import { useState } from 'react';
import './calculator.scss'
import CustomBackground from './background';
import CustomCalculatorButton from './calculator-button';

const Calculator = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className="glassmorphism-calculator-ui">
            <div id="bg-00" className="bg-item" >
                <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.4375" width="100%" height="100%" fill="#AB61E4" />
                </svg>
            </div>
            <CustomBackground
                id="bg-01"
                className="bg-item"
                widthSVG="371"
                heightSVG="476"
                viewBoxSVG="0 0 371 476"
                dPath="M371 0H-60V538H371V0Z"
                fillPath="#F56CF0" />
            <CustomBackground
                id="bg-02"
                className="bg-item"
                widthSVG="478"
                heightSVG="430"
                viewBoxSVG="0 0 478 430"
                dPath="M523 0H0V480H523V0Z"
                fillPath="#D2578B" />
            <CustomBackground
                id="bg-03"
                className="bg-item"
                widthSVG="254"
                heightSVG="211"
                viewBoxSVG="0 0 254 211"
                dPath="M254 0H0V211H254V0Z"
                fillPath="#F56CF0" />
            <CustomBackground
                id="bg-04"
                className="bg-item"
                widthSVG="332"
                heightSVG="600"
                viewBoxSVG="0 0 332 600"
                dPath="M338.5 -169L676.68 26V416L338.5 611L0.316986 416V26L338.5 -169Z"
                fillPath="#AB61E4" />
            <CustomBackground
                id="bg-05"
                className="bg-item"
                widthSVG="229"
                heightSVG="344"
                viewBoxSVG="0 0 299 344"
                dPath="M149.5 0L298.889 86V258L149.5 344L0.110992 258V86L149.5 0Z"
                fillPath="#AB61E4" />
            <CustomBackground
                id="bg-06"
                className="bg-item"
                widthSVG="563"
                heightSVG="393"
                viewBoxSVG="0 0 563 393"
                dPath="M281.5 393C436.968 393 563 270.774 563 120C563
             -30.7737 436.968 -153 281.5 -153C126.032 -153 0 -30.7737
              0 120C0 270.774 126.032 393 281.5 393Z"
                fillPath="#7A8DF4" />
            <CustomBackground
                id="bg-07"
                className="bg-item"
                widthSVG="454"
                heightSVG="329"
                viewBoxSVG="0 0 454 329"
                dPath="M46.5 -377L453.965 328.75H-360.965L46.5 -377Z"
                fillPath="#9879F0" />
            <CustomBackground
                id="bg-08"
                className="bg-item"
                widthSVG="590"
                heightSVG="330"
                viewBoxSVG="0 0 590 33"
                dPath="M-11 18L141 281H-163L-11 18Z"
                fillPath="#9879F0" />
            <CustomBackground
                id="bg-09"
                className="bg-item"
                widthSVG="174"
                heightSVG="237"
                viewBoxSVG="0 0 174 237"
                dPath="M174 0H0V237H174V0Z"
                fillPath="#F56CF0" />
            <CustomBackground
                id="bg-10"
                className="bg-item"
                widthSVG="364"
                heightSVG="234"
                viewBoxSVG="0 0 364 234"
                dPath="M182 234C282.516 234 364 152.516 364 52C364
             -48.5158 282.516 -130 182 -130C81.4842 -130 0 -48.5158 
             0 52C0 152.516 81.4842 234 182 234Z"
                fillPath="#7A8DF4" />

            <main className="calculator-wrapper">
                <div className="title-wrapper">
                    <div className="title">Glassmorphism</div>
                    <div className="title">Glassmorphism</div>
                </div>

                <section className={isActive ? "calculator dark" : "calculator"} >
                    <button id="toggler" className="toggle-theme" onClick={toggleClass}>
                        {isActive ?
                            <svg id="light" xmlns="http://www.w3.org/2000/svg" width="1em"
                                height="1em" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                            </svg> :
                            <svg id="dark" xmlns="http://www.w3.org/2000/svg" width="1em"
                                height="1em" fill="currentColor" viewBox="0 0 16 16">
                                {isActive ?
                                    "calculator dark" :
                                    "calculator"}
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                            </svg>
                        }
                    </button>
                    <header className="calculator-header">
                        <div className="calculator-operation">5874 + 2547</div>
                        <div className="calculator-operation-result">7,895</div>
                    </header>
                    <main className="calculator-body">
                    </main>
                    <div className="calculator-button-wrapper">
                        <CustomCalculatorButton className="calculator-button" content={"C"} />
                        <CustomCalculatorButton className="calculator-button"
                            content={
                                <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 10C5 9.83424 5.06585 9.67527 5.18306 9.55806C5.30027 9.44085 5.45924 9.375 5.625 9.375H14.375C14.5408 9.375 14.6997 9.44085 14.8169 9.55806C14.9342 9.67527 15 9.83424 15 10C15 10.1658 14.9342 10.3247 14.8169 10.4419C14.6997 10.5592 14.5408 10.625 14.375 10.625H5.625C5.45924 10.625 5.30027 10.5592 5.18306 10.4419C5.06585 10.3247 5 10.1658 5 10Z" fill="currentColor" />
                                    <circle cx="10" cy="7" r="1" fill="currentColor" />
                                    <circle cx="10" cy="13" r="1" fill="currentColor" />
                                </svg>
                            }
                        />
                        <CustomCalculatorButton className="calculator-button"
                            content={
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                    fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            }
                        />
                        <CustomCalculatorButton className="calculator-button"
                            content={
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                    fill="currentColor" className="bi bi-eraser-fill" viewBox="0 0 16 16">
                                    <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z" />
                                </svg>
                            }
                        />
                        <CustomCalculatorButton className="calculator-button highlight" content={"7"} />
                        <CustomCalculatorButton className="calculator-button highlight" content={"8"} />
                        <CustomCalculatorButton className="calculator-button highlight" content={"9"} />
                        <CustomCalculatorButton className="calculator-button"
                            content={
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                    fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg>
                            }
                        />
                        <CustomCalculatorButton className="calculator-button highlight" content={"4"} />
                        <CustomCalculatorButton className="calculator-button highlight" content={"5"} />
                        <CustomCalculatorButton className="calculator-button highlight" content={"6"} />
                        <CustomCalculatorButton className="calculator-button"
                            content={
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                    fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            }
                        />
                        <CustomCalculatorButton className="calculator-button highlight" content={"1"} />
                        <CustomCalculatorButton className="calculator-button highlight" content={"2"} />
                        <CustomCalculatorButton className="calculator-button highlight" content={"3"} />
                        <CustomCalculatorButton className="calculator-button equal"
                            content={
                                <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.00006 8.625C5.00006 8.45924 5.06591 8.30027 5.18312 8.18306C5.30033 8.06585 5.4593 8 5.62506 8H14.3751C14.5408 8 14.6998 8.06585 14.817 8.18306C14.9342 8.30027 15.0001 8.45924 15.0001 8.625C15.0001 8.79076 14.9342 8.94973 14.817 9.06694C14.6998 9.18415 14.5408 9.25 14.3751 9.25H5.62506C5.4593 9.25 5.30033 9.18415 5.18312 9.06694C5.06591 8.94973 5.00006 8.79076 5.00006 8.625Z" fill="currentColor" />
                                    <path d="M5.00006 12.25C5.00006 12.0842 5.06591 11.9253 5.18312 11.8081C5.30033 11.6908 5.4593 11.625 5.62506 11.625H14.3751C14.5408 11.625 14.6998 11.6908 14.817 11.8081C14.9342 11.9253 15.0001 12.0842 15.0001 12.25C15.0001 12.4158 14.9342 12.5747 14.817 12.6919C14.6998 12.8092 14.5408 12.875 14.3751 12.875H5.62506C5.4593 12.875 5.30033 12.8092 5.18312 12.6919C5.06591 12.5747 5.00006 12.4158 5.00006 12.25Z" fill="currentColor" />
                                </svg>
                            }
                        />
                        <CustomCalculatorButton className="calculator-button highlight"
                            content={
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                    fill="currentColor" className="bi bi-percent" viewBox="0 0 16 16">
                                    <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                </svg>
                            }
                        />
                        <CustomCalculatorButton className="calculator-button highlight" content={"0"} />
                        <CustomCalculatorButton className="calculator-button highlight"
                            content={
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                    fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                </svg>
                            }
                        />
                    </div>
                </section>
                <div className="calculator-back"></div>
            </main>
        </div>
    );
};

export default Calculator