export default {
  "config": {
    "searchid": "",
    "country": "de",
    "language": "de",
    "action": "s",
    "mode": "p",
    "execmode": "l",
    "linktarget": "a",
    "nextpoll": 3,
    "cabin": "Y",
    "pagination": {
      "offset": 0,
      "count": 10
    },
    "selection": {
      "type": "oneshot"
    },
    "passenger": [ {
      "type": "ADT"
    }, {
      "type": "ADT"
    } ],
    "baggageconfig": 0,
    "sorting": [ {
      "type": "pirate_score",
      "order": "desc"
    } ]
  },
  "portions": [ {
    "origin": [ {
      "type": "airport",
      "value": "BER"
    }, {
      "type": "airport",
      "value": "FRA"
    }, {
      "type": "airport",
      "value": "DUS"
    }, {
      "type": "airport",
      "value": "CGN"
    }, {
      "type": "airport",
      "value": "MUC"
    }, {
      "type": "airport",
      "value": "HAM"
    } ],
    "destination": [ {
      "type": "airport",
      "value": "PMI"
    } ],
    "dep": {
      "start": "2019-06-10"
    },
    "duration": {
      "min": 5,
      "max": 8
    }
  }, {
    "origin": [ {
      "type": "airport",
      "value": "PMI"
    } ],
    "destination": [ {
      "type": "airport",
      "value": "BER"
    }, {
      "type": "airport",
      "value": "FRA"
    }, {
      "type": "airport",
      "value": "DUS"
    }, {
      "type": "airport",
      "value": "CGN"
    }, {
      "type": "airport",
      "value": "MUC"
    }, {
      "type": "airport",
      "value": "HAM"
    } ],
    "dep": {
      "end": "2019-06-28"
    }
  } ],
  "filters": {
    "noopenjaws": {
      "origin": {
        "active": true,
        "type": "airport"
      }
    },
    "portions": [ {
      "deptime": {
        "min": "00:00",
        "max": "23:59"
      },
      "connectiontime": {
        "max": 1440
      }
    }, {
      "deptime": {
        "min": "00:00",
        "max": "23:59"
      },
      "connectiontime": {
        "max": 1440
      }
    } ],
    "connectioncount": {
      "min": 0,
      "max": 3
    }
  }
}
