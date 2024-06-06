/**
 * @fileoverview 相对路径改成alias path
 * @author Zzzzzz 
 */
"use strict";

const path = require('path')

const isRelativePath = (pathVal) => (/^\./).test(pathVal)

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "跨模块导入时请改成alias path",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    schema: [], // Add a schema if the rule has options
    messages: {
      "toChangeAliasPath": 'relative path to change alias path'
    }, // Add messageId and message
  },

  create(context) {
    /** 当前文件的真实路径 */
    const filename = context.getPhysicalFilename ? context.getPhysicalFilename() : context.getFilename();

    /** 
     * 如果导入的文件是使用 '../../' 这种路径导入的，且不是子级目录就会报错 
     * 理论上我们跨模块导入的话我们需要用 alias 导入， 比如@/pages/xxx
    */
    return {
      ImportDeclaration: (node) => {
        const value = node.source.value

        const isRelative = isRelativePath(value)

        if (!isRelative) {
          return
        }

        /** 当前加载的文件 */
        const parentPath = path.dirname(filename)
        const importFilePath = path.resolve(parentPath, value)

        /** 导入文件的根目录 */
        const importFilePathDir = path.dirname(importFilePath)

        if (!(importFilePathDir === parentPath || importFilePathDir.startsWith(parentPath + path.sep))) {
          context.report({
            node,
            messageId: 'toChangeAliasPath',
          });
        }
      }
    };
  },
};
