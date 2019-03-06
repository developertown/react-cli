import { KeyMap, Schema, SchemaSettings } from '@orbit/data';

export const keyMap = new KeyMap();

const schemaDefinition: SchemaSettings = {
  models: {},
};

export const schema = new Schema(schemaDefinition);
