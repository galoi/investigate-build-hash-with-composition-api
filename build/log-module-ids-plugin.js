class LogModuleIdsPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('LogModuleIdsPlugin', (compilation) => {
      compilation.hooks.afterOptimizeModuleIds.tap('LogModuleIdsPlugin', () => {
        for (const module of compilation.modules) {
          if (module.id != null && module.resource) {
            const message = `Module ID: ${module.id}, Resource: ${module.resource}\n`;
            process.stdout.write(message);
          }
        }
      });
    });
  }
}

module.exports = LogModuleIdsPlugin;
