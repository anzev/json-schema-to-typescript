export const input = {
  "title": "Referencing",
  'type': "object",
  properties: {
    "foo": {
      "$ref": "test/resources/ReferencedType.json"
    }
  },
  required: ["foo"],
  additionalProperties: false
}

export const outputs = [
  {
    options: {
      declareExternallyReferenced: true
    },
    output: `/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

export interface Referencing {
  foo: ExampleSchema;
}
export interface ExampleSchema {
  firstName: string;
  lastName: string;
  /**
   * Age in years
   */
  age?: number;
  height?: number;
  favoriteFoods?: any[];
  likesDogs?: boolean;
  [k: string]: any;
}
`
  },
  {
    options: {
      declareExternallyReferenced: false
    },
    output: `/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

export interface Referencing {
  foo: ExampleSchema;
}
`
  }
]