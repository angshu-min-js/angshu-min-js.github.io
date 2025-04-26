import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie
} from 'recharts';

// Embedded data instead of fetching from CSV
const financialData = [
  {
    month: "April 2018",
    totalDeposits: 84204.17,
    monthlyDeposit: 84204.17,
    monthlyDepositNew: 37650.67,
    monthlyDepositRepeat: 46553.50,
    contestTicket: 0.00,
    contestTicketPercent: 0.00,
    newPercent: 44.71,
    repeatPercent: 55.29,
  },
  {
    month: "May 2018",
    totalDeposits: 417866.56,
    monthlyDeposit: 417866.56,
    monthlyDepositNew: 150423.06,
    monthlyDepositRepeat: 267443.50,
    contestTicket: 0.00,
    contestTicketPercent: 0.00,
    newPercent: 36.00,
    repeatPercent: 64.00,
  },
  {
    month: "June 2018",
    totalDeposits: 675352.30,
    monthlyDeposit: 675352.30,
    monthlyDepositNew: 170808.00,
    monthlyDepositRepeat: 504544.30,
    contestTicket: 0.00,
    contestTicketPercent: 0.00,
    newPercent: 25.29,
    repeatPercent: 74.71,
  },
  {
    month: "July 2018",
    totalDeposits: 1685385.37,
    monthlyDeposit: 1685385.37,
    monthlyDepositNew: 430235.29,
    monthlyDepositRepeat: 1255150.08,
    contestTicket: 0.00,
    contestTicketPercent: 0.00,
    newPercent: 25.53,
    repeatPercent: 74.47,
  },
  {
    month: "August 2018",
    totalDeposits: 3536373.56,
    monthlyDeposit: 3536373.56,
    monthlyDepositNew: 338387.96,
    monthlyDepositRepeat: 3197985.60,
    contestTicket: 0.00,
    contestTicketPercent: 0.00,
    newPercent: 9.57,
    repeatPercent: 90.43,
  },
  {
    month: "September 2018",
    totalDeposits: 3764272.59,
    monthlyDeposit: 3692272.59,
    monthlyDepositNew: 730734.16,
    monthlyDepositRepeat: 2961538.43,
    contestTicket: 72000.00,
    contestTicketPercent: 1.91,
    newPercent: 19.41,
    repeatPercent: 78.67,
  },
  {
    month: "October 2018",
    totalDeposits: 4796021.35,
    monthlyDeposit: 4679121.35,
    monthlyDepositNew: 848835.44,
    monthlyDepositRepeat: 3830285.91,
    contestTicket: 116900.00,
    contestTicketPercent: 2.44,
    newPercent: 17.70,
    repeatPercent: 79.86,
  },
  {
    month: "November 2018",
    totalDeposits: 6383330.41,
    monthlyDeposit: 6351330.41,
    monthlyDepositNew: 492583.91,
    monthlyDepositRepeat: 5858746.50,
    contestTicket: 32000.00,
    contestTicketPercent: 0.50,
    newPercent: 7.72,
    repeatPercent: 91.78,
  },
  {
    month: "December 2018",
    totalDeposits: 8843963.25,
    monthlyDeposit: 8802363.25,
    monthlyDepositNew: 980460.81,
    monthlyDepositRepeat: 7821902.44,
    contestTicket: 41600.00,
    contestTicketPercent: 0.47,
    newPercent: 11.09,
    repeatPercent: 88.44,
  },
  {
    month: "January 2019",
    totalDeposits: 12332313.08,
    monthlyDeposit: 12307312.08,
    monthlyDepositNew: 722620.07,
    monthlyDepositRepeat: 11584692.01,
    contestTicket: 25001.00,
    contestTicketPercent: 0.20,
    newPercent: 5.86,
    repeatPercent: 93.94,
  },
  {
    month: "February 2019",
    totalDeposits: 10749881.71,
    monthlyDeposit: 10749881.71,
    monthlyDepositNew: 823943.37,
    monthlyDepositRepeat: 9925938.34,
    contestTicket: 0,
    contestTicketPercent: 0,
    newPercent: 7.66,
    repeatPercent: 92.34,
  }
];

// Add financial metrics data
const financialMetricsData = [
  {
    month: "April 2018",
    revenue: 38055.98,
    expenses: 371203.00,
    grossProfit: -333147.02,
    entryFees: 878936.00,
    prizes: 1109443.51,
    marketingExpense: 11600.00,
    withdrawals: 272702.00,
    rake: 38055.98,
    revenuePerDeposit: 45.19
  },
  {
    month: "May 2018",
    revenue: 127198.95,
    expenses: 3055398.00,
    grossProfit: -2928199.05,
    entryFees: 2216437.96,
    prizes: 2902256.55,
    marketingExpense: 1845860.00,
    withdrawals: 1539906.00,
    rake: 127198.95,
    revenuePerDeposit: 30.44
  },
  {
    month: "June 2018",
    revenue: 204661.14,
    expenses: 852437.90,
    grossProfit: -647776.76,
    entryFees: 2455384.03,
    prizes: 2801414.80,
    marketingExpense: 223950.00,
    withdrawals: 1348764.00,
    rake: 204661.14,
    revenuePerDeposit: 30.30
  },
  {
    month: "July 2018",
    revenue: 618735.48,
    expenses: 2839343.90,
    grossProfit: -2220608.42,
    entryFees: 7151421.57,
    prizes: 6861712.47,
    marketingExpense: 2191800.00,
    withdrawals: 2399854.30,
    rake: 618735.48,
    revenuePerDeposit: 36.71
  },
  {
    month: "August 2018",
    revenue: 749079.89,
    expenses: 1114241.50,
    grossProfit: -365161.61,
    entryFees: 8082283.56,
    prizes: 7374533.07,
    marketingExpense: 701007.00,
    withdrawals: 3272000.00,
    rake: 749079.89,
    revenuePerDeposit: 21.18
  },
  {
    month: "September 2018",
    revenue: 1299262.77,
    expenses: 5091768.10,
    grossProfit: -3792505.33,
    entryFees: 11011165.02,
    prizes: 10397864.28,
    marketingExpense: 4363273.00,
    withdrawals: 4212771.10,
    rake: 1299262.77,
    revenuePerDeposit: 34.52
  },
  {
    month: "October 2018",
    revenue: 2157653.37,
    expenses: 2336987.20,
    grossProfit: -179333.83,
    entryFees: 17058142.04,
    prizes: 14745016.85,
    marketingExpense: 1237650.00,
    withdrawals: 5361817.00,
    rake: 2157653.37,
    revenuePerDeposit: 44.99
  },
  {
    month: "November 2018",
    revenue: 2446113.56,
    expenses: 2001596.95,
    grossProfit: 444516.61,
    entryFees: 21348462.00,
    prizes: 19431164.42,
    marketingExpense: 967100.00,
    withdrawals: 6599082.00,
    rake: 2446113.56,
    revenuePerDeposit: 38.32
  },
  {
    month: "December 2018",
    revenue: 3157425.35,
    expenses: 2257157.19,
    grossProfit: 900268.16,
    entryFees: 45606157.31,
    prizes: 25228665.57,
    marketingExpense: 868450.00,
    withdrawals: 7806679.00,
    rake: 3157425.35,
    revenuePerDeposit: 35.87
  },
  {
    month: "January 2019",
    revenue: 4244916.03,
    expenses: 1909796.99,
    grossProfit: 2335119.04,
    entryFees: 38602142.70,
    prizes: 34566699.66,
    marketingExpense: 713350.00,
    withdrawals: 11729354.00,
    rake: 4244916.03,
    revenuePerDeposit: 34.49
  },
  {
    month: "February 2019",
    revenue: 3916156.13,
    expenses: 0,
    grossProfit: 3916156.13,
    entryFees: 51513962.00,
    prizes: 29034826.27,
    marketingExpense: 0,
    withdrawals: 0,
    rake: 3916156.13,
    revenuePerDeposit: 36.43
  }
];

