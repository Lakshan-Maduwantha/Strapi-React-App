'use strict';

/**
 * home-new-customer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-new-customer.home-new-customer');
