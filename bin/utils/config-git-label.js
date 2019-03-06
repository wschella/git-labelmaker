/**
 *    Returns a config object for git-label
 *    @param  {String} repo - string of the repo
 *    @param  {String} token - string of the token
 *    @return {Object} a config object for git-label
 */


module.exports = (repo, token) => ({
    api:    'https://github.ugent.be/api/v3',
    repo,
    token,
});
