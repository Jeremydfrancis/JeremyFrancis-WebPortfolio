import Link from 'next/link';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    name: 'Github',
    icon: <FaGithub />,
    path: 'https://github.com/Jeremydfrancis',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/jeremy-francis-022499279/',
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} aria-label={item.name} target='_blank' className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
