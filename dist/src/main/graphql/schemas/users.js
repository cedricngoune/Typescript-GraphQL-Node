"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_koa_1 = require("apollo-server-koa");
exports.default = apollo_server_koa_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: ID!\n    firstname: String!\n    lastname: String!\n    email: String!\n    password: String!\n    pseudo: String\n    event: [Event]\n  }\n  type Query {\n    login(email: String!, password: String!): User\n  }\n  type Mutation {\n    signUp(\n      pseudo: String\n      firstname: String!\n      lastname: String!\n      email: String!\n      password: String!\n    ): User\n  }\n"], ["\n  type User {\n    id: ID!\n    firstname: String!\n    lastname: String!\n    email: String!\n    password: String!\n    pseudo: String\n    event: [Event]\n  }\n  type Query {\n    login(email: String!, password: String!): User\n  }\n  type Mutation {\n    signUp(\n      pseudo: String\n      firstname: String!\n      lastname: String!\n      email: String!\n      password: String!\n    ): User\n  }\n"])));
var templateObject_1;
