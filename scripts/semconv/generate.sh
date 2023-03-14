#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="${SCRIPT_DIR}/../../"

# freeze the spec version to make SpanAttributess generation reproducible
SPEC_VERSION=v1.7.0
GENERATOR_VERSION=0.7.0

cd ${SCRIPT_DIR}

rm -rf opentelemetry-specification || true
mkdir opentelemetry-specification
cd opentelemetry-specification

git init
git remote add origin https://github.com/open-telemetry/opentelemetry-specification.git
git fetch origin "$SPEC_VERSION" --depth=1
git reset --hard FETCH_HEAD
cd ${SCRIPT_DIR}

docker run --rm \
  -v ${SCRIPT_DIR}/opentelemetry-specification/semantic_conventions/trace:/source \
  -v ${SCRIPT_DIR}/templates:/templates \
  -v ${ROOT_DIR}/packages/opentelemetry-semantic-conventions/src/trace/:/output \
  otel/semconvgen:${GENERATOR_VERSION} \
  -f /source \
  code \
  --template /templates/SemanticAttributes.ts.j2 \
  --output /output/SemanticAttributes.ts \
  -Dclass=SemanticAttributes

docker run --rm \
  -v ${SCRIPT_DIR}/opentelemetry-specification/semantic_conventions/resource:/source \
  -v ${SCRIPT_DIR}/templates:/templates \
  -v ${ROOT_DIR}/packages/opentelemetry-semantic-conventions/src/resource/:/output \
  otel/semconvgen:${GENERATOR_VERSION} \
  -f /source \
  code \
  --template /templates/SemanticAttributes.ts.j2 \
  --output /output/SemanticResourceAttributes.ts \
  -Dclass=SemanticResourceAttributes

# Tree shakeable and minifiable for web

docker run --rm \
  -v ${SCRIPT_DIR}/opentelemetry-specification/semantic_conventions/trace:/source \
  -v ${SCRIPT_DIR}/templates:/templates \
  -v ${ROOT_DIR}/packages/opentelemetry-semantic-conventions/src/trace/:/output \
  otel/semconvgen:${GENERATOR_VERSION} \
  -f /source \
  code \
  --template /templates/SemanticAttributes-web.ts.j2 \
  --output /output/SemanticAttributesWeb.ts \
  -Dclass=SemanticAttributes

docker run --rm \
  -v ${SCRIPT_DIR}/opentelemetry-specification/semantic_conventions/resource:/source \
  -v ${SCRIPT_DIR}/templates:/templates \
  -v ${ROOT_DIR}/packages/opentelemetry-semantic-conventions/src/resource/:/output \
  otel/semconvgen:${GENERATOR_VERSION} \
  -f /source \
  code \
  --template /templates/SemanticAttributes-web.ts.j2 \
  --output /output/SemanticResourceAttributesWeb.ts \
  -Dclass=SemanticResourceAttributes

docker run --rm \
  -v ${SCRIPT_DIR}/opentelemetry-specification/semantic_conventions/trace:/source \
  -v ${SCRIPT_DIR}/templates:/templates \
  -v ${ROOT_DIR}/packages/opentelemetry-semantic-conventions/src/trace/:/output \
  otel/semconvgen:${GENERATOR_VERSION} \
  -f /source \
  code \
  --template /templates/SemanticAttributesValues-web.ts.j2 \
  --output /output/SemanticAttributesValuesWeb.ts \
  -Dclass=SemanticAttributes

docker run --rm \
  -v ${SCRIPT_DIR}/opentelemetry-specification/semantic_conventions/resource:/source \
  -v ${SCRIPT_DIR}/templates:/templates \
  -v ${ROOT_DIR}/packages/opentelemetry-semantic-conventions/src/resource/:/output \
  otel/semconvgen:${GENERATOR_VERSION} \
  -f /source \
  code \
  --template /templates/SemanticAttributesValues-web.ts.j2 \
  --output /output/SemanticResourceAttributesValuesWeb.ts \
  -Dclass=SemanticResourceAttributes



# Run the automatic linting fixing task to ensure it will pass eslint
cd "$ROOT_DIR"

npm run lint:fix:changed
