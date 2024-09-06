#!/bin/bash

# Sync version from root package.json to projects/lunaui-angular/package.json
VERSION=$(jq -r '.version' package.json)
jq --arg version "$VERSION" '.version = $version' projects/lunaui-angular/package.json > tmp.$$.json && mv tmp.$$.json projects/lunaui-angular/package.json
