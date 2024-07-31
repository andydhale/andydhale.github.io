import BioItem from "../components/BioItem";
import Connect from "../components/Connect";

export default function AboutPage() {
    return (
        <main>
            <div className="p-12 flex max-sm:flex-col">
                <div className="w-4/12 max-sm:w-full">
                    <img src="/images/about_hero.jpeg" className="border-8 border-gray-800 max-md:border-4 max-md:h-auto" />
                </div>
                <div className="w-8/12 max-sm:w-full px-8 max-sm:px-0 max-sm:pt-8">
                    <h1 className="text-black text-4xl max-md:text-xl mb-8">Hero Bio</h1>
                    <BioItem label="Name" value="Andy Hale" />
                    <BioItem label="Job Title" value="Head of Technology" />
                    <BioItem label="Super Power" value="Automating Anything" />
                    <div className="text-2xl max-md:text-lg">
                        <p className="my-4 mr-8">Key Skills:</p>
                        {/* <p className="text-gray-600"> */}
                            <ul className="list-disc pl-10 text-gray-600">
                                <li className="mb-2">20+ Years IT Experience</li>
                                <li className="mb-2">20+ Years C#/.NET Developer Experience</li>
                                <li className="mb-2">Windows Server</li>
                                <li className="mb-2">Office 365</li>
                                <li className="mb-2">Azure</li>
                                <li className="mb-2">Datto</li>
                                <li className="mb-2">Power BI</li>
                                <li className="mb-2">Power Automate</li>
                                <li className="mb-2">Powershell</li>
                            </ul>
                        {/* </p> */}
                    </div>
                    <BioItem label="Weaknesses" value="Sugar (Type 1 Diabetic)" />
                    <div className="text-2xl max-md:text-lg">
                        <p className="my-4 mr-8">Villains:</p>
                        {/* <p className="text-gray-600"> */}
                            <ul className="list-disc pl-10 text-gray-600">
                                <li className="mb-2">Dr Lack of Respect</li>
                                <li className="mb-2">Server Error Man and his 500 Minions</li>
                                <li className="mb-2">The Micro Manager</li>
                            </ul>
                        {/* </p> */}
                    </div>
                    <div className="text-2xl max-md:text-lg">
                        <p className="my-4 mr-8">Backstory:</p>
                        <p className="text-gray-600">
                        Born in the dark streets of north west London, raised into a world of computers, technology and gaming. Can automate anything, doesn’t understand what “impossible” means. Quiet by day, loud when computers don’t work, yet to find his end game challenge to tackle.
                        </p>
                    </div>
                </div>
            </div>
            <Connect />
        </main>
    )
}