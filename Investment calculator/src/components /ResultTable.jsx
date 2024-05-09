import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

function ResultTable({ input }) {
    const results = calculateInvestmentResults(input);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    console.log(results)
    return (
        <tbody >
            {results.map((result) => {
                const TotalInterest = result.valueEndOfYear - (result.annualInvestment * result.year) - initialInvestment
                const TotalAmountInvested = result.valueEndOfYear - TotalInterest
                return (
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(TotalInterest)}</td>
                        <td>{formatter.format(TotalAmountInvested)}</td>
                    </tr>
                );
            }
            )}
        </tbody>
    )
}

export default ResultTable