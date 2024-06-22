/**
 * @see {documentation} https://mui.com/material-ui/experimental-api/classname-generator/
 */
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className'

ClassNameGenerator.configure(
  (componentName) => {
    return classNameObfuscator(componentName)
  }
)
