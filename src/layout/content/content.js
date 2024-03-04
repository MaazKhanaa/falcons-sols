import { Fragment } from 'react';
import Feature from '../../components/feature/feature';
import Portfolio from '../../components/portfolio/portfolio';
import About from '../../components/about/about';
import OurServics from '../../components/ourservices/ourServices';
import Blog from '../../components/blog/blog';
import ContactUs from '../../components/contact/contact';
import Banner from '../../components/banner/banner';
import Team from '../../components/team/team';

const Content = () => {
  return (
    <Fragment>
      <div className='container'>
        <Banner />
        <Feature />
        <Portfolio />
        <About />
        <Blog />
        <ContactUs />
        {/* <OurServics />
        <Team /> */}
      </div>
    </Fragment>
  );
};

export default Content;
