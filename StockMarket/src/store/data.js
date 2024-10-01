/**
 * @file data.js
 * @description This file contains a list of stock data used in the Stock Market application.
 */

/**
 * @constant {Array<Object>} STOCK_LIST
 * @description An array of stock objects, each representing a stock with its unique id, name, and current price.
 * @property {number} id - The unique identifier for the stock.
 * @property {string} name - The name of the company.
 * @property {number} price - The current price of the stock.
 */
export const STOCK_LIST = [
    {
        id: 1,
        name: 'Apple',
        price: 145.83,
    },
    {
        id: 2,
        name: 'Microsoft Corporation',
        price: 277.65,
    },
    {
        id: 3,
        name: 'Amazon.com Inc.',
        price: 3372.20,
    }
];