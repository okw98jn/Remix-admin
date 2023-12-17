import { FC, memo } from "react"
import styles from './header.module.css'
import { Link } from "@remix-run/react";
import HeaderDropdownMenu from "./HeaderDropdownMenu";
import HeaderNavigationMenu from "./HeaderNavigationMenu";

const LogoLink = <Link to={'/admin'}><h2 className="text-xl font-medium">Remix</h2></Link>;
const Header: FC = memo(() => {
    return (
        <header className={styles.header}>
            <div>
                {LogoLink}
            </div>
            <div>
                <div className="flex items-center">
                    <HeaderNavigationMenu />
                    <p className="text-white border-s border-gray-300 ml-8">a</p>
                    <div className="ml-4">
                        <HeaderDropdownMenu />
                    </div>
                </div>
            </div>
        </header >
    )
})

export default Header