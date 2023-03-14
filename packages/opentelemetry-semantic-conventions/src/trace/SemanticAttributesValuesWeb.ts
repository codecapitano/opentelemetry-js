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

// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributesValues-web.ts.j2

/** Some other SQL database. Fallback only. See notes. */
export const DB_SYSTEM_OTHER_SQL = 'other_sql';

/** Microsoft SQL Server. */
export const DB_SYSTEM_MSSQL = 'mssql';

/** MySQL. */
export const DB_SYSTEM_MYSQL = 'mysql';

/** Oracle Database. */
export const DB_SYSTEM_ORACLE = 'oracle';

/** IBM Db2. */
export const DB_SYSTEM_DB2 = 'db2';

/** PostgreSQL. */
export const DB_SYSTEM_POSTGRESQL = 'postgresql';

/** Amazon Redshift. */
export const DB_SYSTEM_REDSHIFT = 'redshift';

/** Apache Hive. */
export const DB_SYSTEM_HIVE = 'hive';

/** Cloudscape. */
export const DB_SYSTEM_CLOUDSCAPE = 'cloudscape';

/** HyperSQL DataBase. */
export const DB_SYSTEM_HSQLDB = 'hsqldb';

/** Progress Database. */
export const DB_SYSTEM_PROGRESS = 'progress';

/** SAP MaxDB. */
export const DB_SYSTEM_MAXDB = 'maxdb';

/** SAP HANA. */
export const DB_SYSTEM_HANADB = 'hanadb';

/** Ingres. */
export const DB_SYSTEM_INGRES = 'ingres';

/** FirstSQL. */
export const DB_SYSTEM_FIRSTSQL = 'firstsql';

/** EnterpriseDB. */
export const DB_SYSTEM_EDB = 'edb';

/** InterSystems Caché. */
export const DB_SYSTEM_CACHE = 'cache';

/** Adabas (Adaptable Database System). */
export const DB_SYSTEM_ADABAS = 'adabas';

/** Firebird. */
export const DB_SYSTEM_FIREBIRD = 'firebird';

/** Apache Derby. */
export const DB_SYSTEM_DERBY = 'derby';

/** FileMaker. */
export const DB_SYSTEM_FILEMAKER = 'filemaker';

/** Informix. */
export const DB_SYSTEM_INFORMIX = 'informix';

/** InstantDB. */
export const DB_SYSTEM_INSTANTDB = 'instantdb';

/** InterBase. */
export const DB_SYSTEM_INTERBASE = 'interbase';

/** MariaDB. */
export const DB_SYSTEM_MARIADB = 'mariadb';

/** Netezza. */
export const DB_SYSTEM_NETEZZA = 'netezza';

/** Pervasive PSQL. */
export const DB_SYSTEM_PERVASIVE = 'pervasive';

/** PointBase. */
export const DB_SYSTEM_POINTBASE = 'pointbase';

/** SQLite. */
export const DB_SYSTEM_SQLITE = 'sqlite';

/** Sybase. */
export const DB_SYSTEM_SYBASE = 'sybase';

/** Teradata. */
export const DB_SYSTEM_TERADATA = 'teradata';

/** Vertica. */
export const DB_SYSTEM_VERTICA = 'vertica';

/** H2. */
export const DB_SYSTEM_H2 = 'h2';

/** ColdFusion IMQ. */
export const DB_SYSTEM_COLDFUSION = 'coldfusion';

/** Apache Cassandra. */
export const DB_SYSTEM_CASSANDRA = 'cassandra';

/** Apache HBase. */
export const DB_SYSTEM_HBASE = 'hbase';

/** MongoDB. */
export const DB_SYSTEM_MONGODB = 'mongodb';

/** Redis. */
export const DB_SYSTEM_REDIS = 'redis';

/** Couchbase. */
export const DB_SYSTEM_COUCHBASE = 'couchbase';

/** CouchDB. */
export const DB_SYSTEM_COUCHDB = 'couchdb';

