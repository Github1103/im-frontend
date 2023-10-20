import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config'

export default antfu(
  {},
  unocss.configs.flat,
)
