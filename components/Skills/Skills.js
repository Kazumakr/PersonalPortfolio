import React from "react";

import {
	Container,
	Wrapper,
	SkillSection,
	Text,
	List,
	ListItem,
	SectionDivider,
	SectionTitle,
	Hr,
	JavaScriptIcon,
	ReactIcon,
	DbIcon,
	TextContainer,
} from "./SkillsStyle";

const Skills = () => {
	return (
		<Container id="skills">
			<SectionDivider>
				<SectionTitle>Skills</SectionTitle>
				<Hr />
			</SectionDivider>
			<Wrapper>
				<SkillSection>
					<TextContainer>
						<JavaScriptIcon />
						<Text>Languages</Text>
					</TextContainer>
					<List>
						<ListItem>JavaScript</ListItem>
						<ListItem>HTML</ListItem>
						<ListItem>CSS</ListItem>
						<ListItem>Python</ListItem>
						<ListItem>C++</ListItem>
					</List>
				</SkillSection>
				<SkillSection>
					<TextContainer>
						<ReactIcon />
						<Text>Frameworks</Text>
					</TextContainer>
					<List>
						<ListItem>React</ListItem>
						<ListItem>NodeJS</ListItem>
						<ListItem>Express</ListItem>
						<ListItem>Sequelize</ListItem>
						<ListItem>NextJS</ListItem>
					</List>
				</SkillSection>
				<SkillSection>
					<TextContainer>
						<DbIcon />
						<Text>Tools&DB</Text>
					</TextContainer>
					<List>
						<ListItem>MongoDB</ListItem>
						<ListItem>MySQL</ListItem>
						<ListItem>Git</ListItem>
						<ListItem>Postman</ListItem>
					</List>
				</SkillSection>
			</Wrapper>
		</Container>
	);
};

export default Skills;
