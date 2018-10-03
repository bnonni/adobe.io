# Adobe Target API: How To Make an API Call Using CURL

## [Adobe Online Instructions](https://www.adobe.io/authentication/auth-methods.html#!adobeio/adobeio-documentation/master/auth/JWTAuthenticationQuickStart.md)

### Step-by-Step Instructions

#### Step 1. Generate [certificate_pub.crt](certificate_pub.crt) & [private.key](private.key) using the following terminal command

```bash
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt
```

#### Step 2. Create an integration in the adobe admin console and upload the [certificate_pub.crt](certificate_pub.crt) in the "public keys certificates" section

#### Step 3. Navigate to the JWT tab and paste the entirety of the [private.key](private.key) file in the field at the bottom and click "Generate JWT."

```key
-----BEGIN PRIVATE KEY-----
exampleexampleexampleexampleexampleexampleexampleexampleexample1
exampleexampleexampleexampleexampleexampleexampleexampleexample2
exampleexampleexampleexampleexampleexampleexampleexampleexample3
exampleexampleexampleexampleexampleexampleexampleexampleexample4
exampleexampleexampleexampleexampleexampleexampleexampleexample5
exampleexampleexampleexampleexampleexampleexampleexampleexample6
exampleexampleexampleexampleexampleexampleexampleexampleexample7
exampleexampleexampleexampleexampleexampleexampleexampleexample8
exampleexampleexampleexampleexampleexampleexampleexampleexample9
exampleexampleexampleexampleexampleexampleexampleexampleexampl10
exampleexampleexampleexampleexampleexampleexampleexampleexampl11
exampleexampleexampleexampleexampleexampleexampleexampleexampl12
exampleexampleexampleexampleexampleexampleexampleexampleexampl13
exampleexampleexampleexampleexampleexampleexampleexampleexampl14
exampleexampleexampleexampleexampleexampleexampleexampleexampl15
exampleexampleexampleexampleexampleexampleexampleexampleexampl16
exampleexampleexampleexampleexampleexampleexampleexampleexampl17
exampleexampleexampleexampleexampleexampleexampleexampleexampl18
exampleexampleexampleexampleexampleexampleexampleexampleexampl19
exampleexampleexampleexampleexampleexampleexampleexampleexampl20
exampleexampleexampleexampleexampleexampleexampleexampleexampl21
exampleexampleexampleexampleexampleexampleexampleexampleexampl22
exampleexampleexampleexampleexampleexampleexampleexampleexampl23
exampleexampleexampleexampleexampleexampleexampleexampleexampe24
exampleexampleexampleexampleexampleexampleexampleexampleexampl25
exexexexexexexexexexexe=
-----END PRIVATE KEY-----
```

#### Step 4. Copy the Curl command that is generated, which should look like [JWT-Post.curl](JWT-Post.curl), and run it in the terminal

##### JWT Token should be included when the curl command is generated

```curl
curl -X POST
-H "Cache-Control: no-cache"
-H "Content-Type: multipart/form-data"
-F "client_id=<Your Client ID>"
-F "client_secret=<Your Client Secret>"
-F "jwt_token=<Your JWT Token>" "https://ims-na1.adobelogin.com/ims/exchange/jwt/"
```

#### Step 5. Take the "Bearer token" [bearer-access-token.json](bearer-access-token.json) and input into 'authorization: ' field in [report-api-call.curl](report-api-call.curl)

```curl
curl -X GET \
https://mc.adobe.io/client-name/target/activities/ab/132556/report/performance \
-H 'authorization: Bearer <!--PUT BEARER TOKEN HERE-->' \
-H 'cache-control: no-cache' \
-H 'content-type: application/vnd.adobe.target.v1+json' \
-H 'x-api-key: asdfjnkfjg4564323l4k6j2346kj3246'
```

#### Step 6. Paste the API Key (Client ID) from the Overview tab of the adobe.io integration console into the 'x-api-key: ' field in [report-api-call.curl](report-api-call.curl)

