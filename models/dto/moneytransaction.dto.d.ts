export declare class fieldDetails {
    transaction_date: string;
    transaction_type: number;
    is_debit: number;
    transaction_description: string;
    user_id_of_wallet: number;
    transaction_executed_by_user_id: number;
    transaction_executed_via_app_id: number;
    is_executed_via_custom_app: number;
    transaction_ref_document_record_ids: string;
    credit_entry_amount: number;
    credit_entry_currency: string;
    debit_amount: number;
    debit_entry_currency: string;
    wallet_closing_balance_amount: number;
    wallet_closing_balance_currency: string;
}
export declare class transfer {
    transaction_datetime: string;
    is_debit: number;
    transaction_description: string;
    user_id_of_wallet: number;
    transaction_executed_by_user_id: number;
    transaction_executed_via_app_id: number;
    is_executed_via_custom_app: boolean;
    transaction_ref_document_record_ids: JSON;
    credit_entry_amount: number;
    credit_entry_currency: string;
    debit_entry_amount: number;
    debit_entry_currency: string;
    wallet_closing_balance_amount: number;
    wallet_closing_balance_currency: string;
    receiver_wallet_id: string;
}
export declare class amount_transfer {
    debit: transfer;
    credit: transfer;
}
