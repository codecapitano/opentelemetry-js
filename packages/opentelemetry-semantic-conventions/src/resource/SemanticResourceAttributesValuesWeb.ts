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

/** Alibaba Cloud. */
export const CLOUD_PROVIDER_ALIBABA_CLOUD = 'alibaba_cloud';

/** Amazon Web Services. */
export const CLOUD_PROVIDER_AWS = 'aws';

/** Microsoft Azure. */
export const CLOUD_PROVIDER_AZURE = 'azure';

/** Google Cloud Platform. */
export const CLOUD_PROVIDER_GCP = 'gcp';

export type CloudProviderValues =
  | typeof CLOUD_PROVIDER_ALIBABA_CLOUD
  | typeof CLOUD_PROVIDER_AWS
  | typeof CLOUD_PROVIDER_AZURE
  | typeof CLOUD_PROVIDER_GCP;

/** Alibaba Cloud Elastic Compute Service. */
export const CLOUD_PLATFORM_ALIBABA_CLOUD_ECS = 'alibaba_cloud_ecs';

/** Alibaba Cloud Function Compute. */
export const CLOUD_PLATFORM_ALIBABA_CLOUD_FC = 'alibaba_cloud_fc';

/** AWS Elastic Compute Cloud. */
export const CLOUD_PLATFORM_AWS_EC2 = 'aws_ec2';

/** AWS Elastic Container Service. */
export const CLOUD_PLATFORM_AWS_ECS = 'aws_ecs';

/** AWS Elastic Kubernetes Service. */
export const CLOUD_PLATFORM_AWS_EKS = 'aws_eks';

/** AWS Lambda. */
export const CLOUD_PLATFORM_AWS_LAMBDA = 'aws_lambda';

/** AWS Elastic Beanstalk. */
export const CLOUD_PLATFORM_AWS_ELASTIC_BEANSTALK = 'aws_elastic_beanstalk';

/** Azure Virtual Machines. */
export const CLOUD_PLATFORM_AZURE_VM = 'azure_vm';

/** Azure Container Instances. */
export const CLOUD_PLATFORM_AZURE_CONTAINER_INSTANCES =
  'azure_container_instances';

/** Azure Kubernetes Service. */
export const CLOUD_PLATFORM_AZURE_AKS = 'azure_aks';

/** Azure Functions. */
export const CLOUD_PLATFORM_AZURE_FUNCTIONS = 'azure_functions';

/** Azure App Service. */
export const CLOUD_PLATFORM_AZURE_APP_SERVICE = 'azure_app_service';

/** Google Cloud Compute Engine (GCE). */
export const CLOUD_PLATFORM_GCP_COMPUTE_ENGINE = 'gcp_compute_engine';

/** Google Cloud Run. */
export const CLOUD_PLATFORM_GCP_CLOUD_RUN = 'gcp_cloud_run';

/** Google Cloud Kubernetes Engine (GKE). */
export const CLOUD_PLATFORM_GCP_KUBERNETES_ENGINE = 'gcp_kubernetes_engine';

/** Google Cloud Functions (GCF). */
export const CLOUD_PLATFORM_GCP_CLOUD_FUNCTIONS = 'gcp_cloud_functions';

/** Google Cloud App Engine (GAE). */
export const CLOUD_PLATFORM_GCP_APP_ENGINE = 'gcp_app_engine';

export type CloudPlatformValues =
  | typeof CLOUD_PLATFORM_ALIBABA_CLOUD_ECS
  | typeof CLOUD_PLATFORM_ALIBABA_CLOUD_FC
  | typeof CLOUD_PLATFORM_AWS_EC2
  | typeof CLOUD_PLATFORM_AWS_ECS
  | typeof CLOUD_PLATFORM_AWS_EKS
  | typeof CLOUD_PLATFORM_AWS_LAMBDA
  | typeof CLOUD_PLATFORM_AWS_ELASTIC_BEANSTALK
  | typeof CLOUD_PLATFORM_AZURE_VM
  | typeof CLOUD_PLATFORM_AZURE_CONTAINER_INSTANCES
  | typeof CLOUD_PLATFORM_AZURE_AKS
  | typeof CLOUD_PLATFORM_AZURE_FUNCTIONS
  | typeof CLOUD_PLATFORM_AZURE_APP_SERVICE
  | typeof CLOUD_PLATFORM_GCP_COMPUTE_ENGINE
  | typeof CLOUD_PLATFORM_GCP_CLOUD_RUN
  | typeof CLOUD_PLATFORM_GCP_KUBERNETES_ENGINE
  | typeof CLOUD_PLATFORM_GCP_CLOUD_FUNCTIONS
  | typeof CLOUD_PLATFORM_GCP_APP_ENGINE;

