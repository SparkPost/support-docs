import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
  },
});

// see, https://docs.github.com/en/rest/reference/orgs#list-organization-members
const getMembers = async ({ org }) => {
  let greenLight = true;
  let page = 1;
  let per_page = 100;
  let dataSets = [];

  do {
    const { data, headers } = await github.get(`/orgs/${org}/members`, {
      params: { page, per_page },
    });
    greenLight = headers.link.includes('rel="next"');
    dataSets.push(data);
    page++;
  } while (greenLight);

  return dataSets.reduce((acc, data) => [...acc, ...data], []);
};

// see, https://docs.github.com/en/rest/reference/teams#add-or-update-team-membership-for-a-user
const putOnTheTeam = async ({ org, team, username }) => {
  await github.put(`/orgs/${org}/teams/${team}/memberships/${username}`);
};

(async () => {
  const members = await getMembers({ org: 'SparkPost' });

  for (let i = 0; i < members.length; i++) {
    await putOnTheTeam({
      org: 'SparkPost',
      team: 'public-documentation',
      username: members[i].login,
    });
  }

  console.log(`There should be ${members.length} members`);
})();
