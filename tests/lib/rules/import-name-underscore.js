/**
 * @fileoverview 导入模块需为驼峰
 * @author Zzzzz
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/import-name-underscore"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("import-name-underscore", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "import { y } from './foo/ccc_ccc';\
          import { x } from './_ccc';\
      ",
    },
  ],

  invalid: [
    {
      code: "import { y } from './foo/cccCcc",
      errors: [{ messageId: "Fill me in.", type: "Me too" }],
    },
  ],
});
