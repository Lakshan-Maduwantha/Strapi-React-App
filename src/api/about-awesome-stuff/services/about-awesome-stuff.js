'use strict';

/**
 * about-awesome-stuff service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-awesome-stuff.about-awesome-stuff');
