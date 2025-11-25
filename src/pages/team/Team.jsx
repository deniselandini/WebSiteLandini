import React from "react";

import { TEAM_MEMBERS } from "./constants/teamMembers";
import TeamMemberCard from "./TeamMemberCard";
import "./Team.css";

function Team() {
  const membersRow1 = TEAM_MEMBERS.filter((member) => member.row === 1);
  const membersRow2 = TEAM_MEMBERS.filter((member) => member.row === 2);

  return (
    <section id="team" className="section light">
      <div className="container-spaced">
        <h1>
          <strong>IL NOSTRO TEAM</strong>
        </h1>
        <p className="section-slogan">
          Un team multidisciplinare di professionisti al tuo servizio.
        </p>

        <div className="team-grid team-grid-row-2">
          {membersRow1.map((member) => (
            <TeamMemberCard
              key={`${member.name}-${member.surname}`}
              {...member}
            />
          ))}
        </div>

        <div className="team-grid team-grid-row-3">
          {membersRow2.map((member) => (
            <TeamMemberCard
              key={`${member.name}-${member.surname}`}
              {...member}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
