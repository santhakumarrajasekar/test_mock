var express = require('express');
var auth = require('../lib/auth');
//var rdb = require('../lib/rethink');
var http = require('http');
var deep_equal = require('deep-equal');
var router = express.Router();

router.get('/', auth.authorize, function (request, response) {
    console.log('Advanced steering  |GET Applications : ');

    var applicationResponse = {
        "application": [
            {
                "name": "01NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "050PLUS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "0ZZ0",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "10050NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "10086CN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "104COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "1111TW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "114LA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "115COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "118114CN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "11ST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "123PEOPLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "1337X",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "139MAIL",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "15MIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "163COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "17173COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "17U",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "20MIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "24H",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "24ORA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "24SATA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "24UR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "2CH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "2SHARED",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "3366_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "360BUY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "360CN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "3GPP_LI",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "3PC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "4399COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "4CHAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "4SHARED",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "4TUBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "51JOB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "51LA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "51_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "51_COM_BBS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "51_COM_MUSIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "51_COM_POSTING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "56COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "58COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "591TW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "5PMWEB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "6ALABAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "6PLAY",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "7K7K",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "8021AD",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "8021Q",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "802_11",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "91COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "999_MD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "99ACRES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "9GAME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AAJTAK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AASTOCKS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ABC",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "ABCNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ABC_AU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ABC_NEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ABIDJAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ABOLA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ABOUT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ABS_CBN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ABS_CBNNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ABV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ACBAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ACCUWEATHER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ACEPROJECT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ACER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ACROBAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ACSE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ACTIVENET",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ACTIVESYNC",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "mail"
                ]
            },
            {
                "name": "ACTUNIGER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AC_REUNION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADADERANA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADC",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "ADCASH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADCOLONY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADDICTINGGAMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADDTHIS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADFORM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADJARA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADJARANET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADJUST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADK2",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADNETWORKPERFORMANCE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADNSTREAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADOBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADOBE_CONNECT",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "ADOBE_MEETING_RC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADOBE_ONLINE_OFFICE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADOBE_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADPLEX_MEDIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADRIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADSAFEPROTECTED",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADSERVERPLUS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADTECH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADULTADWORLD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADULTFRIENDFINDER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADVECTION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADVENTORI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADVERTISING_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ADVOGATO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AERSERV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AFL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AFP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "AFREECA",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "AFRICAGUINEE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AFRIKMAG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AFTENPOSTEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AFTONBLADET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AGAME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AH",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "AIAIGAME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AIB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AICCU_TIC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "AILI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AIM",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "AIMINI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AIMS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "AIM_EXPRESS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "AIM_TRANSFER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-transfer"
                ]
            },
            {
                "name": "AIRAIM",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "AIRKAST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AIR_VIDEO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "AIZHAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AKAMAI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AKINATOR",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "AKIPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AKTUALITY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALAKHBAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALARABY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALAYAM24",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALBAWABHNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALEXA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALFAJERTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALIBABA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALIEXPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALIMAMA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALIPAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALJARAS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALJARIDA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALJAZEERA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALKAWNNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALLEGRO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALLMUSIC",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "ALLOCINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALL_SLOTS_CASINO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "ALMANAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALMASHHAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALMASRYALYOUM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALNILIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALQUDS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALRAKOBA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALSJL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALTIRIS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "ALWAFD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALWAKEELNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALWASATNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALWATANVOICE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALYAMANALARABY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ALYAOUM24",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMAZON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMAZON_ADSYSTEM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMAZON_AWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMAZON_CHIME",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "AMAZON_CLOUD_DRIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMAZON_MP3",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMAZON_MUSIC",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "AMAZON_VIDEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMBEBI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMEBA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMERICANEXPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMIE_STREET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMJILT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMMONNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMMYY_ADMIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMOEBAOS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AMQP",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "ANDORNET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ANDROID_CNXMGR",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "ANGRY_BIRDS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "ANIMEBW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ANIMOTO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ANIPANG",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "ANNAPURNAPOST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ANNONCES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ANOBII",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ANSPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ANSWERS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ANT1IWO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ANTS_P2P",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "ANYDESK",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "ANY_0HOP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ANZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ANZHI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AOL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AOL_ON",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "AOL_ONE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APARAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APNS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "APOLLO",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "APOLLO_LV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPBOT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPCHINA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPLEDAILY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPLEJUICE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "APPLE_AIRPLAY",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "APPLE_AIRPORT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPLE_AIRPRINT",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "printer"
                ]
            },
            {
                "name": "APPLE_HLS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "APPLE_LOCATION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPLE_MAPS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPLE_MUSIC",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "APPLE_SIRI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPLE_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPLOVIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPNEXUS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPSFLYER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPSHOPPER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APPSTORE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "APROD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APSALAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "APTOIDE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "AQLAME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ARABIAWEATHER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ARCHIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ARENABG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ARES",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "AREYOUAHUMAN",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "ARGAAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ARGUS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ARIS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ARMORGAMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ARMORGAMES_PLAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ARP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ASANA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ASIAE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ASIANDVDCLUB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ASK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ASKCOM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ASK_FM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ASMALLWORLD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ASPROXY",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "ATALK",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ATHLINKS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ATLASINFO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ATLASSIAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ATLASSOLUTIONS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ATT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ATWIKI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AUCTION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AUDIBLE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "AUFEMININ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AUONE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AUTO24",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AVAS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AVATARS_UNITED",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AVAZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AVG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AVG_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AVIRA_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AVITO_MA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AVITO_RU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AVOIDR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AVTO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AWEMPIRE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AX25",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "AXIFILE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AZET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "AZETONE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "A_DAKAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "B92",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BABELGUM",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "BABYCENTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BABYHOME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BABYLON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BACKPACKERS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BADONGO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BADOO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "BAGANMART",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BAIDU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BAIDU_HI_GAMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BAIDU_MAPS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BAIDU_PLAYER",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "BAIDU_WALLET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BAIKE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BALKANWEB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BANCOESTADO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BANCOPOPULAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BANCO_INDUSTRIAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BANESC_ONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BANGLANEWS24",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BANKMELLAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BANKRATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BANVENEZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BAOFENG",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "BASE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "standard"
                ]
            },
            {
                "name": "BATTLENET",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "BAZAARVOICE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BAZOS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BBC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BBC_PLAYER",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "BBM",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "BBM_AUDIO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "BBM_VIDEO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "BBN_RCC_MON",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "BBS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BCA_CO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BD24LIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BDJOBS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BDNEWS24",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BEANFUN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BEATPORT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BEBO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BEBO_MAIL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BEETALK",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "BEFORWARD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BEIRUTPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BEMANISO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BERNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BERNIAGA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BESTSHARING_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BET365",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BET9JA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BGP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "BIDORBUY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BIDSWITCH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BIG5_SPORTING_GOODS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BIGADDA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BIGEYE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BIGLOBE_NE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BIGPOND_MOVIES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BIGTENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BIGUPLOAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BIIP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BIKHIR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BILD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BINT_JBEIL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BIOBIOCHILE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITBUCKET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITCOIN",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "BITCOMET_PEX",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "BITDEFENDER_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITENOVA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITHQ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITLORD",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "BITME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITMEDIANETWORK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITMETV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "BITSEDUCE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITSHOCK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITSOUP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITSTRIPS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "BITTORRENT",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "BITTORRENT_APPLICATION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITTORRENT_BUNDLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITVAULTTORRENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BITWORLD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BIZOGRAPHICS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BJNP",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "printer"
                ]
            },
            {
                "name": "BLACKBERRY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLACKBERRY_LOCATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLACKBERRY_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLACKPLANET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLASTINGNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLEACHERREPORT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLEEP",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "BLIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLICK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLIP_TV",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "BLOCKBUSTER",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "BLOCKET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLOGDETIK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLOGFA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLOGGER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLOGIMG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLOGPHONGTHUY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLOGSPOT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLOGSTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLOKUS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLOOMBERG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLUBSTER",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "BLUEJAYFILMS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BLUEWIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BMFF",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "BNA",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "BOFA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BOLDCHAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BOLHA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BOLT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BOMB01",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BONDISK",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "BONGACAMS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BONMARCHE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BONPOO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BOOKS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BOOKS_IREAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BOOTSTRAPCDN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BOOTYTAPE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BOXOPUS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BOX_NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BRAINTREE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BRANCH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BRAZZERS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BRIGHTCOVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BRIGHTROLL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BRIGHTTALK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BROWNTRACKER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BR_SAT_MON",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "BSP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BSSAP",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "telephony"
                ]
            },
            {
                "name": "BTJUNKIE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BT_BT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BT_CHAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BT_DK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BT_WRZRU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BUDDYBUDDY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BUGS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BUGSNAG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BUJUMBURA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BUKALAPAK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BULAWAYO24",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BURT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BUSINESSWEEK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BUSINESSWEEKLY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BUZZFEED",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BUZZHAND",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BUZZNET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BUZZSENEGAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BWIZA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "BXML",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "wap"
                ]
            },
            {
                "name": "BYPASSTHAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CAAK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CAASIMADDA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CAF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CAFEMOM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CAM4",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CAMEROON_INFO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CAMPFIRE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CAMZAP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CANDY_CRUSH_SAGA",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "CAPITALONE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CAPWAP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "CARBONITE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CARE2",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CARI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CARSALES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CARTOONNETWORK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CAS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CATCHOFTHEDAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CAYMANNEWSSERVICE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CBS_VIDEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CBT",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "CCP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "compression"
                ]
            },
            {
                "name": "CCPROXY",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "CCTV_VOD",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "CDISCOUNT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CDM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CDNETWORKS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CDP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "CEDEXIS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CELLUFUN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CENTRAL_TORRENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CENTRUM_CZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CENTRUM_SK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CFT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "CFTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "CGIPROXY",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "CGMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "CHAMPION_FOOTBALL",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "CHANNEL4",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHANNELMYANMAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHAOS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "CHAP",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "authentication"
                ]
            },
            {
                "name": "CHATROULETTE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHAT_ON",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "CHEETAH_MOBILE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHINACOM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHINACOMCN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHINADAILY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHINANEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHINAREN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHINATIMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHINAZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHINA_AIRLINES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHOSUN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHOSUN_DAILY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHOUFTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CHROME_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CIBERCUBA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CINEMAGEDDON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CIP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "CITIZENTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CITRIX_ONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CITRIX_PVS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "CJ_MALL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CK101",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLARIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLASH_OF_CLANS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "CLASIFICADOSONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLASSMATES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLEARCASE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "CLEARSPACE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLICANOO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLICKTALE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLICKYAB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLIEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLIP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLIP2NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLOOB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLOUDFLARE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLOUDME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLUBBOX",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "CLUBIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CLUMSY_NINJA",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "CNET",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "CNET_TV",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "CNM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CNN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CNTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CNYES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CNZZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "COAP",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "COCCOC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "COCOLOG_NIFTY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "COLLEGE_BLENDER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "COMCAST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "COMM",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "COMMBANK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "COMMENTCAMARCHE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "COMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "compression"
                ]
            },
            {
                "name": "COMPAQ_PEER",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "CONCUR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CONDUIT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CONSTANTCONTACT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CONTENTABC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CONVERSANT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CONVIVA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CORALCDN_USER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "COROTOS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CORRIERE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "COTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "COUCH_SURFING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "COUPANG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CPASBIEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CPHB",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "CPMSTAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CPNX",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "CRACKLE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "CRAIGSLIST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CRASHLYTICS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CRAZYSALOON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CRHOY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CRITEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CRITTERCISM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CRNOBELO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CROCKO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CRTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "CRUDP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "CRYPTOHEAVEN",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "CRYPTOSPOUT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CRYSTALBET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CSDN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CSTRIKE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "CTRIP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CUBADEBATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CUPS",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "printer"
                ]
            },
            {
                "name": "CURSE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CUTEYHONEYFLASH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CVBANKAS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CVS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "CV_ONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CWSEYCHELLES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CYBER12",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CYBERCTM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "CYWORLD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DA7YE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAGBLADET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAIKYNGUYEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAILYMAIL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAILYMOTION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAILY_BOOTH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAILY_STRENGH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAILY_STRENGTH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAKARACTU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAMEWARE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "DANGDANG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DANISHBITS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DANTRI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAP_NEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DARAZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DATA_HU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAUM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAUMMAIL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAVIDOV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DB2",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "DBA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DBS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DCCP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DCERPC",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "DCINSIDE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DCN_MEAS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DDP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DDX",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DEALDEY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DEALFISH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DEBIAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DEBIAN_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DEC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DECAYENNE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DEEPSEEK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DEER_HUNTER_2014",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "DEEZER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DEFIMEDIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DELFI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DELICIOUS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DELTA_SEARCH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DEPOSITFILES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DERSTANDARD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DESKAWAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DESTINY",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "DETIK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DETIKNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DEVIANT_ART",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DFS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DGP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DHCP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DHCP6",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DIAMETER",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "authentication"
                ]
            },
            {
                "name": "DIANPING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DICT",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "DIGG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DIGIKALA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DIGITALRIVER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DIGITALVERSE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DIINO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DIMP",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "DIODEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DIOP",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "DIPLY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DIR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DIRECTCONNECT",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "DIRECTDOWNLOADLINKS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DIRECTREV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DIRECTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DIRETUBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DISABOOM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DISCUSS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DISNEY_CHANNEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DISNEY_JUNIOR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DISNEY_XD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DISTCC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DIVAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DIVSHARE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DMM_CO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DNEVNIK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DNP3",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DNS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DNSHOP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DNXLIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DOCSTOC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DOISONGPHAPLUAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DOL2DAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DOMAIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DONEDEAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DONGA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DONTSTAYIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DOODLE_JUMP",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "DOORBLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DORGIO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DOSTOR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DOUBAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DOUBLEVERIFY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DOUYU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DRAUGAS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DRAUGIEM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DRDA",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "DREAMORA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DREAMWIZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DROPBOX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DROPBOX_DOWNLOAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DROPBOX_UPLOAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DROPSHOTS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DRUKNET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DRUPAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DSI",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DSR",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DSTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DTLS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "DUBIZZLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DUOWAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DWAROZH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DWTONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DWU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "DYNAMICINTRANET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EARTHCAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EARTHLINKTELE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EASTMONEY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EASYTRAVEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EBAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EBAY_CLASSIFIEDS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EBUDDY",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "ECAYTRADE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ECHO",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ECHOROUKONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ECUAVISA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EDGECAST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EDONKEY",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "EDU365",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EDUCARRIERE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EGLOOS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EGNYTE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EGP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "EIGRP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "EKANTIPUR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EKSISOZLUK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EKSKLUZIVA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EKSTRABLADET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELASTICSEARCH",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "ELBLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELBOTOLA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELCAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELCOMERCIO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELDEBER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELFAGR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELFTOWN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELHAWD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELHEDDAF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELHERALDO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELHOURRIYA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELKHADRA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELLE_TW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELLUMINATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELMOGAZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELMUNDO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELNASHRA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELNOTICIERO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELNUEVODIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELNUEVODIARIO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELNUEVOHERALD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELPAIS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELSALVADOR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELTIEMPO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELUNIVERSO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ELWATANNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EL_BALAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EL_NACIONAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EMAG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EMANSION_LR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EMAPS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EMCON",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "EMOL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EMOO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EMPIRE_FOUR_KINGDOMS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "ENCAP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ENCUENTRA24",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ENERGY_TORRENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ENIP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "ENSIGHTEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ENSONHABER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EONS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EPA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EPERNICUS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EPM",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "EPOM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EROOM_NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ESKIMI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ESNIPS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ESP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ESPN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ESPNCRICINFO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ESSAHA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ESSAHRAA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ESSIRAGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ESTABLISHED",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "standard"
                ]
            },
            {
                "name": "ESTADIO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ETAJAKHABAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ETAO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ETH",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ETHERIP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "ETHIOJOBS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ETHIOTUBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ETSI_LI",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "ETTODAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EVEREST_TECH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EVERNOTE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EVERQUEST",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "EVE_ONLINE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "EVONY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EXACQVISION",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "EXBLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EXCEL_ONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EXPATRIATES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EXPEDIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EXPERIENCE_PROJECT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EXPLOROO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EXPRESSEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EXTREMEBITS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EXTREMENOVA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EYEJOT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EYNY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EZFLY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "EZPEER",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "EZTRAVEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "E_BOKS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FACEBOOK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FACEBOOK_APPS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FACEBOOK_AUDIO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "FACEBOOK_CHAT",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "FACEBOOK_CODE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "internet-utility"
                ]
            },
            {
                "name": "FACEBOOK_FILESHARING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "internet-utility"
                ]
            },
            {
                "name": "FACEBOOK_LIVE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "FACEBOOK_MAIL",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "FACEBOOK_MESSENGER",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "FACEBOOK_POST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "internet-utility"
                ]
            },
            {
                "name": "FACEBOOK_VIDEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FACENAMA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FACEPARTY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FACES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FACETIME",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "FANPAGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FARMVILLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FARSNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FASHIONGUIDE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FASTLY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FATAKAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FATUNETWORK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FBCDN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FC2",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FCM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FEILIAO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "FEMINA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FENOPY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FETCHTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FETION",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "FETLIFE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FIBRE_CHANNEL",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "FIJITIMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FIJIVILLAGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILEFACTORY_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILEFLYER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILEGURI",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "FILEI",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "FILELIST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILEMAIL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILEMAKER_PRO",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "FILEPOST_RU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILERIO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILER_CX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILER_NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILESANYWHERE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILESEND_NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILESERVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILESHAREPRO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "FILESOVERMILES",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "FILESTUBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILES_TO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILETOPIA",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "FILE_DROPPER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILE_HOST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILLOS_DE_GALICIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FILMAFFINITY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FIND_MY_IPHONE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FINN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FIRE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "FIREFOX_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FIX",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "FLASH",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "FLASHPLUGIN_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLASHTALKING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLEDGEWING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLICKR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLIPAGRAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLIPBOARD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLIPKART",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLIXSTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLUMOTION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLURRY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLUXIOM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLYCELL_EC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLYCELL_PE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FLY_PROXY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FNB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FNU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FOGBUGZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FORENINGSSPARBANKEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FORTUNECHINA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FORUM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FOTKI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FOTOLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FOTOWEB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FOURSQUARE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FOXBUSINESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FOXMOVIES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FOXNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FOXSPORTS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FOXSPORTS_AU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FOXTEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FOXY",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "FREE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FREEBSD_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FREEDOMNEWSPAPER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FREEETV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FREELOADER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FREEMAIL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FREENET",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "FREEPROXIES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FREETORRENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FREEWHEEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FREE_MUSIC_DOWNLOAD",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "FRESHNEWSASIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FRIENDSTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FRIENDS_REUNITED",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FRIENDVOX",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "FRING",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "FROSTWIRE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FRUHSTUCKSTREFF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FRUIT_NINJA",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "FSECURE",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "security-service"
                ]
            },
            {
                "name": "FSECURE_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FTP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "FTPS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "FTP_DATA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "FUBAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FUNCAPTCHA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FUNSHION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "FUZE_MEETING",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "GABONREVIEW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GADUGADU",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "GAIAONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GAMEBASE_TW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GAMELOFT",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "GAMERDNA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GAMER_TW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GAMESMOMO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GAMES_CO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GAME_CENTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GANJI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GARAANEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GARENA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GARP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "GATHER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GATHERPLACE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GAYS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GAZETA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GAZETABLIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GAZETAEXPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GAZZETTA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GBRIDGE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "GCM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GCS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GDB_REMOTE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "GENI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GERASANEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GETTYIMAGES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GFAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GGP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "GHANAWEB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GHOSTSURF",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "security-service"
                ]
            },
            {
                "name": "GIGACIRCLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GIGASIZE_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GIGATRIBE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "GIGAUP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GIOP",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "GIOPS",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "GIPHY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GITHUB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GIZMO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "GLIDE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GLOBALPUBLISHERS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GLOBO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GLYMPSE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GMAIL",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "GMAIL_BASIC",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "GMAIL_CHAT",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "GMAIL_DRIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "GMAIL_MOBILE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "GMANETWORK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GMARKET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GMTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "GMW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GMX",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "GNUNET",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "GNUTELLA",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "GO90",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "GOAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOBOOGY",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "GODTUBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOGO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOGOBOX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOGOYOKO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOHAPPY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOLDENFROG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOLDEN_VILLAGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOMEETNOW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOMTV_VOD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOODREADS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLEBOT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_ACCOUNTS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_ADS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_ANALYTICS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_APPENGINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_CACHE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_CALENDAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_CLASSROOM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_CODE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_DESKTOP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_DOCS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_EARTH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_GEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_GROUPS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "GOOGLE_INBOX",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "GOOGLE_LOCALGUIDES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_MAPS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_PHOTOS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_PICASA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_PLAY",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "GOOGLE_PLAY_MUSIC",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "GOOGLE_PLUS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_SAFEBROWSING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_SKYMAP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_SPACES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_SPRAYSCAPE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_TAGS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_TOOLBAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_TRANSLATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_TRUSTED_STORE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOGLE_WEBLIGHT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOOSE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "GOO_NE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOPLAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOSSIPLANKANEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOTODEVICE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "GOTOMEETING",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "GOTOMYPC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "GOUGOU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GOZAMBIAJOBS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GRANMA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GRATISINDO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GRAVATAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GRE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "GREE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GREENAREA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GRID",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GRONO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GROOVE",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "microsoft-office"
                ]
            },
            {
                "name": "GROOVESHARK",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "GROUPON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GROUPWISE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GSSHOP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GSTATIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GTALK",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "GTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "GTPV2",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "GT_RACING_2",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "GUAMPDN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GUATEVISION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GUDANGLAGU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GUINEENEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GULFUP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GUMTREE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "GYAO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "H225",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "H245",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "H248_BINARY",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "H248_TEXT",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "HABBO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HABER7",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HALFLIFE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "HAMACHI",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "HAMARIWEB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HAMBASTAGI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HANDYCAFE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HANGAME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HANKOOKI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HANKYUNG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HAO123",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HAQQIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HARDSEXTUBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HARDWAREZONE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HATENA_NE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HAVEERU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HBONORDIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HBO_GO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "HEAP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HEAVY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HELPSHIFT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HERALDM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HERE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HEROKU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HESPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HEUREKA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HEXUN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HGTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HI5",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HIBAPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HIDEMYASS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HIGHWINDS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HIGH_ENTROPY",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "behavioral"
                ]
            },
            {
                "name": "HIHI2",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HINET_GAMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HIP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "HIR24",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HIRUFM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HKGOLDEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HK_OBSERVATORY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HLN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "HOCKEYAPP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HOCKEYCURVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HOLA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HOLA_WEBPROXY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HONEYWELL_PHD",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "HOOTSUITE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HOPOPT",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "HOSPITALITY_CLUB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HOST",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "HOTFILE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HOTJAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HOTLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "HOTSPOT_SHIELD",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "HOVRS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "HOWCAST",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "HOWSTUFFWORKS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HPELLC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "HS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HSBC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HSRP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "HTTP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HTTP2",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HTTPS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HTTP_PROXY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HTTP_TUNNEL",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "HUAWEI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HUAWEI_UPDATE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "HUDONG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HUFFINGTON_POST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HULU",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "HUNGRYGOWHERE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HURRIYET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HVG_HU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "HYVES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "I2P",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "encrypted"
                ]
            },
            {
                "name": "IAPP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IATP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IAX",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "IBACKUP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "IBAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IBIBO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IBM_TEALEAF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ICA",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "ICALL",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "ICAP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ICCP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ICECAST",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "ICLOUD",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "ICMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ICMP6",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ICQ2GO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "ICRT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ICY",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "IDENT",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "authentication"
                ]
            },
            {
                "name": "IDNES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IDOKEP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IDPR",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IDPR_CMTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IDRP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ID_NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IEC_60870_5_104",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IFENG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IFENG_FINANCE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IFILE_IT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IFILMTV",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "IFMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IFOLDER_RU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IGIHE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IGMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IGP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IHEARTRADIO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "IIOP",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "IKEA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IKMAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IKON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IKUB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IL",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ILIVID",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ILOVEIM",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "ILTALEHTI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ILTASANOMAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IMAGESHACK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IMAP",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "mail"
                ]
            },
            {
                "name": "IMAPS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "mail"
                ]
            },
            {
                "name": "IMDB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IMEEM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IMEET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IMESH",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "IMESSAGE_FILE_DOWNLOAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-transfer"
                ]
            },
            {
                "name": "IMGUR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IMINENT",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "IMO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "IMP",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "IMPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IMVU",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "IMYANMARHOUSE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INBOX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INCOMPLETE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "standard"
                ]
            },
            {
                "name": "INDABA_MUSIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INDEKSONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INDEPENDENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INDEXEXCHANGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INDEX_HR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INDEX_HU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INDIATIMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INDONETWORK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INDOWEBSTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INEWSMALTA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INFINITY_BLADE_II",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "INFOBAE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INFORMIX",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "ING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INILAH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INMOBI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INNERACTIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INNFRAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INNOVID",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INQUIRER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INSTAGRAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INTALKING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INTERIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INTERNATIONS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INTERNET_ORG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INTERPARK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INTUIT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INVESTIGATOR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INWI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "INYARWANDA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IODINE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "IOS_OTA_UPDATE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "IP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IP6",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IPCOMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IPCP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IPCV",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IPERF",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "IPLT",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IPP",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "printer"
                ]
            },
            {
                "name": "IPPC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IPSEC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "encrypted"
                ]
            },
            {
                "name": "IPTM",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IPV6CP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "IPX",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IPXRIP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "IPXSAP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IPX_IN_IP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IP_EXP_1",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IP_EXP_2",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IP_IN_IP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IP_RDP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IP_RESERVED",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IQIYI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IRC",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "IRCS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "IRC_GALLERIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IRC_TRANSFER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-transfer"
                ]
            },
            {
                "name": "IRODS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "IRTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ISAKMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "encrypted"
                ]
            },
            {
                "name": "ISCSI",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ISIS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ISL",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ISO_IP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ISO_TP4",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ISSUU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ISUP",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "telephony"
                ]
            },
            {
                "name": "ITALKI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ITSMY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ITSUP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ITUNES",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "ITV_PLAYER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "IWARP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "IWIW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "I_GAMER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "I_NLSP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "I_PART",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JABBER",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "JABBER_TRANSFER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-transfer"
                ]
            },
            {
                "name": "JAIKU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JAJAH",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "JAMAICAOBSERVER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JAMAICA_GLEANER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JAMIIFORUMS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JAMMERDIRECT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JANGO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JAP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JASMIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JAVA_RMI",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "JAVA_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JAVEDCH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JAVHD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JAWHARAFM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JEDI",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "JETAOSHQEF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JETDIRECT",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "printer"
                ]
            },
            {
                "name": "JFRANEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JIBJAB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JINGDONG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JIRA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JNE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JOBSDB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JOBSTREET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JOBS_AF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JOBS_BG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JOFOGAS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JOONGANG_DAILY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JQUERY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JUBII",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JUMIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JUNKMAIL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JUSTIN_TV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JUTARNJI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "JXTA",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "KAIETEURNEWSONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KAIOO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KAIXIN_CHAT",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "KAJGANA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KAKAKU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KAKAOCDN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KAKAOSTORY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KAKAOTALK",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "KALERKANTHO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KANKAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KAPANLAGI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KAPOOK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KAROSGAME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KASKUS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "KASPERSKY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KASPERSKY_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KASVYKSTA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KAZAA",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "KBN_LIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KBS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KBSTAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KB_BANK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KEEZMOVIES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KEMENKUMHAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KHABERNI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KHAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KHMEREAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KHMERLOAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KHMER_NEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KHMER_NOTE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KHMER_PRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KICKASSTORRENTS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KIGALITODAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KIJIJI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KIK",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "KING",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "KINGDOMXXX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KINO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KIWIBOX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KLIKBCA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KLIX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KOHA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KOHSANTEPHEAPDAILY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KOLEKTIV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KOMPAS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KOMPASIANA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KONAMINET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KONGA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KOOLIM",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "KOOORA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KPASSWD",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "authentication"
                ]
            },
            {
                "name": "KPROXY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KRB5",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "authentication"
                ]
            },
            {
                "name": "KRUX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KRYPTOLAN",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "KSTNA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KU6",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KUENSELONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KUGOU",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "KUNDO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KUPUJEMPRODAJEM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KURIR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KURIR_INFO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KUXUN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "KWEJK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "L2TP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "LAACIBNET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LABANQUEPOSTALE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LADY8844",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LAJMI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LAN",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "LANACION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LANKADEEPA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LANSHARK",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "LAPAGINA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LAPATILLA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LAPOSTE_WEBMAIL",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "LAPRENSA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LAPRENSAGRAFICA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LAREDOUTE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LARP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "LASTFM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LASTPASS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LATIV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LAVA_LAVA",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "LAZADA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LCP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "LDAP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "LDAPS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "LDBLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LEAF_1",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "LEAF_2",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "LEAPFILE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LEBONCOIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LEFASO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LERAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LETECKAPOSTA_CZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LETV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LEVEL3",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LEXPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LG_ESHOP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIBERO_VIDEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIBRARYTHING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIDER_BET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIFE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIFEKNOT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIFTOFF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIGATUS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIGHTSTREAMER",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "LINE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "LINEAGE2",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "LINE_GAMES",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "LINE_WIND_RUNNER",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "LINIO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LINKEDIN",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "LINTASBERITA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIONAIR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIONTRAVEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIPUTAN6",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LISTINDIARIO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LISTOGRAFY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIST_AM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIVECHAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIVEDOOR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIVEINTERNET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIVEJOURNAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIVEMAIL_ATTACH",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "LIVEMAIL_MOBILE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "LIVEMOCHA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIVEPERSON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIVERAIL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIVESCORE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIVE_GROUPS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "LIVE_HOTMAIL",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "LIVE_MEETING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIVE_MESH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIVE_STORAGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LIVINGSOCIAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LKQD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LLC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "LLNWD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LLP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LOADBALAN",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "LOAD_TO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LOCALYTICS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LOGMEIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LOGMEIN_RESCUE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "LOKALISTEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LOOKOUT_MS",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "antivirus"
                ]
            },
            {
                "name": "LOOP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "LOOPPNG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LOTAME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LOTOUR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LOTTE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LOTTERYPOST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LOTUSNOTES",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "mail"
                ]
            },
            {
                "name": "LOTUS_LIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LOTUS_SAMETIME",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "LPR",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "printer"
                ]
            },
            {
                "name": "LQR",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "LRYTAS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LTN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LTT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LUKE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "LUN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LUNARSTORM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LUSAKATIMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LVPING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LYNC",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "LYNC_ONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "LYNDA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "M2PA",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "M2UA",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "M3UA",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MAAII",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "MAANNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MAGICJACK",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MAGUMAGU",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "MAIL2000",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "MAILRU",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "MAILRU_AGENT",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "MAIL_189",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "MAIL_RU_GAMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MAIL_RU_MOIMIR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MAIL_RU_WEBAGENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MAKO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MAKTOOB",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "MALFORMED",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "standard"
                ]
            },
            {
                "name": "MALIJET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MALIWEB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MALTAPARK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MALTATODAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MANA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MANDRIVA_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MANET",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MANGOCITY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MANGVIECLAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MANOLITO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "MANORAMAONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MANX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MAPBOX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MAPI",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "mail"
                ]
            },
            {
                "name": "MAPQUEST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MAPY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MARCA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MAREBPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MARKTPLAATS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MASHABLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MASHARE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MATCH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MAXCDN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MAYBANK2U",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MBC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MBL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MBN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MCAFEE",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "security-service"
                ]
            },
            {
                "name": "MCB_HOME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MCS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MEBC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEDIACONGO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEDIAFIRE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEDIAMATH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEDIA_INNOVATION_GROUP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEERKAT",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MEETIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEETINGPLACE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MEETME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEETTHEBOSS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEETUP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEEVEE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEGA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEGAPROXY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEGASHARES_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEGAUPLOAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEGAVIDEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEITUAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MEKUSHARIM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MENDELEY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MENSTYLEFASHION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MERCADOLIBRE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MERCADOR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MERIT_INP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MEROJAX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MERRJEP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MESSENGERFX",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "METACAFE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MFE_NSP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MGCP",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MGID",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MGOON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MIAOPAI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MIBBIT",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "MICP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MICROSOFT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MIHAARU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MIHANBLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MIHANWEBADS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MIKOGO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MILAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MILANUNCIOS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MILLARDAYO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MILLI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MILLIYET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MIMP",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "MINECRAFT_POCKET",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "MINGPAO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MINUTO30",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MIPV6",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MIRO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "MISTRECI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MITALK",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "MIXI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MIXPANEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MMM_NIGERIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MMS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MMSE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "wap"
                ]
            },
            {
                "name": "MMS_ISO",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MOAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOBAGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOBFOX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOBILE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MOBILE01",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOBILEHDR",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MOBILEMARKET",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "MOBILE_IP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "MOBILE_ME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOBILINK",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "MOCEAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOCOSPACE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MODBUS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "MOE_GOV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOG",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MOGULUS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MOI_QATAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOMOSHOP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MONEX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MONEYDJ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MONEY_163",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MONITOR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MONSTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOOV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOPUB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOREFREECAMSECRETS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOSAIQUEFM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOTIKA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOTINEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOUNT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "MOUTHSHUT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOVER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOVIE2FREE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOVITEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOZILLA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MOZZI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MP3TECA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MP3_ROCKET",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MPEGTS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MPLS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "MPLS_IN_IP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MPLUS_MESSENGER",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "MPQUEST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MQ",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "MQTT",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "MSN",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "MSNMOBILE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "MSN_GROUPS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "MSN_SEARCH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MSN_VIDEO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MSRP",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MSRPC",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "MS_COMMUNICATOR",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "MS_ONENOTE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MS_PLANNER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MS_SWAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MS_TRANSLATOR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MTN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MUBI",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "MUDAH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MUHITELYEMEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MULTIPLY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MULTIUPLOAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MUSICA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MUSICCHOICE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MUTE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "MUX",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "MUXLIM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MXIT",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "MYANIMELIST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYANMARLOAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYAUTO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYCHURCH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYDIV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYDOWNLOADER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYDRIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYHERITAGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYJOYONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYLIFE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYMARKET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYOPTUS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYPEOPLE_MESSENGER",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "MYPOCKET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYSPACE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYSPACE_VIDEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYSQL",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "MYSTART",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYVIDEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYWAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYWEBSEARCH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MYYEARBOOK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MY_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MY_OPERA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "MY_TALKING_TOM",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "MY_YAHOO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NABLUSLIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NABLUSTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NACION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAGARIKNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAIJ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAIRALAND",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAMBA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAMIBIAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAMU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAPSTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NARP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "NASA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NASZA_KLASA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NATECYWORLD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NATE_MAIL",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "NATION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NATIONALGEOGRAPHIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NATIONALLOTTERY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NATIONNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAT_PMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "NAUTA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAVER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAVERDRIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAVERMAIL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAVER_BLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NAVER_MOBILE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NBA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NBA_CHINA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NBC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NBNS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "NCAA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NCORE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NCP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "NDMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "NDUOA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEFSIS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEFSYS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEND",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEOBUX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NETBIOS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "NETBLT",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "NETBSD_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NETFLIX",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "NETFLOW",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "NETI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NETLOAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NETLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NETMARBLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NETMEETING_ILS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "NETPERFORM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NETTBY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NET_PROXY",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "NEULION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEWS24",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEWS24NEPAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEWSBOOK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEWSDAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEWSIT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEWS_AM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEWS_AU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEWS_MN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEWVISION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEW_RELIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEXIAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEXON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEXOPIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NEXTMEDIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NFL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NFS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "NGO_POST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NGROK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NHADATSO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NICONICO_DOUGA",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "NIELSEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NIEUWSBLAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NIFTY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NIGEREMPLOI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NIKE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NIKKEI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NIMBUZZ_WEB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NINTENDO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NJUSKALO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NLOCKMGR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "NLSP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "NNTP",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "NNTPS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "NOA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NOD32_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NOKIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NOKIA_OVI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NONGHYUP_BANK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NORDEA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NORTON_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NOTICIAS24",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NOVINKY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NOWNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NRDP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "NRK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NRL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NRPE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "NRTTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NSFNET_IGP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "NSPI",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "NTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "NTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NTVBD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NUOMI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NUR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NVP_II",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "NYASATIMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NYDAILYNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NYTIMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "NZHERALD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OCS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OCSP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "encrypted"
                ]
            },
            {
                "name": "OCTOPZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OCTOSHAPE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "ODNOKLASSNIKI",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "ODSIEBIE_NAJLEPSZE_NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OFFICE365",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OFFICEDEPOT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OFFICE_DOCS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OFFNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OICQ",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "OKCUPID",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OKEZONE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OKWAVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OLARK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OLX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONCLICKADS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONECLIMATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONEDIO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONEDRIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONEF_BF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONEHUB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONELIFE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONEWORLDTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONEWORLD_ORG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONLINEDOWN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONLINEKHABAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONLINER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ONLIVE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "ONTESTS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OOVOO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "OOYALA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OPCUA",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "OPENBSD_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OPENFT",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "OPENGW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OPENRICE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OPENRTB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OPENSOOQ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OPENSTREETMAP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OPENVPN",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "OPENX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OPEN_DIARY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OPERA_MOBILE_STORE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "OPERA_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OPPETARKIV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OPTIMIZELY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ORACLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ORACLE_RAC",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "ORANGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ORANGEMAIL",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "ORB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ORF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ORIENTAL_DAILY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ORIGJINALE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ORIGO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ORKUT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OSINL",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "OSPF",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "OUEDKNISS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OUTBRAIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OUTEVERYWHERE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OUTLOOK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OVACIONDIGITAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OVER_BLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OWA",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "OWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "OXU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PADABUM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PAIPAI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PALTALK",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "PALTALK_AUDIO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "PALTALK_TRANSFER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-transfer"
                ]
            },
            {
                "name": "PALTALK_VIDEO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "PALWEATHER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PANDA_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PANDO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "PANDORA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PANDORA_TV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PANET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PANORAMIO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PANTIP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PAP",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "authentication"
                ]
            },
            {
                "name": "PARAGUAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PARAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PARSE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PARTIS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PARTNERUP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PARTY_POKER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PASSPORTSTAMP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PASTEBIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PASTEBIN_POSTING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PATH",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "PAYEASY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PAYPAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PAZAR3",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PBX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "PCANYWHERE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "PCGAMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PCHOME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PCLADY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PCLOUD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PCONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PD_PROXY",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "PEACEFMONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PEERCAST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PEERGUARDIAN",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "security-service"
                ]
            },
            {
                "name": "PENGYOU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PEOPLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PERFECT_DARK",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "PERFORCE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "PERFORM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PERFSPOT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PERISCOPE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "PERSIANBLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PETITESANNONCES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PEYVANDHA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PGM",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "PHILENEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PHOTOBUCKET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PHPROXY",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "PHWEET",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "PICHAT",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "PIK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PIM",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "PIMANG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PINGSTA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PINTEREST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PIOLET",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "PIPE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "PIXIV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PIXNET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PLANTS_VS_ZOMBIES",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "PLAXO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PLAYAHEAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PLAYSTATION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PLENTYOFFISH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PLIUS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PLURK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PMHOTNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PNNI",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "POCO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "POGO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "POINT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "POKEMON_GO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "POKER_STARS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "POLE_EMPLOI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "POLITIS_NEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "POP3",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "mail"
                ]
            },
            {
                "name": "POP3S",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "mail"
                ]
            },
            {
                "name": "POPADS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PORNHUB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PORNSURVEY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PORTALANALITIKA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PORTMAP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "POSTGRES",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "POSTIMEES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "POU",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "POWERPOINT_ONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "PPFILM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PPLIVE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "PPOMPPU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PPP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "PPPOE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "PPS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PPSTREAM",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "PPTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "PPTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PRENSA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PRENSALIBRE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PRESENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PRESS24",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PRESSAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PRICEMINISTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PRICERUNNER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PRIMEWIRE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PRINT_IO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PRIVATE_ENC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "PRIVAX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PRM",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "PRODAVALNIK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PROFINET",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "PRONTO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "PROPERTYGURU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PROTHOM_ALO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PROTOTHEMA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PROXEASY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PROXONO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PSIPHON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PSN",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "PSYONIX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "PUBLIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PUBLIC_LU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PUBMATIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PULS24",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PULSE_COM_GH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PUNYUMUNYU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PUP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "PUTLOCKER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "PUZZLE_AND_DRAGON",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "PVP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "PWE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "Q931",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "QAPACITY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QATARAIRWAYS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QATARLIVING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QIK_VIDEO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "QINIU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QNX",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "QOO10",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QQ",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "QQDOWNLOAD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QQLIVE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "QQMUSIC",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "QQSTREAM",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "QQVIDEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QQ_BLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QQ_DANCER",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "QQ_FINANCE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QQ_GAMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QQ_LADY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QQ_MAIL",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "QQ_NEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QQ_R2",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "QQ_SPEED",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "QQ_TRANSFER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-transfer"
                ]
            },
            {
                "name": "QQ_WEB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QQ_WEIBO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QTRAX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QUAKE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "QUANTCAST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QUANTUM_DXI_OST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "QUARTERLIFE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QUIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QUICKFLIX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QUIZUP",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "QUNAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "QVOD",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "QZONE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "R10",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "RACKSPACE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RADIKO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RADIO1",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RADIOOKAPI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RADIO_BETHLEHEM_2000",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RADIUMONE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RADIUS",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "authentication"
                ]
            },
            {
                "name": "RADIUSIM",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "RADMIN",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "RAKUTEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RAMALLAH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RAMBLER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RAMBLER_WEBMAIL",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "RANAP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "RAPIDSHARE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RAPIDUPLOAD_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RAPPLER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RATOPATI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RAULKEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RAVELRY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RAYA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RAYFILE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RCSC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RDP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "RDT",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "REALESTATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "REALTOR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "REDDIT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "REDHAT_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "REDTUBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "REKLAMA5",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RENREN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "REPUBBLICA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "REPUBLIKA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "REPUBLIKA_SLOVENIJA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RESEARCHGATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RETROSHARE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "REUTERS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "REVCONTENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "REVERBNATION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "REVERSO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "REVOLICO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RFB",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "RHAPSODY",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "RICARDO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RIFFSY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RIMNOW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RINGRING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RIP1",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "RIP2",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "RIPNG1",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "RLCDN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RLOGIN",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "terminal"
                ]
            },
            {
                "name": "RLP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "RMIX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RMI_IIOP",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "RMVBUSTERS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ROBOFORM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ROCKET_LEAGUE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "ROGERS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ROHC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ROLLOID",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ROLLOUT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ROVI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ROVIO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "ROYALGAZETTE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ROYANEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ROZETKA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RPC",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "RPL",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "RQUOTA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "RSH",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "terminal"
                ]
            },
            {
                "name": "RSS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RSTAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "RSVP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "RSVP_E2E_IGNORE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "RSYNC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "RT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RTCP",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "RTL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RTMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "RTP",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "RTSP",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "RTVSLO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RUBICONPROJECT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RUDAW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RUNESCAPE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "RUSERS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "RUTEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RUTRACKER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RUV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RVD",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "RYANAIR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "RYZE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "S1AP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SAAVN_MUSIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SABAH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SABAMEETING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SABAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SABERINDO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SABQ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAFARICOM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAFEWEBONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAHAFAH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAHARAMEDIAS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAHIBINDEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAITEBI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAKURA_NE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SALAMNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SALESFORCE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SALESFORCE_CHATTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAMANEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAMEERBOOK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAMSUNG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAMSUNG_APPS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "SAMSUNG_UPDATE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "SANA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SANJESH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SANOOK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAP",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "erp"
                ]
            },
            {
                "name": "SAPO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SARAHANEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SARAYANEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAT_EXPAK",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SAT_MON",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SAVEFILE_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAVEFROM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SAYCLUB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SBS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SBS_AU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SCCM",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "SCCP",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SCCP_SS7",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SCC_SP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SCENEHD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SCHEDULED_TP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SCIENCESTAGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SCISPACE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SCORECARDRESEARCH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SCOTIABANK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SCPS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SCRIBD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SCTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SDE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SDO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SDRP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SEARCHNU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SECONDLIFE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SECURE_VMTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SEEQPOD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SEESAA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SEESMIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SEGYE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SEKINDO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SENDSPACE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SENEGO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SENEWEB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SEOUL_NEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SETOPATI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SEZNAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SFR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SGCARMART",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHABIBA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHAPARAK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHARE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "SHAREBEE_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHAREBOX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHAREPOINT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHAREPOINT_ADMIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHAREPOINT_BLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHAREPOINT_CALENDAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHAREPOINT_DOCUMENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHAREPOINT_ONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHAREREACTOR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHARETHEMUSIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHARETHROUGH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHASHA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHAZAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHEKULLI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHELFARI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHIM6",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SHINHAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHOBIDDAK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHOP_COM_MM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHOUTCAST",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SHOWMYPC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "SHOWTIME_ANYTIME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHQIPERIAIME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHUTTERFLY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SHUTTERSTOCK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SIEBEL_CRM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SIGMALIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SIGNAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SIGNAL_PRIVATE_MESSENGER",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "SILVERLIGHT",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SIMPERIUM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SIMPLEUPLOAD_NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SIMPLE_MSG_P",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SINA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SINA_BLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SINA_FINANCE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SINA_NEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SINA_VIDEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SINA_WEBMAIL",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "SINA_WEIBO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SIOL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SIP",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SIP_SOAP",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SISTIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SITEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SIZMEK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SKEE_BALL_ARCADE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "SKELBIU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SKIP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SKROUTZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SKY",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SKYBLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SKYCN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SKYDRIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SKYDRIVE_LOGIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SKYNEWSARABIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SKYPE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "SKYPE_FOR_BUSINESS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SKYPE_UPGRADE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SKYROCK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SKY_PLAYER",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SLACK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SLACKER",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SLANDO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SLD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SLIDESHARE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SLINGBOX",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SLSK",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "SM",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SMAATO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SMARTADSERVER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SMARTALK",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SMB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "SMB_DIRECT",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SMH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SMPP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "wap"
                ]
            },
            {
                "name": "SMTP",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "mail"
                ]
            },
            {
                "name": "SMTPS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "mail"
                ]
            },
            {
                "name": "SNA",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SNAP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SNAPCHAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SNMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "SNP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SNPP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SOAP",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "SOCIALCAM",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SOCIALTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOCIALVIBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOCKS2HTTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "SOCKS4",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "SOCKS5",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "SOFT4FUN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOFTBANK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOFTONIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOFTROS_MESSENGER",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "SOGOU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOHU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOHU_BLOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOKU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOLARWINDS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOMON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOMUD",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "SONET_NE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SONICO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SONMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "SOPCAST",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SOPHOS_UPDATE",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "antivirus"
                ]
            },
            {
                "name": "SORIBADA",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "SOSO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOUFUN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOUNDCLOUD",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SOUQ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOURCEFORGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOUTHWEST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SOY502",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SPDY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SPEEDTEST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SPID",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "behavioral"
                ]
            },
            {
                "name": "SPIEGEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SPLUNK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SPORTAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SPORTCHOSUN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SPORTPESA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SPORTSILLUSTRATED",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SPORTSSEOUL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SPOTFLUX",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "SPOTIFY",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "SPOTXCHANGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SPREDFAST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SPRINT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SPRITE_RPC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SPS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SPYNET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SQLI",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "SQUIRRELMAIL",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "SRP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SRVLOC",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "SS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SSCOPMCE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SSDP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "SSH",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "encrypted"
                ]
            },
            {
                "name": "SSL",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "encrypted"
                ]
            },
            {
                "name": "ST",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "STACKEXCHANGE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STACKOVERFLOW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STAFABAND",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STAGEVU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STANDARDMEDIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STARNIEUWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STARTIMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STATE_BANK_OF_INDIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STAYFRIENDS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STEALTHNET",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "STEAM",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "STICKAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STICKYADS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STICK_CRICKET",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "STOCKQ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STORYTEL",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "STP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "STREAMAUDIO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STREAMRAIL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STUDIVZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STUFF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STUMBLEUPON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "STUN",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "STUPID_VIDEOS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ST_LUCIA_NEWS_ONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SUA",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SUBWAY_SURFERS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "SUGAR_CRM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SUGAR_SYNC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SUGKLONISTIKO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SULIT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SUNING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SUN_ND",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SUN_ONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SUPER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SUPERCELL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SUPER_MARIO_RUN",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "SUPPERSOCCER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SURESOME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SURROGAFIER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SURVEYMONKEY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SVCCTL",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "SVN",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SVTPLAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SWEDBANK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SWEPIRACY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SWIPE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "SWITCH_CONCEPTS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SYBASE",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "SYMANTEC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SYNC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "SYNFLOOD",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "standard"
                ]
            },
            {
                "name": "SYRI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "SYSLOG",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "S_OMAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "T38",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "TABELOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TABOOLA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TACACS_PLUS",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "authentication"
                ]
            },
            {
                "name": "TAGGED",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAGOO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAHITI_INFOS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAIWANLOTTERY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAJFILE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAKEALOT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAKU_FILE_BIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TALABAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TALENTTROVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TALKBIZNOW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TALTOPIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAMILTHUNDER_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAMTAMINFO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TANGO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "TANX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAOBAO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAPATALK",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "TAPCHISAO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TARINGA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TASWEERNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAWARY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAYARA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TAYYAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TBS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TCF",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "TCHATCHE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TCP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "TCP_OVER_DNS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "TDS",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "TEACHERTUBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TEACHSTREET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TEADS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TEALIUM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TEAMSPEAK",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "TEAMSPEAK_V3",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "TEAMVIEWER",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "TEBYAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TECHINLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TELEGRAAF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TELEGRAF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TELEGRAFI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TELEGRAM",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "TELESTREAM",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "TELETICA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TELNET",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "terminal"
                ]
            },
            {
                "name": "TELNETS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "terminal"
                ]
            },
            {
                "name": "TELTEL",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "TEMPOINTERAKTIF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TENCENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TEREDO",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "TF1",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TFTP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "TGBUS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THADINATIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THELADBIBLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THEMASPORTS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THEPIRATEBAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THETHAO247",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THEVIDEOS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THE_AUTEURS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THE_SIMPSONS_TAPPED_OUT",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "THE_STAR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THINK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THITHTOOLWIN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THREE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THREEMA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "THUNDER",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "TIANYA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TIBCORDV",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "TICKETMONSTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TIDAL",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "TIDALTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TIEMPO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TIGERAIR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TIME",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "TIMESOFMALTA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TIMESOFOMAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TINDER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TISTORY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TI_LES_TWRA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TLSP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "TMALL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TN8",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TNS",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "database"
                ]
            },
            {
                "name": "TNTDRAMA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TNVIP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "terminal"
                ]
            },
            {
                "name": "TOCMAI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TOGGLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TOKBOX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TOKOBAGUS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TOKOPEDIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TONATON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TOPFMRADIO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TOPKY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TOPVIDEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TOP_CHANNEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TOR",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "encrypted"
                ]
            },
            {
                "name": "TOR2WEB",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "encrypted"
                ]
            },
            {
                "name": "TORG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TORI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TORRENT9",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TORRENTDOWNLOADS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TORRENTKIM5",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TORRENTZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TOTHEMAONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TOUCH",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "TOWER_OF_SAVIORS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "TO_MATI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TP_PLUS_PLUS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "TRACKINGCLICK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRADEME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRAFFICFACTORY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRAFFICJUNKY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRANSFERBIGFILES_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRAVBUDDY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRAVELLERSPOINT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRAVELOCITY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRAVIAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TREND",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRENDMICRO_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRIBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRIBUNNEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRINIDADEXPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRINITUNER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRIPPY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TROMBI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TRUNK_1",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "TRUNK_2",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "TRUSTE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "TU",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "TUBE8",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TUBEMOGUL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TUBEREL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TUDOU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TUENTI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TUKIF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TUMBLR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TUNE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TUNEIN",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "TUNEWIKI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TUNE_INC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TUNIGATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TUNISIA_SAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TURBO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TURN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TURNER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TUT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TV2",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TV3",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TV4PLAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TVANTS",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "TVCATCHUP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TVKING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TVM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TVNET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TVN_NOTICIAS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TVUPLAYER",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "TWITCH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TWITPIC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TWITTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "TWOO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "T_ONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UBER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UBUNTU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UBUNTU_ONE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "UCOZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UCP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "wap"
                ]
            },
            {
                "name": "UDN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UDP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UDPLITE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UKR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UKWEZI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ULP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "ULTIMAHORA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ULTRASHARE_NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ULTRASURF",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "UMAC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UMENG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UMURYANGO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UMUSEKE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UNAMEXICO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UNAMIBIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_143",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_144",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_145",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_146",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_147",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_148",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_149",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_150",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_151",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_152",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_153",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_154",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_155",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_156",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_157",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_158",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_159",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_160",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_161",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_162",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_163",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_164",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_165",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_166",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_167",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_168",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_169",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_170",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_171",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_172",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_173",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_174",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_175",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_176",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_177",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_178",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_179",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_180",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_181",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_182",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_183",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_184",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_185",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_186",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_187",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_188",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_189",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_190",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_191",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_192",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_193",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_194",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_195",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_196",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_197",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_198",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_199",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_200",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_201",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_202",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_203",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_204",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_205",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_206",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_207",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_208",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_209",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_210",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_211",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_212",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_213",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_214",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_215",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_216",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_217",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_218",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_219",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_220",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_221",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_222",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_223",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_224",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_225",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_226",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_227",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_228",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_229",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_230",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_231",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_232",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_233",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_234",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_235",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_236",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_237",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_238",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_239",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_240",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_241",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_242",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_243",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_244",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_245",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_246",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_247",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_248",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_249",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_250",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_251",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNASSIGNED_IP_PROT_252",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UNEGUI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UNIVERSITI_BRUNEI_DARUSSALAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UNIVERSITY_OF_BOTSWANA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UNIVISION",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UNKNOWN",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "standard"
                ]
            },
            {
                "name": "UNKNOWN_HTTP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "internet-utility"
                ]
            },
            {
                "name": "UNKNOWN_IPV4",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "unknown"
                ]
            },
            {
                "name": "UNKNOWN_IPV6",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "unknown"
                ]
            },
            {
                "name": "UNKNOWN_SSL",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "encrypted-tunnel"
                ]
            },
            {
                "name": "UNKNOWN_TCP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "unknown"
                ]
            },
            {
                "name": "UNKNOWN_UDP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "unknown"
                ]
            },
            {
                "name": "UNRULY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UOL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UPLOADED_NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UPLOADING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UPLOADINGIT_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UPLOAD_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UPLYNK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UPTOBOX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UPTODOWN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "URBANAIRSHIP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "URDUPOINT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "USABIT_COM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "USATODAY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "USEJUMP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "USP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "USTREAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "UTI",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "UTORRENT",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "UTP",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "UUSEE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "UWI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "V5UA",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "VAGUTHU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VAKAKA",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "VAMPIREFREAKS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VANGUARDNGR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VARZESH3",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VBOX7",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VECER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VECERNJI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VECTOR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VEETLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VEOHTV",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "VERIZON",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VERSA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VESTNIKTM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VETOGATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VEVO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "VG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIADEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIAPLAY",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "VIBER",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "VIDEOBASH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIDEOJUG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIDEOPLAZA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIDEOSURF",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIDEOSZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIDMAX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIDME",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIDYARD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIETBAO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIEWPATH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIEWSTER",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "VIJESTI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIMEO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "VINE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "VINES",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "VISA",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "VISADD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VISA_CHECKOUT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VISIR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VIVANEWS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VJC_COMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "VJC_UNCOMP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "VKONTAKTE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "VMOTION",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "VMTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "VMWARE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "VMWARE_HORIZON_VIEW",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "VNETIP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "VNEXPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VODDLER",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "VOX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VPNOVERDNS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "VRRP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "routing"
                ]
            },
            {
                "name": "VSEE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "VTUN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VTUNNEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VUBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VUIVIET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VUZE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "VXLAN",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "VYEW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "VZ_LT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WADA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WAKOOPA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WALLA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WALLSTREETJOURNAL_CHINA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WANDOUJIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WAPA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WASABI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WASHINGTONPOST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WAT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WATTAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WAYN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WAZE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WB_EXPAK",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "WB_MON",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "WCCP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "WEATHER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WEATHER2UMBRELLA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WEATHER4ALL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WEB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WEBBIOGRAPHIES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WEBEX",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "WEBEX_AUDIO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "WEBEX_VIDEO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "WEBEX_WEBOFFICE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WEBORAMA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WEBSOCKET",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "WEBTRETHO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WEB_CRAWLER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WEB_DE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WECHAT",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "WEIPHONE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WELLSFARGO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WEOURFAMILY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WERKENNTWEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WESP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "WESTPAC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WFC",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "WHATSAPP",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "WHOIS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "WIICONNECT24",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "WIKIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WIKIPEDIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WILLHABEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WIMP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WINAMAX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WINDOWSLIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WINDOWSLIVESPACE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WINDOWSMEDIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WINDOWS_AZURE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WINDOWS_MARKETPLACE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "WINDOWS_UPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WINMX",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "WINNY",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "peer-to-peer"
                ]
            },
            {
                "name": "WINS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "WISEREARTH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WIX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WIXI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WOORIBANK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WORDPRESS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WORD_ONLINE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WORKSITE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "WOW",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "WP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WRETCH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WRIKE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "WSMAN",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "middleware"
                ]
            },
            {
                "name": "WSN",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "WSOP",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "WSP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "wap"
                ]
            },
            {
                "name": "WTLS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "wap"
                ]
            },
            {
                "name": "WTP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "wap"
                ]
            },
            {
                "name": "WTV",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "X11",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "X25",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "XANGA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XBOX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XBOXLIVE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "XBOXLIVE_MARKETPLACE",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "XBOX_MUSIC",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "XBOX_VIDEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XCAMS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XCAP",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "XDMCP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "thin-client"
                ]
            },
            {
                "name": "XENDAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XFS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "application-service"
                ]
            },
            {
                "name": "XHAMSTER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XIAMI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XIAOMI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XINHUANET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XINNET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XIPH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XLNET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XLOVECAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XL_NONTON",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "XL_WAP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XL_WEBMAIL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XL_WEBPORTAL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XMCP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "XMLRPC",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XM_RADIO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XNET",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "XNS",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "XNS_IDP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "XNXX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XOPOM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XOT",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "XREA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XT3",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XTP",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "XUITE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XVIDEOS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XVIDEOSLIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "XYPLEX",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "Y8",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YADRO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO360PLUSVIETNAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO_ANSWERS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO_BIZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO_BUY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO_DOUGA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO_GAMES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO_GEOCITIES",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO_GROUPS",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "forum"
                ]
            },
            {
                "name": "YAHOO_KOREA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO_MAPS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO_REALESTATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO_SCREEN",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "YAHOO_SEARCH",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO_STOCK_TW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAHOO_TRAVEL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YALLAKORA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YAMMER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YANDEX",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YANDEX_FOTKI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YANDEX_MAPS",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YANDEX_WEBMAIL",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "YAPO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YASOUR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YELP",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YEMENNOW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YEMEN_NET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YEN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YESKY",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YIELDMANAGER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YIELDMO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YIHAODIAN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YMAIL2",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "YMAIL_CLASSIC",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "YMAIL_MOBILE",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "YMAIL_MOBILE_NEW",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "YMSG",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "YMSG_CONF",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "YMSG_TRANSFER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-transfer"
                ]
            },
            {
                "name": "YMSG_VIDEO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "YMSG_WEBMESSENGER",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "YNET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YODIZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOKA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOMIURI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOONO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "YOUDAO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOUKU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOUM7",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOUMEO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOUNI",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "YOUNOW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOUPORN",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOURFILEHOST",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOURFILES_BIZ",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOUR_FREEDOM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOUSEEMORE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOUSENDIT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOUTUBE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YOUTUBE_HD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YPBIND",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-service"
                ]
            },
            {
                "name": "YPPASSWD",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "authentication"
                ]
            },
            {
                "name": "YPSERV",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "authentication"
                ]
            },
            {
                "name": "YPUPDATE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "file-server"
                ]
            },
            {
                "name": "YR",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YTIMG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YUGMA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "YUUGUU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZABBIX_AGENT",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "network-management"
                ]
            },
            {
                "name": "ZAHRAA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZALO",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "ZALUU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZAMBIAWATCHDOG",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZAMUNDA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZATTOO",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "audio_video"
                ]
            },
            {
                "name": "ZEDO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZELUNE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZENDESK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZENMATE",
                "family": [
                    "networking"
                ],
                "subfamily": [
                    "tunneling"
                ]
            },
            {
                "name": "ZERI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZIDDU",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZIMBRA",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "ZIMBRA_STANDARD",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "webmail"
                ]
            },
            {
                "name": "ZIMEYE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOHO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOHO_CRM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOHO_DB",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOHO_IM",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "ZOHO_MEETING",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOHO_NOTEBOOK",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOHO_PEOPLE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOHO_PLANNER",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOHO_SHARE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOHO_SHEET",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOHO_SHOW",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOL",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOMBIE_TSUNAMI",
                "family": [
                    "media"
                ],
                "subfamily": [
                    "game"
                ]
            },
            {
                "name": "ZONEALARM_UPDATE",
                "family": [
                    "business-system"
                ],
                "subfamily": [
                    "antivirus"
                ]
            },
            {
                "name": "ZONE_TELECHARGEMENT",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOO",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOOM",
                "family": [
                    "collaboration"
                ],
                "subfamily": [
                    "instant-messaging"
                ]
            },
            {
                "name": "ZOOMTANZANIA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOPIM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOUGLA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZOZNAM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZSHARE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZUJI",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZUM",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZUMODRIVE",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZWHERALD",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            },
            {
                "name": "ZYNGA",
                "family": [
                    "general-internet"
                ],
                "subfamily": [
                    "web"
                ]
            }
        ]
    }

    response.status(200);
    response.json(applicationResponse);

});


module.exports = router;