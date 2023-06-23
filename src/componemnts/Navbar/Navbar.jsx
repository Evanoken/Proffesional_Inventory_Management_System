import { FaList } from 'react-icons/fa';
import { MdOutlineNotificationAdd } from 'react-icons/md';
import { FcAbout, FcCustomerSupport } from 'react-icons/fc';
import { FiSettings } from 'react-icons/fi';
import {AiOutlineLogout} from 'react-icons/ai';
import './Navbar.css';
import Avatar from '../../assets/avatar.jpg';
function Navbar() {
  return (
    <>
      <div className="navContainer">
        <div className="navLeft">
          <span className="avatar">
            <img src={Avatar} alt="avatar" />
          </span>
          <span><h3>ADMIN</h3></span>
          <span><FaList className='lIcon'/></span>
        </div>
        <div className="navRight">
          <span><MdOutlineNotificationAdd className='rIcon'/></span>
          <span><FcAbout className='rIcon'/></span>
          <span><FcCustomerSupport className='rIcon'/></span>
          <span><FiSettings className='rIcon'/></span>
          <span><AiOutlineLogout className='rIconL'/></span>
        </div>
      </div>
    </>
  )
}

export default Navbar