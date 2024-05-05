import './Header.scss'
import userIcon from '../../assets/images/user-svgrepo-com.svg';
import saveIcon from '../../assets/images/camera-svgrepo-com.svg';
import themeIcon from '../../assets/images/pallete-2-svgrepo-com.svg'

export default function Header (){
    return(
        <header className='header'>
            <h1 className='header__heading'>🌿 Plant'd</h1>
            <div className='header__icon-wrapper'>
            <img className='header__icon'src={userIcon}/>
            <img className='header__icon' src={saveIcon}/>
            <img className='header__icon' src={themeIcon}/>
            </div>
        </header>
    )
}