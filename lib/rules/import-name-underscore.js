/**
 * @fileoverview 导入模块需为驼峰
 * @author Zzzzz
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "导入模块命名需为下划线",
      description: "enforce underscore naming convention for imported modules",
      category: "Stylistic Issues",
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {}, // Add messageId and message
  },

  create(context) {
    const options = context.options;
    return {
      ImportDeclaration: (node) => {
        const value = node.source.value

        if (!/^[_a-z0-9]+$/.test(value)) {
          context.report({
            node,
            message: "Imported module '{{moduleName}}' does not start with an underscore.",
            data: {
              moduleName,
            },
          });
        }
      }
    };
  },
};
