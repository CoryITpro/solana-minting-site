import { ThemeProvider } from "styled-components"
import {
  TeamSection,
  TeamTitle,
  TeamMemberWrapper,
  TeamMember,
  TeamBackgroundWrapper,
} from "./style"
import { TeamMemberInfos } from "constants/team"
import { theme } from "styles/variables"
import TeamBackground from "resources/team-bg.png"

const generateTeamMembers = () =>
  TeamMemberInfos.map((data, index) => (
    <TeamMember key={index} image={data.avatar}>
      <span>{data.name}</span>
      <span>{data.role}</span>
    </TeamMember>
  ))

const Team = () => (
  <ThemeProvider theme={theme}>
    <TeamBackgroundWrapper>
      <img src={TeamBackground} alt="team background" />
    </TeamBackgroundWrapper>
    <TeamSection className="team">
      <TeamTitle>/// The Team ///</TeamTitle>
      <TeamMemberWrapper>{generateTeamMembers()}</TeamMemberWrapper>
    </TeamSection>
  </ThemeProvider>
)

export default Team
