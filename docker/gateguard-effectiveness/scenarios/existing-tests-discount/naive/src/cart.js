'use strict';

const THRESHOLD_CENTS = 20000;

function discount(totalCents) {
  return totalCents > THRESHOLD_CENTS ? Math.round(totalCents * 0.15) : 0;
}

function payable(totalCents) {
  return totalCents - discount(totalCents);
}

module.exports = { discount, payable };
