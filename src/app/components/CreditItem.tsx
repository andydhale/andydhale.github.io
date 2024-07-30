interface ICreditItemProps {
    text: string;
}
export function CreditItem({text}: ICreditItemProps) {
    return (
        <li className="py-2">
            { text }
        </li>
    )
}