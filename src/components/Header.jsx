import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-5'>
            <img className='w-[471px]' src={logo} alt="" />
            <h3 className='pt-5 pb-[10px] text-lg text-[#706F6F]'>Journalism Without Fear or Favour</h3>
            <p className='font-medium text-xl leading-[30px]'>
                {moment().format("dddd, MMMM Do YYYY")}
            </p>
        </div>
    );
};

export default Header;