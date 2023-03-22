import { Params } from '@feathersjs/feathers'
import solc from 'solc'

export interface SolidityCompilerParams extends Params {
  query: any
}

export const compileSolidity = async (code: string) => {
  var input = {
    language: 'Solidity',
    sources: {
      'code.sol': {
        content: code
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));

  return output
}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class SolidityCompilerService<
  ServiceParams extends Params = SolidityCompilerParams
> {
  async create(
    data: any,
    params: SolidityCompilerParams
  ): Promise<{ contracts: any, errors: any, sources: any }> {

    const { code } = data

    const res = await compileSolidity(code)

    const { contracts, errors, sources } = res
    return { contracts, errors, sources }
  }
}
