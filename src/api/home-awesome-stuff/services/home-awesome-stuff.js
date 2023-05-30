'use strict';

/**
 * home-awesome-stuff service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-awesome-stuff.home-awesome-stuff');
