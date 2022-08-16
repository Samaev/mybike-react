/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
export const Navbar = () => {
    return (
        <nav class="page__menu menu" id="menu">
            <div class="container">
                <div class="menu__content">
                    <div class="top-actions">
                    <img
                        src="./images/MyBiKEblack.svg"
                        alt="my bike logo"
                        class="header__logo"
                    />
                    <a href="#" class="header__menu-close"></a>
                    </div>
        
                    <ul class="menu__list">
                    <li class="menu__item">
                        <a href="#" class="menu__link">Home</a>
                    </li>
        
                    <li class="menu__item">
                        <a href="#about-us" class="menu__link">About us</a>
                    </li>
        
                    <li class="menu__item">
                        <a href="#compare" class="menu__link">Compare Bikes</a>
                    </li>
        
                    <li class="menu__item">
                        <a href="#details" class="menu__link">Details</a>
                    </li>
        
                    <li class="menu__item">
                        <a href="#contacts" class="menu__link">Contacts</a>
                    </li>
                    </ul>
        
                    <a href="tel:+1 234 5555-55-55" class="menu__call">
                    +1 234 5555-55-55
                    </a>
        
                    <a href="tel:+1 234 5555-55-55" class="menu__order">
                    Book a test ride
                    </a>
        
                </div>
            </div>
        </nav>
    );
}