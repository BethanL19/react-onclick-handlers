import { title } from "process";

interface AppHeaderProps {
  title: string;
}
const upperClick = () => {
  console.log(title.toUpperCase());
};

function AppHeader({ title }: AppHeaderProps): JSX.Element {
  return <h1 onClick={upperClick}>{title}</h1>;
}

export default AppHeader;
