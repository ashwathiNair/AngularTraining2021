const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/src/'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    collectCoverage:true,
    coverageReporters:['html'],
    coverageDictionary: 'coverage/ng-components-grid',
    // load all moduels (standard/dev.) with their namespaces
    // from the root Directory and use them in Jest for compilation
    // and test execution 
    moduleNameMapper:pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: 'rootDir'
    })
};