"use client";
import Team from "./Team";
import TeamImage from "./TeamImage";
import TeamImage2 from "./TeamImage2";
import { team } from "../SiteMaps/data";

export default function TeamPage() {
  return (
    

    <div className="container flex flex-col lg:py-6 lg:px-0 p-6 mx-auto nine20"  id="team">
        
      {/* Team-Image and Team-Management Section */}
      <div className="w-full lg:flex justify-between cursor-pointer">
        <Team/> 
        <TeamImage team={team.management}/>
      </div>

      {/* Team-Operations-Management Section */}
      <div className="w-full lg:flex cursor-pointer">
        <TeamImage2 team={team.operations} />
      </div>

    </div>
  );
}
