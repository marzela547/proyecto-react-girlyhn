function PillButton({ type, text, click }) {
    var myClasses = [
        "w-full",
        "flex",
        "items-center",
        "justify-center",
        "px-8",
        "py-4",
        "border",
        "border-transparent",
        "text-base",
        "font-medium",
        "rounded-md",
        "text-white",
        "text-indigo-700",
        "bg-indigo-100",
        "hover:bg-indigo-200",
        "md:py-4",
        "md:text-lg",
        "md:px-10",
        "my-2"
    ];
    return (
        <button className={myClasses.join(" ")} type={type} onClick={click}>{text}</button>
    );
}
export default PillButton;