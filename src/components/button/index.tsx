import styles from './button.module.scss'
import React, { LinkHTMLAttributes } from 'react'

interface Props extends LinkHTMLAttributes<any> {
    children: any
    icon: any
    href?: string
}

const Button: React.FC<Props> = props => {
    return (
        <a className={styles.button} {...props}>
            <div className={styles.content}>{props.children}</div>
            <div className={styles.icon}>{props.icon}</div>
        </a>
    )
}

export default Button
