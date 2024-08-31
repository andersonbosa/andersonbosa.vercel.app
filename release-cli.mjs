/**
 * @file release-cli.mjs
 * 
 * @author Anderson Bosa < https://github.com/andersonbosa >
 * 
 * @description
 * This script automates the process of releasing a new version of your application by updating the version number in the `package.json` file, committing the changes, creating a Git tag, and pushing the updates to a remote repository. It supports versioning by major, minor, or patch increments. Additionally, it provides a `--dry-run` option to simulate the release process without making any actual changes.
 * 
 * @usage
 * 1. Run the script with the desired version increment type:
 *    - `major`: Increments the major version (e.g., `1.0.0` to `2.0.0`)
 *    - `minor`: Increments the minor version (e.g., `1.0.0` to `1.1.0`)
 *    - `patch`: Increments the patch version (e.g., `1.0.0` to `1.0.1`)
 * 
 *    Example:
 *    ```bash
 *    node release-cli.mjs patch
 *    ```
 * 
 * 2. To simulate the release process without making any changes, use the `--dry-run` flag:
 * 
 *    Example:
 *    ```bash
 *    node release-cli.mjs patch --dry-run
 *    ```
 * 
 * @log
 * All actions and errors are logged to a temporary file located in the system's temp directory (`/tmp/release-cli.log` on Unix-based systems). This log file provides a detailed record of the script's operations, making it easier to inspect and debug any issues that arise during the release process.
 * 
 * @note
 * - Ensure that you have appropriate Git credentials configured for pushing to the remote repository.
 * - The script must be executed from the root directory of your project where the `package.json` file is located.
 */

import fs from 'fs/promises'
import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'
import os from 'os'

const execAsync = promisify(exec)
const VERSION_TYPE = process.argv[2]
const DRY_RUN = process.argv.includes('--dry-run')
const logFilePath = path.join(os.tmpdir(), 'release-cli.log')

const logMessage = async (message) => {
  await fs.appendFile(logFilePath, `${new Date().toISOString()} - ${message}\n`)
}

const runCommand = async (command, description) => {
  if (DRY_RUN) {
    console.log(`[DRY-RUN] ${description}`)
    await logMessage(`[DRY-RUN] ${description}`)
  } else {
    await execAsync(command)
    await logMessage(`Executed: ${description}`)
  }
}

const main = async () => {
  if (!VERSION_TYPE || !['major', 'minor', 'patch'].includes(VERSION_TYPE)) {
    console.error('Usage: node release-cli.mjs [major|minor|patch] [--dry-run]')
    await logMessage(`Error: Invalid version type '${VERSION_TYPE}'`)
    process.exit(1)
  }

  try {
    const packageJsonData = await fs.readFile('package.json', 'utf8')
    const packageJson = JSON.parse(packageJsonData)
    const currentVersion = packageJson.version

    const [major, minor, patch] = currentVersion.split('.').map(Number)
    let newVersion

    switch (VERSION_TYPE) {
      case 'major':
        newVersion = `${major + 1}.0.0`
        break
      case 'minor':
        newVersion = `${major}.${minor + 1}.0`
        break
      case 'patch':
        newVersion = `${major}.${minor}.${patch + 1}`
        break
    }

    if (DRY_RUN) {
      console.log(`[DRY-RUN] New version would be: ${newVersion}`)
      await logMessage(`[DRY-RUN] New version would be: ${newVersion}`)
    } else {
      packageJson.version = newVersion
      await fs.writeFile('package.json', JSON.stringify(packageJson, null, 2))
    }

    await runCommand('git add package.json', 'git add package.json')
    await runCommand(`git commit -m "chore(release): ${newVersion}"`, `git commit -m "chore(release): ${newVersion}"`)
    await runCommand(`git tag v${newVersion}`, `git tag v${newVersion}`)
    await runCommand('git push', 'git push')
    await runCommand('git push --tags', 'git push --tags')

    console.log(`Released new version: ${newVersion}`)
    await logMessage(`Success: Released new version ${newVersion}`)
  } catch (error) {
    console.error('An error occurred during the release process. Check the log file for details.')
    await logMessage(`Error: ${error.message}`)
    process.exit(1)
  }
}

main()
