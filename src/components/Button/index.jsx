import "./index.css";

export function Button(props){
    const {size= "md",varient="primary",children} = props;
    const ClassName = `my-button--${varient} my-button--${size}`;
    return <button className={ClassName}>{children}</button>;
}
export default Button;