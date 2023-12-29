
export default function Button({button , onClick}) {

    let buttonClass = '';

    switch (button.type) {
        case 'action':
        buttonClass = 'action-button';
        break;
        case 'digit':
        buttonClass = 'digit-button';
        break;
        case 'operator':
        buttonClass = 'operator-button';
        break;
        default:
        break;
    }
    return (
        <>
            <button className={buttonClass} onClick={() => onClick(button.btn)}>{button.btn}</button>
        </>
    )
}