#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name('create-fsd')
  .description('CLI to create React projects with FSD architecture')
  .version('2.0.0')
  .argument('<project-name>', 'name of the project')
  .option('-t, --template <template>', 'template to use', 'react')
  .action(async (projectName, options) => {
    const { template } = options;

    console.log(chalk.blue.bold(`\n🚀 Creating ${projectName} with ${template} template...\n`));

    const targetDir = path.join(process.cwd(), projectName);

    // Check if directory exists
    if (fs.existsSync(targetDir)) {
      console.log(chalk.red(`❌ Directory ${projectName} already exists!`));
      process.exit(1);
    }

    // Create project directory
    fs.mkdirSync(targetDir, { recursive: true });

    const templateDir = path.join(__dirname, '..', 'templates', template);

    if (!fs.existsSync(templateDir)) {
      console.log(chalk.red(`❌ Template ${template} not found!`));
      process.exit(1);
    }

    // Copy template files
    const spinner = ora('Copying template files...').start();
    try {
      fs.copySync(templateDir, targetDir);
      spinner.succeed('Template files copied!');
    } catch (error) {
      spinner.fail('Failed to copy template files');
      console.error(error);
      process.exit(1);
    }

    // Update package.json with project name
    const packageJsonPath = path.join(targetDir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = fs.readJsonSync(packageJsonPath);
      packageJson.name = projectName;
      fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
    }

    // Install dependencies
    const installSpinner = ora('Installing dependencies...').start();
    try {
      process.chdir(targetDir);
      execSync('npm install', { stdio: 'inherit' });
      installSpinner.succeed('Dependencies installed!');
    } catch (error) {
      installSpinner.fail('Failed to install dependencies');
      console.error(error);
      process.exit(1);
    }

    // Success message
    console.log(chalk.green.bold('\n✅ Project created successfully!\n'));
    console.log(chalk.cyan('Next steps:'));
    console.log(chalk.white(`  cd ${projectName}`));
    console.log(chalk.white('  npm run dev'));
    console.log();
  });

// FSD structure generation command
program
  .command('fsd')
  .description('Generate FSD (Feature-Sliced Design) structure')
  .option('-f, --feature <name>', 'create feature in features/')
  .option('-e, --entity <name>', 'create entity in entities/')
  .option('-w, --widget <name>', 'create widget in widgets/')
  .option('-p, --page <name>', 'create page in pages/')
  .option('-s, --segments <segments...>', 'segments to create (e.g., model ui api lib)')
  .option('-i, --index', 'create index files in root and all segments', false)
  .action(async (options) => {
    const { feature, entity, widget, page, segments, index } = options;

    // Determine layer and name based on which flag was used
    let layer, name, layerType;

    if (feature) {
      layer = 'features';
      name = feature;
      layerType = 'Feature';
    } else if (entity) {
      layer = 'entities';
      name = entity;
      layerType = 'Entity';
    } else if (widget) {
      layer = 'widgets';
      name = widget;
      layerType = 'Widget';
    } else if (page) {
      layer = 'pages';
      name = page;
      layerType = 'Page';
    } else {
      console.log(chalk.red('❌ Layer flag is required! Use -f (feature), -e (entity), -w (widget), or -p (page)'));
      process.exit(1);
    }

    // Validation
    if (!segments || segments.length === 0) {
      console.log(chalk.red('❌ At least one segment is required! Use -s or --segments'));
      process.exit(1);
    }

    console.log(chalk.blue.bold(`\n🏗️  Generating FSD structure...\n`));
    console.log(chalk.cyan(`Layer: ${layer}`));
    console.log(chalk.cyan(`${layerType}: ${name}`));
    console.log(chalk.cyan(`Segments: ${segments.join(', ')}`));
    console.log(chalk.cyan(`Index files: ${index ? 'Yes' : 'No'}\n`));

    const baseDir = path.join(process.cwd(), 'src', layer, name);

    // Check if directory already exists
    if (fs.existsSync(baseDir)) {
      console.log(chalk.yellow(`⚠️  Directory ${layer}/${name} already exists!`));
      console.log(chalk.yellow('Adding segments to existing structure...\n'));
    }

    // Create directory
    fs.mkdirSync(baseDir, { recursive: true });

    // Create segments
    const spinner = ora('Creating segments...').start();
    try {
      for (const segment of segments) {
        const segmentDir = path.join(baseDir, segment);
        fs.mkdirSync(segmentDir, { recursive: true });

        // Create index file in segment if requested
        if (index) {
          const segmentIndexPath = path.join(segmentDir, 'index.js');
          fs.writeFileSync(segmentIndexPath, '');
        } else {
          // Create a .gitkeep file to ensure empty directories are tracked
          const gitkeepPath = path.join(segmentDir, '.gitkeep');
          fs.writeFileSync(gitkeepPath, '');
        }
      }
      spinner.succeed('Segments created!');
    } catch (error) {
      spinner.fail('Failed to create segments');
      console.error(error);
      process.exit(1);
    }

    // Create index file if requested
    if (index) {
      const indexSpinner = ora('Creating root index file...').start();
      try {
        const indexPath = path.join(baseDir, 'index.js');

        // If index file exists, read existing exports and merge with new ones
        let existingExports = new Set();
        if (fs.existsSync(indexPath)) {
          const existingContent = fs.readFileSync(indexPath, 'utf-8');
          const exportMatches = existingContent.matchAll(/export \* from ['"]\.\/(.+?)['"]/g);
          for (const match of exportMatches) {
            existingExports.add(match[1]);
          }
        }

        // Add new segments to existing exports
        segments.forEach(segment => existingExports.add(segment));

        // Generate exports for all segments
        let indexContent = `// ${name} exports\n\n`;

        // Sort segments for consistency
        const allSegments = Array.from(existingExports).sort();
        for (const segment of allSegments) {
          indexContent += `export * from './${segment}';\n`;
        }

        fs.writeFileSync(indexPath, indexContent);

        if (existingExports.size > segments.length) {
          indexSpinner.succeed('Root index file updated with new exports!');
        } else {
          indexSpinner.succeed('Root index file created!');
        }
      } catch (error) {
        indexSpinner.fail('Failed to create root index file');
        console.error(error);
        process.exit(1);
      }
    }

    // Success message
    console.log(chalk.green.bold('\n✅ FSD structure generated successfully!\n'));
    console.log(chalk.cyan('Generated structure:'));
    console.log(chalk.white(`  src/${layer}/${name}/`));
    segments.forEach((segment, idx) => {
      const isLast = idx === segments.length - 1;
      const prefix = index ? '├──' : (isLast ? '└──' : '├──');
      console.log(chalk.white(`    ${prefix} ${segment}/`));
      if (index) {
        console.log(chalk.white(`    │   └── index.js`));
      }
    });
    if (index) {
      console.log(chalk.white(`    └── index.js`));
    }
    console.log();
  });

program.parse();
