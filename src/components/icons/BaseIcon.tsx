import {
  BiCheckbox,
  BiDotsHorizontalRounded,
  BiLogIn,
  BiLogOut,
  BiUser,
} from 'react-icons/bi';
import { BsCalendar3, BsFillBookFill } from 'react-icons/bs';
import { ImArrowDown2, ImArrowUpRight2, ImSpinner9 } from 'react-icons/im';
import { SiGithub, SiNextdotjs } from 'react-icons/si';

const ICONS_MAP: any = {
  nextjs: <SiNextdotjs />,
  github: <SiGithub />,
  spinner: <ImSpinner9 />,
  arrowdown: <ImArrowDown2 />,
  arrowrightup: <ImArrowUpRight2 />,

  logo: <BsFillBookFill />,
  calendar: <BsCalendar3 />,
  profile: <BiUser />,

  placeholder: <BiCheckbox />,
  dotmenu: <BiDotsHorizontalRounded />,
  signin: <BiLogIn />,
  signout: <BiLogOut />,
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
