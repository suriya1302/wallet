import ResponseInterface from 'src/models/interface/Response.interface';
import { MattabledetailsService } from '../../services/access-ther-user-details/mattabledetails.service';
export declare class MattabledetailsController {
    private mattabledetails;
    constructor(mattabledetails: MattabledetailsService);
    matcarddetails(customer_id: number, country_code: string, user_id: string): Promise<ResponseInterface>;
}
