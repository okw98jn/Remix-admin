import React, { FC, memo } from "react"
import { cn } from "../../../lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../../../components/ui/navigation-menu"
import { Link } from "@remix-run/react"
import Icon from "~/components/atoms/Icon"
import { headerMenuList } from "~/const/AdminConst"

const HeaderNavigationMenu: FC = memo(() => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {headerMenuList.map((headerMenu) => (
                    <NavigationMenuItem key={headerMenu.key}>
                        <NavigationMenuTrigger>{headerMenu.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[300px] gap-3 p-4 md:grid-cols-2  ">
                                {headerMenu.Lists.map((list) => (
                                    <ListItem
                                        key={list.key}
                                        title={list.title}
                                        href={list.href}
                                        icon={list.icon}
                                    />
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
})

type ListItemProps = {
    title: string;
    href: string;
    icon: React.ReactNode;
}

const ListItem: FC<ListItemProps> = memo(({ title, href, icon }) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                >
                    <div className="text-xs font-medium leading-none flex">
                        <p className="mr-1">{<Icon icon={icon} />}</p>
                        <p>{title}</p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})

export default HeaderNavigationMenu