/** Microsoft Azure Cosmos DB. */
export const DB_SYSTEM_COSMOSDB = 'cosmosdb';

/** Amazon DynamoDB. */
export const DB_SYSTEM_DYNAMODB = 'dynamodb';

/** Neo4j. */
export const DB_SYSTEM_NEO4J = 'neo4j';

/** Apache Geode. */
export const DB_SYSTEM_GEODE = 'geode';

/** Elasticsearch. */
export const DB_SYSTEM_ELASTICSEARCH = 'elasticsearch';

/** Memcached. */
export const DB_SYSTEM_MEMCACHED = 'memcached';

/** CockroachDB. */
export const DB_SYSTEM_COCKROACHDB = 'cockroachdb';

export type DbSystemValues =
  | typeof DB_SYSTEM_OTHER_SQL
  | typeof DB_SYSTEM_MSSQL
  | typeof DB_SYSTEM_MYSQL
  | typeof DB_SYSTEM_ORACLE
  | typeof DB_SYSTEM_DB2
  | typeof DB_SYSTEM_POSTGRESQL
  | typeof DB_SYSTEM_REDSHIFT
  | typeof DB_SYSTEM_HIVE
  | typeof DB_SYSTEM_CLOUDSCAPE
  | typeof DB_SYSTEM_HSQLDB
  | typeof DB_SYSTEM_PROGRESS
  | typeof DB_SYSTEM_MAXDB
  | typeof DB_SYSTEM_HANADB
  | typeof DB_SYSTEM_INGRES
  | typeof DB_SYSTEM_FIRSTSQL
  | typeof DB_SYSTEM_EDB
  | typeof DB_SYSTEM_CACHE
  | typeof DB_SYSTEM_ADABAS
  | typeof DB_SYSTEM_FIREBIRD
  | typeof DB_SYSTEM_DERBY
  | typeof DB_SYSTEM_FILEMAKER
  | typeof DB_SYSTEM_INFORMIX
  | typeof DB_SYSTEM_INSTANTDB
  | typeof DB_SYSTEM_INTERBASE
  | typeof DB_SYSTEM_MARIADB
  | typeof DB_SYSTEM_NETEZZA
  | typeof DB_SYSTEM_PERVASIVE
  | typeof DB_SYSTEM_POINTBASE
  | typeof DB_SYSTEM_SQLITE
  | typeof DB_SYSTEM_SYBASE
  | typeof DB_SYSTEM_TERADATA
  | typeof DB_SYSTEM_VERTICA
  | typeof DB_SYSTEM_H2
  | typeof DB_SYSTEM_COLDFUSION
  | typeof DB_SYSTEM_CASSANDRA
  | typeof DB_SYSTEM_HBASE
  | typeof DB_SYSTEM_MONGODB
  | typeof DB_SYSTEM_REDIS
  | typeof DB_SYSTEM_COUCHBASE
  | typeof DB_SYSTEM_COUCHDB
  | typeof DB_SYSTEM_COSMOSDB
  | typeof DB_SYSTEM_DYNAMODB
  | typeof DB_SYSTEM_NEO4J
  | typeof DB_SYSTEM_GEODE
  | typeof DB_SYSTEM_ELASTICSEARCH
  | typeof DB_SYSTEM_MEMCACHED
  | typeof DB_SYSTEM_COCKROACHDB;

/** all. */
export const DB_CASSANDRA_CONSISTENCY_LEVEL_ALL = 'all';

/** each_quorum. */
export const DB_CASSANDRA_CONSISTENCY_LEVEL_EACH_QUORUM = 'each_quorum';

/** quorum. */
export const DB_CASSANDRA_CONSISTENCY_LEVEL_QUORUM = 'quorum';

/** local_quorum. */
export const DB_CASSANDRA_CONSISTENCY_LEVEL_LOCAL_QUORUM = 'local_quorum';

/** one. */
export const DB_CASSANDRA_CONSISTENCY_LEVEL_ONE = 'one';

/** two. */
export const DB_CASSANDRA_CONSISTENCY_LEVEL_TWO = 'two';

