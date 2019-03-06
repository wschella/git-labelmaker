/**
 *    Returns a config object for git-label
 *    @param  {String} repo - string of the repo
 *    @param  {String} token - string of the token
 *    @return {Object} a config object for git-label
 */

const ghurls = require('../modules/github-urls');

module.exports = (repo, token) => ({
    api: ghurls.api,
    repo,
    token,
});
