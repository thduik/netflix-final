import Dropdown from 'react-bootstrap/Dropdown';
// 🚀 Default
import Settings from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext'
import { logout } from '../../context/authContext/AuthActions'

function SettingsDropdown() {
  const {dispatch} = useContext(AuthContext)
  const handleClickLogout = () => {
    console.log("handleClickLogout clicked")
    console.log(dispatch)
    dispatch(logout())
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <Settings/>
        buttonName
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={handleClickLogout}><LogoutIcon/>Log out</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><i className="material-icons 2mp">&#xe965;</i></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown>
  );
}

export default SettingsDropdown;