// Entry Fee Breakdown data (deposits, winnings, bonus)
const entryFeeBreakdownData = [
  {
    month: "April 2018",
    deposits: 77908.50,
    depositsPercent: 8.86,
    winnings: 668609.50,
    winningsPercent: 76.07,
    bonus: 132418.00,
    bonusPercent: 15.07
  },
  {
    month: "May 2018",
    deposits: 368810.23,
    depositsPercent: 16.64,
    winnings: 1320911.40,
    winningsPercent: 59.60,
    bonus: 526716.33,
    bonusPercent: 23.76
  },
  {
    month: "June 2018",
    deposits: 643620.30,
    depositsPercent: 26.21,
    winnings: 1329820.40,
    winningsPercent: 54.16,
    bonus: 481943.33,
    bonusPercent: 19.63
  },
  {
    month: "July 2018",
    deposits: 1566930.87,
    depositsPercent: 21.91,
    winnings: 4199601.20,
    winningsPercent: 58.72,
    bonus: 1384889.50,
    bonusPercent: 19.37
  },
  {
    month: "August 2018",
    deposits: 3012425.66,
    depositsPercent: 37.27,
    winnings: 3941998.10,
    winningsPercent: 48.77,
    bonus: 1127859.80,
    bonusPercent: 13.95
  },
  {
    month: "September 2018",
    deposits: 3626498.72,
    depositsPercent: 32.93,
    winnings: 4972326.00,
    winningsPercent: 45.16,
    bonus: 2412340.30,
    bonusPercent: 21.91
  },
  {
    month: "October 2018",
    deposits: 4853015.84,
    depositsPercent: 28.45,
    winnings: 8579239.90,
    winningsPercent: 50.29,
    bonus: 3625886.30,
    bonusPercent: 21.26
  },
  {
    month: "November 2018",
    deposits: 6225918.43,
    depositsPercent: 29.16,
    winnings: 11891716.77,
    winningsPercent: 55.70,
    bonus: 3230826.80,
    bonusPercent: 15.13
  },
  {
    month: "December 2018",
    deposits: 8400801.60,
    depositsPercent: 18.42,
    winnings: 15981353.91,
    winningsPercent: 35.04,
    bonus: 21224001.80,
    bonusPercent: 46.54
  },
  {
    month: "January 2019",
    deposits: 12424926.50,
    depositsPercent: 32.19,
    winnings: 21224001.80,
    winningsPercent: 54.98,
    bonus: 4953214.40,
    bonusPercent: 12.83
  },
  {
    month: "February 2019",
    deposits: 29694424.71,
    depositsPercent: 57.64,
    winnings: 17606882.38,
    winningsPercent: 34.18,
    bonus: 4212654.91,
    bonusPercent: 8.18
  }
];

// Product metrics data
const productMetricsData = [
  {
    month: "April 2018",
    registeredUsers: 10280,
    newPayingUsers: 211,
    payingConversionRate: 2.05,
    monthlyActiveUsers: 2628,
    avgDailyActiveUsers: 354,
    monthlyPayingUsers: 219,
    revenue: 38055.98
  },
  {
    month: "May 2018",
    registeredUsers: 76173,
    newPayingUsers: 1406,
    payingConversionRate: 1.85,
    monthlyActiveUsers: 15362,
    avgDailyActiveUsers: 1417.23,
    monthlyPayingUsers: 1495,
    revenue: 127198.95
  },
  {
    month: "June 2018",
    registeredUsers: 18432,
    newPayingUsers: 751,
    payingConversionRate: 4.07,
    monthlyActiveUsers: 11875,
    avgDailyActiveUsers: 1358.50,
    monthlyPayingUsers: 955,
    revenue: 204661.14
  },
  {
    month: "July 2018",
    registeredUsers: 64859,
    newPayingUsers: 3082,
    payingConversionRate: 4.75,
    monthlyActiveUsers: 31501,
    avgDailyActiveUsers: 3648.80,
    monthlyPayingUsers: 3420,
    revenue: 618735.48
  },
  {
    month: "August 2018",
    registeredUsers: 28475,
    newPayingUsers: 2281,
    payingConversionRate: 8.01,
    monthlyActiveUsers: 17431,
    avgDailyActiveUsers: 2690.40,
    monthlyPayingUsers: 3073,
    revenue: 749079.89
  },
  {
    month: "September 2018",
    registeredUsers: 101786,
    newPayingUsers: 6611,
    payingConversionRate: 6.49,
    monthlyActiveUsers: 38895,
    avgDailyActiveUsers: 3858.43,
    monthlyPayingUsers: 7835,
    revenue: 1299262.77
  },
  {
    month: "October 2018",
    registeredUsers: 35520,
    newPayingUsers: 5667,
    payingConversionRate: 15.95,
    monthlyActiveUsers: 33521,
    avgDailyActiveUsers: 5161.61,
    monthlyPayingUsers: 8129,
    revenue: 2157653.37
  },
  {
    month: "November 2018",
    registeredUsers: 47927,
    newPayingUsers: 4279,
    payingConversionRate: 8.93,
    monthlyActiveUsers: 31710,
    avgDailyActiveUsers: 4939.70,
    monthlyPayingUsers: 8201,
    revenue: 2446113.56
  },
  {
    month: "December 2018",
    registeredUsers: 54395,
    newPayingUsers: 8918,
    payingConversionRate: 16.39,
    monthlyActiveUsers: 31989,
    avgDailyActiveUsers: 5012.00,
    monthlyPayingUsers: 13111,
    revenue: 3157425.35
  },
  {
    month: "January 2019",
    registeredUsers: 79971,
    newPayingUsers: 7193,
    payingConversionRate: 8.99,
    monthlyActiveUsers: 31085,
    avgDailyActiveUsers: 5697.00,
    monthlyPayingUsers: 13366,
    revenue: 4244916.03
  },
  {
    month: "February 2019",
    registeredUsers: 121786,
    newPayingUsers: 0,
    payingConversionRate: 0,
    monthlyActiveUsers: 0,
    avgDailyActiveUsers: 10000,
    monthlyPayingUsers: 0,
    revenue: 3916156.13
  }
];

