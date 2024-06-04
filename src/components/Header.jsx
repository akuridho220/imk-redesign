import {Image} from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo p-2 bg-base-100 flex flex-row items-center justify-between">
                <img src="..\src\assets\img\logo\logoPPIDNTB.png" alt="logo" srcSet="" />
                <div className='flex flex-row'>
                    <ul className='flex flex-row'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                    <div>|</div>
                    <div className=''>
                        <p>WEBSITE UTAMA</p>
                        <p>NTBPROV.GO.ID</p>
                    </div>
                </div>
            </div>
            <div className="header-navbar bg-primary-900">
                
            </div>
        </div>
    );
}

export default Header;