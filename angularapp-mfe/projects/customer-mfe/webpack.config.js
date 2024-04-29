const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'customer-mfe',

  exposes: {
    // "./routes": "./projects/customer-mfe/src/app/app.routes.ts",
    './Component': './projects/customer-mfe/src/app/components/home/home.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
