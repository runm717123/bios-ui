import StyleDictionary from 'style-dictionary';

StyleDictionary.registerFormat({
  name: 'css/tailwind-theme',
  format: function ({ dictionary }) {
    
    return `@theme {\n${dictionary.allTokens
      .map(p => `  --${p.name}: ${p.value};`)
      .join('\n')}\n}`;
  }
});
