// hooks/useFetchStrategies.js
import { useEffect, useState } from 'react';

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
        const updatedStrategiesData = {
          'Trend Following Strategies': [
            {
              name: 'MovingAverageStrategySMA',
              feedback: feedbackData['MovingAverageStrategySMA'],
              image: `${currencyPair}_sma_chart.png`,
            },
            {
              name: 'MovingAverageStrategyEMA',
              feedback: feedbackData['MovingAverageStrategyEMA'],
              image: `${currencyPair}_ema_chart.png`,
            },
            {
              name: 'IchimokuCloudStrategy',
              feedback: feedbackData['IchimokuCloudStrategy'],
              image: `ichimoku_cloud_chart_${currencyPair}.png`,
            },
            {
              name: 'ADXStrategy',
              feedback: feedbackData['ADXStrategy'],
              image: `adx_chart_${currencyPair}.png`,
            },
            {
              name: 'ParabolicSARStrategy',
              feedback: feedbackData['ParabolicSARStrategy'],
              image: `parabolic_sar_chart_${currencyPair}.png`,
            },
            {
              name: 'DonchianChannelStrategy',
              feedback: feedbackData['DonchianChannelStrategy'],
              image: `donchian_channel_chart_${currencyPair}.png`,
            },
            {
              name: 'GannTheoryStrategy',
              feedback: feedbackData['GannTheoryStrategy'],
              image: `gann_theory_chart_${currencyPair}.png`,
            },
          ],
          'Momentum Strategies': [
            {
              name: 'MACDStrategy',
              feedback: feedbackData['MACDStrategy'],
              image: `macd_chart_${currencyPair}.png`,
            },
            {
              name: 'RSIStrategy',
              feedback: feedbackData['RSIStrategy'],
              image: `rsi_chart_${currencyPair}.png`,
            },
            {
              name: 'StochasticOscillatorStrategy',
              feedback: feedbackData['StochasticOscillatorStrategy'],
              image: `stochastic_oscillator_chart_${currencyPair}.png`,
            },
            {
              name: 'ATRStrategy',
              feedback: feedbackData['ATRStrategy'],
              image: `atr_chart_${currencyPair}.png`,
            },
            {
              name: 'VolumeProfileStrategy',
              feedback: feedbackData['VolumeProfileStrategy'],
              image: `volume_profile_chart_${currencyPair}.png`,
            },
            {
              name: 'VWAPStrategy',
              feedback: feedbackData['VWAPStrategy'],
              image: `vwap_chart_${currencyPair}.png`,
            },
          ],
        };

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
