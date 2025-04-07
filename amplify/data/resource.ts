import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  image: a.model({
    uri: a.string(),
    name: a.string(),
    type: a.string(),
    size: a.integer(),
    uploadedAt: a.time(),
  }),
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({ schema });