// Cohort data for deposits retention
const depositCohortData = [
  {
    cohort: "April 2018",
    month0: 100.00,
    month1: 20.15,
    month2: 12.47,
    month3: 5.00,
    month4: 2.38,
    month5: 2.28,
    month6: 1.80,
    month7: 1.33
  },
  {
    cohort: "May 2018",
    month0: 100.00,
    month1: 61.87,
    month2: 24.79,
    month3: 11.82,
    month4: 11.32,
    month5: 8.93,
    month6: 6.58,
    month7: null
  },
  {
    cohort: "June 2018",
    month0: 100.00,
    month1: 40.07,
    month2: 19.10,
    month3: 18.29,
    month4: 14.43,
    month5: 10.63,
    month6: null,
    month7: null
  },
  {
    cohort: "July 2018",
    month0: 100.00,
    month1: 47.66,
    month2: 45.65,
    month3: 36.02,
    month4: 26.54,
    month5: null,
    month6: null,
    month7: null
  },
  {
    cohort: "August 2018",
    month0: 100.00,
    month1: 95.78,
    month2: 75.58,
    month3: 55.68,
    month4: null,
    month5: null,
    month6: null,
    month7: null
  },
  {
    cohort: "September 2018",
    month0: 100.00,
    month1: 78.91,
    month2: 58.13,
    month3: null,
    month4: null,
    month5: null,
    month6: null,
    month7: null
  },
  {
    cohort: "October 2018",
    month0: 100.00,
    month1: 73.67,
    month2: null,
    month3: null,
    month4: null,
    month5: null,
    month6: null,
    month7: null
  },
  {
    cohort: "November 2018",
    month0: 100.00,
    month1: null,
    month2: null,
    month3: null,
    month4: null,
    month5: null,
    month6: null,
    month7: null
  }
];

// User retention data (absolute numbers)
const userRetentionData = [
  {
    cohort: "April 2018",
    cohortSize: 2109,
    month0: 2109,
    month1: 2054,
    month2: 379,
    month3: 314,
    month4: 241,
    month5: 230,
    month6: 209,
    month7: 212
  },
  {
    cohort: "May 2018",
    cohortSize: 2560,
    month0: 2560,
    month1: 435,
    month2: 392,
    month3: 291,
    month4: 293,
    month5: 290,
    month6: 294,
    month7: null
  },
  {
    cohort: "June 2018",
    cohortSize: 9568,
    month0: 9568,
    month1: 3769,
    month2: 1405,
    month3: 1146,
    month4: 957,
    month5: 990,
    month6: null,
    month7: null
  },
  {
    cohort: "July 2018",
    cohortSize: 23253,
    month0: 23253,
    month1: 5871,
    month2: 3379,
    month3: 2469,
    month4: 2500,
    month5: null,
    month6: null,
    month7: null
  },
  {
    cohort: "August 2018",
    cohortSize: 13662,
    month0: 13662,
    month1: 5151,
    month2: 2901,
    month3: 2785,
    month4: null,
    month5: null,
    month6: null,
    month7: null
  },
  {
    cohort: "September 2018",
    cohortSize: 25712,
    month0: 25712,
    month1: 8585,
    month2: 5670,
    month3: null,
    month4: null,
    month5: null,
    month6: null,
    month7: null
  },
  {
    cohort: "October 2018",
    cohortSize: 26942,
    month0: 26942,
    month1: 11052,
    month2: null,
    month3: null,
    month4: null,
    month5: null,
    month6: null,
    month7: null
  },
  {
    cohort: "November 2018",
    cohortSize: 26066,
    month0: 26066,
    month1: null,
    month2: null,
    month3: null,
    month4: null,
    month5: null,
    month6: null,
    month7: null
  }
];

// User retention percentages
const userRetentionPercentData = [
  {
    cohort: "April 2018",
    month0: 0,
    month1: 97.39,
    month2: 18.45,
    month3: 82.85,
    month4: 76.75,
    month5: 95.44,
    month6: 90.87,
    month7: 101.44
  },
  {
    cohort: "May 2018",
    month0: 0,
    month1: 16.99,
    month2: 90.11,
    month3: 74.23,
    month4: 100.69,
    month5: 98.98,
    month6: 101.38,
    month7: null
  },
  {
    cohort: "June 2018",
    month0: 0,
    month1: 39.39,
    month2: 37.28,
    month3: 81.57,
    month4: 83.51,
    month5: 103.45,
    month6: null,
    month7: null
  },
  {
    cohort: "July 2018",
    month0: 0,
    month1: 25.25,
    month2: 57.55,
    month3: 73.07,
    month4: 101.26,
    month5: null,
    month6: null,
    month7: null
  },
  {
    cohort: "August 2018",
    month0: 0,
    month1: 37.70,
    month2: 56.32,
    month3: 96.00,
    month4: null,
    month5: null,
    month6: null,
    month7: null
  },
  {
    cohort: "September 2018",
    month0: 0,
    month1: 33.39,
    month2: 66.05,
    month3: null,
    month4: null,
    month5: null,
    month6: null,
    month7: null
  },
  {
    cohort: "October 2018",
    month0: 0,
    month1: 41.02,
    month2: null,
    month3: null,
    month4: null,
    month5: null,
    month6: null,
    month7: null
  },
  {
    cohort: "November 2018",
    month0: 0,
    month1: null,
    month2: null,
    month3: null,
    month4: null,
    month5: null,
    month6: null,
    month7: null
  }
];

