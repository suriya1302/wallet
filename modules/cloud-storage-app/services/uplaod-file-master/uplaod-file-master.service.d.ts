import { QP_UploadFileMaster } from './../../query-procedures/qp_upload-file-master';
export declare class UploadFileMasterService {
    private _QP_UploadFileMaster;
    constructor(_QP_UploadFileMaster: QP_UploadFileMaster);
    onUploadFileMaster(): Promise<void>;
}
