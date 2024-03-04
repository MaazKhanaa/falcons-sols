import styles from './blog.module.css';
import { blogCardData } from '../../constants/blog/blog.ts';
import { blogData } from '../../constants/blog/blog.ts';
import PortfolioCard from '../portfolio/portfolioCard';
import SubHeading from '../../common/typography/subheading/subHeading';
import MainHeading from '../../common/typography/mainheading/mainHeading';

const Blog = () => {
  return (
    <>
      <div className='sectionSpacing' id='blog'>
        <div className='text-center'>
          <SubHeading text={blogData.subHeading} />
          <MainHeading text={blogData.heading} />
        </div>
        <div className='row'>
          {blogCardData.map((item, index) => (
            <div className='col-lg-4 col-md-6 mb-4'>
              <PortfolioCard
                image={item.image}
                subHeading={item.subHeading}
                likeCounter={item.subText}
                mainHeading={item.heading}
              />
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Blog;