/** three. */
export const DB_CASSANDRA_CONSISTENCY_LEVEL_THREE = 'three';

/** local_one. */
export const DB_CASSANDRA_CONSISTENCY_LEVEL_LOCAL_ONE = 'local_one';

/** any. */
export const DB_CASSANDRA_CONSISTENCY_LEVEL_ANY = 'any';

/** serial. */
export const DB_CASSANDRA_CONSISTENCY_LEVEL_SERIAL = 'serial';

/** local_serial. */
export const DB_CASSANDRA_CONSISTENCY_LEVEL_LOCAL_SERIAL = 'local_serial';

export type DbCassandraConsistencyLevelValues =
  | typeof DB_CASSANDRA_CONSISTENCY_LEVEL_ALL
  | typeof DB_CASSANDRA_CONSISTENCY_LEVEL_EACH_QUORUM
  | typeof DB_CASSANDRA_CONSISTENCY_LEVEL_QUORUM
  | typeof DB_CASSANDRA_CONSISTENCY_LEVEL_LOCAL_QUORUM
  | typeof DB_CASSANDRA_CONSISTENCY_LEVEL_ONE
  | typeof DB_CASSANDRA_CONSISTENCY_LEVEL_TWO
  | typeof DB_CASSANDRA_CONSISTENCY_LEVEL_THREE
  | typeof DB_CASSANDRA_CONSISTENCY_LEVEL_LOCAL_ONE
  | typeof DB_CASSANDRA_CONSISTENCY_LEVEL_ANY
  | typeof DB_CASSANDRA_CONSISTENCY_LEVEL_SERIAL
  | typeof DB_CASSANDRA_CONSISTENCY_LEVEL_LOCAL_SERIAL;

/** A response to some data source operation such as a database or filesystem read/write. */
export const FAAS_TRIGGER_DATASOURCE = 'datasource';

/** To provide an answer to an inbound HTTP request. */
export const FAAS_TRIGGER_HTTP = 'http';

/** A function is set to be executed when messages are sent to a messaging system. */
export const FAAS_TRIGGER_PUBSUB = 'pubsub';

/** A function is scheduled to be executed regularly. */
export const FAAS_TRIGGER_TIMER = 'timer';

/** If none of the others apply. */
export const FAAS_TRIGGER_OTHER = 'other';

export type FaasTriggerValues =
  | typeof FAAS_TRIGGER_DATASOURCE
  | typeof FAAS_TRIGGER_HTTP
  | typeof FAAS_TRIGGER_PUBSUB
  | typeof FAAS_TRIGGER_TIMER
  | typeof FAAS_TRIGGER_OTHER;

/** When a new object is created. */
export const FAAS_DOCUMENT_OPERATION_INSERT = 'insert';

/** When an object is modified. */
export const FAAS_DOCUMENT_OPERATION_EDIT = 'edit';

/** When an object is deleted. */
export const FAAS_DOCUMENT_OPERATION_DELETE = 'delete';

export type FaasDocumentOperationValues =
  | typeof FAAS_DOCUMENT_OPERATION_INSERT
  | typeof FAAS_DOCUMENT_OPERATION_EDIT
  | typeof FAAS_DOCUMENT_OPERATION_DELETE;

/** Alibaba Cloud. */
export const FAAS_INVOKED_PROVIDER_ALIBABA_CLOUD = 'alibaba_cloud';

/** Amazon Web Services. */
export const FAAS_INVOKED_PROVIDER_AWS = 'aws';

/** Microsoft Azure. */
export const FAAS_INVOKED_PROVIDER_AZURE = 'azure';

/** Google Cloud Platform. */
export const FAAS_INVOKED_PROVIDER_GCP = 'gcp';

export type FaasInvokedProviderValues =
  | typeof FAAS_INVOKED_PROVIDER_ALIBABA_CLOUD
  | typeof FAAS_INVOKED_PROVIDER_AWS
  | typeof FAAS_INVOKED_PROVIDER_AZURE
  | typeof FAAS_INVOKED_PROVIDER_GCP;

