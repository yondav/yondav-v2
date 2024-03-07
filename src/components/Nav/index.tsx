import { motion, HTMLMotionProps } from 'framer-motion';
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import tw, { styled } from 'twin.macro';

import Logo from '../Logo';

const NavBase = motion(
  styled.header(
    tw`fixed w-screen h-20 py-2 px-4 left-0 top-0 z-50 bg-neutral-200 transition-all flex justify-between items-center`
  ),
  { forwardMotionProps: true }
);

export default function Nav() {
  return (
    <>
      <NavBase
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, delay: 0.2 },
        }}
      >
        <div
          css={{ ...tw`w-12 cursor-pointer` }}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        >
          <Logo />
        </div>
        <div css={{ ...tw`flex gap-2 text-neutral-800` }}>
          <a
            href='https://github.com/yondav'
            target='_blank'
            rel='noopener noreferrer'
            css={{ ...tw`hover:(-translate-y-0.5 brightness-75)` }}
          >
            <RiGithubFill size='2rem' />
          </a>
          <a
            href='https://www.linkedin.com/in/yondav/'
            target='_blank'
            rel='noopener noreferrer'
            css={{ ...tw`hover:(-translate-y-0.5 brightness-75)` }}
          >
            <RiLinkedinBoxFill size='2rem' />
          </a>
        </div>
      </NavBase>
    </>
  );
}
