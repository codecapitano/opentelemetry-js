/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { SpanStatusCode, TraceFlags } from '@opentelemetry/api';
import { hexToBase64 } from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
import { ReadableSpan } from '@opentelemetry/sdk-trace-base';
import * as assert from 'assert';
import { Stream } from 'stream';
import {
  IEvent,
  IExportTraceServiceRequest,
  IKeyValue,
  ILink,
  ISpan,
} from '@opentelemetry/otlp-transformer';

const traceIdHex = '1f1008dc8e270e85c40a0d7c3939b278';
const spanIdHex = '5e107261f64fa53e';
const parentIdHex = '78a8915098864388';

export const mockedReadableSpan: ReadableSpan = {
  name: 'documentFetch',
  kind: 0,
  spanContext: () => {
    return {
      traceId: traceIdHex,
      spanId: spanIdHex,
      traceFlags: TraceFlags.SAMPLED,
    };
  },
  parentSpanId: parentIdHex,
  startTime: [1574120165, 429803070],
  endTime: [1574120165, 438688070],
  ended: true,
  status: { code: SpanStatusCode.OK },
  attributes: { component: 'document-load' },
  links: [
    {
      context: {
        traceId: traceIdHex,
        spanId: parentIdHex,
        traceFlags: TraceFlags.SAMPLED,
      },
      attributes: { component: 'document-load' },
    },
  ],
  events: [
    {
      name: 'fetchStart',
      time: [1574120165, 429803070],
    },
    {
      name: 'domainLookupStart',
      time: [1574120165, 429803070],
    },
    {
      name: 'domainLookupEnd',
      time: [1574120165, 429803070],
    },
    {
      name: 'connectStart',
      time: [1574120165, 429803070],
    },
    {
      name: 'connectEnd',
      time: [1574120165, 429803070],
    },
    {
      name: 'requestStart',
      time: [1574120165, 435513070],
    },
    {
      name: 'responseStart',
      time: [1574120165, 436923070],
    },
    {
      name: 'responseEnd',
      time: [1574120165, 438688070],
    },
  ],
  duration: [0, 8885000],
  resource: new Resource({
    service: 'ui',
    version: 1,
    cost: 112.12,
  }),
  instrumentationLibrary: { name: 'default', version: '0.0.1' },
  droppedAttributesCount: 0,
  droppedEventsCount: 0,
  droppedLinksCount: 0,
};

export function ensureProtoEventsAreCorrect(events: IEvent[]) {
  assert.deepStrictEqual(
    events,
    [
      {
        timeUnixNano: '1574120165429803008',
        name: 'fetchStart',
        droppedAttributesCount: 0,
      },
      {
        timeUnixNano: '1574120165429803008',
        name: 'domainLookupStart',
        droppedAttributesCount: 0,
      },
      {
        timeUnixNano: '1574120165429803008',
        name: 'domainLookupEnd',
        droppedAttributesCount: 0,
      },
      {
        timeUnixNano: '1574120165429803008',
        name: 'connectStart',
        droppedAttributesCount: 0,
      },
      {
        timeUnixNano: '1574120165429803008',
        name: 'connectEnd',
        droppedAttributesCount: 0,
      },
      {
        timeUnixNano: '1574120165435513088',
        name: 'requestStart',
        droppedAttributesCount: 0,
      },
      {
        timeUnixNano: '1574120165436923136',
        name: 'responseStart',
        droppedAttributesCount: 0,
      },
      {
        timeUnixNano: '1574120165438688000',
        name: 'responseEnd',
        droppedAttributesCount: 0,
      },
    ],
    'events are incorrect'
  );
}

export function ensureProtoAttributesAreCorrect(attributes: IKeyValue[]) {
  assert.deepStrictEqual(
    attributes,
    [
      {
        key: 'component',
        value: {
          stringValue: 'document-load',
        },
      },
    ],
    'attributes are incorrect'
  );
}

export function ensureProtoLinksAreCorrect(attributes: ILink[]) {
  assert.deepStrictEqual(
    attributes,
    [
      {
        traceId: hexToBase64(traceIdHex),
        spanId: hexToBase64(parentIdHex),
        attributes: [
          {
            key: 'component',
            value: {
              stringValue: 'document-load',
            },
          },
        ],
        droppedAttributesCount: 0,
      },
    ],
    'links are incorrect'
  );
}

export function ensureProtoSpanIsCorrect(span: ISpan) {
  if (span.attributes) {
    ensureProtoAttributesAreCorrect(span.attributes);
  }
  if (span.events) {
    ensureProtoEventsAreCorrect(span.events);
  }
  if (span.links) {
    ensureProtoLinksAreCorrect(span.links);
  }
  assert.deepStrictEqual(
    span.traceId,
    hexToBase64(traceIdHex),
    'traceId is' + ' wrong'
  );
  assert.deepStrictEqual(
    span.spanId,
    hexToBase64(spanIdHex),
    'spanId is' + ' wrong'
  );
  assert.deepStrictEqual(
    span.parentSpanId,
    hexToBase64(parentIdHex),
    'parentIdArr is wrong'
  );
  assert.strictEqual(span.name, 'documentFetch', 'name is wrong');
  assert.strictEqual(span.kind, 'SPAN_KIND_INTERNAL', 'kind is wrong');
  assert.strictEqual(
    span.startTimeUnixNano,
    '1574120165429803008',
    'startTimeUnixNano is wrong'
  );
  assert.strictEqual(
    span.endTimeUnixNano,
    '1574120165438688000',
    'endTimeUnixNano is wrong'
  );
  assert.strictEqual(
    span.droppedAttributesCount,
    0,
    'droppedAttributesCount is wrong'
  );
  assert.strictEqual(span.droppedEventsCount, 0, 'droppedEventsCount is wrong');
  assert.strictEqual(span.droppedLinksCount, 0, 'droppedLinksCount is wrong');
  assert.deepStrictEqual(
    span.status,
    { code: 'STATUS_CODE_OK' },
    'status is wrong'
  );
}

export function ensureExportTraceServiceRequestIsSet(
  json: IExportTraceServiceRequest
) {
  const resourceSpans = json.resourceSpans;
  assert.strictEqual(resourceSpans?.length, 1, 'resourceSpans is missing');

  const resource = resourceSpans?.[0].resource;
  assert.ok(resource, 'resource is missing');

  const scopeSpans = resourceSpans?.[0].scopeSpans;
  assert.strictEqual(scopeSpans?.length, 1, 'scopeSpans is missing');

  const scope = scopeSpans?.[0].scope;
  assert.ok(scope, 'scope is missing');

  const spans = scopeSpans?.[0].spans;
  assert.strictEqual(spans?.length, 1, 'spans are missing');
}

export class MockedResponse extends Stream {
  constructor(private _code: number, private _msg?: string) {
    super();
  }

  send(data: string) {
    this.emit('data', data);
    this.emit('end');
  }

  get statusCode() {
    return this._code;
  }

  get statusMessage() {
    return this._msg;
  }
}
