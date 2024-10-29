// hooks/useFetchStrategies.js
import { useEffect, useState } from 'react';
import strategyCategories from '../data/strategies.json';

const useFetchStrategies = (currencyPair) => {
  const [strategiesData, setStrategiesData] = useState({});
  const [error, setError] = useState(null);

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
              image: `${strategy}_chart_${currencyPair}.png`, // Generate image names dynamically
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
