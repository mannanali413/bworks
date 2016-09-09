module.exports = {
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "env": {
    "browser": true,
  },
  "parser": "babel-eslint",
  "rules": {
    // key: 0 = allow, 1 = warn, 2 = error
    "quotes": [0, "single", "avoid-escape"],
    "strict": [2, "global"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2
  },
  "plugins": [
    "react"
  ]
}