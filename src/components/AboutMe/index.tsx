import { Text } from "@/styles/Text";
import { Container } from "@/styles/Global";
import { AboutMeSection, AboutMeTittle } from "./style";
import { Button } from "@/styles/Buttons";

export const AboutMe = (): JSX.Element => {
  return (
    <AboutMeSection id="about-me">
      <Container>
        <div>
          <AboutMeTittle as="h1" type="heading1" color="grey3">
            About{" "}
            <Text as="span" type="heading1" color="brand1">
              Me
            </Text>
          </AboutMeTittle>
          <Text type="heading3" color="grey2">
            Hello there, I am Matheus Gualtieri, and I{" "}
            <Text as="span" type="heading2" color="brand1">
              love
            </Text>{" "}
            technology since I was little.
          </Text>
          <Text type="heading3" color="grey2">
            Because of that, I decided to embark in this area, completing many
            courses on the way, along with faculty.
          </Text>
          <Text type="heading3" color="grey2">
            You can see all that here, so feel free to look out to my projects,
            and contact me.
          </Text>
        </div>
      </Container>
    </AboutMeSection>
  );
};
