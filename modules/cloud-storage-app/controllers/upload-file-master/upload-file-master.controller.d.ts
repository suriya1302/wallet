import { UploadFileMasterService } from '../../services/uplaod-file-master/uplaod-file-master.service';
export declare class UploadFileMasterController {
    private _uploadFileMasterService;
    constructor(_uploadFileMasterService: UploadFileMasterService);
    onUploadFileMaster(): Promise<string>;
}
