import { getPayloadClient } from '@/get-payload'

export const getBlogBySlug = async (slug: string) => {
  const payload = await getPayloadClient()

  try {
    const { docs } = await payload.find({
      collection: 'blogs',
      where: {
        id: {
          equals: slug,
        },
      },
    })

    return docs.at(0)
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}

export const getAllBlogs = async () => {
  const payload = await getPayloadClient()

  try {
    const { docs } = await payload.find({ collection: 'blogs' })
    return docs
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}
