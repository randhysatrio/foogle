import { useRouter } from 'next/router';
import { CgMenuGridO } from 'react-icons/cg';

interface LinkProps {
  children: string;
  to: string;
}

const HeaderLink: React.FC<LinkProps> = ({ children, to }) => {
  const router = useRouter();

  return (
    <span
      onClick={() => router.push(to)}
      className={`${
        router.pathname.includes(to) ? 'hidden' : 'block'
      } text-[15px] font-semibold hover:text-sky-600 transition cursor-pointer active:scale-95`}
    >
      {children}
    </span>
  );
};

const Header: React.FC = () => {
  return (
    <div className="h-12 w-full px-4 md:px-7 lg:px-10 flex items-center justify-end gap-3 md:gap-4">
      <div className="flex items-center gap-3 md:gap-4">
        <HeaderLink to="/images">Images</HeaderLink>
        <HeaderLink to="/videos">Videos</HeaderLink>
        <HeaderLink to="b">News</HeaderLink>
      </div>
      <div className="flex items-center justify-center">
        <CgMenuGridO className="text-xl active:scale-95 transition cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
