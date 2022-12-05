import ResponseInterface from 'src/models/interface/Response.interface';
import { WowaudittrailService } from '../../services/audit-trail/wowaudittrail.service';
export declare class WowaudittrailController {
    api: WowaudittrailService;
    constructor(api: WowaudittrailService);
    AudittrailDetails(country_code: string, customer_id: string): Promise<ResponseInterface>;
}
