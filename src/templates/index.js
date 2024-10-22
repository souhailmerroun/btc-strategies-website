import React, { useEffect, useState } from "react";
import Layout from "../components/layout";

const IndexPage = ({ pageContext }) => {
  const { currencyPair } = pageContext; // Get currencyPair from pageContext
  const [strategiesData, setStrategiesData] = useState({});
  const [error, setError] = useState(null);

  // Base URL for the images
  const baseImageUrl =
    "https://souhailmerroun-entrepreneur.s3.eu-west-3.amazonaws.com/btc_strategies/";

  // Fetch feedback from the JSON file
  useEffect(() => {
    const fetchFeedback = async () => {
      const currentDate = new Date()
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, "");
      const feedbackUrl = `https://souhailmerroun-entrepreneur.s3.eu-west-3.amazonaws.com/btc_strategies/${currencyPair}_strategies_feedback_${currentDate}.json`;

      try {
        const response = await fetch(feedbackUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch feedback");
        }
        const feedbackData = await response.json();

        // Combine feedback with strategy data
        const updatedStrategiesData = {
          "Trend Following Strategies": [
            {
              name: "MovingAverageStrategySMA",
              feedback: feedbackData["MovingAverageStrategySMA"],
              image: `${currencyPair}_sma_chart.png`,
            },
            {
              name: "MovingAverageStrategyEMA",
              feedback: feedbackData["MovingAverageStrategyEMA"],
              image: `${currencyPair}_ema_chart.png`,
            },
            {
              name: "IchimokuCloudStrategy",
              feedback: feedbackData["IchimokuCloudStrategy"],
              image: `ichimoku_cloud_chart_${currencyPair}.png`,
            },
            {
              name: "ADXStrategy",
              feedback: feedbackData["ADXStrategy"],
              image: `adx_chart_${currencyPair}.png`,
            },
            {
              name: "ParabolicSARStrategy",
              feedback: feedbackData["ParabolicSARStrategy"],
              image: `parabolic_sar_chart_${currencyPair}.png`,
            },
            {
              name: "DonchianChannelStrategy",
              feedback: feedbackData["DonchianChannelStrategy"],
              image: `donchian_channel_chart_${currencyPair}.png`,
            },
            {
              name: "GannTheoryStrategy",
              feedback: feedbackData["GannTheoryStrategy"],
              image: `gann_theory_chart_${currencyPair}.png`,
            },
          ],
          "Momentum Strategies": [
            {
              name: "MACDStrategy",
              feedback: feedbackData["MACDStrategy"],
              image: `macd_chart_${currencyPair}.png`,
            },
            {
              name: "RSIStrategy",
              feedback: feedbackData["RSIStrategy"],
              image: `rsi_chart_${currencyPair}.png`,
            },
            {
              name: "StochasticOscillatorStrategy",
              feedback: feedbackData["StochasticOscillatorStrategy"],
              image: `stochastic_oscillator_chart_${currencyPair}.png`,
            },
            {
              name: "ATRStrategy",
              feedback: feedbackData["ATRStrategy"],
              image: `atr_chart_${currencyPair}.png`,
            },
            {
              name: "VolumeProfileStrategy",
              feedback: feedbackData["VolumeProfileStrategy"],
              image: `volume_profile_chart_${currencyPair}.png`,
            },
            {
              name: "VWAPStrategy",
              feedback: feedbackData["VWAPStrategy"],
              image: `vwap_chart_${currencyPair}.png`,
            },
          ],
          // Continue for other strategy categories...
        };

        setStrategiesData(updatedStrategiesData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFeedback();
  }, [currencyPair]); // Dependency on currencyPair

  // Scroll to a specific strategy card when clicked in the menu
  const scrollToStrategy = (strategy) => {
    const element = document.getElementById(strategy);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              style={{ top: "20px" }}
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
                      style={{ cursor: "pointer" }}
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
                      {strategy.feedback || "Loading feedback..."}
                    </p>
                    {strategy.image && (
                      <img
                        src={`${baseImageUrl}${strategy.image}`}
                        alt={`Strategy Chart for ${strategy.name}`}
                        className="strategy-image"
                        style={{ maxWidth: "100%", marginTop: "10px" }}
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
