'use strict';

/**
 * blog-search service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-search.blog-search');
