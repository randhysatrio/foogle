import { BsGlobe } from 'react-icons/bs';

interface LinkProps {
  children: string;
}

const FooterLink: React.FC<LinkProps> = ({ children }) => {
  return (
    <span className="text-[10px] md:text-sm text-gray-500 hover:text-gray-400 font-semibold active:scale-95 transition cursor-pointer">
      {children}
    </span>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="h-24 w-full flex flex-col justify-center bg-footer_color">
      <div className="h-1/2 w-full px-4 md:px-9 lg:px-12 border-b flex items-center gap-2 text-gray-800 group text-sm md:text-base">
        <BsGlobe className="transition cursor-pointer group-hover:text-gray-600 group-active:scale-95" />
        <span className="font-semibold group-hover:text-gray-600 transition cursor-pointer ">Indonesia</span>
      </div>
      <div className="h-1/2 w-full px-4 md:px-9 lg:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="flex items-center gap-4 pb-[3px] md:pb-0">
          <FooterLink>About</FooterLink>
          <FooterLink>Adveritising</FooterLink>
          <FooterLink>Business</FooterLink>
          <FooterLink>How Search Works</FooterLink>
        </div>
        <div className="flex items-center gap-6">
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Terms</FooterLink>
          <FooterLink>Settings</FooterLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
