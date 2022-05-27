import '../../../styles/components/index.component.scss'
import data from '../../../data/buttons.json'
import {useState} from "react";
import {Container} from "@chakra-ui/react";
import Button from "../../button";
import {useTranslation} from "react-i18next";
import {FocusScope} from "@react-aria/focus";
import HandWithSurprise from "../../handWithSurprise";

export default function WhoAmI() {
    const { t } = useTranslation();

    return (
        <>
            <div className="page">
                <Container className="container" maxW='container.xl'>
                    <div className="bio">
                        <div className="title">
                            {t('about.hello')}
                        </div>
                        <div className="about">
                            <FocusScope restoreFocus contain>
                                {data.map(_button => (
                                    <Button icon={_button.icon} content={_button.content} url={_button.url} />
                                ))}
                            </FocusScope>
                        </div>
                    </div>
                    <HandWithSurprise/>
                </Container>
            </div>
        </>
    );
}