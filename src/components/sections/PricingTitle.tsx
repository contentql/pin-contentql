import { useState } from 'react'

const PricingTitle = () => {
  const [isPricing, setPricing] = useState(false)
  const handlePricing = () => setPricing(!isPricing)

  return (
    <div className='row justify-content-center'>
      <div className='col-md-10 col-lg-8'>
        <div className='section-title mb-70'>
          {/* Title */}
          <h2 className='s-52 w-700'>Simple, Flexible Pricing</h2>
          {/* TOGGLE BUTTON */}
          <div className='toggle-btn ext-toggle-btn toggle-btn-md mt-30'>
            <span className='toggler-txt'>Billed monthly</span>
            <label className='switch-wrap'>
              <input type='checkbox' id='checbox' onClick={handlePricing} />
              <span className='switcher bg--grey switcher--theme'>
                <span className='show-annual' />
                <span className='show-monthly' />
              </span>
            </label>
            <span className='toggler-txt'>Billed yearly</span>
            {/* Text */}
            <p className='color--theme'>Save up to 35% with yearly billing</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingTitle
