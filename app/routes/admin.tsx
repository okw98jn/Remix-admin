import { Outlet } from '@remix-run/react'
import { FC } from 'react'
import styles from '../styles/admin/layout.module.css'
import Header from '~/components/admin/header/Header'

const adminLayout: FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.flexColumn}>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default adminLayout