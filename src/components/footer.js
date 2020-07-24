import React from 'react'

const Footer = ({ themeDark, setThemeDark, menuOpen, setMenuOpen }) => {
  if (typeof window === `undefined`) return null

  return (
    <footer className="footer">
      <div className="footer__menu-wrapper">
      <label htmlFor="color-switch" className="footer__switch-label" data-theme={!themeDark}>
              <svg
                className="footer__switch-icon svg-sun-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M0 11h3v2H0zM2.807 4.222l1.414-1.415L6.343 4.93 4.928 6.343zM11 0h2v3h-2zM17.657 4.929l2.121-2.122 1.414 1.415-2.121 2.12zM21 11h3v2h-3zM17.657 19.071l1.414-1.414 2.122 2.121-1.415 1.415zM11 21h2v3h-2zM2.807 19.778l2.122-2.12 1.414 1.413-2.122 2.122z" />
                <circle cx="12" cy="12" r="7" />
              </svg>

              <svg
                className="footer__switch-icon svg-moon-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M22.3 12.9c-.3-.3-.6-.4-1-.2-.7.2-1.5.3-2.3.3-4.4 0-8-3.6-8-8 0-.8.1-1.6.3-2.3.1-.4 0-.7-.2-1-.3-.3-.6-.4-1-.2C5.9 2.7 3 6.6 3 11c0 1.8.5 3.5 1.4 5H9c1.7 0 3 1.3 3 3 0 .7-.3 1.3-.7 1.9.5.1 1.1.1 1.7.1 4.4 0 8.3-2.9 9.6-7.1.1-.4 0-.7-.3-1z" />
                <path d="M9 20H1c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1zM13 24H5c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z" />
              </svg>
            </label>

        <ul className="footer__menu-list">
          <li className="footer__menu-item footer__switch">
            <input
              type="checkbox"
              defaultChecked={themeDark}
              name="color-switch"
              id="color-switch"
              className="footer__switch-checkbox"
              onClick={() => setThemeDark(!themeDark)}
            />
          </li>
          
        </ul>
      </div>
    </footer>
  )
}

export default Footer
