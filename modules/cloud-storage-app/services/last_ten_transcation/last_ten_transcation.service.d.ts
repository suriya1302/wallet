export declare class LastTenTranscationService {
    transactionDetails(country_id: any, country_code: any, login_user_id: any): Promise<any[]>;
    table2(country_code: string, customer_id: number, login_user_id: number, date1: string, date2: string): Promise<any[]>;
    wowwalletDetails(country_id: any, country_code: any, login_user_id: any): Promise<any>;
    getwalletdropdownlistapi(country_code: any, customer_id: any): Promise<any[]>;
    getwalletDetails(customer_id: any, country_code: any, user_category_id: any, user_id: any): Promise<any[]>;
}
