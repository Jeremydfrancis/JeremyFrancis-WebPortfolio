import { Source_Code_Pro } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
import './globals.css';

// components
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairEffect from '@/components/StairEffect';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});
variable: '--font-sourceCodePro';

export const metadata = {
  title: 'Jeremy Francis - Frontend Developer',
  description: 'Jeremy Francis is a skilled Frontend Developer specializing in HTML, CSS, JavaScript, React JS, Next.js, Bootstrap, Tailwind CSS, jQuery, Vite, Node.js, Express.js, UI/UX Design using Figma, Responsive Web Design, Cross-browser Compatibility, Performance Optimization, Team Collaboration, and Continuous Learning. Contact now to bring your web projects to life.',
  keywords: 'Jeremy Francis, Frontend Developer, HTML, CSS, JavaScript, React JS, Next.js, Bootstrap, Tailwind CSS, jQuery, Vite, Node.js, Express.js, UI/UX Design, Figma, Responsive Web Design, Cross-browser Compatibility, Performance Optimization, Team Collaboration, Continuous Learning',
  author: 'Jeremy Francis',
  ogTitle: 'Jeremy Francis - Frontend Developer',
  ogDescription: 'Get in touch with Jeremy Francis, a skilled frontend developer with expertise in modern web technologies.',
  ogUrl: 'https://jeremyfrancisdev.vercel.app/', 
  ogImage: '/MetaDataImage.png', 
  twitterCard: 'summary_large_image',
  twitterTitle: 'Jeremy Francis - Frontend Developer',
  twitterDescription: 'Connect with Jeremy Francis, a proficient frontend developer specialized in creating stunning web experiences.',
  twitterImage: '/MetaDataImage.png',
  
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta name='author' content={metadata.author} />
        <meta property='og:title' content={metadata.ogTitle} />
        <meta property='og:description' content={metadata.ogDescription} />
        <meta property='og:url' content={metadata.ogUrl} />
        <meta property='og:image' content={metadata.ogImage} />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content={metadata.twitterCard} />
        <meta name='twitter:title' content={metadata.twitterTitle} />
        <meta name='twitter:description' content={metadata.twitterDescription} />
        <meta name='twitter:image' content={metadata.twitterImage} />
        <link rel='canonical' href={metadata.ogUrl} />
      </Head>
      <body className={sourceCodePro.variable}>
        <Header />
        <StairEffect />
        <PageTransition>
          {children}
          <Analytics />
          <SpeedInsights />
        </PageTransition>
      </body>
    </html>
  );
}
