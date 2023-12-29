import Button from "./Button"
export default function Keypad({buttons , onClick}) {
    return (
        <div className="keypad">
            {buttons.map((button, index) => (
                <Button key={index} button={button} onClick={onClick} />
            ))}
        </div>
       
    )
}