import { BsCalendar3, BsFillBookFill } from 'react-icons/bs';
import {
  ImArrowDown2,
  ImArrowUpRight2,
  ImSpinner9,
  ImUser,
} from 'react-icons/im';
import { SiGithub, SiNextdotjs } from 'react-icons/si';

const ICONS_MAP: any = {
  nextjs: <SiNextdotjs />,
  github: <SiGithub />,
  spinner: <ImSpinner9 />,
  arrowdown: <ImArrowDown2 />,
  arrowrightup: <ImArrowUpRight2 />,

  logo: <BsFillBookFill />,
  calendar: <BsCalendar3 />,
  profile: <ImUser />,
};

export interface IBaseIcon {
  icon: string;
  style?: string;
}

const BaseIcon: React.FC<IBaseIcon> = ({ icon, style }) => {
  let IconComponent = ICONS_MAP[icon].type;

  return <IconComponent className={style} />;
};

export default BaseIcon;