/** ec2. */
export const AWS_ECS_LAUNCHTYPE_EC2 = 'ec2';

/** fargate. */
export const AWS_ECS_LAUNCHTYPE_FARGATE = 'fargate';

export type AwsEcsLaunchtypeValues =
  | typeof AWS_ECS_LAUNCHTYPE_EC2
  | typeof AWS_ECS_LAUNCHTYPE_FARGATE;

/** AMD64. */
export const HOST_ARCH_AMD64 = 'amd64';

/** ARM32. */
export const HOST_ARCH_ARM32 = 'arm32';

/** ARM64. */
export const HOST_ARCH_ARM64 = 'arm64';

/** Itanium. */
export const HOST_ARCH_IA64 = 'ia64';

/** 32-bit PowerPC. */
export const HOST_ARCH_PPC32 = 'ppc32';

/** 64-bit PowerPC. */
export const HOST_ARCH_PPC64 = 'ppc64';

/** 32-bit x86. */
export const HOST_ARCH_X86 = 'x86';

export type HostArchValues =
  | typeof HOST_ARCH_AMD64
  | typeof HOST_ARCH_ARM32
  | typeof HOST_ARCH_ARM64
  | typeof HOST_ARCH_IA64
  | typeof HOST_ARCH_PPC32
  | typeof HOST_ARCH_PPC64
  | typeof HOST_ARCH_X86;

/** Microsoft Windows. */
export const OS_TYPE_WINDOWS = 'windows';

/** Linux. */
export const OS_TYPE_LINUX = 'linux';

/** Apple Darwin. */
export const OS_TYPE_DARWIN = 'darwin';

/** FreeBSD. */
export const OS_TYPE_FREEBSD = 'freebsd';

/** NetBSD. */
export const OS_TYPE_NETBSD = 'netbsd';

/** OpenBSD. */
export const OS_TYPE_OPENBSD = 'openbsd';

/** DragonFly BSD. */
export const OS_TYPE_DRAGONFLYBSD = 'dragonflybsd';

/** HP-UX (Hewlett Packard Unix). */
export const OS_TYPE_HPUX = 'hpux';

/** AIX (Advanced Interactive eXecutive). */
export const OS_TYPE_AIX = 'aix';

/** Oracle Solaris. */
export const OS_TYPE_SOLARIS = 'solaris';

/** IBM z/OS. */
export const OS_TYPE_Z_OS = 'z_os';

export type OsTypeValues =
  | typeof OS_TYPE_WINDOWS
  | typeof OS_TYPE_LINUX
  | typeof OS_TYPE_DARWIN
  | typeof OS_TYPE_FREEBSD
  | typeof OS_TYPE_NETBSD
  | typeof OS_TYPE_OPENBSD
  | typeof OS_TYPE_DRAGONFLYBSD
  | typeof OS_TYPE_HPUX
  | typeof OS_TYPE_AIX
  | typeof OS_TYPE_SOLARIS
  | typeof OS_TYPE_Z_OS;

/** cpp. */
export const TELEMETRY_SDK_LANGUAGE_CPP = 'cpp';

/** dotnet. */
export const TELEMETRY_SDK_LANGUAGE_DOTNET = 'dotnet';

/** erlang. */
export const TELEMETRY_SDK_LANGUAGE_ERLANG = 'erlang';

/** go. */
export const TELEMETRY_SDK_LANGUAGE_GO = 'go';

/** java. */
export const TELEMETRY_SDK_LANGUAGE_JAVA = 'java';

/** nodejs. */
export const TELEMETRY_SDK_LANGUAGE_NODEJS = 'nodejs';

/** php. */
export const TELEMETRY_SDK_LANGUAGE_PHP = 'php';

/** python. */
export const TELEMETRY_SDK_LANGUAGE_PYTHON = 'python';

/** ruby. */
export const TELEMETRY_SDK_LANGUAGE_RUBY = 'ruby';

/** webjs. */
export const TELEMETRY_SDK_LANGUAGE_WEBJS = 'webjs';

export type TelemetrySdkLanguageValues =
  | typeof TELEMETRY_SDK_LANGUAGE_CPP
  | typeof TELEMETRY_SDK_LANGUAGE_DOTNET
  | typeof TELEMETRY_SDK_LANGUAGE_ERLANG
  | typeof TELEMETRY_SDK_LANGUAGE_GO
  | typeof TELEMETRY_SDK_LANGUAGE_JAVA
  | typeof TELEMETRY_SDK_LANGUAGE_NODEJS
  | typeof TELEMETRY_SDK_LANGUAGE_PHP
  | typeof TELEMETRY_SDK_LANGUAGE_PYTHON
  | typeof TELEMETRY_SDK_LANGUAGE_RUBY
  | typeof TELEMETRY_SDK_LANGUAGE_WEBJS;