/** ip_tcp. */
export const NET_TRANSPORT_IP_TCP = 'ip_tcp';

/** ip_udp. */
export const NET_TRANSPORT_IP_UDP = 'ip_udp';

/** Another IP-based protocol. */
export const NET_TRANSPORT_IP = 'ip';

/** Unix Domain socket. See below. */
export const NET_TRANSPORT_UNIX = 'unix';

/** Named or anonymous pipe. See note below. */
export const NET_TRANSPORT_PIPE = 'pipe';

/** In-process communication. */
export const NET_TRANSPORT_INPROC = 'inproc';

/** Something else (non IP-based). */
export const NET_TRANSPORT_OTHER = 'other';

export type NetTransportValues =
  | typeof NET_TRANSPORT_IP_TCP
  | typeof NET_TRANSPORT_IP_UDP
  | typeof NET_TRANSPORT_IP
  | typeof NET_TRANSPORT_UNIX
  | typeof NET_TRANSPORT_PIPE
  | typeof NET_TRANSPORT_INPROC
  | typeof NET_TRANSPORT_OTHER;

/** wifi. */
export const NET_HOST_CONNECTION_TYPE_WIFI = 'wifi';

/** wired. */
export const NET_HOST_CONNECTION_TYPE_WIRED = 'wired';

/** cell. */
export const NET_HOST_CONNECTION_TYPE_CELL = 'cell';

/** unavailable. */
export const NET_HOST_CONNECTION_TYPE_UNAVAILABLE = 'unavailable';

/** unknown. */
export const NET_HOST_CONNECTION_TYPE_UNKNOWN = 'unknown';

export type NetHostConnectionTypeValues =
  | typeof NET_HOST_CONNECTION_TYPE_WIFI
  | typeof NET_HOST_CONNECTION_TYPE_WIRED
  | typeof NET_HOST_CONNECTION_TYPE_CELL
  | typeof NET_HOST_CONNECTION_TYPE_UNAVAILABLE
  | typeof NET_HOST_CONNECTION_TYPE_UNKNOWN;

/** GPRS. */
export const NET_HOST_CONNECTION_SUBTYPE_GPRS = 'gprs';

/** EDGE. */
export const NET_HOST_CONNECTION_SUBTYPE_EDGE = 'edge';

/** UMTS. */
export const NET_HOST_CONNECTION_SUBTYPE_UMTS = 'umts';

/** CDMA. */
export const NET_HOST_CONNECTION_SUBTYPE_CDMA = 'cdma';

/** EVDO Rel. 0. */
export const NET_HOST_CONNECTION_SUBTYPE_EVDO_0 = 'evdo_0';

/** EVDO Rev. A. */
export const NET_HOST_CONNECTION_SUBTYPE_EVDO_A = 'evdo_a';

/** CDMA2000 1XRTT. */
export const NET_HOST_CONNECTION_SUBTYPE_CDMA2000_1XRTT = 'cdma2000_1xrtt';

/** HSDPA. */
export const NET_HOST_CONNECTION_SUBTYPE_HSDPA = 'hsdpa';

/** HSUPA. */
export const NET_HOST_CONNECTION_SUBTYPE_HSUPA = 'hsupa';

/** HSPA. */
export const NET_HOST_CONNECTION_SUBTYPE_HSPA = 'hspa';

/** IDEN. */
export const NET_HOST_CONNECTION_SUBTYPE_IDEN = 'iden';

/** EVDO Rev. B. */
export const NET_HOST_CONNECTION_SUBTYPE_EVDO_B = 'evdo_b';

/** LTE. */
export const NET_HOST_CONNECTION_SUBTYPE_LTE = 'lte';

/** EHRPD. */
export const NET_HOST_CONNECTION_SUBTYPE_EHRPD = 'ehrpd';

/** HSPAP. */
export const NET_HOST_CONNECTION_SUBTYPE_HSPAP = 'hspap';

