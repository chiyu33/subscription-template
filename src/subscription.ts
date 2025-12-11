//订阅详情
import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 888,
  name: '池与GKD订阅',
  version: 3,
  author: '池与',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/chiyu33/GKD-CY',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
