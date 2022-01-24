import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <h1>hello</h1>
      <div className="block">{children}</div>
      <h2>bottom</h2>
    </>
  );
};

export default Layout;
