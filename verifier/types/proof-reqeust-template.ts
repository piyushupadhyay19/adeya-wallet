import { AnonCredsNonRevokedInterval, AnonCredsPredicateType, AnonCredsProofRequestRestriction } from '@adeya/ssi'

export interface AnonCredsRequestedPredicate {
  label?: string
  name: string
  predicateType: AnonCredsPredicateType
  predicateValue: number
  restrictions?: AnonCredsProofRequestRestriction[]
  nonRevoked?: AnonCredsNonRevokedInterval
  parameterizable?: boolean
}

export interface AnonCredsRequestedAttribute {
  label?: string
  name?: string
  names?: Array<string>
  restrictions?: AnonCredsProofRequestRestriction[]
  revealed?: boolean
  nonRevoked?: AnonCredsNonRevokedInterval
}

export interface AnonCredsProofRequestTemplatePayloadData {
  schema: string
  requestedAttributes?: Array<AnonCredsRequestedAttribute>
  requestedPredicates?: Array<AnonCredsRequestedPredicate>
}

export enum ProofRequestType {
  Indy = 'indy',
  AnonCreds = 'anoncreds',
  DIF = 'dif',
}

export interface IndyProofRequestTemplatePayload {
  type: ProofRequestType.Indy
  data: Array<AnonCredsProofRequestTemplatePayloadData>
}

export interface AnonCredsProofRequestTemplatePayload {
  type: ProofRequestType.AnonCreds
  data: Array<AnonCredsProofRequestTemplatePayloadData>
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DifProofRequestTemplatePayloadData {}

export interface DifProofRequestTemplatePayload {
  type: ProofRequestType.DIF
  data: Array<DifProofRequestTemplatePayloadData>
}

export interface ProofRequestTemplate {
  id: string
  name: string
  description: string
  version: string
  devOnly?: boolean
  payload: IndyProofRequestTemplatePayload | AnonCredsProofRequestTemplatePayload | DifProofRequestTemplatePayload
}
