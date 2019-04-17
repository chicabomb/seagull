export default () => {
  return {
    config: {
      action: 's',
      baggageconfig: 0,
      country: 'us',
      currency: 'USD',
      execmode: 'l',
      mode: 'p',
      language: 'en',
      linktarget: 'a',
      nextpoll: 3,
      cabin: 'Y',
      pagination: { offset: 0, count: 10 },
      passenger: [{type: "ADT"}, {type: "ADT"}],
      provider: 'kiwi',
      searchid: null,
      selection: { type: 'oneshot' },
      sorting: [{ type: 'pirate_score', order: 'DESC' }]
    },
    filters: {
      portions: [
        {
          deptime: { min: '00:00', max: '23:59' },
          connectiontime: { max: 1440 }
        },
        {
          deptime: { min: '00:00', max: '23:59' },
          connectiontime: { max: 1440 }
        }
      ],
      connectioncount: {min: 0, max: 3},
      price: {max: 800},
      noopenjaws: {origin: {active: true, type: "airport"}}
    },
    portions: [
      {
        origin: [
          {type: "airport", value: "TXL"},
          {type: "airport", value: "SXF"}
      ],
        destination: [
          {type: "airport", value: "SXF"},
          {type: "airport", value: "TXL"}
        ],
        dep: {start: "2019-04-26", end: null}
      },
      {
        origin: [
          {type: "airport", value: "SXF"},
          {type: "airport", value: "TXL"}
        ],
        destination: [
          {type: "airport", value: "TXL"},
          {type: "airport", value: "SXF"}
        ],
        dep: {end: "2020-02-19", start: null}
      }
    ]
  }
}

