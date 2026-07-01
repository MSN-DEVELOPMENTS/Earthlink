import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'kk585c8w',
    dataset: 'production',
  },
  // Hosted Studio address → https://eregroup.sanity.studio
  studioHost: 'eregroup',
});
