const sqlScripts=[
    {
        "name":"Get latest lans",
        "script":"select a.id, a.loan_account_no, a.fileno, a.creation_time_stamp from lms_loanaccount_dtl a order by creation_time_stamp desc;"
    },
    {
        "name":"Get Dynamic form screen from dynamic form name",
        "script":"select a.screen_name, a.screen_code, a.* from screen_id a where id in (select screen_id from DYNAMIC_FORM_SCREEN_MAP_DTL where form_configuration_mapping in (select id from FORM_CONFIGURATION_MAPPING where ui_meta_data in (select id from uimeta_data where form_name = '<FORM_NAME_HERE>')));"
    },
    {
        "name":"Get instrumnet details for LAN",
        "script":"select a.loan_account_no, a.* from lms_repay_instrument_hdr a where a.loan_account_no='Add Loan Account Number Here';"
    },
    {
        "name":"Get latest instrument details",
        "script":"select a.loan_account_no, a.* from lms_repay_instrument_hdr a order by creation_time_stamp desc;"
    },
    {
        "name":"set business date to current date",
        "script":"update tenant set business_date=sysdate;"
    },
    {
        "name":"Get Loan Details by LAN",
        "script":"select a.loan_account_no,a.fileno as Application_Number, a.* from lms_loanaccount_dtl a where a.loan_account_no='LAN NUMBER HERE';"
    },
    {
        "name":"Get Loan Details by LoanID",
        "script":"select a.loan_account_no,a.fileno as Application_Number, a.* from lms_loanaccount_dtl a where a.id='LOAN ID HERE';"
    },
    {
        "name":"Get Application Number by LAN",
        "script":"select a.loan_account_no,a.fileno as Application_Number, a.* from lms_loanaccount_dtl a where a.loan_account_no='LCFPOW0005002749';"
    },
    {
        "name":"Get Loan Application Details by Application Number",
        "script":"select a.application_number, a.* from loan_application a where a.application_number='APPLICATION NUMBER HERE';"
    },
    {
        "name":"Get Loan Application Details by LAN",
        "script":"select a.application_number, a.* from loan_application a where a.application_number in (select b.fileno from lms_loanaccount_dtl b where b.loan_account_no='LAN NUMBER HERE');"
    },
    {
        "name":"Get Loan Application Details by Loan ID",
        "script":"select a.application_number, a.* from loan_application a where a.application_number in (select b.fileno from lms_loanaccount_dtl b where b.id='LOAN ID HERE');",
    },
    {
        "name":"Create Insert script for Panel with field for a dynamic form",
        "script":"----below insert is only when new panel is created\\n--select a.id, a.* from uimeta_data a where  form_name ='<DYNAMIC FORM NAME HERE>' and approval_status=0 order by creation_time_stamp desc;\\nInsert into panel_definition(ID,AUTHORIZATION_BUSINESS_DATE,CREATED_BY_URI,CREATION_TIME_STAMP,LAST_UPDATED_BY_URI,LAST_UPDATED_TIME_STAMP,PERSISTENCE_STATUS,SNAPSHOT_RECORD,SYSTEM_MODIFIABLE_ONLY,UUID,MAKE_BUSINESS_DATE,TENANT_ID,ACCORDIAN,DISPLAY_BORDER,PANEL_COLUMN_LAYOUT,PANEL_HEADER,PANEL_KEY,PANEL_NAME,PANEL_TYPE,PERSISTENT_FORM_DATA,UI_PANEL_DEF_FK,PANEL_SEQUENCE,PRODUCT_SCHEME_META_DATA,SAVED_SP_COLUMN,SPECIAL_TABLE,ALLOW_PANEL_SAVE,SPECIAL_TABLE_PARTY_ROLES) values (PANEL_DEFINITION_SEQ.nextval,null,null,to_timestamp('29-NOV-23 05.10.08.622940000 PM','DD-MON-RR HH.MI.SS.FF AM'),null,null,0,null,null,null,to_timestamp('29-NOV-23 05.10.08.622940000 PM','DD-MON-RR HH.MI.SS.FF AM'),null,0,0,1,'label.custom.poacollected','poa','label.custom.poacollected',2,null,<ID FOR ABOVE SELECT QUERY>,9,null,null,null,0,null);\\n\\nInsert into FIELD_DEFINITION (ID,AUTHORIZATION_BUSINESS_DATE,CREATED_BY_URI,CREATION_TIME_STAMP,LAST_UPDATED_BY_URI,LAST_UPDATED_TIME_STAMP,PERSISTENCE_STATUS,SNAPSHOT_RECORD,SYSTEM_MODIFIABLE_ONLY,UUID,MAKE_BUSINESS_DATE,TENANT_ID,ACTIVE_CHILD_ENTITY_NAME,AUTO_COMPLETE_COLUMNS_HOLDER,BINDER_NAME,CUSTOME_LONG_MESSAGE,DEFAULT_MONTH,DEFAULT_YEAR,DESCRIPTION,EMAIL_TYPE_CODE,ENTITY_NAME,FIELD_DATA_TYPE,FIELD_KEY,FIELD_LABEL,FIELD_SEQUENCE,FIELD_TYPE,INCLUDE_SELECT,ITEM_LABEL,ITEM_VALUE,MANDATORY_FIELD,MAX_FIELD_LENGTH,MAX_FIELD_VALUE,MIN_FIELD_LENGTH,MIN_FIELD_VALUE,MOBILE,PARENT_FIELD_KEY,TOOL_TIP_MESSAGE,PERSISTENT_FORM_DATA,PANEL_FIELD_DEF_FK,URL_CASCADE_SELECT,AUTHORITY,FUNCTION_LOGIC,HREF,ERROR_MESSAGE_CODE,MAIN_FORM_DEPENDANT,PARENT_COLUMN,PARENT_FIELD_ID,PRODUCT_SCHEME_META_DATA,SPECIAL_TABLE,ASSOCIATED_FIELD_KEY,DISABLE,FIRST_PARENT,PARENT,ASSIGNMENT_MASTER_CODE,POPULATE_ASSIGNMENT_RESULT,EXPANDABLE_FIELD,LOV_KEY,ALLOW_FIELD_AUDIT) values (FIELD_DEFINITION_SEQ.nextval,null,null,to_timestamp('29-NOV-23 05.10.08.622940000 PM','DD-MON-RR HH.MI.SS.FF AM'),null,null,0,null,null,null,to_timestamp('29-NOV-23 05.10.08.622940000 PM','DD-MON-RR HH.MI.SS.FF AM'),null,null,null,'ApplicableYesNoType',null,null,null,null,null,'com.nucleus.core.genericparameter.entity.GenericParameter',6,'PoaCollected','label.custom.poacollected',0,'DropDown',1,'code','id',0,null,null,null,null,null,null,null,null,PANEL_DEFINITION_SEQ.currval,null,null,null,null,null,0,null,null,null,null,null,0,null,null,null,null,1,null,0);\\n\\n--select a.id, a.* from uimeta_data a where  form_name ='<DYNAMIC FORM NAME HERE>' and approval_status=0 order by creation_time_stamp desc;\\n--select model_meta_data from form_configuration_mapping where ui_meta_data=<ID FROM ABOVE SELECT QUERY>;\\nInsert into FIELD_META_DATA (ID,AUTHORIZATION_BUSINESS_DATE,CREATED_BY_URI,CREATION_TIME_STAMP,LAST_UPDATED_BY_URI,LAST_UPDATED_TIME_STAMP,PERSISTENCE_STATUS,SNAPSHOT_RECORD,SYSTEM_MODIFIABLE_ONLY,UUID,MAKE_BUSINESS_DATE,TENANT_ID,DATA_TYPE,FIELD_KEY,MULTI_VALUED,NAME,PERSISTENT_FORM_DATA,MODEL_META_DATA_FK) values (FIELD_META_DATA_SEQ.nextval,null,null,to_timestamp('29-NOV-23 05.10.08.622940000 PM','DD-MON-RR HH.MI.SS.FF AM'),null,null,0,null,null,null,to_timestamp('29-NOV-23 05.10.08.622940000 PM','DD-MON-RR HH.MI.SS.FF AM'),null,6,'PoaCollected',0,'label.custom.poacollected',null,<MODEL META DATA VALUE FROM ABOVE SELECT QUERY>);"
    }
]
export default sqlScripts