import PrimaryButton from '../../common/form/button/primaryButton';
import styles from './header.module.css';
import { MenuData } from '../../constants/header/menuData.ts';
import { HeaderMainlogo } from '../../constants/header/menuData.ts';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import React, { useEffect, useState } from 'react';
import InstallButton from './InstallButton';
import style from './mobileMenu.module.css';

const Header = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  // mobile menu js
  const [showSection, setShowSection] = useState(false);
  const toggleSection = () => {
    setShowSection(!showSection);
  };
  const closeMobileMenu = () => {
    setShowSection(false);
  };
  // mobile menu js ends here

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(display-mode: standalone)');

    const handleMediaQueryChange = (event) => {
      setIsInstalled(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    setIsIOS(/iPhone|iPad|iPod/.test(navigator.userAgent));
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {showSection && (
        // Mobile menu overlay
        <div className={`${styles.menuOverlay} ${showSection ? styles.open : ''}`}>
          {/* Mobile menu content */}
          <div className={`${style.mobileMenu} d-flex flex-column justify-content-between p-4 position-relative`}>
            <button
              className={`${styles.menuBtn} d-flex justify-content-center align-items-center border-0 rounded-circle position-absolute`}
              onClick={closeMobileMenu}>
              <RxCross2 />
            </button>
            <div>
              <div className='mb-4'>
                <img
                  src={HeaderMainlogo.headerMainLogo}
                  style={{ width: '80px', height: 'auto' }}
                  alt="Header Logo"
                />
              </div>
              <ul className='mb-0'>
                {MenuData.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} onClick={() => handleScroll(item.href.slice(1))}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <PrimaryButton text='Login' style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      )}

      {/* Main header */}
      <div className={`${styles.manuMain} px-sm-5 px-4 border-bottom`}>
        <nav className={`${styles.navbar} d-flex align-items-center justify-content-between py-3`}>
          <div>
            <img
              src={HeaderMainlogo.headerMainLogo}
              style={{ width: '110px', height: 'auto' }}
              alt="Header Logo"
            />
          </div>
          <div className={styles.navIcon}>
            <button
              className={`${styles.menuBtn} d-flex justify-content-center align-items-center border-0 rounded-circle`}
              onClick={toggleSection}>
              <HiOutlineMenuAlt3 />
            </button>
          </div>
          <div className={`${styles.webMenu} align-items-center`}>
            <ul className='mb-0'>
              {MenuData.map((item, index) => (
                <li key={index}>
                  <a href={item.href} onClick={() => handleScroll(item.href.slice(1))}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className='ms-3'>
              <PrimaryButton text='Login' />
            </div>
          </div>
        </nav>

        {!isInstalled && !isIOS && deferredPrompt && (
          <InstallButton handleClick={() => deferredPrompt.prompt()} />
        )}
        {!isInstalled && isIOS && (
          <InstallButton
            handleClick={() => alert("To install this app on iOS, tap the Share icon and select 'Add to Home Screen'.")}
          />
        )}
      </div>
    </>
  );
};

export default Header;
