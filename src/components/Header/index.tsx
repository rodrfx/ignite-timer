import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'

export const Header = () => {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <nav>
                <NavLink to="/" title="timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="histórico">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}
