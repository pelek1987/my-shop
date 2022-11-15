
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/claa7qfb605xd01uj30cw8pnv/master",
  documents: "graphql/**/*.graphql",
  generates: {
    "./graphql/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
