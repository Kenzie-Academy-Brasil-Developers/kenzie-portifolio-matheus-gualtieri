import { Text } from "@/styles/Text";
import { Container } from "@/styles/Global";
import { AboutMeSection, AboutMeTittle, AboutMeTextArea } from "./style";

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
          <AboutMeTextArea>
            <Text type="heading3" color="grey2">
              Hello there, I am Matheus Gualtieri, and I{" "}
              <Text as="span" type="heading3" color="brand1">
                love
              </Text>{" "}
              technology since I was little.
            </Text>
            <Text type="heading3" color="grey2">
              Because of that, I decided to embark in this area, completing many
              courses on the way, along with faculty and finally becoming a Full
              Stack Web Developer, with experiences with many technologies, such
              as:{" "}
              <Text as="span" type="heading3" color="brand1">
                HTML
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                CSS
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                Javascript
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                Typescript
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                React
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                NodeJs
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                Python
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                DJANGO
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                TypeORM
              </Text>{" "}
            </Text>
            <Text type="heading3" color="grey2">
              Throughout my learning, I created{" "}
              <Text as="span" type="heading3" color="brand1">
                responsive
              </Text>{" "}
              and{" "}
              <Text as="span" type="heading3" color="brand1">
                user friendly
              </Text>{" "}
              interfaces,{" "}
              <Text as="span" type="heading3" color="brand1">
                APIs
              </Text>{" "}
              and many other projects. I have experience with agile
              methodologies such as{" "}
              <Text as="span" type="heading3" color="brand1">
                SCRUM
              </Text>{" "}
              , and tools to boost my efficacy, such as Trello, Notion, ect.
            </Text>
          </AboutMeTextArea>
        </div>
      </Container>
    </AboutMeSection>
  );
};
