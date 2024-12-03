import "./index.css";

export function Button(props){
    const {varient,children} = props;

    return <button className="my-button">{children}</button>;
}
