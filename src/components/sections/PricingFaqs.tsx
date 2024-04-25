import Link from 'next/link'

const PricingFaqs = ({
  title,
  sub_title,
  questions,
}: {
  title?: string
  sub_title?: string
  questions?: {
    question: string
    answer_paragraphs: {
      answer: string
      id?: string | null
    }[]
    id?: string | null
  }[]
}) => {
  if (!questions) return

  const tempQuestions = [...questions]

  const index = (tempQuestions?.length + 1) / 2
  const modifiedQuestions = [
    tempQuestions?.splice(0, index) || [],
    tempQuestions,
  ]
  return (
    <section id='faqs-3' className='gr--whitesmoke pt-100 faqs-section'>
      <div className='container'>
        {/* SECTION TITLE */}
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-9'>
            <div className='section-title mb-70'>
              {/* Title */}
              <h2 className='s-52 w-700'>{title}</h2>
              {/* Text */}
              <p className='s-21 color--grey'>{sub_title}</p>
            </div>
          </div>
        </div>
        {/* FAQs-3 QUESTIONS */}
        <div className='faqs-3-questions'>
          <div className='row'>
            {/* QUESTIONS HOLDER */}
            {modifiedQuestions?.map((questions, index) => (
              <div className='col-lg-6'>
                <div className='questions-holder'>
                  {/* QUESTION #1 */}

                  {questions?.map((question, q_index) => (
                    <div
                      key={question?.id}
                      className='question mb-35 wow fadeInUp'>
                      {/* Question */}
                      <h5 className='s-22 w-700'>
                        <span>
                          {index * modifiedQuestions.at(0)!.length +
                            q_index +
                            1}
                          .
                        </span>{' '}
                        {question?.question}
                      </h5>
                      {/* Answer */}
                      {question?.answer_paragraphs?.map((answer, index) => (
                        <p key={answer?.id} className='color--grey'>
                          {answer?.answer}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* END QUESTIONS HOLDER */}
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* END FAQs-3 QUESTIONS */}
        {/* MORE QUESTIONS LINK */}
        <div className='row'>
          <div className='col'>
            <div className='more-questions mt-40'>
              <div className='more-questions-txt bg--white-400 r-100'>
                <p className='p-lg'>
                  Have any questions?
                  <Link href='/contacts' className='color--theme'>
                    Get in Touch
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default PricingFaqs