```curl
curl -X GET \
https://mc.adobe.io/client-name/target/activities/ab/132556/report/performance \
-H 'authorization: Bearer eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJpZCI6IjE1Mzg1ODA0MDk3MDdfYTQ5NjI2MmUtOWU1MC00MTY4LWJhODYtOWYxYTY5YjA1OWNlX3VlMSIsImNsaWVudF9pZCI6ImY3MTM3MDNkYzYwMDQzNzU4MDBhMDhkMDY2Zjc0NmYyIiwidXNlcl9pZCI6IkVFNzQzNjY0NUJCNVS609873259682345908NV203498YNV293486MzNWViMjgtZjBkNi00NTRiLWJjYzAtY2NiNjNjYmZjYjJjX3VlMSIsIm1vaSI6IjI2ZDVkODI2IiwiYyI6ImtFTFdtSitOUGpVVmhLRmRWdU8xdXc9PSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoib3BlbmlkLEFkb2JlSUQsdGFyZ2V0X3NkayxyZWFkX29yZ2FuaXphdGlvbnMsYWRkaXRpb25hbF9pbmZvLnByb2plY3RlZFByb2R1Y3RDb250ZXh0IiwiY3JlYXRlZF9hdCI6IjE1Mzg1ODA0MDk3MDcifQ.dvhtyl3bpcOkrOjq9lodKsRwEEvU1tgmhU3qypQyuWTq2mM5z48Wn_T6WSbB0i_9mtURUv6mczwh0d_lEFfOngeUN4ChHUzBdvv0LeV1JdJSlQDE3-KF1P4esQTQ8Vkpga-_FPeDFbpJpExFG_veQn5E01jv8YsJ0osjT4L7Mr0_tTSwApUl8yQ_ZQN97OvdWGAWTBHXplEe1gCntShcovCjSkuEjSFn0SRI0xEikSK48P9QA5BKWPY5DKArCNmTMGToZAvZRaktq1n3rw_TONV-TERYjYPjH8ZUlPAsVgki6PQwJ0FSRDS29t8-5N9DNEpxda5fxHbzptemWGvm2g' \
-H 'cache-control: no-cache' \
-H 'content-type: application/vnd.adobe.target.v1+json' \
-H 'x-api-key: <!--PUT API KEY HERE-->'
```

#### Step 7. Copy and paste [report-api-call.curl](report-api-call.curl) into the terminal and run the command

```curl
curl -X GET \
https://mc.adobe.io/client-name/target/activities/ab/132556/report/performance \
-H 'authorization: Bearer eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJpZCI6IjE1Mzg1ODA0MDk3MDdfYTQ5NjI2MmUtOWU1MC00MTY4LWJhODYtOWYxYTY5YjA1OWNlX3VlMSIsImNsaWVudF9pZCI6ImY3MTM3MDNkYzYwMDQzNzU4MDBhMDhkMDY2Zjc0NmYyIiwidXNlcl9pZCI6IkVFNzQzNjY0NUJCNVS609873259682345908NV203498YNV293486MzNWViMjgtZjBkNi00NTRiLWJjYzAtY2NiNjNjYmZjYjJjX3VlMSIsIm1vaSI6IjI2ZDVkODI2IiwiYyI6ImtFTFdtSitOUGpVVmhLRmRWdU8xdXc9PSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoib3BlbmlkLEFkb2JlSUQsdGFyZ2V0X3NkayxyZWFkX29yZ2FuaXphdGlvbnMsYWRkaXRpb25hbF9pbmZvLnByb2plY3RlZFByb2R1Y3RDb250ZXh0IiwiY3JlYXRlZF9hdCI6IjE1Mzg1ODA0MDk3MDcifQ.dvhtyl3bpcOkrOjq9lodKsRwEEvU1tgmhU3qypQyuWTq2mM5z48Wn_T6WSbB0i_9mtURUv6mczwh0d_lEFfOngeUN4ChHUzBdvv0LeV1JdJSlQDE3-KF1P4esQTQ8Vkpga-_FPeDFbpJpExFG_veQn5E01jv8YsJ0osjT4L7Mr0_tTSwApUl8yQ_ZQN97OvdWGAWTBHXplEe1gCntShcovCjSkuEjSFn0SRI0xEikSK48P9QA5BKWPY5DKArCNmTMGToZAvZRaktq1n3rw_TONV-TERYjYPjH8ZUlPAsVgki6PQwJ0FSRDS29t8-5N9DNEpxda5fxHbzptemWGvm2g' \
-H 'cache-control: no-cache' \
-H 'content-type: application/vnd.adobe.target.v1+json' \
-H 'x-api-key: asdfjnkfjg4564323l4k6j2346kj3246'
```

