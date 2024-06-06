/**
 * @fileoverview import file use in relative path we should  change  the  alias  path
 * @author Zzzzzz
 */
"use strict";


// https://zhuanlan.zhihu.com/p/372181145
// https://github.com/xsf0105/eslint-plugin-syntax-ban/blob/master/lib/index.js
// https://juejin.cn/post/7130277872412917797?searchId=20240531120858EFE8F84117C946BC79E0

module.exports = {
  rules: {
    "use-alias-path": require("./rules/use-alias-path"),
    "import-name-underscore": require("./rules/import-name-underscore"),
  },
  configs: {
    recommended: {
      plugin: ['import-relative'],
      rules: {
        "import-relative/use-alias-path": 'error', // 可以省略 eslint-plugin 前缀
        "import-relative/import-name-underscore": [2, {
          hahha: true
        }]
      },
    },
  },
};

