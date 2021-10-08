import { ThemeProvider } from "styled-components"
import { TeamSection, TeamTitle, TeamMemberWrapper, TeamMember } from "./style"
import { TeamMemberInfos } from "constants/team"
import { theme } from "styles/variables"

const generateTeamMembers = () =>
  TeamMemberInfos.map((data, index) => (
    <TeamMember key={index} image={data.avatar}>
      <span>{data.name}</span>
      <span>{data.role}</span>
    </TeamMember>
  ))

const Team = () => (
  <ThemeProvider theme={theme}>
    <TeamSection className="team">
      <TeamTitle>The Team</TeamTitle>
      <TeamMemberWrapper>{generateTeamMembers()}</TeamMemberWrapper>
    </TeamSection>
  </ThemeProvider>
)

export default Team
