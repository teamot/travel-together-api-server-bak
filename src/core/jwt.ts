import jsonwebtoken from 'jsonwebtoken';
import { Secrets } from '../constants';

export interface JWTAttributes {
  id: string;
  oauthId: string;
  exp?: number;
}

export async function verifyAndDecode(token: string): Promise<JWTPayload> {
  const decoded = await new Promise<JWTAttributes>((resolve, reject) => {
    if (!token) {
      throw new Error('Token to be decoded must be provided.');
    }

    if (!Secrets.JWT_SECRET) {
      throw new Error("Environment variable 'JWT_SECRET' is not defined.");
    }

    jsonwebtoken.verify(token, Secrets.JWT_SECRET, (err, decoded) => {
      if (err) reject(err);

      if (typeof decoded === 'string') {
        return reject("The type of decoded JWT is 'string'");
      }

      return resolve(decoded as JWTAttributes);
    });
  });

  return new JWTPayload(decoded);
}

export class JWTPayload {
  private lifetime: number = 3600;
  constructor(private payload: JWTAttributes) {}

  public setExp(lifetimeIn: number): void {
    this.lifetime = lifetimeIn;
  }

  public encode(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!Secrets.JWT_SECRET) {
        throw new Error("Environment variable 'JWT_SECRET' is not defined.");
      }

      jsonwebtoken.sign(
        this.payload,
        Secrets.JWT_SECRET,
        { noTimestamp: true, expiresIn: this.lifetime },
        (err, token) => {
          if (err) return reject(err);
          return resolve(token);
        }
      );
    });
  }

  public get id(): string {
    return this.payload.id;
  }

  public get oauthId(): string {
    return this.payload.oauthId;
  }

  public get exp(): number {
    return this.payload.exp || this.lifetime;
  }
}
