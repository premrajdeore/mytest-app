
// name: Deploy using github action

// on:
//   push:
//     branches: [ "main" ]
//   pull_request:
//     branches: [ "main" ]

// jobs:
//   build:

//     runs-on: ubuntu-latest

//     strategy:
//       matrix:
//         node-version: [14.x, 16.x, 18.x , 20.x]
//         # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

//     steps:
//     - uses: actions/checkout@v4
//     - name: Use Node.js ${{ matrix.node-version }}
//       uses: actions/setup-node@v3
//       with:
//         node-version: ${{ matrix.node-version }}
//         cache: 'npm'
//     - run: npm ci
//     - run: npm run build --if-present
//     - run: npm test
//     - name: Deploy 🚀
//       uses: JamesIves/github-pages-deploy-action@v4
//       with:
//           folder: build # The folder the action should deploy.
