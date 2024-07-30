import { CreditItem } from "../components/CreditItem";

export default function Credits() {
    return (
        <main className="p-24">
            <h1 className="text-4xl mb-8">Credits</h1>
            <p>This page would not have been possible without the following:</p>
            <ul className="list-disc mt-8 text-gray-500">
                <CreditItem text="Microsoft Designer (yes all the images are AI generated, I can't draw!)" />
                <CreditItem text="NextJS" />
                <CreditItem text="Visual Studio Code" />
            </ul>
        </main>
    )
}