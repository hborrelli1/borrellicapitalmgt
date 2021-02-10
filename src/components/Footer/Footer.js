const Footer = () => {
  let currentYear = new Date().getFullYear();
  console.log('currentYear: ', currentYear);
  return (
    <footer>
      <p className="copy-write">©{currentYear} Borrelli Capital Management. All rights reserved.</p>
      <p className="hwbCreative">Website built by <a href="www.hwbcreative.com" target="_blank" rel="noreferrer">hwbCreative</a></p>
    </footer>
  )
}

export default Footer;