/** GSM. */
export const NET_HOST_CONNECTION_SUBTYPE_GSM = 'gsm';

/** TD-SCDMA. */
export const NET_HOST_CONNECTION_SUBTYPE_TD_SCDMA = 'td_scdma';

/** IWLAN. */
export const NET_HOST_CONNECTION_SUBTYPE_IWLAN = 'iwlan';

/** 5G NR (New Radio). */
export const NET_HOST_CONNECTION_SUBTYPE_NR = 'nr';

/** 5G NRNSA (New Radio Non-Standalone). */
export const NET_HOST_CONNECTION_SUBTYPE_NRNSA = 'nrnsa';

/** LTE CA. */
export const NET_HOST_CONNECTION_SUBTYPE_LTE_CA = 'lte_ca';

export type NetHostConnectionSubtypeValues =
  | typeof NET_HOST_CONNECTION_SUBTYPE_GPRS
  | typeof NET_HOST_CONNECTION_SUBTYPE_EDGE
  | typeof NET_HOST_CONNECTION_SUBTYPE_UMTS
  | typeof NET_HOST_CONNECTION_SUBTYPE_CDMA
  | typeof NET_HOST_CONNECTION_SUBTYPE_EVDO_0
  | typeof NET_HOST_CONNECTION_SUBTYPE_EVDO_A
  | typeof NET_HOST_CONNECTION_SUBTYPE_CDMA2000_1XRTT
  | typeof NET_HOST_CONNECTION_SUBTYPE_HSDPA
  | typeof NET_HOST_CONNECTION_SUBTYPE_HSUPA
  | typeof NET_HOST_CONNECTION_SUBTYPE_HSPA
  | typeof NET_HOST_CONNECTION_SUBTYPE_IDEN
  | typeof NET_HOST_CONNECTION_SUBTYPE_EVDO_B
  | typeof NET_HOST_CONNECTION_SUBTYPE_LTE
  | typeof NET_HOST_CONNECTION_SUBTYPE_EHRPD
  | typeof NET_HOST_CONNECTION_SUBTYPE_HSPAP
  | typeof NET_HOST_CONNECTION_SUBTYPE_GSM
  | typeof NET_HOST_CONNECTION_SUBTYPE_TD_SCDMA
  | typeof NET_HOST_CONNECTION_SUBTYPE_IWLAN
  | typeof NET_HOST_CONNECTION_SUBTYPE_NR
  | typeof NET_HOST_CONNECTION_SUBTYPE_NRNSA
  | typeof NET_HOST_CONNECTION_SUBTYPE_LTE_CA;

/** HTTP 1.0. */
export const HTTP_FLAVOR_HTTP_1_0 = '1.0';

/** HTTP 1.1. */
export const HTTP_FLAVOR_HTTP_1_1 = '1.1';

/** HTTP 2. */
export const HTTP_FLAVOR_HTTP_2_0 = '2.0';

/** SPDY protocol. */
export const HTTP_FLAVOR_SPDY = 'SPDY';

/** QUIC protocol. */
export const HTTP_FLAVOR_QUIC = 'QUIC';

export type HttpFlavorValues =
  | typeof HTTP_FLAVOR_HTTP_1_0
  | typeof HTTP_FLAVOR_HTTP_1_1
  | typeof HTTP_FLAVOR_HTTP_2_0
  | typeof HTTP_FLAVOR_SPDY
  | typeof HTTP_FLAVOR_QUIC;

/** A message sent to a queue. */
export const MESSAGING_DESTINATION_KIND_QUEUE = 'queue';

/** A message sent to a topic. */
export const MESSAGING_DESTINATION_KIND_TOPIC = 'topic';

export type MessagingDestinationKindValues =
  | typeof MESSAGING_DESTINATION_KIND_QUEUE
  | typeof MESSAGING_DESTINATION_KIND_TOPIC;

/** receive. */
export const MESSAGING_OPERATION_RECEIVE = 'receive';

/** process. */
export const MESSAGING_OPERATION_PROCESS = 'process';

