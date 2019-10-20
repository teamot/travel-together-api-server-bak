import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

export class PushNotification {
  constructor(
    private title?: string,
    private content?: string,
    private pushTokens?: string[]
  ) {}

  public setPushTokens(tokens: string[]) {
    this.pushTokens = tokens;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setContent(content: string): void {
    this.content = content;
  }

  public async send() {
    if (!this.pushTokens || this.pushTokens.length < 1) {
      throw new Error('push tokens must be set.');
    }

    const message: admin.messaging.MulticastMessage = {
      notification: {
        title: this.title,
        body: this.content,
        imageUrl:
          'https://en.wikipedia.org/wiki/File:Monasterio_Khor_Virap,_Armenia,_2016-10-01,_DD_25.jpg'
      },
      tokens: this.pushTokens
    };

    // return admin.messaging().sendMulticast(message);
    return admin.messaging().sendMulticast(message);
  }
}
