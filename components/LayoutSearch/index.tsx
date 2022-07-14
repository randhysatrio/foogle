import Footer from '../Layout/Footer';
import LayoutHeader from './LayoutHeader';

interface Props {
  children: JSX.Element;
}

const LayoutSearch: React.FC<Props> = ({ children }) => {
  return (
    <>
      <LayoutHeader />
      {children}
      <Footer />
    </>
  );
};

export default LayoutSearch;
