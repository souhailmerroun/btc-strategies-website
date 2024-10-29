// src/pages/fibonacci-retracement.js
import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const currencies = require("../../data/currencies.json") // Import the list of currencies

// Base URL for the images stored in AWS
const baseImageUrl =
  "https://souhailmerroun-entrepreneur.s3.eu-west-3.amazonaws.com/btc_strategies/"

const FibonacciRetracementPage = () => (
  <Layout>
    <h1>Fibonacci Retracement</h1>
    <hr />
    <div class="row">
      {currencies.map(currency => (
        <section key={currency} className="col-md-4 mb-4">
          <h2>{currency.toUpperCase()}</h2>
          <div className="card">
            <div className="card-body">
              <img
                src={`${baseImageUrl}FibonacciRetracementStrategy_chart_${currency.toUpperCase()}USDT.png`}
                alt={`Fibonacci retracement chart for ${currency}`}
                style={{ maxWidth: "100%", marginTop: "10px" }}
                className="strategy-image"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  </Layout>
)

export const Head = () => <Seo title="Fibonacci Retracement" />

export default FibonacciRetracementPage
