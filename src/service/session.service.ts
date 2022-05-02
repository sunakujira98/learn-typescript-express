import { Session } from 'inspector';
import { FilterQuery, UpdateQuery } from 'mongoose'
import SessionModel, { SessionDocument } from "../models/session.models";

export async function createSession(userId: string, userAgent: string){
  const session = await SessionModel.create({user: userId, userAgent})

  return session.toJSON()
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return SessionModel.find(query).lean();
}

export async function updateSession(query: FilterQuery<SessionDocument>, update: UpdateQuery) {
  return SessionModel.updateOne(query, update)
}