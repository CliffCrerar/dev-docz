FreeNom API 
===========

[FreeNom API](http://www.freenom.com/en/freenom-api.html)


Freenom - A Name for EveryoneA Name for EveryoneServices My SubscriptionsMy DomainsRegister a New DomainRenew DomainsTransfer DomainsFree and paid domainsDomain price chartWHOISPartners ResellersIP AgenciesDevelopersAnti-abuse APIFreenom APIAbout Freenom CompanyTerms and ConditionsPressJobsContactSupport KnowledgebaseDownloadsReport abuse Hello CliffEdit Account DetailsManage Credit CardAdd FundsMy InvoicesEmail HistoryChange PasswordView cartLogoutEnglish EnglishРусский简体字EspañolไทยBahasa IndonesiaFrançaisTiếng ViệtPortuguêsTürkçeDeutschﺎﻠﻋﺮﺒﻳﺓ繁體字हिन्दूNederlandsItaliano日本語
Introduction
This document describes the Freenom API at a technical level. It explains the supported data formats and how to interact with the API. For each function supported by the API a description is given including an example how such a function call and response may look.

Examples are given using the command line tool 'curl'. Curl is an easy tool to access any URL and is installed on most Unix like environments.

 

Data formats
The API delivers output in JSON format by default. If the API User prefers, output can be given in XML. The method of output is defined in the function call.

Example: Ping the service

Input
Request 
curl -X GET https://api.freenom.com/v2/service/ping 
Output
Response 
{ "timestamp" : "2010-06-01 16:04:12 UTC",
    "result" : "PING REPLY",
    "status" : "OK"
    } 
Example: Ping the service expecting XML output. Note the .xml behind the method name.

Input
Request 
curl -X GET https://api.freenom.com/v2/service/ping.xml
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <result>PING REPLY</result>
        <timestamp>2010-06-01 16:04:12 UTC</timestamp>
        <status>OK</status>
    </freenom>
    
Examples in this manual are given in XML for readability.

 

Interacting with Freenom API
Interaction with the API should be trivial. The service is a RESTful-like service that interacts over HTTPS. Of all the HTTP methods available, only GET and POST are used. GET calls retrieve information and do not change anything, while POST calls are meant to change data.

POST calls are idempotent for 30 seconds. This allows a caller to resubmit a transaction having it not being executed twice.

 

Common errors
Each function supported by the API has been documented thoroughly. Some errors can occur for a multiple of functions and are described in this chapter. This information will not be repeated in the related function description.

Function not found
In case an unsupported function is called, the service will reply the following:

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<freenom>
    <error>No function called or function not supported</error>
    <status>error</status>
</freenom>

Not authorized
Most functions can only be executed by authorized users. For these functions authorization must take place. If the user is not authorized to make the call, the content returned will be:

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<freenom>
    <error>No anonymous access, authorization required</error>
    <status>error</status>
</freenom>

Invalid data submitted
If the function itself is supported, but data submitted is invalid or missing an error will be reported. For example:

Input
Request 
curl -X GET "https://api.freenom.com/v2/domain/search.xml\
    ?domainname=------.tk\
    &domaintype=PAID"
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <status>error</status>
        <error>Invalid domainname</error>
    </freenom>
    
The status field will state 'error' when an error occurred. Whenever this field is set to 'error', an element will display the error found.

The service will always reply directly when a first error is found. If there are multiple errors in the function call, only one is returned. This stops the service from doing unnecessary work, as the call will fail in any case.

 

Function parameters
Commonly used parameters
A number of parameters are used in a multiple of functions. Other parameters deserve special attention. Those parameters are explained in this chapter.

domainname

The domain name involved. The domain name should consist of only a-z and 0-9 characters and the - (dash). The dash may not be in the beginning or end of the domain name. Domain names are not case sensitive

forward_url

If the domain is configured for forwarding, the URL to forward traffic for the domain to is given via the forward_url. The forward_url can be any HTTP or HTTPS URL.

nameserver

The nameserver. A nameserver needs to be a hostname that is resolvable if it's a hostname not under the domain name specified.

period

The period of domain registration or renewal. Paid domains are registered in number of years. Supported periods for Paid domains: 1Y, 2Y, 3Y, 4Y, 5Y, 9Y and 10Y. Free domains are registered in number of months. Supported periods for Free domains: 1M - 12M.

idshield

ID Shield is a FREE privacy service that is designed to protect you. Your personal information is not exposed in the WHOIS database, while emails are automatically forwarded - after human interface detection - to the email address we have on file. The two possible values of the parameter: enabled or disabled.

 

Supporting parameters
Supporting parameters are parameters that are not specific to a function call but to the API behavior.

test_mode

When set to 1, the function is discarded after execution. Any changes done to Freenom's database are rolled back.

method

If caller is unable to specify the method of the function by that method, this parameter can help. Setting the method parameter to 'post' will tell the service that a POST method is meant by caller. Same counts for 'get', 'put' and 'delete'.

 

The multiple flag
Function parameters are described in a table for each function. One of the columns in this table is labeled "multiple". This indicates whether or not the parameter can be specified more than once.

An example call would look like this:

curl -X POST https://api.freenom.com/v2/domain/register.xml\
-d “domainname=TEST001.TK\
&nameserver=NS1.TEST001.TK\
&nameserver=NS2.TEST001.TK\
&domaintype=PAID”

 

API functions
 

Ping the service
Input
URL: https://api.freenom.com/v2/service/ping
Method: GET
Input
Description: This function allows the user to check the status of the server. The server will return its latest timestamp.
Parameters: None.

Returned properties
Property	Description
result	PING REPLY
timestamp	YYYY-MM-DD HH24:MI:SS UTC
status	OK
 

Example:

Input
Request 
    curl -X GET https://api.freenom.com/v2/service/ping.xml
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <result>PING REPLY</result>
        <status>OK</status>
        <timestamp>2013-01-07 13:50:26 UTC</timestamp>
    </freenom>
    
 

Search for available domains
Input
URL: https://api.freenom.com/v2/domain/search
Method: GET
Input
Description: This function allows the API user to search a domain for availability.
Parameters
Parameter	Description	Required	Multiple
domainname	The name of the domain	Yes	No
email	E-mail address used for authentication	No	No
password	Password used for authentication	No	No
domaintype	The type of the domain: PAID or FREE	Yes	No
 

Returned properties
Property	Description	Type
result	DOMAIN AVAILABLE or DOMAIN NOT AVAILABLE	Both
domain	One or multiple hashes with result of domain name search	Both
 domainname	The domain name as requested	Both
 domaintype	The domaintype of the searched domain name.	Both
 pricing	Multiple hashes of pricing info for domainname.	Paid
  currency	The currency for given prices	Paid
  period	The registration period for given price.	Paid
  partnerprice	The amount to be paid by the reseller	Paid
  retailprice	The amount to be paid by the enduser. (public price)	Paid
 status	AVAILABLE or NOT AVAILABLE	Both
status	OK	Both
 

Example: Check the availability of domain test001.tk

Input
Request 
    curl -X GET "https://api.freenom.com/v2/domain/search.xml\
    ?domainname=test001.tk\
    &email=john@smith.net\
    &password=68bb651cb1\
    &domaintype=PAID"
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <domain>
            <domainname>TEST001.TK</domainname>
            <domaintype>PAID</domaintype>
            <pricing>
                <currency>EUR</currency>
                <partnerprice>16.91</partnerprice>
                <period>2Y</period>
                <retailprice>19.90</retailprice>
            </pricing>
            <pricing>
                <currency>EUR</currency>
                <partnerprice>21.04</partnerprice>
                <period>3Y</period>
                <retailprice>24.75</retailprice>
            </pricing>
            <pricing>
                <currency>EUR</currency>
                <partnerprice>27.03</partnerprice>
                <period>4Y</period>
                <retailprice>31.80</retailprice>
            </pricing>
            <pricing>
                <currency>EUR</currency>
                <partnerprice>21.25</partnerprice>
                <period>5Y</period>
                <retailprice>25.00</retailprice>
            </pricing>
            <pricing>
                <currency>EUR</currency>
                <partnerprice>53.17</partnerprice>
                <period>9Y</period>
                <retailprice>62.55</retailprice>
            </pricing>
            <pricing>
                <currency>EUR</currency>
                <partnerprice>42.46</partnerprice>
                <period>10Y</period>
                <retailprice>49.95</retailprice>
            </pricing>
            <pricing>
                <currency>EUR</currency>
                <partnerprice>8.46</partnerprice>
                <period>1Y</period>
                <retailprice>9.95</retailprice>
            </pricing>
            <status>AVAILABLE</status>
        </domain>
        <result>DOMAIN AVAILABLE</result>
        <status>OK</status>
    </freenom>
    
Register a domain
Input
URL: https://api.freenom.com/v2/domain/register
Method: POST
Input
Description: Use this function to register a domain.
Parameters
Parameter	Description	Required	Multiple
domainname	The name of the domain	Yes	No
period	The period of registration. If not given it will default to 1Y for paid domains and will default to 3M for free domains	No	No
forward_url	The URL the domain name should forward to	No*	No
forward_mode	The type of forward. Can be cloak or 301_redirect. cloak is default.	No	No
nameserver	Nameserver to use. A minimum of 2 nameservers is required	No*	Yes
owner_id	Contact ID of domain owner	Yes**	No
billing_id	Contact ID of billing contact	No	No
tech_id	Contact ID of technical contact	No	No
admin_id	Contact ID of admin contact	No	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
domaintype	The type of the domain: PAID or FREE	Yes	No
idshield	Identity protection parameter, possible values : enabled or disabled	No**	No
autorenew	Autorenewal setting for this domain. Possible values: enabled or disabled.	No	No

Notes: * forward_url and nameservers are mutual exclusive. Either the forward_url OR nameservers need to be specified. It is not possible to specify both. In case the nameserver is under the same domain, a glue record must be created for this domain. This can be done by registering Nameserver records.

** In case idshield is enabled owner_id doesn't need to be specified.

Returned properties
Property	Description	Type
result	DOMAIN REGISTERED or NOT AVAILABLE	Both
domain	One or multiple hashes with result of domain name registration	Both
 currency	The currency for given prices	Paid
 domainname	The domain name as requested	Both
 domaintype	The domaintype of the checked domainname	Both
 expirationdate	The date the domain will expire in YYYYMMDD	Both
 period	The registration period of the registered domainname	Both
 partnerprice	The amount to be paid by the reseller	Paid
 retailprice	The amount to be paid by the enduser. (public price)	Paid
 owner_id	Contact ID of domain owner	Paid
 tech_id	Contact ID of technical contact	Paid
 billing_id	Contact ID of billing contact	Paid
 admin_id	Contact ID of administrative contact	Paid
 status	REGISTERED or NOT AVAILABLE	Both
 authcode	Generated authorization code	Paid
 autorenew	Autorenewal flag. Either enabled or disabled.	Paid
status	OK	Both
 

Example: Registering a domain for 2 years with nameservers under the domain.

Input
Request 
    curl -X POST https://api.freenom.com/v2/domain/register.xml\
    -d "domainname=test001.tk\
    &period=2Y\
    &nameserver=ns1.test001.tk\
    &nameserver=ns2.test001.tk\
    &owner_id=JSMTH01\
    &email=john@smith.net\
    &password=68bb651cb1\
    &domaintype=PAID
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <domain>
            <domainname>TEST001.TK</domainname>
            <domaintype>PAID</domaintype>
            <period>2Y</period>
            <currency>EUR</currency>
            <retailprice>32.50</retailprice>
            <partnerprice>15.60</partnerprice>
            <expirationdate>20100711</expirationdate>
            <owner_id>JSMTH01</owner_id>
            <billing_id>JSMTH01</billing_id>
            <admin_id>JSMTH01</admin_id>
            <tech_id>JSMTH01</tech_id>
            <authcode>88398480402849880</authcode>
            <autorenew>enabled</autorenew>
            <status>REGISTERED</status>
        </domain>
        <result>DOMAIN REGISTERED</result>
        <status>OK</status>
    </freenom>
    
Renew a domain name registration
Input
URL: https://api.freenom.com/v2/domain/renew
Method: POST
Input
Description: This function must be used to renew a domain registration.
Parameters
Parameter	Description	Required	Multiple
domainname	The name of the domain	Yes	No
period	The period of registration. If not given it will default to 1Y for paid domains and will default to 3M for free domains	No	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
Returned properties
Property	Description	Type
result	DOMAIN RENEWED or NOT AVAILABLE	Paid
domain	One or multiplehashes with result of domain name renewal	Both
 currency	The currency for given prices	Paid
 domainname	The domain name as requested	Both
 domaintype	The domaintype of the checked domainname	Both
 expirationdate	The date the domain will expire in YYYYMMDD	Both
 period	The registration period of the registered domainname	Both
 partnerprice	The amount to be paid by the reseller	Paid
 retailprice	The amount to be paid by the enduser. (public price)	Paid
 owner_id	Contact ID of domain owner	Paid
 tech_id	Contact ID of technical contact	Paid
 billing_id	Contact ID of billing contact	Paid
 admin_id	Contact ID of administrative contact	Paid
 status	RENEWED or NOT AVAILABLE	Both
status	OK	Both
 

Example: Renewal of paid domain TEST001.TK for three years.

Input
Request 
    curl -X POST https://api.freenom.com/v2/domain/renew.xml\
    -d "domainname=test001.tk\
    &period=3Y\
    &email=john@smith.net\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <result>DOMAIN RENEWED</result>
        <domain>
            <domainname>TEST001.TK</domainname>
            <domaintype>PAID</domaintype>
            <period>3Y</period>
            <currency>EUR</currency>
            <retailprice>32.50</retailprice>
            <partnerprice>15.60</partnerprice>
            <expirationdate>20100711</expirationdate>
            <owner_id>JSMTH01</owner_id>
            <billing_id>JSMTH01</billing_id>
            <admin_id>JSMTH01</admin_id>
            <tech_id>JSMTH01</tech_id>
            <status>RENEWED</status>
        </domain>
        <status>OK</status>
    </freenom>
    
Get info on registered domain names
Input
URL: https://api.freenom.com/v2/domain/getinfo
Method: GET
Input
Description: Retrieve information about a domain registered by the requesting user.
Parameters
Parameter	Description	Required	Multiple
domainname	The name of the domain	Yes	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
Returned properties
Property	Description	Type
result	DOMAIN LISTED	Both
domain	One or multiple hashes with result of domain name search	Both
 domainname	The domain name as requested	Both
 domaintype	The domaintype of the checked domainname	Both
 expirationdate	The date the domain will expire in YYYYMMDD	Both
 authcode	The authorization code	Paid
 autorenew	Autorenewal flag. Either enabled or disabled.	Paid
 pricing	Multiple hashes with pricing info for domain name	Paid
  currency	The currency for given prices	Paid
  period	The registration period of the checked domainname	Paid
  partnerprice	The amount to be paid by the reseller	Paid
  retailprice	The amount to be paid by the enduser. (public price)	Paid
 status	ACTIVE or CANCELLED; Status of the domain	Both
 forward_url	The URL the domain name should forward to	Both
 forward_mode	The type of forward. Can be cloak or 301_redirect. cloak is default.	Both
 nameserver	Zero or multiple hashes with nameserver info	Both
  hostname	Hostname of nameserver	Both
  ipaddress	IP address of nameserver if glue present	Both
 owner_contact	Hash containing contact data of owner	Paid
  contact_id	Contact ID of owner contact	Paid
  contact_title	Title of contact; Mr, Mrs, etc.	Paid
  contact_firstname	Firstname of contact	Paid
  contact_middlename	Middle name of owner contact	Paid
  contact_lastname	Lastname of owner contact	Paid
  contact_organization	Organization name of owner (if any)	Paid
  contact_address	Address of owner contact	Paid
  contact_city	City of owner contact	Paid
  contact_zipcode	Zipcode of owner contact	Paid
  contact_statecode	Statecode (ISO 3166-2) of owner contact	Paid
  contact_countrycode	Countrycode (ISO 3166-1) of owner contact	Paid
  contact_phone	Phone number of owner contact	Paid
  contact_fax	Fax number of owner contact	Paid
  contact_email	Email address of owner contact	Paid
 admin_contact	Hash containing contact data of admin	Paid
  contact_id	Contact ID of admin contact	Paid
  contact_title	Title of contact; Mr, Mrs, etc.	Paid
  contact_firstname	Firstname of admin contact	Paid
  contact_middlename	Middle name of admin contact	Paid
  contact_lastname	Last name of admin contact	Paid
  contact_organization	Organization name of admin (if any)	Paid
  contact_address	Address of admin contact	Paid
  contact_city	City of admin contact	Paid
  contact_zipcode	Zipcode of admin contact	Paid
  contact_statecode	Statecode (ISO 3166-2) of admin contact	Paid
  contact_countrycode	Countrycode (ISO 3166-1) of admin contact	Paid
  contact_phone	Phone number of admin contact	Paid
  contact_fax	Fax number of admin contact	Paid
  contact_email	Email address of admin contact	Paid
 tech_contact	Contact ID of tech contact	Paid
  contact_id	Contact ID of tech contact	Paid
  contact_title	Title of contact; Mr, Mrs, etc.	Paid
  contact_firstname	Firstname of tech contact	Paid
  contact_middlename	Middlename of tech contact	Paid
  contact_lastname	Lastname of tech contact	Paid
  contact_organization	Organization name of tech (if any)	Paid
  contact_address	Address of tech contact	Paid
  contact_city	City of tech contact	Paid
  contact_zipcode	Zipcode of tech contact	Paid
  contact_statecode	Statecode (ISO 3166-2) of tech contact	Paid
  contact_countrycode	Countrycode (ISO 3166-1) of tech contact	Paid
  contact_phone	Phone number of tech contact	Paid
  contact_fax	Fax number of tech contact	Paid
  contact_email	Email address of tech contact	Paid
 billing_contact	Hash containing contact data of billing contact	Paid
  contact_id	Contact ID of billing contact	Paid
  contact_title	Title of contact; Mr, Mrs, etc.	Paid
  contact_firstname	Firstname of billing contact	Paid
  contact_middlename	Middlename of billing contact	Paid
  contact_lastname	Lastname of billing contact	Paid
  contact_organization	Organization name of billing (if any)	Paid
  contact_address	Address of billing contact	Paid
  contact_city	City of billing contact	Paid
  contact_zipcode	Zipcode of billing contact	Paid
  contact_statecode	Statecode (ISO 3166-2) of billing contact	Paid
  contact_countrycode	Countrycode (ISO 3166-1) of billing contact	Paid
  contact_phone	Phone number of billing contact	Paid
  contact_fax	Fax number of billing contact	Paid
  contact_email	Email address of billing contact	Paid
status	OK	Both
 

Example: Customer retrieves info on domain TEST002.TK.

Input
Request 
    curl -X GET "https://api.freenom.com/v2/domain/getinfo.xml\
    ?domainname=test002.tk\
    &email=john@smith.net\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <domain>
            <status>ACTIVE</status>
            <domaintype>PAID</domaintype>
            <domainname>TEST002.TK</domainname>
            <expirationdate>20150101</expirationdate>
            <autorenew>enabled</autorenew>
            <nameserver>
                <hostname>NS1.EXAMPLE.COM</hostname>
            </nameserver>
            <nameserver>
                <hostname>NS2.EXAMPLE.COM</hostname>
            </nameserver>
            <pricing>
                <currency>YTL</currency>
                <period>1Y</period>
                <partnerprice>8.75</partnerprice>
                <retailprice>12.50</retailprice>
            </pricing>
            <pricing>
                <currency>YTL</currency>
                <period>2Y</period>
                <partnerprice>17.50</partnerprice>
                <retailprice>25.00</retailprice>
            </pricing>
            <pricing>
                <currency>YTL</currency>
                <period>3Y</period>
                <partnerprice>22.75</partnerprice>
                <retailprice>32.50</retailprice>
            </pricing>
            <pricing>
                <currency>YTL</currency>
                <period>4Y</period>
                <partnerprice>28.00</partnerprice>
                <retailprice>40.00</retailprice>
            </pricing>
            <pricing>
                <currency>YTL</currency>
                <period>5Y</period>
                <partnerprice>33.25</partnerprice>
                <retailprice>47.50</retailprice>
            </pricing>
            <pricing>
                <currency>YTL</currency>
                <period>9Y</period>
                <partnerprice>52.50</partnerprice>
                <retailprice>75.00</retailprice>
            </pricing>
            <pricing>
                <currency>YTL</currency>
                <period>10Y</period>
                <partnerprice>55.00</partnerprice>
                <retailprice>80.00</retailprice>
            </pricing>
            <owner_contact>
                <contact_id>8837012</contact_id>
                <contact_title>Mr.</contact_title>
                <contact_firstname>John</contact_firstname>
                <contact_lastname>Smith</contact_lastname>
                <contact_organization>A-Team</contact_organization>
                <contact_address>Main Road 1</contact_address>
                <contact_city>Los Angeles</contact_city>
                <contact_zipcode>90001</contact_zipcode>
                <contact_statecode>US-CA</contact_statecode>
                <contact_countrycode>US</contact_countrycode>
                <contact_phone>+1-310-123456</contact_phone>
                <contact_email>hannibal@a-team.tk</contact_email>
            </owner_contact>
            <admin_contact>
                <contact_id>8311112</contact_id>
                <contact_title>Mr.</contact_title>
                <contact_firstname>H.</contact_firstname>
                <contact_lastname>Murdock</contact_lastname>
                <contact_organization>A-Team</contact_organization>
                <contact_address>Main Road 1</contact_address>
                <contact_city>Los Angeles</contact_city>
                <contact_zipcode>90001</contact_zipcode>
                <contact_statecode>US-CA</contact_statecode>
                <contact_countrycode>US</contact_countrycode>
                <contact_phone>+1-310-123458</contact_phone>
                <contact_fax></contact_fax>
                <contact_email>murdock@a-team.tk<contact_email>
            </admin_contact>
            <tech_contact>
                <contact_id>8112992</contact_id>
                <contact_title>Mr.</contact_title>
                <contact_firstname>Bosco</contact_firstname>
                <contact_middlename>Albert</contact_middlename>
                <contact_lastname>Baracus</contact_lastname>
                <contact_organization>A-Team</contact_organization>
                <contact_address>Main Road 1</contact_address>
                <contact_city>Los Angeles</contact_city>
                <contact_zipcode>90001</contact_zipcode>
                <contact_statecode>US-CA</contact_statecode>
                <contact_countrycode>US</contact_countrycode>
                <contact_phone>+1-310-123457</contact_phone>
                <contact_fax></contact_fax>
                <contact_email>ba@a-team.tk</contact_email>
            </tech_contact>
            <billing_contact>
                <contact_id>7837012</contact_id>
                <contact_title>Mr.</contact_title>
                <contact_firstname>Templeton</contact_firstname>
                <contact_lastname>Peck</contact_lastname>
                <contact_organization>A-Team</contact_organization>
                <contact_address>Main Road 1</contact_address>
                <contact_city>Los Angeles</contact_city>
                <contact_zipcode>90001</contact_zipcode>
                <contact_statecode>US-CA</contact_statecode>
                <contact_countrycode>US</contact_countrycode>
                <contact_phone>+1-310-123451</contact_phone>
                <contact_fax></contact_fax>
                <contact_email>face@a-team.tk</contact_email>
            </billing_contact>
        </domain>
        <result>DOMAIN LISTED</result>
        <status>OK</status>
    </freenom>
    
Modifying a domain
Input
URL: https://api.freenom.com/v2/domain/modify
Method: PUT
Input
Description: If a domain's DNS settings or URL forwarding is to be updated, this function will offer functionality for that.
Parameters
Parameter	Description	Required	Multiple
domainname	The name of the domain	Yes	No
forward_url	The URL the domain name should forward to	No*	No
forward_mode	The type of forward. Can be cloak or 301_redirect. cloak is default.	No	No
nameserver	Nameserver to use. Minimally 2 are needed	No*	Yes
owner_id	Contact ID of domain owner	No	No
admin_id	Contact ID of administrative contact	No	No
tech_id	Contact ID of technical contact	No	No
billing_id	Contact ID of billing contact	No	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
idshield	Identity protection parameter, possible values : enabled or disabled	No	No
autorenew	Autorenewal setting for this domain. Possible values: enabled or disabled.	No	No
 

Notes: * forward_url and nameservers are mutual exclusive. Either the forward_url OR nameservers need to be specified. It is not possible to specify both. In case the nameserver is under the same domain, a glue record must be created for this domain. This can be done by registering Nameserver records.

 

Returned properties
Property	Description	Type
domain	One or multiple hashes with result of domain name modification	All
 domainname	The requested domain name	All
 status	MODIFIED	All
result	DOMAIN MODIFIED	All
status	OK	All
 

Example: Modify domain TEST002.TK, having it forward to http://www.freedomregistry.com/

Input
Request 
    curl -X PUT https://api.freenom.com/v2/domain/modify.xml\
    -d "domainname=test002.tk\
    &forward_url=http%3A%2F%2Fwww.freedomregistry.com%2F\
    &email=john@smith.net\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <domain>
            <domainname>TEST002.TK</domainname>
            <status>MODIFIED</status>
        </domain>
        <status>OK</status>
        <result>DOMAIN MODIFIED</result>
    </freenom>
    
Deleting a domain
Input
URL: https://api.freenom.com/v2/domain/delete
Method: DELETE
Input
Description: This function will delete the domain from the account. The domain name will immediately be available to other registrants once it has been cancelled.
Parameters
Parameter	Description	Required	Multiple
domainname	The name of the domain	Yes	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
domain	One or multiple hashes with result of domain deletion	All
 domainname	Domain name that was deleted	All
 status	DELETED	All
 result	DOMAIN DELETED	All
status	OK	All
 

Example: Delete TEST002.TK

Input
Request 
    curl -X DELETE https://api.freenom.com/v2/domain/delete.xml\
    -d "domainname=test002.tk\
    &email=john@smith.net\
    &password=68bb651cb1\
    "
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <domain>
            <domainname>TEST002.TK</domainname>
            <status>DELETED</status>
        </domain>
        <result>DOMAIN DELETED</result>
        <status>OK</status>
    </freenom>
    
Restore a domain
Input
URL: https://api.freenom.com/v2/domain/restore
Method: POST
Input
Description: This function will restore a domain to the account if possible
Parameters
Parameter	Description	Required	Multiple
domainname	The name of the domain	Yes	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
domain	One or multiple hashes with result of domain restore	All
 domainname	Domain name that was restored	All
 result	DOMAIN RESTORED	All
 status	RESTORED	All
status	OK	All
 

Example:

Input
Request 
    curl -X POST https://api.freenom.com/v2/domain/restore.xml\
    -d "domainname=test002.tk\
    &email=john@smith.net\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <domain>
            <domainname>TEST002.TK</domainname>
            <result>RESTORED</result>
        </domain>
        <result>DOMAIN RESTORED</result>
        <status>OK</status>
    </freenom>
    
Upgrade a domain
Input
URL: https://api.freenom.com/v2/domain/upgrade
Method: POST
Input
Description: Upgrade a free domain to paid domain
Parameters
Parameter	Description	Required	Multiple
domainname	The name of the domain	Yes	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
owner_id	Contact ID of owner contact	No**	No
billing_id	Contact ID of billing contact	No	No
admin_id	Contact ID of admin contact	No	No
tech_id	Contact ID of technical contact	No	No
idshield	Identity protection parameter, possible values : enabled or disabled	No**	No
period	Number of years to add to domain expiration, after the domain has been upgraded.	Yes	Yes
Notes: ** In case idshield is enabled owner_id doesn't need to be specified.

Returned properties
Property	Description	Type
domain	One or multiple hashes with result of domain upgrade	All
 domainname	Domain name that was upgraded	All
 result	DOMAIN UPGRADED	All
 status	UPGRADED	All
status	OK	All
 

Example: Upgrade a free domain to paid domain

Input
Request 
    curl -X POST https://api.freenom.com/v2/domain/upgrade.xml\
    -d "domainname=test002.tk\
    &email=john@smith.net\
    &password=68bb651cb1\
    &owner_id=SMTH23\
    &idshield=disabled
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <domain>
            <domainname>TEST002.TK</domainname>
            <result>UPGRADED</result>
        </domain>
        <result>DOMAIN UPGRADED</result>
        <status>OK</status>
    </freenom>
    
List domains in account
Input
URL: https://api.freenom.com/v2/domain/list
Method: GET
Input
Description: Lists all domains under the account
Parameters
Parameter	Description	Required	Multiple
pagenr	Page number of results. Defaults to 1	No	No
results_per_page	Number of results per page. Defaults to 25	No	No
email	E-mail address used for authentication	No	No
password	Password used for authentication	No	No
 

Returned properties
Property	Description	Type
domain	One or multiple hashes with result of domain deletion	Both
 domainname	The name of the domain	Both
 domaintype	Type of the domain	Both
 registrationdate	The date the domain was registered in YYYYMMDD	Both
 expirationdate	The date the domain will expire in YYYYMMDD	Both
 status	ACTIVE or CANCELLED; Status of the domain	Both
 authcode	The authorization code	Paid
 autorenew	Autorenewal flag. Either enabled or disabled.	Paid
result	DOMAINS FOUND	Both
 

Example:

Input
Request 
    curl -X GET "https://api.freenom.com/v2/domain/list.xml\
    ?email=john@smith.net\
    &password=68bb651cb1\
    "	
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <domain>
            <domainname>TEST001.TK</domainname>
            <domaintype>FREE</domaintype>
            <registrationdate>2013-03-11</expirationdate>
                <expirationdate>2014-03-11</expirationdate>
                <status>ACTIVE</status>
        </domain>
        <domain>
            <domainname>TEST003.COM</domainname>
            <domaintype>PAID</domaintype>
            <registrationdate>2013-01-11</expirationdate>
                <expirationdate>2014-01-11</expirationdate>
                <authcode>88djjkJLl1</authcode>
                <autorenew>enabled</autorenew>
                <status>ACTIVE</status>
        </domain>
        <result>2 DOMAINS FOUND</result>
    </freenom>
    
Register or modify a nameserver glue record
Input
URL: https://api.freenom.com/v2/nameserver/register
Method: PUT
Input
Description: When the domain's DNS is managed by custom nameservers and the nameservers are under the domain, nameserver glue records are required to get the domain working. Nameserver glue records can be registered using this function.
Parameters
Parameter	Description	Required	Multiple
domainname	Domain name of glue record	Yes	No
hostname	Domain name of glue record	Yes	No
ipaddress	Value of DNS record	Yes	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
result	NAMESERVER REGISTERED or NAMESERVER UPDATED	All
nameserver	One or multiple hashes with result of nameserver registration	All
 domainname	Domain name of zone to add DNS record	All
 hostname	The hostname of the glue record	All
 ipaddress	The IP address of the glue record	All
 status	REGISTERED or UPDATED	All
status	OK	All
 

Example: Register a nameserver glue for TEST002.TK

Input
Request 
    curl -X PUT https://api.freenom.com/v2/nameserver/register.xml\
    -d "domainname=test002.tk\
    &hostname=ns1.test002.tk\
    &ipaddress=192.168.1.2\
    &email=john@smith.net\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <nameserver>
            <domainname>TEST002.TK</domainname>
            <hostname>NS1.TEST002.TK</hostname>
            <ipaddress>192.168.1.2</ipaddress>
            <status>REGISTERED</status>
        </nameserver>
        <result>NAMESERVER REGISTERED</result>
        <status>OK</status>
    </freenom>
    
Deleting a nameserver glue record
Input
URL: https://api.freenom.com/v2/nameserver/delete
Method: DELETE
Input
Description: Nameserver glue records registered via the nameserver/register method can be deleted via this function. nameservers are under the domain, nameserver glue records are required to get the domain working. Nameserver glue records can be registered using this function.
Parameters
Parameter	Description	Required	Multiple
domainname	Domain name of glue record	Yes	No
hostname	The hostname to delete	Yes	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
result	NAMESERVER DELETED	All
nameserver	One or multiple hashes with result of nameserver delete	All
 domainname	Domain name of zone	All
 hostname	The nameserver that was deleted	All
 status	DELETED	All
status	OK	All
 

Example: Register a nameserver glue for TEST002.TK

Input
Request 
    curl -X DELETE https://api.freenom.com/v2/nameserver/delete.xml\
    -d "domainname=test002.tk\
    &hostname=ns1.test002.tk\
    &email=john@smith.net\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <nameserver>
            <domainname>TEST002.TK</domainname>
            <hostname>NS1.TEST002.TK</hostname>
            <status>DELETED</status>
        </nameserver>
        <result>NAMESERVER DELETED</result>
        <status>OK</status>
    </freenom>
    
Listing nameserver glue records under a domain
Input
URL: https://api.freenom.com/v2/nameserver/list
Method: GET
Input
Description: This function is used to retrieve a list of nameserver glue records registered under a domain name.
Parameters
Parameter	Description	Required	Multiple
domainname	The domain name to list nameserver glue for	Yes	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
result	ENTRIES - number of entries found	All
nameserver	Name for DNS record	All
 domainname	The requested domain name	All
 hostname	Value for DNS record	All
 ipaddress	IP addres linked to the nameserver host	All
status	OK	All
 

Example: Requesting the DNS names registered under TEST002.TK

Input
Request 
    curl -X GET "https://api.freenom.com/v2/nameserver/list.xml\
    ?domainname=test002.tk\
    &email=john@smith.net\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <result>2 ENTRIES</status>
            <nameserver>
                <hostname>NS2.TEST002.TK</hostname>
                <ipaddress>50.1.2.3</ipaddress>
                <domainname>TEST002.TK</domainname>
            </nameserver>
            <nameserver>
                <hostname>NS1.TEST002.TK</hostname>
                <ipaddress>192.168.1.2</ipaddress>
                <domainname>TEST002.TK</domainname>
            </nameserver>
            <status>OK</status>
    </freenom>
    
 

Functions related to contact management
 

Create or Modify contact
Input
URL: https://api.freenom.com/v2/contact/register
Method: PUT
Input
Description: Creating a new contact can be done with this function. The contact is not linked to any domain after being created; this needs to be done by new domain registration or modification.
Parameters
Parameter	Description	Required	Multiple
contact_organization	Organization name of contact	No	No
contact_title	Title of the contact	No	No
contact_firstname	First name of contact	Yes	No
contact_middlename	Middle name of contact	No	No
contact_lastname	Last name of contact	Yes	No
contact_address	Address of the contact	Yes	No
contact_city	City of the contact	Yes	No
contact_zipcode	Zipcode of the contact	Yes	No
contact_statecode	ISO-3166 code for state	Yes	No
contact_countrycode	ISO-3166 code for country	Yes	No
contact_phone	Phone number of contact (international format)	Yes	No
contact_fax	Fax number of contact (international format)	No	No
contact_email	Email address of contact	Yes	No
contact_id	ID of existing contact	No	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
result	CONTACT REGISTERED / CONTACT UPDATED	Paid
contact	One or multiple hashes with contacts affected	Paid
 contact_id	ID of the registered or updated contact	Paid
 status	REGISTERED / UPDATED	Paid
status	OK	Paid
 

Example: Register Contact

Input
Request 
    curl -X PUT https://api.freenom.com/v2/contact/register.xml\
    -d "contact_firstname=John\
    &contact_lastname=Smith\
    &contact_organization=A-Team\
    &contact_address=Main Road 1\
    &contact_city=Los Angeles\
    &contact_zipcode=90001\
    &contact_statecode=US-CA\
    &contact_countrycode=US\
    &contact_phone=+1-310-123456\
    &contact_email=hannibal@a-team.tk\
    &email=john@smith.net\
    &password=68bb651cb1\
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <contact>
            <contact_id>8837012</contact_id>
            <status>REGISTERED</status>
        </contact>
        <result>CONTACT REGISTERED</result>
        <status>OK</status>
    </freenom>
    
 

Delete contact
Input
URL: https://api.freenom.com/v2/contact/delete
Method: DELETE
Input
Description: Deleting a new contact can be done with this function. Contacts can only be deleted if they are not linked to any domain.
Parameters
Parameter	Description	Required	Multiple
contact_id	ID of contact	Yes	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
result	CONTACT DELETED	Paid
contact	One or multiple hashes with contacts affected	Paid
 contact_id	ID of the deleted	Paid
 status	DELETED	Paid
status	OK	Paid
 

Example: Delete Contact

Input
Request 
    curl -X DELETE https://api.freenom.com/v2/contact/delete.xml\
    -d "contact_id=8837012\
    &email=john@smith.net\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <contact>
            <contact_id>8837012</contact_id>
            <status>DELETED</status>
        </contact>
        <result>CONTACT DELETED</status>
            <status>OK</status>
    </freenom>
    
 

Get info on specific contacts
Input
URL: https://api.freenom.com/v2/contact/getinfo
Method: GET
Input
Description: List details of contacts under user account.
Parameters
Parameter	Description	Required	Multiple
contact_id	One or more contact id to get info on	Yes	Yes
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
result	CONTACTS LISTED	Paid
contact	Array of one or multiple contacts	Paid
 contact_id	ID of contact	Paid
 contact_title	Title of the contact	Paid
 contact_firstname	First name of contact	Paid
 contact_middlename	Middle name of contact	Paid
 contact_lastname	Last name of contact	Paid
 contact_organization	Organization name of contact	Paid
 contact_address	Address of the contact	Paid
 contact_city	City of the contact	Paid
 contact_zipcode	Zipcode of the contact	Paid
 contact_statecode	Country of contact	Paid
 contact_countrycode	State of contact	Paid
 contact_phone	Phone number of contact (international format)	Paid
 contact_fax	Fax number of contact (international format)	Paid
 contact_email	Email address of contact	Paid
 contact_domain	Array of one or multiple domains contact is linked to	Paid
  domainname	Name of domain contact is linked to	Paid
  type	Contact type (owner, tech, admin or billing)	Paid
status	OK	Paid
 

Example: Get info on one contact_id

Input
Request 
    curl -X GET "https://api.freenom.com/v2/contact/list.xml\
    ?email=john@smith.net\
    &password=68bb651cb1\
    &contact_id=8837012\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <result>CONTACTS LISTED</result>
        <contact>
            <contact_id>8837012</contact_id>
            <contact_title>Mr.</contact_title>
            <contact_firstname>John</contact_firstname>
            <contact_lastname>Smith</contact_lastname>
            <contact_organization>A-Team</contact_organization>
            <contact_address>Main Road 1</contact_address>
            <contact_city>Los Angeles</contact_city>
            <contact_zipcode>90001</contact_zipcode>
            <contact_statecode>US-CA</contact_statecode>
            <contact_countrycode>US</contact_countrycode>
            <contact_phone>+1-310-123456</contact_phone>
            <contact_fax></contact_fax>
            <contact_email>hannibal@a-team.tk</contact_email>
            <contact_domain>
                <domainname>a-team.tk</domainname>
                <type>owner</type>
            </contact_domain>
        </contact>
        <status>OK</status>
    </freenom>
    
 

List contacts under account
Input
URL: https://api.freenom.com/v2/contact/list
Method: GET
Input
Description: List all contacts under users account.
Parameters
Parameter	Description	Required	Multiple
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
result	CONTACTS LISTED	Paid
contact	Array of one or multiple contacts	Paid
 contact_id	ID of contact	Paid
 contact_title	Title of the contact	Paid
 contact_firstname	First name of contact	Paid
 contact_middlename	Middle name of contact	Paid
 contact_lastname	Last name of contact	Paid
 contact_organization	Organization name of contact	Paid
 contact_address	Address of the contact	Paid
 contact_city	City of the contact	Paid
 contact_zipcode	Zipcode of the contact	Paid
 contact_statecode	Country of contact	Paid
 contact_countrycode	State of contact	Paid
 contact_phone	Phone number of contact (international format)	Paid
 contact_fax	Fax number of contact (international format)	Paid
 contact_email	Email address of contact	Paid
 contact_domain	Array of one or multiple domains contact is linked to	Paid
  domainname	Name of domain contact is linked to	Paid
  type	Contact type (owner, tech, admin or billing)	Paid
status	OK	Paid
 

Example: List Contacts.

Input
Request 
    curl -X GET "https://api.freenom.com/v2/contact/list.xml\
    ?email=john@smith.net\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <result>CONTACTS LISTED</result>
        <contact>
            <contact_id>8837012</contact_id>
            <contact_title>Mr.</contact_title>
            <contact_firstname>John</contact_firstname>
            <contact_lastname>Smith</contact_lastname>
            <contact_organization>A-Team</contact_organization>
            <contact_address>Main Road 1</contact_address>
            <contact_city>Los Angeles</contact_city>
            <contact_zipcode>90001</contact_zipcode>
            <contact_statecode>US-CA</contact_statecode>
            <contact_countrycode>US</contact_countrycode>
            <contact_phone>+1-310-123456</contact_phone>
            <contact_fax></contact_fax>
            <contact_email>hannibal@a-team.tk</contact_email>
            <contact_domain>
                <domainname>a-team.tk</domainname>
                <type>owner</type>
            </contact_domain>
        </contact>
        <status>OK</status>
    </freenom>
    
 

Functions related to domain transfers
 

Get price of a domain transfer
Input
URL: https://api.freenom.com/v2/domain/transfer/price
Method: GET
Input
Description: Transfers are made by gaining partners that use an obtained authorization code from the registrant or the losing partner. All transfers are subject to a one year renewal. Before a transfer is made the gaining partner may request the retail price and partner price of the transfer (and therefore the one year renewal). This API call only provides prices and does not perform the actual transfer.
Parameters
Parameter	Description	Required	Multiple
domainname	The domainname	Yes	No
authcode	The authorization code	Yes	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
transfer	Array of one or multiple transfers	Paid
 domainname	Domain name updated	Paid
 domaintype	Type of the domain	Paid
 period	Length of renewal after transfer; always 1Y	Paid
 currency	The currency for given prices	Paid
 retailprice	Price for registrant	Paid
 partnerprice	Price for partner	Paid
result	PRICES PROVIDED	Paid
status	OK	Paid
 

Example: Request transferprice for TEST002.TK

Input
Request 
    curl -X GET https://api.freenom.com/v2/domain/transfer/price.xml?\
    domainname=test002.tk\
    &authcode=7738977ABCDF889001\
    &email=john@smith.net\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <transfer>
            <domainname>TEST002.TK</domainname>
            <currency>EUR</currency>
            <period>1Y</period>
            <retailprice>12.50</retailprice>
            <partnerprice>1.00</partnerprice>
            <status>OK</status>
            <domaintype>PAID</domaintype>
        </transfer>
        <result>PRICES PROVIDED</result>
    </freenom>
    
 

Request a domain transfer
Input
URL: https://api.freenom.com/v2/domain/transfer/request
Method: POST
Input
Description: Transfer requests are performed by resellers that wish to transfer domain names from other resellers or registrars to their own account.
Please note: A domain transfer for a .TK, .ML, .CF, .GA or .GQ domain will be directly approved if the request has the correct authorization code.
Parameters
Parameter	Description	Required	Multiple
domainname	The name of the domain	Yes	No
authcode	The authorization code	Yes	No
period	Number of years to renew the domain. Defaults to 1Y	Yes	No
owner_id	contact_id of new owner	Yes	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
result	TRANSFER REQUESTED	Paid
transfer	Array of one or more transfers	Paid
 domainname	Domain name updated	Paid
 status	REQUESTED	Paid
status	OK	Paid
 

Example: Transfer domain TEST002.TK to our account

Input
Request 
    curl -X POST https://api.freenom.com/v2/domain/transfer/request.xml\
    -d "domainname=test002.tk\
    &authcode=7738977ABCDF889001\
    &period=1Y\
    &email=john@smith.net\
    &owner_id=JSMITH001\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <transfer>
            <domainname>TEST002.TK</domainname>
            <status>REQUESTED</status>
        </transfer>
        <result>TRANSFER REQUESTED</result>
        <status>OK</status>
    </freenom>
    
 

Approve a domain transfer
Input
URL: https://api.freenom.com/v2/domain/transfer/approve
Method: POST
Input
Description: Approve an outgoing domain transfer.
Parameters
Parameter	Description	Required	Multiple
domainname	The domainname	Yes	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
result	TRANSFER APPROVED	Paid
transfer	Array of one or more transfers	Paid
 domainname	Domain name updated	Paid
 status	APPROVED	Paid
status	OK	Paid
 

Example: Approce transfer of domainTEST002.TK from our account.

Input
Request 
    curl -X POST https://api.freenom.com/v2/domain/transfer/approve.xml\
    -d "domainname=test002.tk\
    &email=john@smith.net\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <transfer>
            <domainname>TEST002.TK</domainname>
            <status>APPROVED</status>
        </transfer>
        <result>TRANSFER APPROVED</result>
        <status>OK</status>
    </freenom>
    
 

Decline a domain transfer
Input
URL: https://api.freenom.com/v2/domain/transfer/decline
Method: POST
Input
Description: Decline an outgoing domain transfer.
Parameters
Parameter	Description	Required	Multiple
domainname	The domain name	Yes	No
reason	Reason of declining the transfer	Yes	No
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
result	TRANSFER DECLINED	Paid
transfer	Array of one or more transfers	Paid
 domainname	Domain name updated	Paid
 status	DECLINED	Paid
status	OK	Paid
 

Example: Decline a domain transfer of TEST002.TK from our account.

Input
Request 
    curl -X POST https://api.freenom.com/v2/domain/transfer/decline.xml\
    -d "domainname=test002.tk\
    &reason=no_payment\
    &email=john@smith.net\
    &password=68bb651cb1\
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <transfer>
            <domainname>TEST002.TK</domainname>
            <status>DECLINED</status>
        </transfer>
        <result>TRANSFER DECLINED</result>
        <status>OK</status>
    </freenom>
    
 

List current domain transfers
Input
URL: https://api.freenom.com/v2/domain/transfer/list
Method: GET
Input
Description: Retrieve a list of domain transfers. Domain transfers that are in final status approved or declined will be listed for a week after the transfer update.
Parameters
Parameter	Description	Required	Multiple
email	E-mail address used for authentication	Yes	No
password	Password used for authentication	Yes	No
 

Returned properties
Property	Description	Type
result	TRANSFERS LISTED	Paid
transfer	Zero, one or multiple entries containing information about the domain transfer	Paid
 domainname	The name of the domain	Paid
 transfertype	Incoming or outgoing	Paid
 status	Status of the transfer. PENDING, APPROVED, DECLINED	Paid
 newregistrar	In case of outgoing transfer, name of new registrar	Paid
 lastupdate	Date of last update	Paid
 

Example: Retrieve a list of domain transfers

Input
Request 
    curl -X POST https://api.freenom.com/v2/domain/transfer/list.xml\
    -d "email=john@smith.net\
    &password=68bb651cb1\
    "
    
Output
Response 
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <freenom>
        <transfer>
            <domainname>TEST002.TK</domainname>
            <transfertype>INCOMING</transfertype>
            <status>PENDING</status>
            <lastupdate>2013-02-14 13:03:11</lastupdate>
        </transfer>
        <transfer>
            <domainname>TEST0009.TK</domainname>
            <transfertype>OUTGOING</transfertype>
            <newregistrar>Freenom Inc.</newregistrar>
            <status>APPROVED</status>
            <lastupdate>2013-02-16 09:00:34</lastupdate>
        </transfer>
        <result>2 TRANSFERS LISTED</result>
        <status>OK</status>
    </freenom>
    
Services
My Subscriptions
My Domains
Register a New Domain
Renew Domains
Transfer Domains
Free and paid domains
Domain price chart
WHOIS
Partners
Resellers
IP Agencies
Developers
Anti-abuse API
Freenom API
About Freenom
Company
Terms and Conditions
Press
Jobs
Contact
Support
Knowledgebase
Downloads
Report abuse
Contact
Freenom
Amsterdam-Netherlands
Tel. +31 20 531 57 26
Fax +31 20 531 57 21
All rights reserved - © 2017 Freenom - Netherlands