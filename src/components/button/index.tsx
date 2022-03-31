import '../../styles/components/button.component.scss'
import React from "react";
import {FaDiscord, FaTelegram, FaGithub, FaSteam} from "react-icons/fa";

interface Props extends React.ButtonHTMLAttributes<Props>{
    icon: string
    content: string
    url: string
}

const Button: React.FC<Props> = (props) => {
    const getIcon = () => {
        switch (props.icon) {
            case "discord":
                return <FaDiscord/>
            case "telegram":
                return <FaTelegram/>
            case "github":
                return <FaGithub/>
            case "steam":
                return <FaSteam/>
        }
    }

    return (
        <>
            <a className="button" href={props.url}>
                <div className="icon">
                    {getIcon()}
                </div>
                <div className="content">
                    {props.content}
                </div>
            </a>
        </>
    );
}

export default Button;
