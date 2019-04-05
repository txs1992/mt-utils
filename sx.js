{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": [
            "last 2 versions"
          ]
        },
        "modules": "commonjs",
        "useBuiltIns": "usage"
      }
    ],
    [
      "@babel/preset-stage-0",
      {
        "decoratorsLegacy": true
      }
    ],
    [
      "@babel/preset-react",
      {
        "throwIfNamespace": false
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "react-hot-loader/babel"
  ],
  "env": {
    "production": {
      "plugins": [
        [
          "transform-react-remove-prop-types",
          {
            "mode": "wrap",
            "ignoreFilenames": [
              "node_modules"
            ]
          }
        ],
        [
          "transform-imports",
          {
            "react-bootstrap": {
              "transform": "react-bootstrap/lib/${member}",
              "preventFullImport": true
            },
            "lodash": {
              "transform": "lodash/${member}",
              "preventFullImport": true
            },
            "react-router": {
              "transform": "react-router/${member}",
              "preventFullImport": true
            }
          }
        ]
      ]
    }
  }
}