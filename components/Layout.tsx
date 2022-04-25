import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="block">{children}</div>
    </>
  );
};

export default Layout;
