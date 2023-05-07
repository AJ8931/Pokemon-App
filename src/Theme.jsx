import Footer from './Components/Footer'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import PropTypes from 'prop-types';

const Theme = ({children}) => {
    return (
        <div className='h-full w-full bg-yellow-600'>
            <Header />
            <HeroSection />
            {
                children
            }
            <Footer />
        </div>
    )
}

Theme.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Theme