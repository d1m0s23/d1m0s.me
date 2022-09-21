import styles from './footer.module.scss'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className={styles.footer}>
            <div className={styles.row}>
                <img width={128} alt="Logo" src="/assets/images/icon.png" />
                <div className={styles.column}>
                    <div className={styles.title}>d1m0s.me</div>
                    <a
                        href="https://github.com/d1m0s23/d1m0s.me"
                        rel="noreferrer"
                        target="_blank"
                        className={styles.license}
                    >
                        {t('footer.license')}
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
