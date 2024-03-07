import { motion } from 'framer-motion';
import { RiFileList2Fill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import tw, { theme } from 'twin.macro';

import Button from '../components/Button';
import PortraitComponent from '../components/PortraitComponent';
import { Portrait } from '../contexts';

const IndexPage = () => {
  return (
    <main css={{ ...tw`mt-20` }}>
      <Portrait.Provider>
        <PortraitComponent />
        <section
          css={{
            ...tw`p-4 mt-28 mx-auto max-w-[1080px] flex flex-col gap-24`,
          }}
        >
          <motion.h1
            transition={{ duration: 0.9 }}
            animate={{
              textShadow: `.25rem .25rem 0 ${theme`colors.accent.primary.600`}, -.25rem -.25rem 0 ${theme`colors.secondary.200`}`,
            }}
            whileInView={{
              textShadow: [
                `1rem 1rem 0 ${theme`colors.accent.primary.600`}, -1rem -1rem 0 ${theme`colors.secondary.200`}`,
                `.25rem .25rem 0 ${theme`colors.accent.primary.600`}, -.25rem -.25rem 0 ${theme`colors.secondary.200`}`,
              ],
            }}
            css={{
              ...tw`text-primary-400 w-full text-center font-header -skew-x-12 -rotate-12 text-7xl md:text-9xl`,
            }}
          >
            More soon...
          </motion.h1>
          <div css={{ ...tw`ml-auto` }}>
            <p css={{ ...tw`text-xl` }}>
              If you like my{' '}
              <a
                href='https://marketplace.visualstudio.com/items?itemName=yondav.vibe'
                target='_blank'
                rel='noopener noreferrer'
                css={{
                  ...tw`font-bold italic underline hover:text-neutral-100 outline-0`,
                }}
              >
                Vibe
              </a>
            </p>
            <div css={{ ...tw`flex gap-4 my-4` }}>
              <Button
                as='a'
                variant='primary'
                href='/jonathan-david-resume-2024.pdf'
                download='jonathan-david-resume-2024.pdf'
              >
                <RiFileList2Fill size='1.5rem' />
              </Button>
              <Button
                as='a'
                variant='primary'
                href='https://github.com/yondav'
                target='_blank'
                rel='noopener noreferrer'
              >
                <RiGithubFill size='1.5rem' />
              </Button>
              <Button
                as='a'
                variant='primary'
                href='https://www.linkedin.com/in/yondav/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <RiLinkedinBoxFill size='1.5rem' />
              </Button>
            </div>
          </div>
        </section>
      </Portrait.Provider>
    </main>
  );
};

export default IndexPage;
