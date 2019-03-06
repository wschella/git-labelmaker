const gitUrl = require('github-url-from-git');
const ghurls = require('./github-urls');

module.exports = (config, remote, error) => {
    const url = config[remote].url;
    const parsedGitUrl = gitUrl(url, { extraBaseUrls: [ghurls.base] });
    const rootGithubUrl = ghurls.root;
    if (!parsedGitUrl || parsedGitUrl.indexOf(rootGithubUrl) === -1) return error();
    return parsedGitUrl
        .split(rootGithubUrl) // -> ['', 'user/repo']
        .reduce((a, b) => b.length ? b : a); // eslint-disable-line no-confusing-arrow
};
