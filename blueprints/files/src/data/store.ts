import { JSONAPISerializer } from '@orbit/jsonapi';

import { api as apiEnv } from '@env';

import { schema, keyMap } from './schema';

export const serializer = new JSONAPISerializer({ schema, keyMap });
export const baseUrl = apiEnv.host ? `http://${apiEnv.host}/api` : '/api';
