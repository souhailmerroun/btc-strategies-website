// hooks/useFetchStrategies.js
import { useEffect, useState } from 'react';

const useFetchStrategies = (currencyPair) => {
  const [strategiesData, setStrategiesData] = useState({});
  const [error, setError] = useState(null);

  // Define strategy categories with their corresponding strategy names
  const strategyCategories = {
    "Trend Following Strategies": [
      "MovingAverageStrategySMA",
      "MovingAverageStrategyEMA",
      "IchimokuCloudStrategy",
      "ADXStrategy",
      "ParabolicSARStrategy",
      "DonchianChannelStrategy",
      "GannTheoryStrategy",
    ],
    "Momentum Strategies": [
      "MACDStrategy",
      "RSIStrategy",
      "StochasticOscillatorStrategy",
      "ATRStrategy",
      "VolumeProfileStrategy",
      "VWAPStrategy",
    ],
    "Volatility Strategies": [
      "BollingerBandsStrategy",
      "KeltnerChannelStrategy",
    ],
    "Price Action Strategies": [
      "PriceActionStrategy",
      "RenkoChartStrategy",
      "PivotPointsStrategy",
    ],
    "Support and Resistance Strategies": [
      "FibonacciRetracementStrategy",
    ],
    "Seasonality Strategies": [
      "SeasonalityStrategy",
    ],
  };

  useEffect(() => {
    const fetchFeedback = async () => {
      const currentDate = new Date()
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, '');
      const feedbackUrl = `https://souhailmerroun-entrepreneur.s3.eu-west-3.amazonaws.com/btc_strategies/${currencyPair}_strategies_feedback_${currentDate}.json`;

      try {
        const response = await fetch(feedbackUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch feedback');
        }
        const feedbackData = await response.json();

        // Combine feedback with strategy data
        const updatedStrategiesData = Object.entries(strategyCategories).reduce(
          (acc, [category, strategies]) => {
            acc[category] = strategies.map((strategy) => ({
              name: strategy,
              feedback: feedbackData[strategy], // Fetch feedback from the response
              image: `${strategy.replace(/[^a-z0-9]/g, "_")}_chart_${currencyPair}.png`, // Generate image names dynamically
            }));
            return acc;
          },
          {}
        );

        setStrategiesData(updatedStrategiesData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFeedback();
  }, [currencyPair]);

  return { strategiesData, error };
};

export default useFetchStrategies;
