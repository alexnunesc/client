'use client';
import { useTheme } from '@/context/ThemeContext';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function Footer() {
  const { buildWhatsAppLink } = useTheme();

  return (
    <footer id='footer' className="flex items-center justify-center p-2 gap-2">
      <span>Copyright &copy; 2024 </span>

      {/* GitHub Icon */}
      <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="hover:text-neutral-500 transition-colors duration-300"/>
      </Link>

      {/* LinkedIn Icon */}
      <Link href="https://www.linkedin.com/in/marcos-bonaccorsi/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className='hover:text-blue-500 transition-colors duration-300'/>
      </Link>

      {/* WhatsApp Icon */}
      <Link href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="hover:text-green-400 transition-colors duration-300"/>
      </Link>
    </footer>
  );
}
