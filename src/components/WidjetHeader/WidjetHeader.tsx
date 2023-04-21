import {FC} from 'react';
import c from './WidjetHeader.module.scss'

interface IWidjetHeaderProps {
    text: string
    icon: JSX.Element
}

const WidjetHeader:FC<IWidjetHeaderProps> = ({icon, text}:IWidjetHeaderProps) => {

    return <div className={c.wrap}>
            {icon}
            {text}
        </div>
};

export default WidjetHeader;