const babel = require('@babel/core');
const plugin = require('./dist/cjs/development');

babel.transformAsync(`
import { css } from 'solid-styled';
function Test() {
  const [color, setColor] = createSignal('red');
  css\`
    div {
      background-color: \${color()};
    }
  \`;
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
`, {
  plugins: [
    [plugin, { verbose: true }]
  ],
  parserOpts: {
    plugins: [
      'jsx'
    ]
  }
}).then((result) => console.log(result.code));