export type MessagingOperationValues =
  | typeof MESSAGING_OPERATION_RECEIVE
  | typeof MESSAGING_OPERATION_PROCESS;

/** OK. */
export const RPC_GRPC_STATUS_CODE_OK = 0;

/** CANCELLED. */
export const RPC_GRPC_STATUS_CODE_CANCELLED = 1;

/** UNKNOWN. */
export const RPC_GRPC_STATUS_CODE_UNKNOWN = 2;

/** INVALID_ARGUMENT. */
export const RPC_GRPC_STATUS_CODE_INVALID_ARGUMENT = 3;

/** DEADLINE_EXCEEDED. */
export const RPC_GRPC_STATUS_CODE_DEADLINE_EXCEEDED = 4;

/** NOT_FOUND. */
export const RPC_GRPC_STATUS_CODE_NOT_FOUND = 5;

/** ALREADY_EXISTS. */
export const RPC_GRPC_STATUS_CODE_ALREADY_EXISTS = 6;

/** PERMISSION_DENIED. */
export const RPC_GRPC_STATUS_CODE_PERMISSION_DENIED = 7;

/** RESOURCE_EXHAUSTED. */
export const RPC_GRPC_STATUS_CODE_RESOURCE_EXHAUSTED = 8;

/** FAILED_PRECONDITION. */
export const RPC_GRPC_STATUS_CODE_FAILED_PRECONDITION = 9;

/** ABORTED. */
export const RPC_GRPC_STATUS_CODE_ABORTED = 10;

/** OUT_OF_RANGE. */
export const RPC_GRPC_STATUS_CODE_OUT_OF_RANGE = 11;

/** UNIMPLEMENTED. */
export const RPC_GRPC_STATUS_CODE_UNIMPLEMENTED = 12;

/** INTERNAL. */
export const RPC_GRPC_STATUS_CODE_INTERNAL = 13;

/** UNAVAILABLE. */
export const RPC_GRPC_STATUS_CODE_UNAVAILABLE = 14;

/** DATA_LOSS. */
export const RPC_GRPC_STATUS_CODE_DATA_LOSS = 15;

/** UNAUTHENTICATED. */
export const RPC_GRPC_STATUS_CODE_UNAUTHENTICATED = 16;

export type RpcGrpcStatusCodeValues =
  | typeof RPC_GRPC_STATUS_CODE_OK
  | typeof RPC_GRPC_STATUS_CODE_CANCELLED
  | typeof RPC_GRPC_STATUS_CODE_UNKNOWN
  | typeof RPC_GRPC_STATUS_CODE_INVALID_ARGUMENT
  | typeof RPC_GRPC_STATUS_CODE_DEADLINE_EXCEEDED
  | typeof RPC_GRPC_STATUS_CODE_NOT_FOUND
  | typeof RPC_GRPC_STATUS_CODE_ALREADY_EXISTS
  | typeof RPC_GRPC_STATUS_CODE_PERMISSION_DENIED
  | typeof RPC_GRPC_STATUS_CODE_RESOURCE_EXHAUSTED
  | typeof RPC_GRPC_STATUS_CODE_FAILED_PRECONDITION
  | typeof RPC_GRPC_STATUS_CODE_ABORTED
  | typeof RPC_GRPC_STATUS_CODE_OUT_OF_RANGE
  | typeof RPC_GRPC_STATUS_CODE_UNIMPLEMENTED
  | typeof RPC_GRPC_STATUS_CODE_INTERNAL
  | typeof RPC_GRPC_STATUS_CODE_UNAVAILABLE
  | typeof RPC_GRPC_STATUS_CODE_DATA_LOSS
  | typeof RPC_GRPC_STATUS_CODE_UNAUTHENTICATED;

/** sent. */
export const MESSAGE_TYPE_SENT = 'SENT';

/** received. */
export const MESSAGE_TYPE_RECEIVED = 'RECEIVED';

export type MessageTypeValues =
  | typeof MESSAGE_TYPE_SENT
  | typeof MESSAGE_TYPE_RECEIVED;
