import '../../../styles/components/whatCanIDo.component.scss'
import skills from '../../../data/skills.json'
import toLearn from '../../../data/learn.json'
import {Container} from "@chakra-ui/react";
import Skill from "../../skill";

export default function WhoAmI() {
    return (
        <>
            <div className="page">
                <Container className="container" maxW='container.xl'>
                    <div className="row">
                        <div className="col">
                            <div className="title">
                                My skills
                            </div>
                            <div className="list">
                                {skills.map(_skill => (
                                    <Skill icon={_skill.icon} content={_skill.content} />
                                ))}
                            </div>
                        </div>
                        <div className="col">
                            <div className="title">
                                What i want to learn
                            </div>
                            <div className="list">
                                {toLearn.map(_learn => (
                                    <Skill icon={_learn.icon} content={_learn.content} />
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}