// Add cohort data arrays
const powerUserRetentionData = [
  { cohort: 'Oct-17', month0: 100, month1: 82.28, month2: 79.75, month3: 74.68, month4: 67.09, month5: 62.02, month6: 58.23, month7: 56.96 },
  { cohort: 'Nov-17', month0: 100, month1: 80.95, month2: 76.19, month3: 69.05, month4: 64.29, month5: 59.52, month6: 53.57, month7: null },
  { cohort: 'Dec-17', month0: 100, month1: 79.17, month2: 70.83, month3: 64.58, month4: 58.33, month5: 56.25, month6: null, month7: null },
  { cohort: 'Jan-18', month0: 100, month1: 77.97, month2: 69.49, month3: 64.41, month4: 62.71, month5: null, month6: null, month7: null },
  { cohort: 'Feb-18', month0: 100, month1: 75.56, month2: 66.67, month3: 60, month4: null, month5: null, month6: null, month7: null },
  { cohort: 'Mar-18', month0: 100, month1: 72.41, month2: 63.79, month3: null, month4: null, month5: null, month6: null, month7: null },
  { cohort: 'Apr-18', month0: 100, month1: 76.47, month2: null, month3: null, month4: null, month5: null, month6: null, month7: null },
  { cohort: 'May-18', month0: 100, month1: null, month2: null, month3: null, month4: null, month5: null, month6: null, month7: null }
];

const regularUserRetentionData = [
  { cohort: 'Oct-17', month0: 100, month1: 76.39, month2: 70.14, month3: 63.89, month4: 58.33, month5: 52.78, month6: 48.61, month7: 47.22 },
  { cohort: 'Nov-17', month0: 100, month1: 74.29, month2: 68.57, month3: 60, month4: 54.29, month5: 51.43, month6: 45.71, month7: null },
  { cohort: 'Dec-17', month0: 100, month1: 71.88, month2: 64.06, month3: 57.81, month4: 51.56, month5: 48.44, month6: null, month7: null },
  { cohort: 'Jan-18', month0: 100, month1: 71.64, month2: 62.69, month3: 58.21, month4: 55.22, month5: null, month6: null, month7: null },
  { cohort: 'Feb-18', month0: 100, month1: 68.57, month2: 60, month3: 54.29, month4: null, month5: null, month6: null, month7: null },
  { cohort: 'Mar-18', month0: 100, month1: 65.63, month2: 56.25, month3: null, month4: null, month5: null, month6: null, month7: null },
  { cohort: 'Apr-18', month0: 100, month1: 69.44, month2: null, month3: null, month4: null, month5: null, month6: null, month7: null },
  { cohort: 'May-18', month0: 100, month1: null, month2: null, month3: null, month4: null, month5: null, month6: null, month7: null }
];

const depositCohortValueData = [
  { cohort: 'Oct-17', month0: 42000, month1: 30000, month2: 25000, month3: 18000, month4: 15000, month5: 12000, month6: 10000 },
  { cohort: 'Nov-17', month0: 48000, month1: 35000, month2: 28000, month3: 22000, month4: 18000, month5: 14000, month6: null },
  { cohort: 'Dec-17', month0: 52000, month1: 38000, month2: 30000, month3: 24000, month4: 20000, month5: null, month6: null },
  { cohort: 'Jan-18', month0: 58000, month1: 42000, month2: 35000, month3: 28000, month4: null, month5: null, month6: null },
  { cohort: 'Feb-18', month0: 62000, month1: 45000, month2: 38000, month3: null, month4: null, month5: null, month6: null },
  { cohort: 'Mar-18', month0: 68000, month1: 50000, month2: null, month3: null, month4: null, month5: null, month6: null },
  { cohort: 'Apr-18', month0: 72000, month1: null, month2: null, month3: null, month4: null, month5: null, month6: null },
  { cohort: 'May-18', month0: 75000, month1: null, month2: null, month3: null, month4: null, month5: null, month6: null }
];

const transactionCohortData = [
  { cohort: 'Oct-17', month0: 320, month1: 280, month2: 240, month3: 220, month4: 190, month5: 170, month6: 150 },
  { cohort: 'Nov-17', month0: 350, month1: 310, month2: 270, month3: 240, month4: 210, month5: 180, month6: null },
  { cohort: 'Dec-17', month0: 380, month1: 340, month2: 300, month3: 270, month4: 230, month5: null, month6: null },
  { cohort: 'Jan-18', month0: 410, month1: 370, month2: 330, month3: 290, month4: null, month5: null, month6: null },
  { cohort: 'Feb-18', month0: 440, month1: 390, month2: 350, month3: null, month4: null, month5: null, month6: null },
  { cohort: 'Mar-18', month0: 470, month1: 420, month2: null, month3: null, month4: null, month5: null, month6: null },
  { cohort: 'Apr-18', month0: 500, month1: null, month2: null, month3: null, month4: null, month5: null, month6: null },
  { cohort: 'May-18', month0: 530, month1: null, month2: null, month3: null, month4: null, month5: null, month6: null }
];

const entryFeesCohortData = [
  { cohort: 'Oct-17', month0: 28000, month1: 24000, month2: 21000, month3: 18000, month4: 16000, month5: 14000, month6: 12000 },
  { cohort: 'Nov-17', month0: 32000, month1: 28000, month2: 24000, month3: 21000, month4: 18000, month5: 15000, month6: null },
  { cohort: 'Dec-17', month0: 36000, month1: 31000, month2: 27000, month3: 24000, month4: 20000, month5: null, month6: null },
  { cohort: 'Jan-18', month0: 39000, month1: 34000, month2: 30000, month3: 26000, month4: null, month5: null, month6: null },
  { cohort: 'Feb-18', month0: 42000, month1: 37000, month2: 32000, month3: null, month4: null, month5: null, month6: null },
  { cohort: 'Mar-18', month0: 45000, month1: 39000, month2: null, month3: null, month4: null, month5: null, month6: null },
  { cohort: 'Apr-18', month0: 48000, month1: null, month2: null, month3: null, month4: null, month5: null, month6: null },
  { cohort: 'May-18', month0: 51000, month1: null, month2: null, month3: null, month4: null, month5: null, month6: null }
];

// Function to get color based on retention value
const getRetentionColor = (value: any): string => {
  if (value === null || value === undefined) return '';
  
  const numValue = Number(value);
  
  // Color scale from light to dark green
  if (numValue >= 75) return 'rgba(0, 128, 0, 0.8)';
  if (numValue >= 50) return 'rgba(0, 128, 0, 0.6)';
  if (numValue >= 25) return 'rgba(0, 128, 0, 0.4)';
  if (numValue >= 10) return 'rgba(0, 128, 0, 0.2)';
  if (numValue > 0) return 'rgba(0, 128, 0, 0.1)';
  return '';
};

// Format data for cohort heatmap
const formatCohortData = (data) => {
  return data.map(cohort => {
    const formattedData = [];
    for (let i = 0; i <= 7; i++) {
      const monthKey = `month${i}`;
      if (cohort[monthKey] !== null && cohort[monthKey] !== undefined) {
        formattedData.push({
          month: i,
          value: cohort[monthKey],
          cohortName: cohort.cohort
        });
      }
    }
    return formattedData;
  }).flat();
};

