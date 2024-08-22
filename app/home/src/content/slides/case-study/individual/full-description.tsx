import type {
    Block,
    ScreenfulBlock,
    ElementBlock,
} from '@hanzo/ui/blocks'

import { FullDescription } from '@/components/case-study/full-description'

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
                        <FullDescription />
                    )
                } satisfies ElementBlock as Block,
            ]]
    } satisfies ScreenfulBlock
