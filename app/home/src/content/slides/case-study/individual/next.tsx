import type {
    Block,
    ScreenfulBlock,
    ElementBlock,
} from '@hanzo/ui/blocks'

import case_studies from '@/content/case-study'
import { LinkElement } from '@hanzo/ui/primitives'
import type { LinkDef } from '@hanzo/ui/types'

let block = null
let next = null

if (typeof window !== 'undefined') {
    console.log(window.location.pathname)
    const slug = window.location.pathname.split("case-study/")[1]
    if (slug) {
        if (parseInt(slug) >= 0 && parseInt(slug) < 11) {
            block = case_studies[parseInt(slug)]
            next = case_studies[block.next]
        }
    }
}

export default
    {
        blockType: 'screenful',
        specifiers: 'vert-center full-screen-width',
        columnSpecifiers: ['vert-center mobile-vert-center'],
        contentColumns: [
            [
                {
                    blockType: 'element',
                    element: (
                        <div className='pt-20 px-6 2xl:px-16 h-full w-full flex flex-col justify-center 2xl:gap-16 xl:gap-12 lg:gap-8 gap-8'>
                            <div className='2xl:text-[84px] xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-normal'>
                                READ NEXT
                            </div>
                            <div className='flex flex-col md:flex-row 2xl:gap-60 xl:gap-30 gap-20'>
                                <div className='md:flex-[60%] flex flex-col gap-4 md:gap-10 justify-center'>
                                    <div className='2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold'>
                                        {next?.title}: {next?.title_description}
                                    </div>
                                    <div className='2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm font-light'>
                                        {next?.description}
                                    </div>
                                    <div>
                                        <LinkElement
                                            def={{
                                                href: `/case-study/${next?.id}`,
                                                title: 'RESOURCES',
                                                variant: 'outline',
                                                rounded: 'none',
                                                newTab: false
                                            } satisfies LinkDef}
                                            className='w-52 xl:w-60 2xl:w-96 h-15 2xl:h-20 text-base 2xl:text-2xl'
                                        />
                                    </div>
                                </div>
                                <div className='md:flex-[40%] flex items-center'>
                                    <img src={next?.overview_image}></img>
                                </div>
                            </div>
                        </div>
                    )
                } satisfies ElementBlock as Block,
            ]]
    } satisfies ScreenfulBlock
