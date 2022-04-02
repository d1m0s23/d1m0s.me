import '../../../styles/components/footer.component.scss'
import {useTranslation} from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="stack">
                <div className="developedBy">
                    {t('footer.developedBy')}
                </div>
                <a href="https://github.com/d1m0s23/d1m0s.me" className="sourceCode">
                    {t('footer.sourceCode')}
                </a>
            </div>
        </footer>
    )
}