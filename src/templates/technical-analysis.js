// components/IndexPage.js
import React from 'react';
import Layout from '../components/layout';
import useFetchStrategies from '../hooks/useFetchStrategies'; // Adjust the path if necessary

const IndexPage = ({ pageContext }) => {
  const { currencyPair } = pageContext; // Get currencyPair from pageContext
  const { strategiesData, error } = useFetchStrategies(currencyPair); // Use the custom hook

  // Scroll to a specific strategy card when clicked in the menu
  const scrollToStrategy = (strategy) => {
    const element = document.getElementById(strategy);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const baseImageUrl =
    'https://souhailmerroun-entrepreneur.s3.eu-west-3.amazonaws.com/btc_strategies/';

  return (
    <Layout>
      <div className="container">
        <h1 className="text-center">Crypto Strategies Feedback ({currencyPair})</h1>
        <p>
          This page displays the feedback for various trading strategies applied
          to the {currencyPair} trading pair. Click on a strategy in the left column
          to view its feedback.
        </p>

        <div className="row">
          {/* Left column: Strategy List */}
          <div className="col-md-3">
            <ul
              id="strategy-list"
              className="list-group strategy-list sticky-top"
              style={{ top: '20px' }}
            >
              {Object.entries(strategiesData).map(([category, strategies]) => (
                <React.Fragment key={category}>
                  <li className="list-group-item bg-dark text-white">
                    {category}
                  </li>
                  {strategies.map((strategy) => (
                    <li
                      key={strategy.name}
                      className="list-group-item"
                      onClick={() => scrollToStrategy(strategy.name)}
                      style={{ cursor: 'pointer' }}
                    >
                      {strategy.name}
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </div>

          {/* Right column: Strategy Feedback */}
          <div className="col-md-9">
            {Object.values(strategiesData)
              .flat()
              .map((strategy) => (
                <div
                  id={strategy.name}
                  key={strategy.name}
                  className="card mb-4"
                >
                  <div className="card-body">
                    <h5 className="card-title">{strategy.name}</h5>
                    <p className="card-text">
                      {strategy.feedback || 'Loading feedback...'}
                    </p>
                    {strategy.image && (
                      <img
                        src={`${baseImageUrl}${strategy.image}`}
                        alt={`Strategy Chart for ${strategy.name}`}
                        className="strategy-image"
                        style={{ maxWidth: '100%', marginTop: '10px' }}
                      />
                    )}
                  </div>
                </div>
              ))}
            {error && <p className="text-danger">{error}</p>}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
