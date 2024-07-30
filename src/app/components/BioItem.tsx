interface IBioItemProps {
    label: string;
    value?: string;
    values?: string[];
}

export default function BioItem({label, value} : IBioItemProps) {
    return (
        <dl className="text-2xl flex my-4">
            <dt className="mr-8">{label}:</dt>
             
            <dd className="text-gray-600">
                {value}
            </dd>
        </dl>
    )
}