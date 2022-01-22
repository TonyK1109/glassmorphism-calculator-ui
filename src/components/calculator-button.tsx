interface ICalculatorButtonProps {
    className?: string;
    id?: string;
    content: any;
}

const CustomCalculatorButton = (props: ICalculatorButtonProps) => {

    return (
        <button 
        className={props.className} 
        id={props.id}
        type="button"
        >
            <span>{props.content}</span>
        </button>
    );
};

export default CustomCalculatorButton;