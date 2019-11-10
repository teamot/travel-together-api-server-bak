import { verifyAndDecode, JWTPayload, JWTAttributes } from './jwt';

export async function decodeToken(
  token: string | undefined
): Promise<JWTPayload | null> {
  if (!token) {
    return null;
  }

  try {
    const payload = await verifyAndDecode(token);
    return payload;
  } catch (err) {
    return null;
  }
}
