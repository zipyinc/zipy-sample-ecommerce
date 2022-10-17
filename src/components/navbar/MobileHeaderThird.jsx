import { ReactComponent as ShoppingSvg } from '../../images/shopping.svg';
import { ReactComponent as UserSvg } from '../../images/user.svg';

function MobileHeaderThird() {
    return ( 
        <div id="mobile-header-third">
            <span className='badge' ><UserSvg/></span>
            <span className='badge' id='shopping-badge'>
                <ShoppingSvg/>
                <span id='mobile-shopping-badge'>4</span>
            </span>
        </div> 
    )
}

export default MobileHeaderThird