// Add funnel data
const newUserFunnelData = [
  {
    id: 1,
    step: "AJZR-FIRST-LAUNCH",
    users: 2480,
    percent: 100,
    dropPercent: null,
    timeToConvert: "15 minutes"
  },
  {
    id: 2,
    step: "AJZR-REGISTERED",
    users: 770,
    percent: 29.56,
    dropPercent: 70.44,
    timeToConvert: "2 hours 57 minutes"
  },
  {
    id: 3,
    step: "AJZR-PLAYED-A-GAME",
    users: 427,
    percent: 16.39,
    dropPercent: 13.17,
    timeToConvert: "17 hours 30 minutes"
  },
  {
    id: 4,
    step: "AJZR-DEPOSIT-ATTEMPTED",
    users: 66,
    percent: 2.53,
    dropPercent: 13.86,
    timeToConvert: "3 hours 52 minutes"
  },
  {
    id: 5,
    step: "AJZR-DEPOSIT-COMPLETED",
    users: 40,
    percent: 1.54,
    dropPercent: 0.99,
    timeToConvert: null
  }
];

const existingPlayerNewLoginFunnelData = [
  {
    id: 1,
    step: "AJZR-FIRST-LAUNCH",
    users: 2605,
    percent: 100,
    dropPercent: null,
    timeToConvert: "55 minutes"
  },
  {
    id: 2,
    step: "AJZR-LOGGED-IN",
    users: 1965,
    percent: 75.43,
    dropPercent: 24.57,
    timeToConvert: "5 hours 21 minutes"
  },
  {
    id: 3,
    step: "AJZR-PLAYED-A-GAME",
    users: 1333,
    percent: 51.17,
    dropPercent: 24.26,
    timeToConvert: "1 day 4 hours 42 minutes"
  },
  {
    id: 4,
    step: "AJZR-DEPOSIT-ATTEMPTED",
    users: 349,
    percent: 13.40,
    dropPercent: 37.77,
    timeToConvert: "5 hours 35 minutes"
  },
  {
    id: 5,
    step: "AJZR-DEPOSIT-COMPLETED",
    users: 271,
    percent: 10.40,
    dropPercent: 3.00,
    timeToConvert: null
  }
];

const existingPlayerLoggedInFunnelData = [
  {
    id: 1,
    step: "AJZR-APPLICATION-LAUNCH",
    users: 3228,
    percent: 100,
    dropPercent: null,
    timeToConvert: "10 hours 5 minutes"
  },
  {
    id: 2,
    step: "AJZR-PLAYED-A-GAME",
    users: 2231,
    percent: 42.69,
    dropPercent: 57.31,
    timeToConvert: "1 day 13 hours 25 minutes"
  },
  {
    id: 3,
    step: "AJZR-DEPOSIT-ATTEMPTED",
    users: 652,
    percent: 12.48,
    dropPercent: 30.21,
    timeToConvert: "2 hours 49 minutes"
  },
  {
    id: 4,
    step: "AJZR-DEPOSIT-COMPLETED",
    users: 548,
    percent: 10.49,
    dropPercent: 1.99,
    timeToConvert: null
  }
];

// Custom funnel bar component 
interface FunnelItem {
  id: number;
  step: string;
  users: number;
  percent: number;
  dropPercent: number | null;
  timeToConvert: string | null;
}

interface FunnelBarProps {
  data: FunnelItem[];
  maxWidth: number;
}

