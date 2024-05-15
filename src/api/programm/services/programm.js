'use strict';

/**
 * programm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::programm.programm');
