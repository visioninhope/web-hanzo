import type {
  Block,
  ScreenfulBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'

import HanzoLogo from 'node_modules/@hanzo/brand/components/icons/hanzo-logo'
import { Button } from '@hanzo/ui/primitives'


export default {
  blockType: 'screenful',
  specifiers: 'vert-center',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (
          <div className='flex items-center justify-center w-full mb-10 2xl:mb-20 mt-20'>
            <HanzoLogo />
          </div>
        )
      } satisfies ElementBlock as Block,
      {
        blockType: 'element',
        element: (
          <div className='flex flex-col items-center justify-center w-full'>
            <span className='text-[100px] 2xl:text-[180px] font-semibold font-sans hidden md:block'>
              Hanzo
            </span>
            <span className=' text-4xl 2xl:text-[58px] 2xl:leading-[79px] tracking-[0.16em] text-center font-normal font-sans'>
              CUT THROUGH THE COMPLEXITIES
            </span>
            <div className='flex flex-col sm:flex-row mt-10 2xl:mt-20 gap-10 md:gap-16'>
              <Button variant={'outline'} rounded={'none'} className='w-52 xl:w-60 2xl:w-96 h-15 2xl:h-20 text-base 2xl:text-2xl'>
                BROWSE CASE STUDIES
              </Button>
              <Button variant={'primary'} rounded={'none'} className='w-52 xl:w-60 2xl:w-96 h-15 2xl:h-20 text-base 2xl:text-2xl'>
                SCHEDULE CALL
              </Button>
            </div>
          </div>
        )
      } satisfies ElementBlock as Block,
    ]]
} satisfies ScreenfulBlock
