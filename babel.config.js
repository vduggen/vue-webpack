module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage", // polyfills serão adicionados automaticamente quando o uso de algum recurso não for suportado no ambiente de destino.
        corejs: "3.25.1", // indica a versão do corejs utilizada no projeto
      },
    ],
  ],
};