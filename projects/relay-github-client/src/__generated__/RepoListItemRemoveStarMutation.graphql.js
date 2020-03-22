/**
 * @flow
 * @relayHash 972bac152e48f8134d07c47bc018ffeb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { RepoListItem_repo$ref } from "./RepoListItem_repo.graphql";
export type RepoListItemRemoveStarMutationVariables = {|
  starrableId: string
|};
export type RepoListItemRemoveStarMutationResponse = {|
  +removeStar: ?{|
    +starrable: ?{|
      +$fragmentRefs: RepoListItem_repo$ref
    |}
  |}
|};
export type RepoListItemRemoveStarMutation = {|
  variables: RepoListItemRemoveStarMutationVariables,
  response: RepoListItemRemoveStarMutationResponse,
|};
*/


/*
mutation RepoListItemRemoveStarMutation(
  $starrableId: ID!
) {
  removeStar(input: {starrableId: $starrableId}) {
    starrable {
      __typename
      ...RepoListItem_repo
      id
    }
  }
}

fragment RepoListItem_repo on Repository {
  id
  name
  owner {
    __typename
    login
    id
  }
  viewerHasStarred
  stargazers {
    totalCount
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "starrableId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ObjectValue",
    "name": "input",
    "fields": [
      {
        "kind": "Variable",
        "name": "starrableId",
        "variableName": "starrableId"
      }
    ]
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RepoListItemRemoveStarMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeStar",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "starrable",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "RepoListItem_repo",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RepoListItemRemoveStarMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeStar",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "starrable",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "Repository",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "owner",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "login",
                        "args": null,
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "viewerHasStarred",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stargazers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StargazerConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "totalCount",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "RepoListItemRemoveStarMutation",
    "id": null,
    "text": "mutation RepoListItemRemoveStarMutation(\n  $starrableId: ID!\n) {\n  removeStar(input: {starrableId: $starrableId}) {\n    starrable {\n      __typename\n      ...RepoListItem_repo\n      id\n    }\n  }\n}\n\nfragment RepoListItem_repo on Repository {\n  id\n  name\n  owner {\n    __typename\n    login\n    id\n  }\n  viewerHasStarred\n  stargazers {\n    totalCount\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ca577654e3a8d0436b8d5cba34675dde';

module.exports = node;
