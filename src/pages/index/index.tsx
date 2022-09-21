import styles from './index.module.scss'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/button'

import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

import buttons from '../../data/buttons.json'

import { BsTelegram } from 'react-icons/bs'
import {
    SiApachemaven,
    SiDiscord,
    SiDocker,
    SiExpress,
    SiFastify,
    SiGradle,
    SiJavascript,
    SiKubernetes,
    SiMariadb,
    SiMinecraft,
    SiNestjs,
    SiNextdotjs,
    SiNginx,
    SiPostgresql,
    SiSocketdotio,
    SiTypescript,
} from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { FaJava, FaReact, FaSteam } from 'react-icons/fa'
import { DiSass } from 'react-icons/di'
import { GrGraphQl } from 'react-icons/gr'

const IndexPage = () => {
    const [audio, setAudio] = useState(0)

    const { t } = useTranslation()

    const handleClick = () => {
        setAudio(Math.floor(Math.random() * (7 - 1) + 1))
    }

    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine)
    }, [])

    useEffect(() => {
        if (audio !== 0) {
            const _audio = new Audio(`/assets/sounds/${audio}.mp3`)
            _audio.play()

            _audio.addEventListener('ended', () => {
                setAudio(0)
            })
        }
    }, [audio])

    return (
        <>
            <Particles
                className="particles"
                url="/particles.json"
                init={particlesInit}
            />
            <div className={styles.page}>
                <section>
                    <div className={`${styles.h1} fadeIn`}>
                        <div>{t('title.hello')}</div>
                        {audio === 0 ? (
                            <div className={styles.hand} onClick={handleClick}>
                                🤟
                            </div>
                        ) : (
                            <img
                                src={`/assets/images/gifs/${audio}.gif`}
                                alt="Surprise heheheha"
                                width={72}
                                height={62}
                            />
                        )}
                    </div>
                    <div className="h0 fadeIn ad-1">{t('title.i')}</div>

                    <section
                        className={styles.row}
                        style={{ marginTop: '4vh' }}
                    >
                        <Button icon={<SiDiscord />} href={buttons.discord.url}>
                            {buttons.discord.content}
                        </Button>
                        <Button
                            icon={<BsTelegram />}
                            href={buttons.telegram.url}
                        >
                            {buttons.telegram.content}
                        </Button>
                        <Button
                            icon={<AiFillGithub />}
                            href={buttons.github.url}
                        >
                            {buttons.github.content}
                        </Button>
                        <Button icon={<FaSteam />} href={buttons.steam.url}>
                            {buttons.steam.content}
                        </Button>
                    </section>
                </section>

                <section>
                    <div className={styles.h1}>{t('title.canBuild')}</div>

                    <section
                        className={styles.row}
                        style={{ marginTop: '3vh', flexWrap: 'wrap' }}
                    >
                        <Button
                            icon={
                                <>
                                    <FaReact />
                                    <SiNextdotjs />
                                    <DiSass />
                                </>
                            }
                        >
                            {t('skills.build.web')}
                        </Button>
                        <Button
                            icon={
                                <>
                                    <FaReact />
                                </>
                            }
                        >
                            {t('skills.build.apps')}
                        </Button>
                        <Button
                            icon={
                                <>
                                    <SiMinecraft />
                                </>
                            }
                        >
                            {t('skills.build.minePlugins')}
                        </Button>
                        <Button
                            icon={
                                <>
                                    <SiDiscord />
                                </>
                            }
                        >
                            {t('skills.build.bots')}
                        </Button>
                    </section>
                </section>

                <section>
                    <div className={styles.h1}>{t('skills.title')}</div>

                    <section className={styles.row}>
                        <Button
                            icon={
                                <>
                                    <FaJava />
                                    <SiApachemaven />
                                    <SiGradle />
                                </>
                            }
                        >
                            Java
                        </Button>
                        <Button
                            icon={
                                <>
                                    <SiJavascript />
                                    <SiTypescript />
                                </>
                            }
                        >
                            Javascript/Typescript
                        </Button>
                        <Button
                            icon={
                                <>
                                    <SiNginx />
                                    <SiFastify />
                                    <SiExpress />
                                    <SiNestjs />
                                </>
                            }
                        >
                            Nginx/Fastify/Express/Nestjs
                        </Button>
                        <Button
                            icon={
                                <>
                                    <SiPostgresql />
                                    <SiMariadb />
                                </>
                            }
                        >
                            Postgresql/Mysql
                        </Button>
                        <Button
                            icon={
                                <>
                                    <GrGraphQl />
                                    <SiSocketdotio />
                                </>
                            }
                        >
                            Graphql/Websocket
                        </Button>
                        <Button
                            icon={
                                <>
                                    <SiDocker />
                                    <SiKubernetes />
                                </>
                            }
                        >
                            Docker/Kubernetes
                        </Button>
                    </section>
                </section>
            </div>
        </>
    )
}

export default IndexPage
