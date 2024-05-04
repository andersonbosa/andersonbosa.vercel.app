'use client'


import React from 'react'


interface FooterProps { }

function Footer (props: FooterProps): React.JSX.Element {
  const _publicDomainDisclaimer = 'All information on this blog, unless otherwise noted, is hereby released into the public domain, with no rights reserved.'
  return (
    <>
      <footer className="footer footer-center p-10 -- bg-base-300 text-base-content mb-4 mt-auto">
        <div>
          <p>Created By <a href="#contacts" className="link">Anderson Bosa</a></p>
        </div>
      </footer>
    </>
  )
}
export default Footer
