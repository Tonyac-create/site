import { VisitForm } from "../components/forms/VisitForm";
import GridMission from "../components/VisitsPage/GridMissionVisits";
import HeroSectionVisits from "../components/VisitsPage/HeroSectionVisits";

export default function VisitsPage() {
    return (
        <main>
            <HeroSectionVisits />
            <GridMission />
            <VisitForm />
        </main>
    )
}