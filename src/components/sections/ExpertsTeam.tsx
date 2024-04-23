import team1 from '/public/images/team-1.jpg'
import team2 from '/public/images/team-2.jpg'
import team3 from '/public/images/team-3.jpg'
import team4 from '/public/images/team-4.jpg'
import team5 from '/public/images/team-5.jpg'
import team6 from '/public/images/team-6.jpg'
import team7 from '/public/images/team-7.jpg'
import team8 from '/public/images/team-8.jpg'
import team9 from '/public/images/team-9.jpg'
import team10 from '/public/images/team-10.jpg'
import team11 from '/public/images/team-11.jpg'
import team12 from '/public/images/team-12.jpg'
import Image from 'next/image'
import Link from 'next/link'

const ExpertsTeam = () => {
  return (
    <section
      id='team-2'
      className='gr--whitesmoke pb-40 inner-page-hero team-section'>
      <div className='container'>
        {/* SECTION TITLE */}
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-9'>
            <div className='section-title mb-80'>
              <h2 className='s-52 w-700'>
                All we do is dream and craft amazing products
              </h2>
            </div>
          </div>
        </div>
        {/* TEAM MEMBERS WRAPPER */}
        <div className='team-members-wrapper'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
            {/* TEAM MEMBER #1 */}
            <div className='col'>
              <div id='tm-2-1' className='team-member mb-60 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team1}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  {/* Data */}
                  <h6 className='s-20 color--black w-700'>Jonathan Barnes</h6>
                  <p className='color--grey'>Founder and CEO</p>
                  {/* Social Links */}
                  <ul className='tm-social ico-20 clearfix'>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-twitter' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #1 */}
            {/* TEAM MEMBER #2 */}
            <div className='col'>
              <div id='tm-2-2' className='team-member mb-60 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team2}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  {/* Data */}
                  <h6 className='s-20 color--black w-700'>Jaime Fletcher</h6>
                  <p className='color--grey'>Senior Software Developer</p>
                  {/* Social Links */}
                  <ul className='tm-social ico-20 clearfix'>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-twitter' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #2 */}
            {/* TEAM MEMBER #3 */}
            <div className='col'>
              <div id='tm-2-3' className='team-member mb-60 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team3}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  {/* Data */}
                  <h6 className='s-20 color--black w-700'>Les Bakker</h6>
                  <p className='color--grey'>Software Engineer</p>
                  {/* Social Links */}
                  <ul className='tm-social ico-20 clearfix'>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-twitter' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #3 */}
            {/* TEAM MEMBER #4 */}
            <div className='col'>
              <div id='tm-2-4' className='team-member mb-60 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team4}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  {/* Data */}
                  <h6 className='s-20 color--black w-700'>Alyssa Garrison</h6>
                  <p className='color--grey'>Web Development</p>
                  {/* Social Links */}
                  <ul className='tm-social ico-20 clearfix'>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-dribbble' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #4 */}
            {/* TEAM MEMBER #5 */}
            <div className='col'>
              <div id='tm-2-5' className='team-member mb-60 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team5}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  {/* Data */}
                  <h6 className='s-20 color--black w-700'>Charlotte Johnson</h6>
                  <p className='color--grey'>Content Manager</p>
                  {/* Social Links */}
                  <ul className='tm-social ico-20 clearfix'>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-dribbble' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #5 */}
            {/* TEAM MEMBER #6 */}
            <div className='col'>
              <div id='tm-2-6' className='team-member mb-60 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team6}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  {/* Data */}
                  <h6 className='s-20 color--black w-700'>Olivia Steiner</h6>
                  <p className='color--grey'>Customers Manager</p>
                  {/* Social Links */}
                  <ul className='tm-social ico-20 clearfix'>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-twitter' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #6 */}
            {/* TEAM MEMBER #7 */}
            <div className='col'>
              <div id='tm-2-7' className='team-member mb-60 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team7}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  {/* Data */}
                  <h6 className='s-20 color--black w-700'>Charles Fairless</h6>
                  <p className='color--grey'>Customers Manager</p>
                  {/* Social Links */}
                  <ul className='tm-social ico-20 clearfix'>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-twitter' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #7 */}
            {/* TEAM MEMBER #8 */}
            <div className='col'>
              <div id='tm-2-8' className='team-member mb-60 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team8}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  {/* Data */}
                  <h6 className='s-20 color--black w-700'>Nancy Taylor</h6>
                  <p className='color--grey'>Head of Marketing</p>
                  {/* Social Links */}
                  <ul className='tm-social ico-20 clearfix'>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-linkedin-logo' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #8 */}
            {/* TEAM MEMBER #9 */}
            <div className='col'>
              <div id='tm-2-9' className='team-member mb-60 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team9}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  {/* Data */}
                  <h6 className='s-20 color--black w-700'>Robert Walder</h6>
                  <p className='color--grey'>Product Manager</p>
                  {/* Social Links */}
                  <ul className='tm-social ico-20 clearfix'>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-twitter' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #9 */}
            {/* TEAM MEMBER #10 */}
            <div className='col'>
              <div id='tm-2-10' className='team-member mb-60 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team10}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  {/* Data */}
                  <h6 className='s-20 color--black w-700'>Michael Green</h6>
                  <p className='color--grey'>Marketing Manager</p>
                  {/* Social Links */}
                  <ul className='tm-social ico-20 clearfix'>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-linkedin-logo' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #10 */}
            {/* TEAM MEMBER #11 */}
            <div className='col'>
              <div id='tm-2-11' className='team-member mb-60 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team11}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  {/* Data */}
                  <h6 className='s-20 color--black w-700'>Nadine Adams</h6>
                  <p className='color--grey'>Marketing Copywriter</p>
                  {/* Social Links */}
                  <ul className='tm-social ico-20 clearfix'>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-pinterest-logo' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #11 */}
            {/* TEAM MEMBER #12 */}
            <div className='col'>
              <div id='tm-2-12' className='team-member mb-60 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team12}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  {/* Data */}
                  <h6 className='s-20 color--black w-700'>Andrew Barker</h6>
                  <p className='color--grey'>Product Support Manager</p>
                  {/* Social Links */}
                  <ul className='tm-social ico-20 clearfix'>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='flaticon-linkedin-logo' />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #12 */}
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* TEAM MEMBERS WRAPPER */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default ExpertsTeam
