#!/bin/bash

if [ -z "$2" ]; then
  echo "[!] Missing component name"
  exit 0
fi

export ROOT_DIR=$PWD
export COMPONENT_DIR=$ROOT_DIR/src/$1
export COMPONENT_NAME=$2


mkdir $COMPONENT_DIR/$COMPONENT_NAME
mkdir $COMPONENT_DIR/$COMPONENT_NAME/hooks

envsubst < $ROOT_DIR/tools/component.tmpl > $COMPONENT_DIR/$COMPONENT_NAME/$COMPONENT_NAME.js
envsubst < $ROOT_DIR/tools/index.tmpl > $COMPONENT_DIR/$COMPONENT_NAME/index.js