#### Step 8. Copy and paste response into a .json file like [report-response.json](report-response.json)

```json
{
    "reportParameters": {
        "activityId": 132556,
        "environmentId": 11224,
        "conversionMetricLocalIds": [
            11221
        ],
        "reportInterval": "2018-09-27T20:00Z/2018-10-03T16:00Z"
    },
    "activity": {
        "id": 132556,
        "thirdPartyId": "64947acb-e354-41bc-9f34-f2fcd8beaf5c",
        "type": "ab",
        "state": "approved",
        "name": "360i_SEM AB 5 Way_Local Service Test_082118",
        "priority": 5,
        "modifiedAt": "2018-09-27T20:27:27Z",
        "metrics": [{
                "name": "Entry",
                "metricLocalId": 0
            },
            {
                "name": "Display mboxes",
                "metricLocalId": 2
            },
            {
                "name": "E-Schedule TY_2",
                "metricLocalId": 4
            },
            {
                "name": "E-Schedule Page Visit",
                "metricLocalId": 5
            },
            {
                "name": "Phone Number Click",
                "metricLocalId": 6
            },
            {
                "name": "E-Schedule Module",
                "metricLocalId": 7
            },
            {
                "name": "Time on Site",
                "metricLocalId": 8
            },
            {
                "name": "Viewed Schedule Service",
                "metricLocalId": 9
            },
            {
                "name": "Page Views",
                "metricLocalId": 10
            },
            {
                "name": "Homepage View",
                "metricLocalId": 11
            },
            {
                "name": "Mobile Device Entry",
                "metricLocalId": 12
            },
            {
                "name": "Mobile Device E-Schedule",
                "metricLocalId": 13
            },
            {
                "name": "Desktop/ Tablet Entry",
                "metricLocalId": 14
            },
            {
                "name": "Desktop/Tablet E-Schedule",
                "metricLocalId": 15
            },
            {
                "name": "Mobile Loc Identified",
                "metricLocalId": 16
            },
            {
                "name": "Non Brand Entry",
                "metricLocalId": 17
            },
            {
                "name": "Brand Entry",
                "metricLocalId": 18
            },
            {
                "name": "Non Brand E-Schedule",
                "metricLocalId": 19
            },
            {
                "name": "Brand E-Schedule",
                "metricLocalId": 20
            },
            {
                "name": "Coupon Opens",
                "metricLocalId": 21
            },
            {
                "name": "Ad Copy Visitor Control",
                "metricLocalId": 22
            },
            {
                "name": "Ad Copy Visitor Exp. B",
                "metricLocalId": 23
            },
            {
                "name": "Ad Copy Visitor Exp. C",
                "metricLocalId": 24
            },
            {
                "name": "Ad Copy Visitor Exp. D",
                "metricLocalId": 25
            },
            {
                "name": "E-Schedule TY_Confirm",
                "metricLocalId": 32767
            }
        ],
        "reportingAudiences": [{
                "name": "Included In CAP Push - SEM Exp. A Ad Copy",
                "reportingAudienceLocalId": 1
            },
            {
                "name": "Included In CAP Push - SEM Exp. B Ad Copy",
                "reportingAudienceLocalId": 2
            },
            {
                "name": "Included In CAP Push - SEM Exp. C Ad Copy",
                "reportingAudienceLocalId": 3
            },
            {
                "name": "Included In CAP Push - SEM Exp. D Ad Copy",
                "reportingAudienceLocalId": 4
            },
            {
                "name": "Returning Visitor-1519678744311",
                "reportingAudienceLocalId": 5
            },
            {
                "name": "Branch_Zip_Bridgeport-1515621907068",
                "reportingAudienceLocalId": 6
            },
            {
                "name": "Branch_Zip_Providence-1515624822500",
                "reportingAudienceLocalId": 7
            },
            {
                "name": "Branch_Zip_Middlesex-1515624113652",
                "reportingAudienceLocalId": 8
            },
            {
                "name": "Branch_Zip_Camden-1515622743005",
                "reportingAudienceLocalId": 9
            },
            {
                "name": "Branch_Zip_Boston-1515621823082",
                "reportingAudienceLocalId": 10
            },
            {
                "name": "Branch_Zip_STLouisSout-1515625245150",
                "reportingAudienceLocalId": 11
            },
            {
                "name": "Branch_Zip_Wilmington-1515625452010",
                "reportingAudienceLocalId": 12
            },
            {
                "name": "Branch_Zip_Westchester-1515625383160",
                "reportingAudienceLocalId": 13
            },
            {
                "name": "Branch_Zip_Tampa-1515625321942",
                "reportingAudienceLocalId": 14
            },
            {
                "name": "Branch_Zip_Seattle-1515625017701",
                "reportingAudienceLocalId": 15
            },
            {
                "name": "Branch_Zip_SanAntonio-1515624950832",
                "reportingAudienceLocalId": 16
            },
            {
                "name": "Branch_Zip_Raleigh-1515624890274",
                "reportingAudienceLocalId": 17
            },
            {
                "name": "Branch_Zip_Pittsburgh-1515624765327",
                "reportingAudienceLocalId": 18
            },
            {
                "name": "Branch_Zip_Philadelphi-1515624704060",
                "reportingAudienceLocalId": 19
            },
            {
                "name": "Branch_Zip_Orlando-1515624635084",
                "reportingAudienceLocalId": 20
            },
            {
                "name": "Branch_Zip_Omaha-1515624498413",
                "reportingAudienceLocalId": 21
            },
            {
                "name": "Branch_Zip_NorthernVir-1515624431316",
                "reportingAudienceLocalId": 22
            },
            {
                "name": "Branch_Zip_Norfolk-1515624374315",
                "reportingAudienceLocalId": 23
            },
            {
                "name": "Branch_Zip_NewYork-1515624318338",
                "reportingAudienceLocalId": 24
            },
            {
                "name": "Branch_Zip_NewOrleans-1515624269861",
                "reportingAudienceLocalId": 25
            },
            {
                "name": "Branch_Zip_Minneapolis-1515624186526",
                "reportingAudienceLocalId": 26
            },
            {
                "name": "Branch_Zip_Miami-1515624021647",
                "reportingAudienceLocalId": 27
            },
            {
                "name": "Branch_Zip_MenloPark-1515623953423",
                "reportingAudienceLocalId": 28
            },
            {
                "name": "Branch_Zip_LongIsland-1515623782387",
                "reportingAudienceLocalId": 29
            },
            {
                "name": "Branch_Zip_KansasCity-1515623718324",
                "reportingAudienceLocalId": 30
            },
            {
                "name": "Branch_Zip_Jacksonvill-1515623641905",
                "reportingAudienceLocalId": 31
            },
            {
                "name": "Branch_Zip_Indianapoli-1515623552411",
                "reportingAudienceLocalId": 32
            },
            {
                "name": "Branch_Zip_Houston-1515623465459",
                "reportingAudienceLocalId": 33
            },
            {
                "name": "Branch_Zip_Hawaii-1515623410723",
                "reportingAudienceLocalId": 34
            },
            {
                "name": "Branch_Zip_FTLauderdal-1515623326116",
                "reportingAudienceLocalId": 35
            },
            {
                "name": "Branch_Zip_Denver-1515623222194",
                "reportingAudienceLocalId": 36
            },
            {
                "name": "Branch_Zip_Dayton-1515623175296",
                "reportingAudienceLocalId": 37
            },
            {
                "name": "Branch_Zip_Columbus-1515623088974",
                "reportingAudienceLocalId": 38
            },
            {
                "name": "Branch_Zip_Cleveland-1515623019606",
                "reportingAudienceLocalId": 39
            },
            {
                "name": "Branch_Zip_Cincinnati-1515622950482",
                "reportingAudienceLocalId": 40
            },
            {
                "name": "Branch_Zip_Chicago-1515622890247",
                "reportingAudienceLocalId": 41
            },
            {
                "name": "Branch_Zip_Charlotte-1515622806693",
                "reportingAudienceLocalId": 42
            },
            {
                "name": "Branch_Zip_Buffalo-1515622671869",
                "reportingAudienceLocalId": 43
            },
            {
                "name": "Branch_Zip_Birmingham-1515621732272",
                "reportingAudienceLocalId": 44
            },
            {
                "name": "Branch_Zip_Baltimore-1515621369910",
                "reportingAudienceLocalId": 45
            },
            {
                "name": "Branch_Zip_Austin-1515621291895",
                "reportingAudienceLocalId": 46
            },
            {
                "name": "Branch_Zip_Atlanta-1515617778541",
                "reportingAudienceLocalId": 47
            },
            {
                "name": "SEM Brand Campaign Ent-1516405887219",
                "reportingAudienceLocalId": 48
            },
            {
                "name": "SEM Brand Campaign Ent-1516405847044",
                "reportingAudienceLocalId": 49
            }
        ],
        "experiences": [{
                "name": "Exp. A - Control",
                "experienceLocalId": 0
            },
            {
                "name": "Exp. B - Colored Services Icons",
                "experienceLocalId": 1
            },
            {
                "name": "Exp. C - Blue Services Icons",
                "experienceLocalId": 2
            },
            {
                "name": "Exp. D - Red Services Icons",
                "experienceLocalId": 3
            },
            {
                "name": "Exp. E - No Icons, RHR",
                "experienceLocalId": 4
            }
        ]
    },
    "report": {
        "statistics": {
            "totals": {
                "visitor": {
                    "totals": {
                        "entries": 7252,
                        "conversions": 287
                    }
                },
                "visit": {
                    "totals": {
                        "entries": 8416,
                        "conversions": 306
                    }
                },
                "impression": {
                    "totals": {
                        "entries": 11904,
                        "conversions": 345
                    }
                },
                "landing": {
                    "totals": {
                        "entries": 11904,
                        "conversions": 345
                    }
                },
                "timeToConversion": {
                    "totals": {
                        "total": 3623397.0,
                        "sumOfSquares": 9.80841440119E11
                    }
                },
                "orders": {
                    "totals": {
                        "count": 287,
                        "sales": 0.00,
                        "sumOfSquares": 0.0000,
                        "outlierIncludedCount": 287,
                        "outlierIncludedSales": 0.00,
                        "outlierIncludedSumOfSquares": 0.0000
                    }
                }
            },
            "experiences": [{
                    "experienceLocalId": 0,
                    "totals": {
                        "visitor": {
                            "totals": {
                                "entries": 1433,
                                "conversions": 59
                            }
                        },
                        "visit": {
                            "totals": {
                                "entries": 1646,
                                "conversions": 60
                            }
                        },
                        "impression": {
                            "totals": {
                                "entries": 2478,
                                "conversions": 68
                            }
                        },
                        "landing": {
                            "totals": {
                                "entries": 2478,
                                "conversions": 68
                            }
                        },
                        "timeToConversion": {
                            "totals": {
                                "total": 78253.0,
                                "sumOfSquares": 2.482561839E9
                            }
                        },
                        "orders": {
                            "totals": {
                                "count": 59,
                                "sales": 0.00,
                                "sumOfSquares": 0.0000,
                                "outlierIncludedCount": 59,
                                "outlierIncludedSales": 0.00,
                                "outlierIncludedSumOfSquares": 0.0000
                            }
                        }
                    }
                },
                {
                    "experienceLocalId": 1,
                    "totals": {
                        "visitor": {
                            "totals": {
                                "entries": 1529,
                                "conversions": 63
                            }
                        },
                        "visit": {
                            "totals": {
                                "entries": 1792,
                                "conversions": 67
                            }
                        },
                        "impression": {
                            "totals": {
                                "entries": 2503,
                                "conversions": 80
                            }
                        },
                        "landing": {
                            "totals": {
                                "entries": 2503,
                                "conversions": 80
                            }
                        },
                        "timeToConversion": {
                            "totals": {
                                "total": 822462.0,
                                "sumOfSquares": 1.49942374656E11
                            }
                        },
                        "orders": {
                            "totals": {
                                "count": 63,
                                "sales": 0.00,
                                "sumOfSquares": 0.0000,
                                "outlierIncludedCount": 63,
                                "outlierIncludedSales": 0.00,
                                "outlierIncludedSumOfSquares": 0.0000
                            }
                        }
                    }
                },
                {
                    "experienceLocalId": 2,
                    "totals": {
                        "visitor": {
                            "totals": {
                                "entries": 1407,
                                "conversions": 64
                            }
                        },
                        "visit": {
                            "totals": {
                                "entries": 1610,
                                "conversions": 71
                            }
                        },
                        "impression": {
                            "totals": {
                                "entries": 2207,
                                "conversions": 80
                            }
                        },
                        "landing": {
                            "totals": {
                                "entries": 2207,
                                "conversions": 80
                            }
                        },
                        "timeToConversion": {
                            "totals": {
                                "total": 677354.0,
                                "sumOfSquares": 1.18892381188E11
                            }
                        },
                        "orders": {
                            "totals": {
                                "count": 64,
                                "sales": 0.00,
                                "sumOfSquares": 0.0000,
                                "outlierIncludedCount": 64,
                                "outlierIncludedSales": 0.00,
                                "outlierIncludedSumOfSquares": 0.0000
                            }
                        }
                    }
                },
                {
                    "experienceLocalId": 3,
                    "totals": {
                        "visitor": {
                            "totals": {
                                "entries": 1464,
                                "conversions": 55
                            }
                        },
                        "visit": {
                            "totals": {
                                "entries": 1695,
                                "conversions": 61
                            }
                        },
                        "impression": {
                            "totals": {
                                "entries": 2297,
                                "conversions": 67
                            }
                        },
                        "landing": {
                            "totals": {
                                "entries": 2297,
                                "conversions": 67
                            }
                        },
                        "timeToConversion": {
                            "totals": {
                                "total": 221429.0,
                                "sumOfSquares": 1.2430809023E10
                            }
                        },
                        "orders": {
                            "totals": {
                                "count": 55,
                                "sales": 0.00,
                                "sumOfSquares": 0.0000,
                                "outlierIncludedCount": 55,
                                "outlierIncludedSales": 0.00,
                                "outlierIncludedSumOfSquares": 0.0000
                            }
                        }
                    }
                },
                {
                    "experienceLocalId": 4,
                    "totals": {
                        "visitor": {
                            "totals": {
                                "entries": 1419,
                                "conversions": 46
                            }
                        },
                        "visit": {
                            "totals": {
                                "entries": 1673,
                                "conversions": 47
                            }
                        },
                        "impression": {
                            "totals": {
                                "entries": 2419,
                                "conversions": 50
                            }
                        },
                        "landing": {
                            "totals": {
                                "entries": 2419,
                                "conversions": 50
                            }
                        },
                        "timeToConversion": {
                            "totals": {
                                "total": 1823899.0,
                                "sumOfSquares": 6.97093313413E11
                            }
                        },
                        "orders": {
                            "totals": {
                                "count": 46,
                                "sales": 0.00,
                                "sumOfSquares": 0.0000,
                                "outlierIncludedCount": 46,
                                "outlierIncludedSales": 0.00,
                                "outlierIncludedSumOfSquares": 0.0000
                            }
                        }
                    }
                }
            ]
        }
    }
}
```