const FunnelBar = ({ data, maxWidth }: FunnelBarProps) => {
  const getColor = (id: number): string => {
    switch(id) {
      case 1: return "#3b82f6"; // Blue
      case 2: return "#f59e0b"; // Yellow
      case 3: return "#10b981"; // Green
      case 4: return "#06b6d4"; // Cyan
      case 5: return "#14b8a6"; // Teal
      default: return "#3b82f6";
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {data.map(item => (
        <div key={item.id} className="flex flex-col">
          <div className="flex items-center mb-1">
            <div className="w-6 text-sm text-gray-500">{item.id}</div>
            <div className="text-xs text-gray-600 ml-2">{item.step}</div>
            <div className="ml-auto text-sm font-semibold">{item.percent}%</div>
            <div className="ml-4 text-xs text-gray-500 w-16 text-right">{item.users} users</div>
          </div>
          <div className="flex items-center h-6 relative">
            <div 
              className="h-full rounded transition-all duration-500 ease-in-out"
              style={{ 
                width: `${(item.percent / 100) * maxWidth}%`, 
                backgroundColor: getColor(item.id)
              }}
            />
            {item.dropPercent && (
              <div className="absolute text-xs text-gray-500 ml-2 flex items-center">
                <svg className="h-4 w-4 text-red-500 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {item.dropPercent}%
                {item.timeToConvert && (
                  <span className="ml-4">{item.timeToConvert}</span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// Add a function to format currency values (INR)
const formatCurrency = (value: any): string => {
  if (value === null || value === undefined) return '-';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Number(value));
};

const LeagueAddDashboard = () => {
  // Format number for display
  const formatNumber = (num: number | string | undefined | null) => {
    if (num === undefined || num === null) return '-';
    const numValue = typeof num === 'string' ? parseFloat(num) : num;
    if (isNaN(numValue)) return '-';
    return numValue.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  // Format percentages
  const formatPercent = (num: number | string | undefined | null) => {
    if (num === undefined || num === null) return '-';
    const numValue = typeof num === 'string' ? parseFloat(num) : num;
    if (isNaN(numValue)) return '-';
    return `${numValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}%`;
  };

  // Calculate total for pie charts
  const calculateTotal = (data, key) => {
    return data.reduce((sum, item) => sum + (item[key] || 0), 0);
  };

  return (
    <div className="space-y-10 mt-10">
      <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-700 p-4 mb-6 rounded" role="alert">
        <p className="font-bold">Disclaimer</p>
        <p>All data shown in this dashboard is fictional sample data for demonstration purposes only and does not represent actual business metrics.</p>
      </div>
      <h2 className="text-3xl font-bold mb-6 text-primary flex items-center">
        <span className="text-2xl mr-2">📊</span> Dashboard
      </h2>

      {/* Financial Metrics Section */}
      <section className="bg-white rounded-xl shadow p-6 mb-8">
        <h3 className="font-semibold text-lg mb-2 text-primary">Financial Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-1">Revenue vs Expenses</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={financialMetricsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value: any) => formatNumber(value)} />
                <Tooltip formatter={(value: any) => formatNumber(value)} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#0088FE" name="Revenue" />
                <Line type="monotone" dataKey="expenses" stroke="#FF8042" name="Expenses" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Gross Profit/Loss</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={financialMetricsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value: any) => formatNumber(value)} />
                <Tooltip formatter={(value: any) => formatNumber(value)} />
                <Legend />
                <Bar dataKey="grossProfit" name="Gross Profit/Loss">
                  {financialMetricsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.grossProfit >= 0 ? "#82ca9d" : "#ff6b6b"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="font-semibold mb-1">Entry Fees vs Prizes</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={financialMetricsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value: any) => formatNumber(value)} />
                <Tooltip formatter={(value: any) => formatNumber(value)} />
                <Legend />
                <Line type="monotone" dataKey="entryFees" stroke="#8884d8" name="Entry Fees" />
                <Line type="monotone" dataKey="prizes" stroke="#ffc658" name="Prizes" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Marketing Expense & Withdrawals</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={financialMetricsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value: any) => formatNumber(value)} />
                <Tooltip formatter={(value: any) => formatNumber(value)} />
                <Legend />
                <Line type="monotone" dataKey="marketingExpense" stroke="#ff7300" name="Marketing" />
                <Line type="monotone" dataKey="withdrawals" stroke="#8dd1e1" name="Withdrawals" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="font-semibold mb-1">Revenue per Deposit (%)</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={financialMetricsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value: any) => `${formatNumber(value)}%`} />
                <Tooltip formatter={(value: any) => `${formatNumber(value)}%`} />
                <Legend />
                <Bar dataKey="revenuePerDeposit" fill="#a4de6c" name="Revenue/Deposit %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Entry Fee Breakdown (February 2019)</h4>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Deposits', value: entryFeeBreakdownData[10].depositsPercent },
                    { name: 'Winnings', value: entryFeeBreakdownData[10].winningsPercent },
                    { name: 'Bonus', value: entryFeeBreakdownData[10].bonusPercent }
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Cell fill="#0088FE" />
                  <Cell fill="#00C49F" />
                  <Cell fill="#FFBB28" />
                </Pie>
                <Tooltip formatter={(value: any) => `${formatNumber(value)}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="font-semibold mb-3">Entry Fee Breakdown by Month</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-3 py-2">Month</th>
                  <th className="border px-3 py-2">Deposits</th>
                  <th className="border px-3 py-2">Deposits %</th>
                  <th className="border px-3 py-2">Winnings</th>
                  <th className="border px-3 py-2">Winnings %</th>
                  <th className="border px-3 py-2">Bonus</th>
                  <th className="border px-3 py-2">Bonus %</th>
                </tr>
              </thead>
              <tbody>
                {entryFeeBreakdownData.map((row, index) => (
                  <tr key={index}>
                    <td className="border px-3 py-2 font-medium">{row.month}</td>
                    <td className="border px-3 py-2">{formatNumber(row.deposits)}</td>
                    <td className="border px-3 py-2">{formatPercent(row.depositsPercent)}</td>
                    <td className="border px-3 py-2">{formatNumber(row.winnings)}</td>
                    <td className="border px-3 py-2">{formatPercent(row.winningsPercent)}</td>
                    <td className="border px-3 py-2">{formatNumber(row.bonus)}</td>
                    <td className="border px-3 py-2">{formatPercent(row.bonusPercent)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit and Contest Ticket Metrics */}
      <section className="bg-white rounded-xl shadow p-6 mb-8">
        <h3 className="font-semibold text-lg mb-2 text-primary">User Activity Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-1">Monthly Deposits</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={financialData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value: any) => formatNumber(value)} />
                <Tooltip formatter={formatNumber} />
                <Legend />
                <Line type="monotone" dataKey="monthlyDeposit" stroke="#0088FE" name="Total" />
                <Line type="monotone" dataKey="monthlyDepositNew" stroke="#00C49F" name="New Users" />
                <Line type="monotone" dataKey="monthlyDepositRepeat" stroke="#FFBB28" name="Repeat Users" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Contest Ticket Distribution</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={financialData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value: any) => `${formatNumber(value)}%`} />
                <Tooltip formatter={(value: any) => `${formatNumber(value)}%`} />
                <Legend />
                <Bar dataKey="contestTicketPercent" fill="#8884d8" name="Contest Ticket %" />
                <Bar dataKey="newPercent" fill="#82ca9d" name="New Users %" />
                <Bar dataKey="repeatPercent" fill="#ffc658" name="Repeat Users %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Product Performance Metrics */}
      <section className="bg-white rounded-xl shadow p-6 mb-8">
        <h3 className="font-semibold text-lg mb-2 text-primary">Product Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-1">User Growth</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={productMetricsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value: any) => formatNumber(value)} />
                <Tooltip formatter={formatNumber} />
                <Legend />
                <Line type="monotone" dataKey="registeredUsers" stroke="#0088FE" name="Registered Users" />
                <Line type="monotone" dataKey="monthlyActiveUsers" stroke="#00C49F" name="Monthly Active Users" />
                <Line type="monotone" dataKey="avgDailyActiveUsers" stroke="#FFBB28" name="Avg Daily Active Users" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Paying Users & Revenue</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={productMetricsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" tickFormatter={(value: any) => formatNumber(value)} />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(value: any) => `${formatNumber(value)}`} />
                <Tooltip formatter={formatNumber} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="newPayingUsers" stroke="#8884d8" name="New Paying Users" />
                <Line yAxisId="left" type="monotone" dataKey="monthlyPayingUsers" stroke="#82ca9d" name="Monthly Paying Users" />
                <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#ff7300" name="Revenue" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Conversion Rate */}
      <section className="bg-white rounded-xl shadow p-6 mb-8">
        <h3 className="font-semibold text-lg mb-2 text-primary">Conversion Metrics</h3>
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h4 className="font-semibold mb-1">Paying Conversion Rate (%)</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={productMetricsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value: any) => `${formatNumber(value)}%`} />
                <Tooltip formatter={(value: any) => `${formatNumber(value)}%`} />
                <Legend />
                <Bar dataKey="payingConversionRate" fill="#8884d8" name="Paying Conversion Rate" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Funnel Analysis */}
      <section className="bg-white rounded-xl shadow p-6 mb-8">
        <h3 className="font-semibold text-lg mb-2 text-primary">Funnel Analysis</h3>
        <div className="grid grid-cols-1 gap-8">
          <div className="mb-8">
            <h4 className="font-semibold mb-3">New User Funnel</h4>
            <div className="p-4 bg-gray-50 rounded-lg">
              <FunnelBar data={newUserFunnelData} maxWidth={100} />
            </div>
          </div>

          <div className="mb-8">
            <h4 className="font-semibold mb-3">Existing Player (New Login) Funnel</h4>
            <div className="p-4 bg-gray-50 rounded-lg">
              <FunnelBar data={existingPlayerNewLoginFunnelData} maxWidth={100} />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Existing Player (Logged In) Funnel</h4>
            <div className="p-4 bg-gray-50 rounded-lg">
              <FunnelBar data={existingPlayerLoggedInFunnelData} maxWidth={100} />
            </div>
          </div>
        </div>
      </section>

      {/* Cohort Analysis */}
      <section className="bg-white rounded-xl shadow p-6 mb-8">
        <h3 className="font-semibold text-lg mb-2 text-primary">Cohort Analysis</h3>
        
        {/* Cohort Analysis Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Cohort Analysis</h2>
          
          {/* Power Users Retention Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Power Users Retention (Total matches played {'>'} 10)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Cohort</th>
                    <th className="py-2 px-4 border-b text-center">Month 0</th>
                    <th className="py-2 px-4 border-b text-center">Month 1</th>
                    <th className="py-2 px-4 border-b text-center">Month 2</th>
                    <th className="py-2 px-4 border-b text-center">Month 3</th>
                    <th className="py-2 px-4 border-b text-center">Month 4</th>
                    <th className="py-2 px-4 border-b text-center">Month 5</th>
                    <th className="py-2 px-4 border-b text-center">Month 6</th>
                    <th className="py-2 px-4 border-b text-center">Month 7</th>
                  </tr>
                </thead>
                <tbody>
                  {powerUserRetentionData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-4 border-b font-medium">{row.cohort}</td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month0) }}>
                        {row.month0 !== null ? `${row.month0.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month1) }}>
                        {row.month1 !== null ? `${row.month1.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month2) }}>
                        {row.month2 !== null ? `${row.month2.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month3) }}>
                        {row.month3 !== null ? `${row.month3.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month4) }}>
                        {row.month4 !== null ? `${row.month4.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month5) }}>
                        {row.month5 !== null ? `${row.month5.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month6) }}>
                        {row.month6 !== null ? `${row.month6.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month7) }}>
                        {row.month7 !== null ? `${row.month7.toFixed(2)}%` : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Regular Users Retention Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Regular Users Retention (Total matches played {'>'} 1)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Cohort</th>
                    <th className="py-2 px-4 border-b text-center">Month 0</th>
                    <th className="py-2 px-4 border-b text-center">Month 1</th>
                    <th className="py-2 px-4 border-b text-center">Month 2</th>
                    <th className="py-2 px-4 border-b text-center">Month 3</th>
                    <th className="py-2 px-4 border-b text-center">Month 4</th>
                    <th className="py-2 px-4 border-b text-center">Month 5</th>
                    <th className="py-2 px-4 border-b text-center">Month 6</th>
                    <th className="py-2 px-4 border-b text-center">Month 7</th>
                  </tr>
                </thead>
                <tbody>
                  {regularUserRetentionData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-4 border-b font-medium">{row.cohort}</td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month0) }}>
                        {row.month0 !== null ? `${row.month0.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month1) }}>
                        {row.month1 !== null ? `${row.month1.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month2) }}>
                        {row.month2 !== null ? `${row.month2.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month3) }}>
                        {row.month3 !== null ? `${row.month3.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month4) }}>
                        {row.month4 !== null ? `${row.month4.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month5) }}>
                        {row.month5 !== null ? `${row.month5.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month6) }}>
                        {row.month6 !== null ? `${row.month6.toFixed(2)}%` : '-'}
                      </td>
                      <td className="py-2 px-4 border-b text-center" style={{ backgroundColor: getRetentionColor(row.month7) }}>
                        {row.month7 !== null ? `${row.month7.toFixed(2)}%` : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Deposit Cohort Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Deposit Amount by Cohort (INR)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Cohort</th>
                    <th className="py-2 px-4 border-b text-center">Month 0</th>
                    <th className="py-2 px-4 border-b text-center">Month 1</th>
                    <th className="py-2 px-4 border-b text-center">Month 2</th>
                    <th className="py-2 px-4 border-b text-center">Month 3</th>
                    <th className="py-2 px-4 border-b text-center">Month 4</th>
                    <th className="py-2 px-4 border-b text-center">Month 5</th>
                    <th className="py-2 px-4 border-b text-center">Month 6</th>
                  </tr>
                </thead>
                <tbody>
                  {depositCohortValueData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-4 border-b font-medium">{row.cohort}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month0)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month1)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month2)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month3)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month4)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month5)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month6)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Transaction Count Cohort Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Transaction Count by Cohort</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Cohort</th>
                    <th className="py-2 px-4 border-b text-center">Month 0</th>
                    <th className="py-2 px-4 border-b text-center">Month 1</th>
                    <th className="py-2 px-4 border-b text-center">Month 2</th>
                    <th className="py-2 px-4 border-b text-center">Month 3</th>
                    <th className="py-2 px-4 border-b text-center">Month 4</th>
                    <th className="py-2 px-4 border-b text-center">Month 5</th>
                    <th className="py-2 px-4 border-b text-center">Month 6</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionCohortData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-4 border-b font-medium">{row.cohort}</td>
                      <td className="py-2 px-4 border-b text-right">{row.month0 !== null ? row.month0.toLocaleString() : '-'}</td>
                      <td className="py-2 px-4 border-b text-right">{row.month1 !== null ? row.month1.toLocaleString() : '-'}</td>
                      <td className="py-2 px-4 border-b text-right">{row.month2 !== null ? row.month2.toLocaleString() : '-'}</td>
                      <td className="py-2 px-4 border-b text-right">{row.month3 !== null ? row.month3.toLocaleString() : '-'}</td>
                      <td className="py-2 px-4 border-b text-right">{row.month4 !== null ? row.month4.toLocaleString() : '-'}</td>
                      <td className="py-2 px-4 border-b text-right">{row.month5 !== null ? row.month5.toLocaleString() : '-'}</td>
                      <td className="py-2 px-4 border-b text-right">{row.month6 !== null ? row.month6.toLocaleString() : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Entry Fees Cohort Table */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Entry Fees by Cohort (INR)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Cohort</th>
                    <th className="py-2 px-4 border-b text-center">Month 0</th>
                    <th className="py-2 px-4 border-b text-center">Month 1</th>
                    <th className="py-2 px-4 border-b text-center">Month 2</th>
                    <th className="py-2 px-4 border-b text-center">Month 3</th>
                    <th className="py-2 px-4 border-b text-center">Month 4</th>
                    <th className="py-2 px-4 border-b text-center">Month 5</th>
                    <th className="py-2 px-4 border-b text-center">Month 6</th>
                  </tr>
                </thead>
                <tbody>
                  {entryFeesCohortData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-4 border-b font-medium">{row.cohort}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month0)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month1)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month2)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month3)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month4)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month5)}</td>
                      <td className="py-2 px-4 border-b text-right">{formatCurrency(row.month6)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-white rounded-xl shadow p-6 mb-8">
        <h3 className="font-semibold text-lg mb-2 text-primary">Growth Roadmap (2018-2019)</h3>
        <p className="text-sm text-gray-600 mb-4">Strategic initiatives derived from metrics and business goals</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-3 border-b text-left font-semibold">Category</th>
                <th className="py-2 px-3 border-b text-left font-semibold">November 2018</th>
                <th className="py-2 px-3 border-b text-left font-semibold">December 2018</th>
                <th className="py-2 px-3 border-b text-left font-semibold">January 2019</th>
                <th className="py-2 px-3 border-b text-left font-semibold">February 2019</th>
                <th className="py-2 px-3 border-b text-left font-semibold">March 2019</th>
                <th className="py-2 px-3 border-b text-left font-semibold">April 2019</th>
                <th className="py-2 px-3 border-b text-left font-semibold">May 2019</th>
              </tr>
            </thead>
            <tbody>
              {/* Business Goals */}
              <tr className="bg-green-50">
                <td className="py-2 px-3 border-b font-medium">Business Goals</td>
                <td className="py-2 px-3 border-b">+15% User Base, 5% Deposit Growth, 60% Retention</td>
                <td className="py-2 px-3 border-b">+20% User Base, 10% Deposit Growth, 65% Retention</td>
                <td className="py-2 px-3 border-b">+25% User Base, 15% Deposit Growth, 68% Retention</td>
                <td className="py-2 px-3 border-b">+30% User Base, 18% Deposit Growth, 70% Retention</td>
                <td className="py-2 px-3 border-b">+35% User Base, 20% Deposit Growth, 72% Retention</td>
                <td className="py-2 px-3 border-b">+40% User Base, 25% Deposit Growth, 75% Retention</td>
                <td className="py-2 px-3 border-b">+45% User Base, 30% Deposit Growth, 78% Retention</td>
              </tr>
              
              {/* Features */}
              <tr className="bg-blue-50">
                <td className="py-2 px-3 border-b font-medium">Features</td>
                <td className="py-2 px-3 border-b">Segmentation, Multi-User Control</td>
                <td className="py-2 px-3 border-b">Multi-Team Join, Chat Bots, FTUE/GUE (Intro.js)</td>
                <td className="py-2 px-3 border-b">RAF Flow, Pre-Login Gameplay and Flow, Player Stats</td>
                <td className="py-2 px-3 border-b">Instant Withdrawal, User Profile CRUD, Referral Board</td>
                <td className="py-2 px-3 border-b">Affiliate Board, Team Auto Create, Play Store App</td>
                <td className="py-2 px-3 border-b">Fraud Detection (IP, Proximity, Payment), Automate Lineup</td>
                <td className="py-2 px-3 border-b">Multi-Language Support, User Royalty</td>
              </tr>
              
              {/* Back-Office */}
              <tr>
                <td className="py-2 px-3 border-b font-medium">Back-Office</td>
                <td className="py-2 px-3 border-b">Promo Code Configurator, Affiliate Panel</td>
                <td className="py-2 px-3 border-b">Contest Ticket, Failed Deposits</td>
                <td className="py-2 px-3 border-b">Knowlarity Calling Agent Reports, RBAC, Collated Feed API System</td>
                <td className="py-2 px-3 border-b">CMS Panel, Email Scheduler, Fraud Detection</td>
                <td className="py-2 px-3 border-b">S2S, Promo Pages and Banner Configurator</td>
                <td className="py-2 px-3 border-b">Automate Lineup, Affiliate Program Optimization</td>
                <td className="py-2 px-3 border-b">Affiliate Reporting, Referral Analytics</td>
              </tr>
              
              {/* Integrations */}
              <tr className="bg-blue-50">
                <td className="py-2 px-3 border-b font-medium">Integrations</td>
                <td className="py-2 px-3 border-b">WebEngage, SendGrid</td>
                <td className="py-2 px-3 border-b">Notification Center, Firebase, CricAPI</td>
                <td className="py-2 px-3 border-b">FreshDesk, A/B Testing, AdWords, Firebase Performance Monitoring</td>
                <td className="py-2 px-3 border-b">User & Product Analytics (Segment/Amplitude), BI - Chartio/Tableau</td>
                <td className="py-2 px-3 border-b">Firebase Performance Monitoring, BI Reporting</td>
                <td className="py-2 px-3 border-b">JustPay, Payment Gateway Integration</td>
                <td className="py-2 px-3 border-b">Webhooks for Affiliate and Referral Integration</td>
              </tr>
              
              {/* Development */}
              <tr>
                <td className="py-2 px-3 border-b font-medium">Dev</td>
                <td className="py-2 px-3 border-b">SPA, Android Optimization, ELK Logger, MongoDB 4</td>
                <td className="py-2 px-3 border-b">Bug Fixes, Centralized Email Server</td>
                <td className="py-2 px-3 border-b">DB Replications, iOS App, Distribution of Game Server</td>
                <td className="py-2 px-3 border-b">Code Modularization, CDN Servers, Local DB on App</td>
                <td className="py-2 px-3 border-b">Lazy Loading, Distributed Systems, API Swagger</td>
                <td className="py-2 px-3 border-b">Load Balancer, API Scaling, Caching Servers</td>
                <td className="py-2 px-3 border-b">Elastic Search, Containerization</td>
              </tr>
              
              {/* UI/UX */}
              <tr className="bg-blue-50">
                <td className="py-2 px-3 border-b font-medium">UI/UX</td>
                <td className="py-2 px-3 border-b">Segmentation, Homepage, Leagues Navigation</td>
                <td className="py-2 px-3 border-b">RAF Flow, Filters, Email Templates</td>
                <td className="py-2 px-3 border-b">User Profile, Add Cash, Navigation</td>
                <td className="py-2 px-3 border-b">Profile Optimization, User Experience Testing</td>
                <td className="py-2 px-3 border-b">Redesign of Cash Flow Process, Mobile Experience</td>
                <td className="py-2 px-3 border-b">UI Enhancements, Personalization, Dark Mode</td>
                <td className="py-2 px-3 border-b">UX Testing and Feedback Incorporation</td>
              </tr>
              
              {/* DevOps & Testing */}
              <tr>
                <td className="py-2 px-3 border-b font-medium">DevOps & Testing</td>
                <td className="py-2 px-3 border-b">Regression, Performance Testing</td>
                <td className="py-2 px-3 border-b">Full System Regression, Load Testing</td>
                <td className="py-2 px-3 border-b">Server KPI Monitoring, Unit Testing, Automation</td>
                <td className="py-2 px-3 border-b">Security Audits, Deployment Management</td>
                <td className="py-2 px-3 border-b">CD/CI, Integration Testing</td>
                <td className="py-2 px-3 border-b">End-to-End Testing, Production Monitoring</td>
                <td className="py-2 px-3 border-b">Stress Testing, Security and Penetration Testing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default LeagueAddDashboard; 