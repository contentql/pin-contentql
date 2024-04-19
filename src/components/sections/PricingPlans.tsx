import am from '/public/images/png_icons/am.png'
import discover from '/public/images/png_icons/discover.png'
import jcb from '/public/images/png_icons/jcb.png'
import paypal from '/public/images/png_icons/paypal.png'
import shopify from '/public/images/png_icons/shopify.png'
import visa from '/public/images/png_icons/visa.png'
import Image from 'next/image'

const PricingPlans = () => {
  return (
    <section id='comp-table' className='pt-100 pb-60 pricing-section division'>
      <div className='container'>
        {/* SECTION TITLE */}
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-9'>
            <div className='section-title mb-70'>
              {/* Title */}
              <h2 className='s-52 w-700'>Compare Our Plans</h2>
              {/* Text */}
              <p className='p-xl'>
                Complete list of features available in our pricing plans
              </p>
            </div>
          </div>
        </div>
        {/* PRICING COMPARE */}
        <div className='comp-table wow fadeInUp'>
          <div className='row'>
            <div className='col'>
              {/* Table */}
              <div className='table-responsive mb-50'>
                <table className='table text-center'>
                  <thead>
                    <tr>
                      <th style={{ width: '34%' }} />
                      <th style={{ width: '22%' }}>Starter</th>
                      <th style={{ width: '22%' }}>Basic</th>
                      <th style={{ width: '22%' }}>Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row' className='text-start'>
                        Available Projects
                      </th>
                      <td className='color--black'>Up to 2</td>
                      <td className='color--black'>Up to 250</td>
                      <td className='color--black'>Unlimited</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Available Storage
                      </th>
                      <td className='color--black'>2Gb</td>
                      <td className='color--black'>50Gb</td>
                      <td className='color--black'>350Gb</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Private Cloud Hosting
                      </th>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        User Permissions
                      </th>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Direct Integrations
                      </th>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Reusable Components
                      </th>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Data Backup
                      </th>
                      <td className='color--black'>Weekly</td>
                      <td className='color--black'>Daily</td>
                      <td className='color--black'>Daily</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        No Ads. No Trackers
                      </th>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Advanced Security
                      </th>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Shared Team Workspace
                      </th>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-start'>
                        Team Management
                      </th>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-15 disabled-option'>
                        <span className='flaticon-cancel' />
                      </td>
                      <td className='ico-20 color--theme'>
                        <span className='flaticon-check' />
                      </td>
                    </tr>
                    <tr className='table-last-tr'>
                      <th scope='row' className='text-start'>
                        Customer Support
                      </th>
                      <td className='color--black'>Limited</td>
                      <td className='color--black'>Basic</td>
                      <td className='color--black'>Priority</td>
                    </tr>
                  </tbody>
                </table>
              </div>{' '}
              {/* End Table */}
            </div>
          </div>
        </div>{' '}
        {/* END PRICING COMPARE */}
        {/* PRICING COMPARE PAYMENT */}
        <div className='comp-table-payment'>
          <div className='row row-cols-1 row-cols-md-3'>
            {/* Payment Methods */}
            <div className='col col-lg-5'>
              <div id='pbox-1' className='pbox mb-40 wow fadeInUp'>
                {/* Title */}
                <h6 className='s-18 w-700'>Accepted Payment Methods</h6>
                {/* Payment Icons */}
                <ul className='payment-icons ico-45 mt-25'>
                  <li>
                    <Image src={visa} alt='payment-icon' />
                  </li>
                  <li>
                    <Image src={am} alt='payment-icon' />
                  </li>
                  <li>
                    <Image src={discover} alt='payment-icon' />
                  </li>
                  <li>
                    <Image src={paypal} alt='payment-icon' />
                  </li>
                  <li>
                    <Image src={jcb} alt='payment-icon' />
                  </li>
                  <li>
                    <Image src={shopify} alt='payment-icon' />
                  </li>
                </ul>
              </div>
            </div>
            {/* Payment Guarantee */}
            <div className='col col-lg-4'>
              <div id='pbox-2' className='pbox mb-40 wow fadeInUp'>
                {/* Title */}
                <h6 className='s-18 w-700'>Money Back Guarantee</h6>
                {/* Text */}
                <p>
                  Explore ContentQL Premium for 14 days. If it’s not a perfect
                  fit, receive a full refund.
                </p>
              </div>
            </div>
            {/* Payment Encrypted */}
            <div className='col col-lg-3'>
              <div id='pbox-3' className='pbox mb-40 wow fadeInUp'>
                {/* Title */}
                <h6 className='s-18 w-700'>SSL Encrypted Payment</h6>
                {/* Text */}
                <p>Your information is protected by 256-bit SSL encryption.</p>
              </div>
            </div>
          </div>
        </div>{' '}
        {/* END PRICING COMPARE PAYMENT */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default PricingPlans
