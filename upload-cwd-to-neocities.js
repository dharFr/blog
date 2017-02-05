#! /usr/bin/env node

// Test script, almost the same as https://github.com/gburnett/neocities-upload
// Used to reproduce https://github.com/neocities/neocities-node/issues/3
//
// Usage :
//  > npm build && cd public
//  > ../upload-cwd-to-neocities.js

const argv = require('minimist')(process.argv.slice(2))
const NeoCities = require('neocities')
const recursive = require('recursive-readdir')
const schema = {
  properties: {
    username: {
      message: 'Username please',
      required: true
    },
    password: {
      message: 'Password please',
      required: true,
      hidden: true
    }
  }
}

function noisy(options) {
  return (!options.q && !options.quiet)
}

function handleResponse(resp) {
  if (noisy(argv)) {
    console.log(resp)
  }
}
function mapFiles(file) {
  const filePath = process.cwd()
  const name = file.replace(filePath + '/', '')
  const path = file.replace(filePath, '.')

  return {
    name: `${argv.path ? argv.path+'/' : ''}${name}`,
    path
  }
}

function filterFiles(element, index) {
  // return index < 127 // Uncommented, the script succeed
  return true
}

function update(credentials) {
  const api = new NeoCities(credentials.username, credentials.password)
  const exclude = ['.*']

  recursive(process.cwd(), exclude, (err, files) => {
    if (err) {
      throw err
    }
    const mappedFiles = files.map(mapFiles)
      .filter(filterFiles)
    console.log(mappedFiles.length)
    console.log('last element:', mappedFiles[mappedFiles.length-1])
    api.upload(mappedFiles, handleResponse)
  })
}

try {
  if (!process.env.NEOCITIES_USER || !process.env.NEOCITIES_PWD) {
    throw new Error('Missing $NEOCITIES_USER and $NEOCITIES_PWD env vars')
  }

  update({
    username: process.env.NEOCITIES_USER,
    password: process.env.NEOCITIES_PWD,
  })
} catch (e) {
  console.log(e)
}