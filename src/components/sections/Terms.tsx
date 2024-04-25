const Terms = ({
  terms,
  title,
  sub_title,
}: {
  terms?: {
    s_number: number
    title: string
    descriptions: {
      description: string
      id?: string | null
    }[]
    id?: string | null
  }[]
  title?: string
  sub_title?: string
}) => {
  return (
    <section
      id='terms-page'
      className='gr--whitesmoke pb-80 inner-page-hero division'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-10'>
            {/* INNER PAGE TITLE */}
            <div className='inner-page-title'>
              <h2 className='s-52 w-700'>{title}</h2>
              <p className='p-lg'>{sub_title}</p>
            </div>
            {/* TEXT BLOCK */}
            <div className='txt-block legal-info'>
              {/* Title */}
              {terms?.map((term, index) => (
                <div key={term?.id}>
                  <h4 className='s-30 w-700'>
                    <span>{term?.s_number}.</span> {term?.title}
                  </h4>
                  {term?.descriptions?.map((description, index) => (
                    <p key={description?.id}>{description?.description}</p>
                  ))}
                </div>
              ))}
            </div>
            {/* END TEXT BLOCK */}
          </div>
        </div>{' '}
        {/* End row */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default Terms
