import type { Application } from '@magickml/server-core'
import { SolidityCompilerService } from './solidity-compiler.class'

export * from './solidity-compiler.class'

export const solitidyCompiler = (app: Application) => {
  app.use('solidity-compiler' as any, new SolidityCompilerService(), {
    methods: ['create'],
    events: [],
  })

  app.service('solidity-compiler' as any).hooks({
    around: {
      all: [],
    },
    before: {
      all: [],
      get: [],
      create: [],
      update: [],
    },
    after: {
      all: [],
    },
    error: {
      all: [],
    },
  })
}
