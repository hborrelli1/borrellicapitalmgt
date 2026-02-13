const Services = () => {
  return (
    <div id="Services" className="services container">
      <div className="content">
        <div className="section-header">
          <h3 className="sub-title">Services</h3>
          <h2 className="section-title">Financial Wealth Management</h2>
        </div>
        <div className="list">
          <ul>
            <li>Portfolio Management</li>
            <li>Retirement Planning</li>
            <li>Wealth Management</li>
            <li>Cash Management</li>
          </ul>
          <ul>
            <li>Fixed Income Investments</li>
            <li>Exchange Traded Funds</li>
            <li>Mutual Funds</li>
            <li>Equities</li>
          </ul>
          <ul>
            <li>Lending Products</li>
            <li>401k Rollovers</li>
            <li>Alternative Investments</li>
          </ul>
        </div>

        <div className="service-disclaimers">
          <p>Past performance is not indicative of future results, that investment involves risk, and that loss of principal is possible. Always contact your Investment Professional for specific recommendations.</p>

          <p>Loans are subject to credit approval, interest charges and collateral requirements. If pledged asset values decline, you may need to add collateral or positions may be liquidated at unfavorable prices.</p>
        </div>
      </div>
    </div>
  )
}

export default Services;
