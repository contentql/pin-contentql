'use client'

import { blocks } from '@/mockdata/blockList'
import { Page } from '@/payload-types'

interface RendorBlocksProps {
  layout?: Page['layout'] // layout should be an array of objects conforming to the Page["layout"] type
}

const RendorBlocks: React.FC<RendorBlocksProps> = ({ layout }) => (
  <div>
    {layout?.map((block, index) => {
      const Block = blocks[block.blockType]
      if (Block) {
        return <Block key={index} {...block} />
      }
      return null
    })}
  </div>
)

export default RendorBlocks
