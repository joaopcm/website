const {
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  const env = {
    IS_PRODUCTION: (() => {
      return phase === PHASE_PRODUCTION_BUILD
    })(),
  }

  return {
    env,
  }
}
