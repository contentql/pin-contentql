import { getPayloadClient } from '@/get-payload';
import RendorBlocks from '@/utils/RendorBlocks';


const Page = async ({ params }: { params: { slug: string[]} }) => {
  // const { slug } = params

  const slug = params.slug?.at(0) || 'index'


  const payload = await getPayloadClient()

  const { docs: pageData } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return (
    <div>
      <RendorBlocks layout={pageData[0]?.layout} />
    </div>
  )
}

export const generateStaticParams = async () => {
  const payload = await getPayloadClient()
  const { docs: pageData } = await payload.find({ collection: 'pages' })

  const arrayOfPageSlugs = pageData?.map(page => {
    return page.slug
  })

  return [...arrayOfPageSlugs]
}

export default Page
