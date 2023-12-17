import React, { FC, memo } from 'react'
import { IconContext } from 'react-icons'

type IconProps = {
    icon: React.ReactNode;
    size?: string;
    color?: string;
}

const Icon: FC<IconProps> = memo(({ icon, size = '15px', color = '#333333' }) => {
    return (
        <IconContext.Provider value={{ color: color, size: size }}>
            {icon}
        </IconContext.Provider>
    )
})

export default Icon