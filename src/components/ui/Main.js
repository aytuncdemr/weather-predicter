import SelectSection from "../appcomponents/SelectSection";
import GeneralProvider from "../context/GeneralProvider";
import ResultsSection from "../appcomponents/ResultsSection";

export default function main() {
    return (
        <main className="min-h-screen">
            <GeneralProvider>
                <SelectSection></SelectSection>
                <ResultsSection></ResultsSection>
            </GeneralProvider>
        </main>
    );
}
