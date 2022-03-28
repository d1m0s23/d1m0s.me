import '../../../styles/components/index.component.scss'
import data from '../../../data/buttons.json'
import {useState} from "react";
import {Container} from "@chakra-ui/react";
import Button from "../../button";
import {Animator, batch, Fade, MoveOut, Sticky} from "react-scroll-motion";

export default function WhoAmI() {
    const [dislikeView, setDislikeView] = useState(false);

    const handleClick = () => {
        setDislikeView(!dislikeView);
    }

    return (
        <>
            <div className="page">
                <Container className="container" maxW='container.xl'>
                    <div className="bio">
                        <div className="title">
                            Hi, i'm d1m0s23
                        </div>
                        <div className="about">
                            {data.map(_button => (
                                <Button icon={_button.icon} content={_button.content} url={_button.url} />
                            ))}
                        </div>
                    </div>
                    <div onClick={handleClick} className="emoji">
                        {dislikeView ? (
                            <img
                                className="dislike"
                                onClick={handleClick}
                                src='/assets/dislike.png'
                                alt="brawl start dislike"
                            />
                        ) : (
                            <>
                                👋
                            </>
                        )}
                    </div>
                </Container>
            </div>
        </>
    );
}