/**
 * @fileoverview 相对路径改成alias path
 * @author Zzzzzz 
 */
"use strict";

const path = require('path');

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/use-alias-path"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("use-alias-path", rule, {
  valid: [
    // give me some code that won't trigger a warning
    // "import { x } from '@pages/data'; import { y } from './bar';"
    {
      code: "import { y } from './foo/ccc';\
          import { x } from './cat';\
      ",
      filename: path.join(process.cwd(), './tests/files', './bar.js'),
      parserOptions: {
        "ecmaVersion": 'latest',
        sourceType: 'module'
      }
    },
    {
      code: "import { y } from '@/pages';",
      filename: path.join(process.cwd(), './tests/files', './bar.js'),
      parserOptions: {
        "ecmaVersion": 'latest',
        sourceType: 'module'
      }
    }
  ],

  invalid: [
    {
      code: "import { y } from '../ccc';",
      filename: path.join(process.cwd(), './tests/files', './bar.js'),
      errors: [
        { message: "123" }
    ]
    }
  ],
});
