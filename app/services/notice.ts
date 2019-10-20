import { Notice } from '../common/types';
import { PushNotification } from '../push-notification';

export class NoticeService {
  async createNotice(notice: Notice): Promise<Notice> {
    console.log(notice);
    const pn = new PushNotification('예지', notice.title, [
      'ccaus59KMnI:APA91bHJyodPBpScWbhVi9vRmy5GUGNbHURMQcpqKxR2HeF33iFsYyfm69yoEJPihOyupzTB9zbX1yGAPwHseeEaXReZkeGk_9gl4PIEGt_LhyKH_BBBWww1efZxGereBOiL-Lis_5y3'
    ]);
    const result = await pn.send();
    console.log(result);

    return notice;
  }
}
