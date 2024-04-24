'use client'

import { blocks } from '@/mockdata/blockList'
import { Page } from '@/payload-types'
import { trpc } from '@/trpc/client'

interface RendorBlocksProps {
  slug: string
  layout?: Page['layout'] // layout should be an array of objects conforming to the Page["layout"] type
}

const RendorBlocks: React.FC<RendorBlocksProps> = ({ layout, slug }) => {
  const { data: layoutData } = trpc.auth.getLayouts.useQuery(
    { slug: slug },
    { initialData: layout },
  )
  return (
    <div>
      {layoutData?.map((block, index) => {
        const Block = blocks[block.blockType]
        if (Block) {
          return <Block key={index} {...block} />
        }
        return null
      })}
    </div>
  )
}

export default RendorBlocks
