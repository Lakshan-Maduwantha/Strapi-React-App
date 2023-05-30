'use strict';

/**
 * blog-tag-cloud service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-tag-cloud.blog-tag-cloud');
