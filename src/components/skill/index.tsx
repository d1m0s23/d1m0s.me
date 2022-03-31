import '../../styles/components/skill.component.scss'
import React from "react";
import {
    FaJava,
    FaGit,
    FaSass,
    FaReact,
    FaDocker
} from "react-icons/fa";
import {
    SiApachemaven,
    SiApollographql, SiCentos, SiCplusplus, SiCsharp, SiCurseforge, SiExpress, SiFastify,
    SiJavascript,
    SiJenkins,
    SiNextdotjs, SiNginx,
    SiPostgresql,
    SiRedis, SiSocketdotio,
    SiTypescript, SiUnity, SiUnrealengine
} from "react-icons/si";
import {
    DiDebian
} from "react-icons/di";

interface Props extends React.ButtonHTMLAttributes<Props>{
    icon: string
    content: string
}

const Skill: React.FC<Props> = (props) => {
    const getIcon = () => {
        switch (props.icon) {
            case "java":
                return <FaJava/>
            case "js":
                return <SiJavascript/>
            case "ts":
                return <SiTypescript/>
            case "postgres":
                return <SiPostgresql/>
            case "git":
                return <FaGit/>
            case "react":
                return <FaReact/>
            case "nextjs":
                return <SiNextdotjs/>
            case "graphql":
                return <SiApollographql/>
            case "express":
                return <SiExpress/>
            case "fastify":
                return <SiFastify/>
            case "ws":
                return <SiSocketdotio/>
            case "scss":
                return <FaSass/>
            case "docker":
                return <FaDocker/>
            case "redis":
                return <SiRedis/>
            case "maven":
                return <SiApachemaven/>
            case "debian":
                return <DiDebian/>
            case "centos":
                return <SiCentos/>
            case "nginx":
                return <SiNginx/>
            case "jenkins":
                return <SiJenkins/>
            case "csharp":
                return <SiCsharp/>
            case "minecraftforge":
                return <SiCurseforge/>
            case "unity":
                return <SiUnity/>
            case "unrealeng":
                return <SiUnrealengine/>
            case "cplusplus":
                return <SiCplusplus/>
        }
    }

    return (
        <>
            <div className="badge">
                <div className="icon">
                    {getIcon()}
                </div>
                <div className="content">
                    {props.content}
                </div>
            </div>
        </>
    );
}

export default Skill;
