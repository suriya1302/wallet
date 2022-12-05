import { HttpStatus } from "@nestjs/common";
export declare class MoneytransactionService {
    postamountdetails(customer_id: any, country_code: any, entry_data: any, dateandmonth: any, user_id: any, send_user_id: any, Time_Zone: any): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: string;
    } | {
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    }>;
}
