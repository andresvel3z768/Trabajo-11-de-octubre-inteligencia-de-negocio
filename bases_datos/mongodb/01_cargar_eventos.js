db = db.getSiblingDB('logistica');
db.eventos.drop();
db.eventos.insertMany([
  {
    "id_evento": "EV-000001",
    "numero_guia": "LG-00001",
    "fecha_evento": "2026-01-19T13:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000002",
    "numero_guia": "LG-00001",
    "fecha_evento": "2026-01-19T17:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000003",
    "numero_guia": "LG-00001",
    "fecha_evento": "2026-01-20T05:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "pereira",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000004",
    "numero_guia": "LG-00001",
    "fecha_evento": "2026-01-21T01:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000005",
    "numero_guia": "LG-00002",
    "fecha_evento": "2026-03-12T18:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000006",
    "numero_guia": "LG-00002",
    "fecha_evento": "2026-03-12T22:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000007",
    "numero_guia": "LG-00002",
    "fecha_evento": "2026-03-13T10:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000008",
    "numero_guia": "LG-00002",
    "fecha_evento": "2026-03-14T06:00:00",
    "estado": "entregado",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000009",
    "numero_guia": "LG-00003",
    "fecha_evento": "2026-01-20T16:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000010",
    "numero_guia": "LG-00003",
    "fecha_evento": "2026-01-20T20:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000011",
    "numero_guia": "LG-00003",
    "fecha_evento": "2026-01-21T08:00:00",
    "estado": "en_transito",
    "ciudad": "cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000012",
    "numero_guia": "LG-00003",
    "fecha_evento": "2026-01-22T04:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000013",
    "numero_guia": "LG-00004",
    "fecha_evento": "2026-03-13T16:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000014",
    "numero_guia": "LG-00004",
    "fecha_evento": "2026-03-13T20:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000015",
    "numero_guia": "LG-00004",
    "fecha_evento": "2026-03-14T08:00:00",
    "estado": "en_transito",
    "ciudad": "pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000016",
    "numero_guia": "LG-00004",
    "fecha_evento": "2026-03-15T04:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000017",
    "numero_guia": "LG-00005",
    "fecha_evento": "2026-03-03T07:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000018",
    "numero_guia": "LG-00005",
    "fecha_evento": "2026-03-03T11:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000019",
    "numero_guia": "LG-00005",
    "fecha_evento": "2026-03-03T23:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000020",
    "numero_guia": "LG-00005",
    "fecha_evento": "2026-03-04T19:00:00",
    "estado": "entregado",
    "ciudad": "Medellín",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000021",
    "numero_guia": "LG-00006",
    "fecha_evento": "2026-02-27T15:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000022",
    "numero_guia": "LG-00006",
    "fecha_evento": "2026-02-27T19:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000023",
    "numero_guia": "LG-00006",
    "fecha_evento": "2026-02-28T07:00:00",
    "estado": "en_transito",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000024",
    "numero_guia": "LG-00006",
    "fecha_evento": "2026-03-01T03:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000025",
    "numero_guia": "LG-00007",
    "fecha_evento": "2026-03-23T11:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000026",
    "numero_guia": "LG-00007",
    "fecha_evento": "2026-03-23T15:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000027",
    "numero_guia": "LG-00007",
    "fecha_evento": "2026-03-24T03:00:00",
    "estado": "en_transito",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000028",
    "numero_guia": "LG-00008",
    "fecha_evento": "2026-01-11T12:00:00",
    "estado": "CREADO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000029",
    "numero_guia": "LG-00008",
    "fecha_evento": "2026-01-11T16:00:00",
    "estado": "recogido",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000030",
    "numero_guia": "LG-00008",
    "fecha_evento": "2026-01-12T04:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000031",
    "numero_guia": "LG-00008",
    "fecha_evento": "2026-01-13T00:00:00",
    "estado": "entregado",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000032",
    "numero_guia": "LG-00009",
    "fecha_evento": "2026-01-14T12:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000033",
    "numero_guia": "LG-00009",
    "fecha_evento": "2026-01-14T16:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000034",
    "numero_guia": "LG-00009",
    "fecha_evento": "2026-01-15T04:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "medellin",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000035",
    "numero_guia": "LG-00010",
    "fecha_evento": "2026-02-27T11:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000036",
    "numero_guia": "LG-00010",
    "fecha_evento": "2026-02-27T15:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000037",
    "numero_guia": "LG-00010",
    "fecha_evento": "2026-02-28T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "pereira",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000038",
    "numero_guia": "LG-00010",
    "fecha_evento": "2026-02-28T23:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000039",
    "numero_guia": "LG-00011",
    "fecha_evento": "2026-02-28T15:00:00",
    "estado": "CREADO",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000040",
    "numero_guia": "LG-00011",
    "fecha_evento": "2026-02-28T19:00:00",
    "estado": "recogido",
    "ciudad": "armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000041",
    "numero_guia": "LG-00011",
    "fecha_evento": "2026-03-01T07:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000042",
    "numero_guia": "LG-00011",
    "fecha_evento": "2026-03-02T03:00:00",
    "estado": "entregado",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000043",
    "numero_guia": "lg-00012",
    "fecha_evento": "2026-03-24T09:00:00",
    "estado": "CREADO",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000044",
    "numero_guia": "LG-00012",
    "fecha_evento": "2026-03-24T13:00:00",
    "estado": "recogido",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000045",
    "numero_guia": "LG-00012",
    "fecha_evento": "2026-03-25T01:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000046",
    "numero_guia": "LG-00012",
    "fecha_evento": "2026-03-25T21:00:00",
    "estado": "entregado",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000047",
    "numero_guia": "LG-00013",
    "fecha_evento": "2026-02-23T07:00:00",
    "estado": "CREADO",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000048",
    "numero_guia": "LG-00013",
    "fecha_evento": "2026-02-23T11:00:00",
    "estado": "recogido",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000049",
    "numero_guia": "LG-00013",
    "fecha_evento": "2026-02-23T23:00:00",
    "estado": "en_transito",
    "ciudad": "armenia",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000050",
    "numero_guia": "LG-00013",
    "fecha_evento": "2026-02-24T19:00:00",
    "estado": "entregado",
    "ciudad": "armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000051",
    "numero_guia": "LG-00014",
    "fecha_evento": "2026-03-08T13:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000052",
    "numero_guia": "LG-00014",
    "fecha_evento": "2026-03-08T17:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000053",
    "numero_guia": "LG-00014",
    "fecha_evento": "2026-03-09T05:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000054",
    "numero_guia": "LG-00014",
    "fecha_evento": "2026-03-10T01:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000055",
    "numero_guia": "LG-00015",
    "fecha_evento": "2026-03-11T18:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000056",
    "numero_guia": "LG-00015",
    "fecha_evento": "2026-03-11T22:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000057",
    "numero_guia": "LG-00015",
    "fecha_evento": "2026-03-12T10:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000058",
    "numero_guia": "LG-00015",
    "fecha_evento": "2026-03-13T06:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000059",
    "numero_guia": "LG-00016",
    "fecha_evento": "2026-03-21T17:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000060",
    "numero_guia": "LG-00016",
    "fecha_evento": "2026-03-21T21:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000061",
    "numero_guia": "LG-00016",
    "fecha_evento": "2026-03-22T09:00:00",
    "estado": "en_transito",
    "ciudad": "Armenia",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000062",
    "numero_guia": "LG-00016",
    "fecha_evento": "2026-03-23T05:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000063",
    "numero_guia": "LG-00017",
    "fecha_evento": "2026-02-25T08:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000064",
    "numero_guia": "LG-00017",
    "fecha_evento": "2026-02-25T12:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000065",
    "numero_guia": "LG-00017",
    "fecha_evento": "2026-02-26T00:00:00",
    "estado": "en_transito",
    "ciudad": "pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000066",
    "numero_guia": "LG-00017",
    "fecha_evento": "2026-02-26T20:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000067",
    "numero_guia": "LG-00018",
    "fecha_evento": "2026-02-10T08:00:00",
    "estado": "CREADO",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000068",
    "numero_guia": "LG-00018",
    "fecha_evento": "2026-02-10T12:00:00",
    "estado": "recogido",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000069",
    "numero_guia": "LG-00018",
    "fecha_evento": "2026-02-11T00:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000070",
    "numero_guia": "LG-00018",
    "fecha_evento": "2026-02-11T20:00:00",
    "estado": "entregado",
    "ciudad": "bogota",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000071",
    "numero_guia": "LG-00019",
    "fecha_evento": "2026-01-16T07:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000072",
    "numero_guia": "LG-00019",
    "fecha_evento": "2026-01-16T11:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000073",
    "numero_guia": "LG-00019",
    "fecha_evento": "2026-01-16T23:00:00",
    "estado": "en_transito",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000074",
    "numero_guia": "LG-00019",
    "fecha_evento": "2026-01-17T19:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000075",
    "numero_guia": "LG-00020",
    "fecha_evento": "2026-02-24T16:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000076",
    "numero_guia": "LG-00020",
    "fecha_evento": "2026-02-24T20:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000077",
    "numero_guia": "LG-00020",
    "fecha_evento": "2026-02-25T08:00:00",
    "estado": "en_transito",
    "ciudad": "cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000078",
    "numero_guia": "LG-00020",
    "fecha_evento": "2026-02-26T04:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000079",
    "numero_guia": "LG-00021",
    "fecha_evento": "2026-03-30T11:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000080",
    "numero_guia": "LG-00021",
    "fecha_evento": "2026-03-30T15:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000081",
    "numero_guia": "LG-00021",
    "fecha_evento": "2026-03-31T03:00:00",
    "estado": "en_transito",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000082",
    "numero_guia": "LG-00021",
    "fecha_evento": "2026-03-31T23:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000083",
    "numero_guia": "LG-00022",
    "fecha_evento": "2026-01-15T08:00:00",
    "estado": "CREADO",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000084",
    "numero_guia": "LG-00022",
    "fecha_evento": "2026-01-15T12:00:00",
    "estado": "recogido",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000085",
    "numero_guia": "LG-00022",
    "fecha_evento": "2026-01-16T00:00:00",
    "estado": "en_transito",
    "ciudad": "bogota",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000086",
    "numero_guia": "lg-00022",
    "fecha_evento": "2026-01-16T20:00:00",
    "estado": "entregado",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000087",
    "numero_guia": "LG-00023",
    "fecha_evento": "2026-02-19T12:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000088",
    "numero_guia": "LG-00023",
    "fecha_evento": "2026-02-19T16:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000089",
    "numero_guia": "LG-00023",
    "fecha_evento": "2026-02-20T04:00:00",
    "estado": "en_transito",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000090",
    "numero_guia": "LG-00023",
    "fecha_evento": "2026-02-21T00:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000091",
    "numero_guia": "LG-00024",
    "fecha_evento": "2026-02-02T18:00:00",
    "estado": "CREADO",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000092",
    "numero_guia": "LG-00024",
    "fecha_evento": "2026-02-02T22:00:00",
    "estado": "recogido",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000093",
    "numero_guia": "LG-00024",
    "fecha_evento": "2026-02-03T10:00:00",
    "estado": "en_transito",
    "ciudad": "Cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000094",
    "numero_guia": "LG-00024",
    "fecha_evento": "2026-02-04T06:00:00",
    "estado": "entregado",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000095",
    "numero_guia": "LG-00025",
    "fecha_evento": "2026-03-12T06:00:00",
    "estado": "CREADO",
    "ciudad": "Bogotá",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000096",
    "numero_guia": "LG-00025",
    "fecha_evento": "2026-03-12T10:00:00",
    "estado": "recogido",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000097",
    "numero_guia": "LG-00025",
    "fecha_evento": "2026-03-12T22:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Bogotá",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000098",
    "numero_guia": "LG-00025",
    "fecha_evento": "2026-03-13T18:00:00",
    "estado": "entregado",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000099",
    "numero_guia": "LG-00026",
    "fecha_evento": "2026-01-29T16:00:00",
    "estado": "CREADO",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000100",
    "numero_guia": "LG-00026",
    "fecha_evento": "2026-01-29T20:00:00",
    "estado": "recogido",
    "ciudad": "Manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000101",
    "numero_guia": "LG-00026",
    "fecha_evento": "2026-01-30T08:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000102",
    "numero_guia": "LG-00026",
    "fecha_evento": "2026-01-31T04:00:00",
    "estado": "entregado",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000103",
    "numero_guia": "LG-00027",
    "fecha_evento": "2026-02-17T11:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000104",
    "numero_guia": "LG-00027",
    "fecha_evento": "2026-02-17T15:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000105",
    "numero_guia": "LG-00027",
    "fecha_evento": "2026-02-18T03:00:00",
    "estado": "en_transito",
    "ciudad": "medellin",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000106",
    "numero_guia": "LG-00027",
    "fecha_evento": "2026-02-18T23:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000107",
    "numero_guia": "LG-00028",
    "fecha_evento": "2026-03-08T17:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000108",
    "numero_guia": "LG-00028",
    "fecha_evento": "2026-03-08T21:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000109",
    "numero_guia": "LG-00028",
    "fecha_evento": "2026-03-09T09:00:00",
    "estado": "en_transito",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000110",
    "numero_guia": "LG-00028",
    "fecha_evento": "2026-03-10T05:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000111",
    "numero_guia": "LG-00029",
    "fecha_evento": "2026-03-31T15:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000112",
    "numero_guia": "LG-00029",
    "fecha_evento": "2026-03-31T19:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000113",
    "numero_guia": "LG-00029",
    "fecha_evento": "2026-04-01T07:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000114",
    "numero_guia": "LG-00029",
    "fecha_evento": "2026-04-02T03:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000115",
    "numero_guia": "LG-00030",
    "fecha_evento": "2026-02-03T10:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000116",
    "numero_guia": "LG-00030",
    "fecha_evento": "2026-02-03T14:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000117",
    "numero_guia": "LG-00030",
    "fecha_evento": "2026-02-04T02:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000118",
    "numero_guia": "LG-00030",
    "fecha_evento": "2026-02-04T22:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000119",
    "numero_guia": "LG-00031",
    "fecha_evento": "2026-01-25T17:00:00",
    "estado": "CREADO",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000120",
    "numero_guia": "LG-00031",
    "fecha_evento": "2026-01-25T21:00:00",
    "estado": "recogido",
    "ciudad": "Cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000121",
    "numero_guia": "LG-00031",
    "fecha_evento": "2026-01-26T09:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000122",
    "numero_guia": "LG-00032",
    "fecha_evento": "2026-02-10T14:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000123",
    "numero_guia": "LG-00032",
    "fecha_evento": "2026-02-10T18:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000124",
    "numero_guia": "LG-00032",
    "fecha_evento": "2026-02-11T06:00:00",
    "estado": "en_transito",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000125",
    "numero_guia": "LG-00032",
    "fecha_evento": "2026-02-12T02:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000126",
    "numero_guia": "LG-00033",
    "fecha_evento": "2026-03-20T09:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000127",
    "numero_guia": "LG-00033",
    "fecha_evento": "2026-03-20T13:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000128",
    "numero_guia": "LG-00033",
    "fecha_evento": "2026-03-21T01:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000129",
    "numero_guia": "lg-00033",
    "fecha_evento": "2026-03-21T21:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000130",
    "numero_guia": "LG-00034",
    "fecha_evento": "2026-03-05T07:00:00",
    "estado": "CREADO",
    "ciudad": "bogota",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000131",
    "numero_guia": "LG-00034",
    "fecha_evento": "2026-03-05T11:00:00",
    "estado": "recogido",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000132",
    "numero_guia": "LG-00034",
    "fecha_evento": "2026-03-05T23:00:00",
    "estado": "en_transito",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000133",
    "numero_guia": "LG-00034",
    "fecha_evento": "2026-03-06T19:00:00",
    "estado": "entregado",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000134",
    "numero_guia": "LG-00035",
    "fecha_evento": "2026-02-03T18:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000135",
    "numero_guia": "LG-00035",
    "fecha_evento": "2026-02-03T22:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000136",
    "numero_guia": "LG-00035",
    "fecha_evento": "2026-02-04T10:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000137",
    "numero_guia": "LG-00035",
    "fecha_evento": "2026-02-05T06:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000138",
    "numero_guia": "LG-00036",
    "fecha_evento": "2026-03-01T09:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000139",
    "numero_guia": "LG-00036",
    "fecha_evento": "2026-03-01T13:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000140",
    "numero_guia": "LG-00036",
    "fecha_evento": "2026-03-02T01:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "medellin",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000141",
    "numero_guia": "LG-00036",
    "fecha_evento": "2026-03-02T21:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000142",
    "numero_guia": "LG-00037",
    "fecha_evento": "2026-02-04T11:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000143",
    "numero_guia": "LG-00037",
    "fecha_evento": "2026-02-04T15:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000144",
    "numero_guia": "LG-00037",
    "fecha_evento": "2026-02-05T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000145",
    "numero_guia": "LG-00037",
    "fecha_evento": "2026-02-05T23:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000146",
    "numero_guia": "LG-00038",
    "fecha_evento": "2026-03-15T13:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000147",
    "numero_guia": "LG-00038",
    "fecha_evento": "2026-03-15T17:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000148",
    "numero_guia": "LG-00038",
    "fecha_evento": "2026-03-16T05:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000149",
    "numero_guia": "LG-00038",
    "fecha_evento": "2026-03-17T01:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000150",
    "numero_guia": "LG-00039",
    "fecha_evento": "2026-02-15T16:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000151",
    "numero_guia": "LG-00039",
    "fecha_evento": "2026-02-15T20:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000152",
    "numero_guia": "LG-00039",
    "fecha_evento": "2026-02-16T08:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "barranquilla",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000153",
    "numero_guia": "LG-00040",
    "fecha_evento": "2026-03-16T16:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000154",
    "numero_guia": "LG-00040",
    "fecha_evento": "2026-03-16T20:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000155",
    "numero_guia": "LG-00040",
    "fecha_evento": "2026-03-17T08:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000156",
    "numero_guia": "LG-00040",
    "fecha_evento": "2026-03-18T04:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000157",
    "numero_guia": "LG-00041",
    "fecha_evento": "2026-02-04T11:00:00",
    "estado": "CREADO",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000158",
    "numero_guia": "LG-00041",
    "fecha_evento": "2026-02-04T15:00:00",
    "estado": "recogido",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000159",
    "numero_guia": "LG-00041",
    "fecha_evento": "2026-02-05T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Pereira",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000160",
    "numero_guia": "LG-00041",
    "fecha_evento": "2026-02-05T23:00:00",
    "estado": "entregado",
    "ciudad": "Pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000161",
    "numero_guia": "LG-00042",
    "fecha_evento": "2026-02-12T09:00:00",
    "estado": "CREADO",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000162",
    "numero_guia": "LG-00042",
    "fecha_evento": "2026-02-12T13:00:00",
    "estado": "recogido",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000163",
    "numero_guia": "LG-00042",
    "fecha_evento": "2026-02-13T01:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000164",
    "numero_guia": "LG-00042",
    "fecha_evento": "2026-02-13T21:00:00",
    "estado": "entregado",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000165",
    "numero_guia": "LG-00043",
    "fecha_evento": "2026-01-14T06:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000166",
    "numero_guia": "LG-00043",
    "fecha_evento": "2026-01-14T10:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000167",
    "numero_guia": "LG-00043",
    "fecha_evento": "2026-01-14T22:00:00",
    "estado": "en_transito",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000168",
    "numero_guia": "LG-00043",
    "fecha_evento": "2026-01-15T18:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000169",
    "numero_guia": "LG-00044",
    "fecha_evento": "2026-02-02T13:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000170",
    "numero_guia": "LG-00044",
    "fecha_evento": "2026-02-02T17:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000171",
    "numero_guia": "LG-00044",
    "fecha_evento": "2026-02-03T05:00:00",
    "estado": "en_transito",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000172",
    "numero_guia": "lg-00044",
    "fecha_evento": "2026-02-04T01:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000173",
    "numero_guia": "LG-00045",
    "fecha_evento": "2026-02-05T14:00:00",
    "estado": "CREADO",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000174",
    "numero_guia": "LG-00045",
    "fecha_evento": "2026-02-05T18:00:00",
    "estado": "recogido",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000175",
    "numero_guia": "LG-00045",
    "fecha_evento": "2026-02-06T06:00:00",
    "estado": "en_transito",
    "ciudad": "armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000176",
    "numero_guia": "LG-00045",
    "fecha_evento": "2026-02-07T02:00:00",
    "estado": "entregado",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000177",
    "numero_guia": "LG-00046",
    "fecha_evento": "2026-03-20T07:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000178",
    "numero_guia": "LG-00046",
    "fecha_evento": "2026-03-20T11:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000179",
    "numero_guia": "LG-00046",
    "fecha_evento": "2026-03-20T23:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000180",
    "numero_guia": "LG-00046",
    "fecha_evento": "2026-03-21T19:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000181",
    "numero_guia": "LG-00047",
    "fecha_evento": "2026-03-09T14:00:00",
    "estado": "CREADO",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000182",
    "numero_guia": "LG-00047",
    "fecha_evento": "2026-03-09T18:00:00",
    "estado": "recogido",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000183",
    "numero_guia": "LG-00047",
    "fecha_evento": "2026-03-10T06:00:00",
    "estado": "en_transito",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000184",
    "numero_guia": "LG-00047",
    "fecha_evento": "2026-03-11T02:00:00",
    "estado": "entregado",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000185",
    "numero_guia": "LG-00048",
    "fecha_evento": "2026-01-28T18:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000186",
    "numero_guia": "LG-00048",
    "fecha_evento": "2026-01-28T22:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000187",
    "numero_guia": "LG-00048",
    "fecha_evento": "2026-01-29T10:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000188",
    "numero_guia": "LG-00048",
    "fecha_evento": "2026-01-30T06:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000189",
    "numero_guia": "LG-00049",
    "fecha_evento": "2026-03-19T14:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000190",
    "numero_guia": "LG-00049",
    "fecha_evento": "2026-03-19T18:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000191",
    "numero_guia": "LG-00049",
    "fecha_evento": "2026-03-20T06:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000192",
    "numero_guia": "LG-00049",
    "fecha_evento": "2026-03-21T02:00:00",
    "estado": "entregado",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000193",
    "numero_guia": "LG-00050",
    "fecha_evento": "2026-03-11T17:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000194",
    "numero_guia": "LG-00050",
    "fecha_evento": "2026-03-11T21:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000195",
    "numero_guia": "LG-00050",
    "fecha_evento": "2026-03-12T09:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000196",
    "numero_guia": "LG-00050",
    "fecha_evento": "2026-03-13T05:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000197",
    "numero_guia": "LG-00051",
    "fecha_evento": "2026-02-08T09:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000198",
    "numero_guia": "LG-00051",
    "fecha_evento": "2026-02-08T13:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000199",
    "numero_guia": "LG-00051",
    "fecha_evento": "2026-02-09T01:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000200",
    "numero_guia": "LG-00051",
    "fecha_evento": "2026-02-09T21:00:00",
    "estado": "entregado",
    "ciudad": "barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000201",
    "numero_guia": "LG-00052",
    "fecha_evento": "2026-01-01T06:00:00",
    "estado": "CREADO",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000202",
    "numero_guia": "LG-00052",
    "fecha_evento": "2026-01-01T10:00:00",
    "estado": "recogido",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000203",
    "numero_guia": "LG-00052",
    "fecha_evento": "2026-01-01T22:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Manizales",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000204",
    "numero_guia": "LG-00052",
    "fecha_evento": "2026-01-02T18:00:00",
    "estado": "entregado",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000205",
    "numero_guia": "LG-00053",
    "fecha_evento": "2026-02-24T16:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000206",
    "numero_guia": "LG-00053",
    "fecha_evento": "2026-02-24T20:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000207",
    "numero_guia": "LG-00053",
    "fecha_evento": "2026-02-25T08:00:00",
    "estado": "en_transito",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000208",
    "numero_guia": "LG-00053",
    "fecha_evento": "2026-02-26T04:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000209",
    "numero_guia": "LG-00054",
    "fecha_evento": "2026-02-16T17:00:00",
    "estado": "CREADO",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000210",
    "numero_guia": "LG-00054",
    "fecha_evento": "2026-02-16T21:00:00",
    "estado": "recogido",
    "ciudad": "CALI",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000211",
    "numero_guia": "LG-00054",
    "fecha_evento": "2026-02-17T09:00:00",
    "estado": "en_transito",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000212",
    "numero_guia": "LG-00054",
    "fecha_evento": "2026-02-18T05:00:00",
    "estado": "entregado",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000213",
    "numero_guia": "LG-00055",
    "fecha_evento": "2026-03-28T15:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000214",
    "numero_guia": "LG-00055",
    "fecha_evento": "2026-03-28T19:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000215",
    "numero_guia": "lg-00055",
    "fecha_evento": "2026-03-29T07:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000216",
    "numero_guia": "LG-00055",
    "fecha_evento": "2026-03-30T03:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000217",
    "numero_guia": "LG-00056",
    "fecha_evento": "2026-02-16T12:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000218",
    "numero_guia": "LG-00056",
    "fecha_evento": "2026-02-16T16:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000219",
    "numero_guia": "LG-00056",
    "fecha_evento": "2026-02-17T04:00:00",
    "estado": "en_transito",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000220",
    "numero_guia": "LG-00056",
    "fecha_evento": "2026-02-18T00:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000221",
    "numero_guia": "LG-00057",
    "fecha_evento": "2026-02-28T12:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000222",
    "numero_guia": "LG-00057",
    "fecha_evento": "2026-02-28T16:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000223",
    "numero_guia": "LG-00057",
    "fecha_evento": "2026-03-01T04:00:00",
    "estado": "en_transito",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000224",
    "numero_guia": "LG-00057",
    "fecha_evento": "2026-03-02T00:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000225",
    "numero_guia": "LG-00058",
    "fecha_evento": "2026-02-05T10:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000226",
    "numero_guia": "LG-00058",
    "fecha_evento": "2026-02-05T14:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000227",
    "numero_guia": "LG-00058",
    "fecha_evento": "2026-02-06T02:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cartagena",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000228",
    "numero_guia": "LG-00058",
    "fecha_evento": "2026-02-06T22:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000229",
    "numero_guia": "LG-00059",
    "fecha_evento": "2026-01-20T11:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000230",
    "numero_guia": "LG-00059",
    "fecha_evento": "2026-01-20T15:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000231",
    "numero_guia": "LG-00059",
    "fecha_evento": "2026-01-21T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000232",
    "numero_guia": "LG-00060",
    "fecha_evento": "2026-02-12T17:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000233",
    "numero_guia": "LG-00060",
    "fecha_evento": "2026-02-12T21:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000234",
    "numero_guia": "LG-00060",
    "fecha_evento": "2026-02-13T09:00:00",
    "estado": "en_transito",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000235",
    "numero_guia": "LG-00060",
    "fecha_evento": "2026-02-14T05:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000236",
    "numero_guia": "LG-00061",
    "fecha_evento": "2026-03-04T09:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000237",
    "numero_guia": "LG-00061",
    "fecha_evento": "2026-03-04T13:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000238",
    "numero_guia": "LG-00061",
    "fecha_evento": "2026-03-05T01:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000239",
    "numero_guia": "LG-00061",
    "fecha_evento": "2026-03-05T21:00:00",
    "estado": "entregado",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000240",
    "numero_guia": "LG-00062",
    "fecha_evento": "2026-01-05T14:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000241",
    "numero_guia": "LG-00062",
    "fecha_evento": "2026-01-05T18:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000242",
    "numero_guia": "LG-00062",
    "fecha_evento": "2026-01-06T06:00:00",
    "estado": "en_transito",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000243",
    "numero_guia": "LG-00062",
    "fecha_evento": "2026-01-07T02:00:00",
    "estado": "entregado",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000244",
    "numero_guia": "LG-00063",
    "fecha_evento": "2026-03-19T14:00:00",
    "estado": "CREADO",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000245",
    "numero_guia": "LG-00063",
    "fecha_evento": "2026-03-19T18:00:00",
    "estado": "recogido",
    "ciudad": "Pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000246",
    "numero_guia": "LG-00063",
    "fecha_evento": "2026-03-20T06:00:00",
    "estado": "en_transito",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000247",
    "numero_guia": "LG-00063",
    "fecha_evento": "2026-03-21T02:00:00",
    "estado": "entregado",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000248",
    "numero_guia": "LG-00064",
    "fecha_evento": "2026-02-23T12:00:00",
    "estado": "CREADO",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000249",
    "numero_guia": "LG-00064",
    "fecha_evento": "2026-02-23T16:00:00",
    "estado": "recogido",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000250",
    "numero_guia": "LG-00064",
    "fecha_evento": "2026-02-24T04:00:00",
    "estado": "en_transito",
    "ciudad": "Cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000251",
    "numero_guia": "LG-00064",
    "fecha_evento": "2026-02-25T00:00:00",
    "estado": "entregado",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000252",
    "numero_guia": "LG-00065",
    "fecha_evento": "2026-03-22T18:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000253",
    "numero_guia": "LG-00065",
    "fecha_evento": "2026-03-22T22:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000254",
    "numero_guia": "LG-00065",
    "fecha_evento": "2026-03-23T10:00:00",
    "estado": "en_transito",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000255",
    "numero_guia": "LG-00065",
    "fecha_evento": "2026-03-24T06:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000256",
    "numero_guia": "LG-00066",
    "fecha_evento": "2026-03-25T16:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000257",
    "numero_guia": "LG-00066",
    "fecha_evento": "2026-03-25T20:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000258",
    "numero_guia": "lg-00066",
    "fecha_evento": "2026-03-26T08:00:00",
    "estado": "en_transito",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000259",
    "numero_guia": "LG-00067",
    "fecha_evento": "2026-02-03T07:00:00",
    "estado": "CREADO",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000260",
    "numero_guia": "LG-00067",
    "fecha_evento": "2026-02-03T11:00:00",
    "estado": "recogido",
    "ciudad": "armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000261",
    "numero_guia": "LG-00067",
    "fecha_evento": "2026-02-03T23:00:00",
    "estado": "en_transito",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000262",
    "numero_guia": "LG-00067",
    "fecha_evento": "2026-02-04T19:00:00",
    "estado": "entregado",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000263",
    "numero_guia": "LG-00068",
    "fecha_evento": "2026-03-01T07:00:00",
    "estado": "CREADO",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000264",
    "numero_guia": "LG-00068",
    "fecha_evento": "2026-03-01T11:00:00",
    "estado": "recogido",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000265",
    "numero_guia": "LG-00068",
    "fecha_evento": "2026-03-01T23:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Pereira",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000266",
    "numero_guia": "LG-00069",
    "fecha_evento": "2026-03-13T09:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000267",
    "numero_guia": "LG-00069",
    "fecha_evento": "2026-03-13T13:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000268",
    "numero_guia": "LG-00069",
    "fecha_evento": "2026-03-14T01:00:00",
    "estado": "en_transito",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000269",
    "numero_guia": "LG-00069",
    "fecha_evento": "2026-03-14T21:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000270",
    "numero_guia": "LG-00070",
    "fecha_evento": "2026-03-08T18:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000271",
    "numero_guia": "LG-00070",
    "fecha_evento": "2026-03-08T22:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000272",
    "numero_guia": "LG-00070",
    "fecha_evento": "2026-03-09T10:00:00",
    "estado": "en_transito",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000273",
    "numero_guia": "LG-00070",
    "fecha_evento": "2026-03-10T06:00:00",
    "estado": "entregado",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000274",
    "numero_guia": "LG-00071",
    "fecha_evento": "2026-02-18T07:00:00",
    "estado": "CREADO",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000275",
    "numero_guia": "LG-00071",
    "fecha_evento": "2026-02-18T11:00:00",
    "estado": "recogido",
    "ciudad": "Bogotá",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000276",
    "numero_guia": "LG-00071",
    "fecha_evento": "2026-02-18T23:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000277",
    "numero_guia": "LG-00071",
    "fecha_evento": "2026-02-19T19:00:00",
    "estado": "entregado",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000278",
    "numero_guia": "LG-00072",
    "fecha_evento": "2026-02-18T09:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000279",
    "numero_guia": "LG-00072",
    "fecha_evento": "2026-02-18T13:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000280",
    "numero_guia": "LG-00072",
    "fecha_evento": "2026-02-19T01:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Armenia",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000281",
    "numero_guia": "LG-00072",
    "fecha_evento": "2026-02-19T21:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000282",
    "numero_guia": "LG-00073",
    "fecha_evento": "2026-02-28T15:00:00",
    "estado": "CREADO",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000283",
    "numero_guia": "LG-00073",
    "fecha_evento": "2026-02-28T19:00:00",
    "estado": "recogido",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000284",
    "numero_guia": "LG-00073",
    "fecha_evento": "2026-03-01T07:00:00",
    "estado": "en_transito",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000285",
    "numero_guia": "LG-00073",
    "fecha_evento": "2026-03-02T03:00:00",
    "estado": "entregado",
    "ciudad": "Bogotá",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000286",
    "numero_guia": "LG-00074",
    "fecha_evento": "2026-02-22T10:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000287",
    "numero_guia": "LG-00074",
    "fecha_evento": "2026-02-22T14:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000288",
    "numero_guia": "LG-00074",
    "fecha_evento": "2026-02-23T02:00:00",
    "estado": "en_transito",
    "ciudad": "cartagena",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000289",
    "numero_guia": "LG-00074",
    "fecha_evento": "2026-02-23T22:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000290",
    "numero_guia": "LG-00075",
    "fecha_evento": "2026-02-26T18:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000291",
    "numero_guia": "LG-00075",
    "fecha_evento": "2026-02-26T22:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000292",
    "numero_guia": "LG-00075",
    "fecha_evento": "2026-02-27T10:00:00",
    "estado": "en_transito",
    "ciudad": "cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000293",
    "numero_guia": "LG-00075",
    "fecha_evento": "2026-02-28T06:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000294",
    "numero_guia": "LG-00076",
    "fecha_evento": "2026-02-07T11:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000295",
    "numero_guia": "LG-00076",
    "fecha_evento": "2026-02-07T15:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000296",
    "numero_guia": "LG-00076",
    "fecha_evento": "2026-02-08T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000297",
    "numero_guia": "LG-00076",
    "fecha_evento": "2026-02-08T23:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000298",
    "numero_guia": "LG-00077",
    "fecha_evento": "2026-01-30T12:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000299",
    "numero_guia": "LG-00077",
    "fecha_evento": "2026-01-30T16:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000300",
    "numero_guia": "LG-00077",
    "fecha_evento": "2026-01-31T04:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000301",
    "numero_guia": "lg-00077",
    "fecha_evento": "2026-02-01T00:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000302",
    "numero_guia": "LG-00078",
    "fecha_evento": "2026-02-01T08:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000303",
    "numero_guia": "LG-00078",
    "fecha_evento": "2026-02-01T12:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000304",
    "numero_guia": "LG-00078",
    "fecha_evento": "2026-02-02T00:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000305",
    "numero_guia": "LG-00078",
    "fecha_evento": "2026-02-02T20:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000306",
    "numero_guia": "LG-00079",
    "fecha_evento": "2026-02-18T16:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000307",
    "numero_guia": "LG-00079",
    "fecha_evento": "2026-02-18T20:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000308",
    "numero_guia": "LG-00079",
    "fecha_evento": "2026-02-19T08:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cartagena",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000309",
    "numero_guia": "LG-00079",
    "fecha_evento": "2026-02-20T04:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000310",
    "numero_guia": "LG-00079",
    "fecha_evento": "2026-03-27T15:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000311",
    "numero_guia": "LG-00079",
    "fecha_evento": "2026-03-27T19:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000312",
    "numero_guia": "LG-00079",
    "fecha_evento": "2026-03-28T07:00:00",
    "estado": "en_transito",
    "ciudad": "cartagena",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000313",
    "numero_guia": "LG-00079",
    "fecha_evento": "2026-03-29T03:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000314",
    "numero_guia": "LG-00081",
    "fecha_evento": "2026-02-01T14:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000315",
    "numero_guia": "LG-00081",
    "fecha_evento": "2026-02-01T18:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000316",
    "numero_guia": "LG-00081",
    "fecha_evento": "2026-02-02T06:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000317",
    "numero_guia": "LG-00081",
    "fecha_evento": "2026-02-03T02:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000318",
    "numero_guia": "LG-00082",
    "fecha_evento": "2026-03-02T08:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000319",
    "numero_guia": "LG-00082",
    "fecha_evento": "2026-03-02T12:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000320",
    "numero_guia": "LG-00082",
    "fecha_evento": "2026-03-03T00:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000321",
    "numero_guia": "LG-00082",
    "fecha_evento": "2026-03-03T20:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000322",
    "numero_guia": "LG-00083",
    "fecha_evento": "2026-02-14T16:00:00",
    "estado": "CREADO",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000323",
    "numero_guia": "LG-00083",
    "fecha_evento": "2026-02-14T20:00:00",
    "estado": "recogido",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000324",
    "numero_guia": "LG-00083",
    "fecha_evento": "2026-02-15T08:00:00",
    "estado": "en_transito",
    "ciudad": "CALI",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000325",
    "numero_guia": "LG-00083",
    "fecha_evento": "2026-02-16T04:00:00",
    "estado": "entregado",
    "ciudad": "CALI",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000326",
    "numero_guia": "LG-00084",
    "fecha_evento": "2026-01-20T13:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000327",
    "numero_guia": "LG-00084",
    "fecha_evento": "2026-01-20T17:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000328",
    "numero_guia": "LG-00084",
    "fecha_evento": "2026-01-21T05:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000329",
    "numero_guia": "LG-00084",
    "fecha_evento": "2026-01-22T01:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000330",
    "numero_guia": "LG-00085",
    "fecha_evento": "2026-01-31T08:00:00",
    "estado": "CREADO",
    "ciudad": "Bogotá",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000331",
    "numero_guia": "LG-00085",
    "fecha_evento": "2026-01-31T12:00:00",
    "estado": "recogido",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000332",
    "numero_guia": "LG-00085",
    "fecha_evento": "2026-02-01T00:00:00",
    "estado": "en_transito",
    "ciudad": "Bogotá",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000333",
    "numero_guia": "LG-00085",
    "fecha_evento": "2026-02-01T20:00:00",
    "estado": "entregado",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000334",
    "numero_guia": "LG-00086",
    "fecha_evento": "2026-02-26T13:00:00",
    "estado": "CREADO",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000335",
    "numero_guia": "LG-00086",
    "fecha_evento": "2026-02-26T17:00:00",
    "estado": "recogido",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000336",
    "numero_guia": "LG-00086",
    "fecha_evento": "2026-02-27T05:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000337",
    "numero_guia": "LG-00086",
    "fecha_evento": "2026-02-28T01:00:00",
    "estado": "entregado",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000338",
    "numero_guia": "LG-00087",
    "fecha_evento": "2026-03-11T14:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000339",
    "numero_guia": "LG-00087",
    "fecha_evento": "2026-03-11T18:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000340",
    "numero_guia": "LG-00087",
    "fecha_evento": "2026-03-12T06:00:00",
    "estado": "en_transito",
    "ciudad": "pereira",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000341",
    "numero_guia": "LG-00087",
    "fecha_evento": "2026-03-13T02:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000342",
    "numero_guia": "LG-00088",
    "fecha_evento": "2026-01-14T17:00:00",
    "estado": "CREADO",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000343",
    "numero_guia": "LG-00088",
    "fecha_evento": "2026-01-14T21:00:00",
    "estado": "recogido",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000344",
    "numero_guia": "lg-00088",
    "fecha_evento": "2026-01-15T09:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000345",
    "numero_guia": "LG-00088",
    "fecha_evento": "2026-01-16T05:00:00",
    "estado": "entregado",
    "ciudad": "Cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000346",
    "numero_guia": "LG-00089",
    "fecha_evento": "2026-03-19T14:00:00",
    "estado": "CREADO",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000347",
    "numero_guia": "LG-00089",
    "fecha_evento": "2026-03-19T18:00:00",
    "estado": "recogido",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000348",
    "numero_guia": "LG-00089",
    "fecha_evento": "2026-03-20T06:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "CALI",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000349",
    "numero_guia": "LG-00089",
    "fecha_evento": "2026-03-21T02:00:00",
    "estado": "entregado",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000350",
    "numero_guia": "LG-00090",
    "fecha_evento": "2026-03-17T13:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000351",
    "numero_guia": "LG-00090",
    "fecha_evento": "2026-03-17T17:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000352",
    "numero_guia": "LG-00090",
    "fecha_evento": "2026-03-18T05:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000353",
    "numero_guia": "LG-00090",
    "fecha_evento": "2026-03-19T01:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000354",
    "numero_guia": "LG-00091",
    "fecha_evento": "2026-03-18T11:00:00",
    "estado": "CREADO",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000355",
    "numero_guia": "LG-00091",
    "fecha_evento": "2026-03-18T15:00:00",
    "estado": "recogido",
    "ciudad": "Pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000356",
    "numero_guia": "LG-00091",
    "fecha_evento": "2026-03-19T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Pereira",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000357",
    "numero_guia": "LG-00091",
    "fecha_evento": "2026-03-19T23:00:00",
    "estado": "entregado",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000358",
    "numero_guia": "LG-00092",
    "fecha_evento": "2026-02-17T12:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000359",
    "numero_guia": "LG-00092",
    "fecha_evento": "2026-02-17T16:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000360",
    "numero_guia": "LG-00092",
    "fecha_evento": "2026-02-18T04:00:00",
    "estado": "en_transito",
    "ciudad": "manizales",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000361",
    "numero_guia": "LG-00092",
    "fecha_evento": "2026-02-19T00:00:00",
    "estado": "entregado",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000362",
    "numero_guia": "LG-00093",
    "fecha_evento": "2026-01-02T11:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000363",
    "numero_guia": "LG-00093",
    "fecha_evento": "2026-01-02T15:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000364",
    "numero_guia": "LG-00093",
    "fecha_evento": "2026-01-03T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000365",
    "numero_guia": "LG-00093",
    "fecha_evento": "2026-01-03T23:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000366",
    "numero_guia": "LG-00094",
    "fecha_evento": "2026-02-02T06:00:00",
    "estado": "CREADO",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000367",
    "numero_guia": "LG-00094",
    "fecha_evento": "2026-02-02T10:00:00",
    "estado": "recogido",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000368",
    "numero_guia": "LG-00094",
    "fecha_evento": "2026-02-02T22:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000369",
    "numero_guia": "LG-00094",
    "fecha_evento": "2026-02-03T18:00:00",
    "estado": "entregado",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000370",
    "numero_guia": "LG-00095",
    "fecha_evento": "2026-02-07T08:00:00",
    "estado": "CREADO",
    "ciudad": "Manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000371",
    "numero_guia": "LG-00095",
    "fecha_evento": "2026-02-07T12:00:00",
    "estado": "recogido",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000372",
    "numero_guia": "LG-00095",
    "fecha_evento": "2026-02-08T00:00:00",
    "estado": "en_transito",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000373",
    "numero_guia": "LG-00095",
    "fecha_evento": "2026-02-08T20:00:00",
    "estado": "entregado",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000374",
    "numero_guia": "LG-00096",
    "fecha_evento": "2026-02-26T14:00:00",
    "estado": "CREADO",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000375",
    "numero_guia": "LG-00096",
    "fecha_evento": "2026-02-26T18:00:00",
    "estado": "recogido",
    "ciudad": "Cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000376",
    "numero_guia": "LG-00096",
    "fecha_evento": "2026-02-27T06:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000377",
    "numero_guia": "LG-00097",
    "fecha_evento": "2026-02-23T10:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000378",
    "numero_guia": "LG-00097",
    "fecha_evento": "2026-02-23T14:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000379",
    "numero_guia": "LG-00097",
    "fecha_evento": "2026-02-24T02:00:00",
    "estado": "en_transito",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000380",
    "numero_guia": "LG-00097",
    "fecha_evento": "2026-02-24T22:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000381",
    "numero_guia": "LG-00098",
    "fecha_evento": "2026-03-23T16:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000382",
    "numero_guia": "LG-00098",
    "fecha_evento": "2026-03-23T20:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000383",
    "numero_guia": "LG-00098",
    "fecha_evento": "2026-03-24T08:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000384",
    "numero_guia": "LG-00098",
    "fecha_evento": "2026-03-25T04:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000385",
    "numero_guia": "LG-00099",
    "fecha_evento": "2026-01-27T11:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000386",
    "numero_guia": "LG-00099",
    "fecha_evento": "2026-01-27T15:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000387",
    "numero_guia": "lg-00099",
    "fecha_evento": "2026-01-28T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000388",
    "numero_guia": "LG-00099",
    "fecha_evento": "2026-01-28T23:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000389",
    "numero_guia": "LG-00100",
    "fecha_evento": "2026-01-02T11:00:00",
    "estado": "CREADO",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000390",
    "numero_guia": "LG-00100",
    "fecha_evento": "2026-01-02T15:00:00",
    "estado": "recogido",
    "ciudad": "CALI",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000391",
    "numero_guia": "LG-00100",
    "fecha_evento": "2026-01-03T03:00:00",
    "estado": "en_transito",
    "ciudad": "CALI",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000392",
    "numero_guia": "LG-00100",
    "fecha_evento": "2026-01-03T23:00:00",
    "estado": "entregado",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000393",
    "numero_guia": "LG-00101",
    "fecha_evento": "2026-01-10T17:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000394",
    "numero_guia": "LG-00101",
    "fecha_evento": "2026-01-10T21:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000395",
    "numero_guia": "LG-00101",
    "fecha_evento": "2026-01-11T09:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Medellín",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000396",
    "numero_guia": "LG-00101",
    "fecha_evento": "2026-01-12T05:00:00",
    "estado": "entregado",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000397",
    "numero_guia": "LG-00102",
    "fecha_evento": "2026-02-19T10:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000398",
    "numero_guia": "LG-00102",
    "fecha_evento": "2026-02-19T14:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000399",
    "numero_guia": "LG-00102",
    "fecha_evento": "2026-02-20T02:00:00",
    "estado": "en_transito",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000400",
    "numero_guia": "LG-00102",
    "fecha_evento": "2026-02-20T22:00:00",
    "estado": "entregado",
    "ciudad": "barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000401",
    "numero_guia": "LG-00103",
    "fecha_evento": "2026-03-10T06:00:00",
    "estado": "CREADO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000402",
    "numero_guia": "LG-00103",
    "fecha_evento": "2026-03-10T10:00:00",
    "estado": "recogido",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000403",
    "numero_guia": "LG-00103",
    "fecha_evento": "2026-03-10T22:00:00",
    "estado": "en_transito",
    "ciudad": "Barranquilla",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000404",
    "numero_guia": "LG-00103",
    "fecha_evento": "2026-03-11T18:00:00",
    "estado": "entregado",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000405",
    "numero_guia": "LG-00104",
    "fecha_evento": "2026-01-27T10:00:00",
    "estado": "CREADO",
    "ciudad": "Cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000406",
    "numero_guia": "LG-00104",
    "fecha_evento": "2026-01-27T14:00:00",
    "estado": "recogido",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000407",
    "numero_guia": "LG-00104",
    "fecha_evento": "2026-01-28T02:00:00",
    "estado": "en_transito",
    "ciudad": "Cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000408",
    "numero_guia": "LG-00104",
    "fecha_evento": "2026-01-28T22:00:00",
    "estado": "entregado",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000409",
    "numero_guia": "LG-00105",
    "fecha_evento": "2026-02-07T18:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000410",
    "numero_guia": "LG-00105",
    "fecha_evento": "2026-02-07T22:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000411",
    "numero_guia": "LG-00105",
    "fecha_evento": "2026-02-08T10:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000412",
    "numero_guia": "LG-00105",
    "fecha_evento": "2026-02-09T06:00:00",
    "estado": "entregado",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000413",
    "numero_guia": "LG-00106",
    "fecha_evento": "2026-03-05T14:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000414",
    "numero_guia": "LG-00106",
    "fecha_evento": "2026-03-05T18:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000415",
    "numero_guia": "LG-00106",
    "fecha_evento": "2026-03-06T06:00:00",
    "estado": "en_transito",
    "ciudad": "barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000416",
    "numero_guia": "LG-00106",
    "fecha_evento": "2026-03-07T02:00:00",
    "estado": "entregado",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000417",
    "numero_guia": "LG-00107",
    "fecha_evento": "2026-03-30T12:00:00",
    "estado": "CREADO",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000418",
    "numero_guia": "LG-00107",
    "fecha_evento": "2026-03-30T16:00:00",
    "estado": "recogido",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000419",
    "numero_guia": "LG-00107",
    "fecha_evento": "2026-03-31T04:00:00",
    "estado": "en_transito",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000420",
    "numero_guia": "LG-00107",
    "fecha_evento": "2026-04-01T00:00:00",
    "estado": "entregado",
    "ciudad": "Pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000421",
    "numero_guia": "LG-00108",
    "fecha_evento": "2026-02-25T13:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000422",
    "numero_guia": "LG-00108",
    "fecha_evento": "2026-02-25T17:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000423",
    "numero_guia": "LG-00108",
    "fecha_evento": "2026-02-26T05:00:00",
    "estado": "en_transito",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000424",
    "numero_guia": "LG-00109",
    "fecha_evento": "2026-01-16T10:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000425",
    "numero_guia": "LG-00109",
    "fecha_evento": "2026-01-16T14:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000426",
    "numero_guia": "LG-00109",
    "fecha_evento": "2026-01-17T02:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000427",
    "numero_guia": "LG-00109",
    "fecha_evento": "2026-01-17T22:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000428",
    "numero_guia": "LG-00110",
    "fecha_evento": "2026-01-23T12:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000429",
    "numero_guia": "LG-00110",
    "fecha_evento": "2026-01-23T16:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000430",
    "numero_guia": "lg-00110",
    "fecha_evento": "2026-01-24T04:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "barranquilla",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000431",
    "numero_guia": "LG-00110",
    "fecha_evento": "2026-01-25T00:00:00",
    "estado": "entregado",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000432",
    "numero_guia": "LG-00111",
    "fecha_evento": "2026-01-26T07:00:00",
    "estado": "CREADO",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000433",
    "numero_guia": "LG-00111",
    "fecha_evento": "2026-01-26T11:00:00",
    "estado": "recogido",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000434",
    "numero_guia": "LG-00111",
    "fecha_evento": "2026-01-26T23:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Manizales",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000435",
    "numero_guia": "LG-00111",
    "fecha_evento": "2026-01-27T19:00:00",
    "estado": "entregado",
    "ciudad": "Manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000436",
    "numero_guia": "LG-00112",
    "fecha_evento": "2026-01-25T17:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000437",
    "numero_guia": "LG-00112",
    "fecha_evento": "2026-01-25T21:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000438",
    "numero_guia": "LG-00112",
    "fecha_evento": "2026-01-26T09:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "pereira",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000439",
    "numero_guia": "LG-00112",
    "fecha_evento": "2026-01-27T05:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000440",
    "numero_guia": "LG-00113",
    "fecha_evento": "2026-02-07T17:00:00",
    "estado": "CREADO",
    "ciudad": "armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000441",
    "numero_guia": "LG-00113",
    "fecha_evento": "2026-02-07T21:00:00",
    "estado": "recogido",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000442",
    "numero_guia": "LG-00113",
    "fecha_evento": "2026-02-08T09:00:00",
    "estado": "en_transito",
    "ciudad": "armenia",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000443",
    "numero_guia": "LG-00113",
    "fecha_evento": "2026-02-09T05:00:00",
    "estado": "entregado",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000444",
    "numero_guia": "LG-00114",
    "fecha_evento": "2026-02-23T07:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000445",
    "numero_guia": "LG-00114",
    "fecha_evento": "2026-02-23T11:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000446",
    "numero_guia": "LG-00114",
    "fecha_evento": "2026-02-23T23:00:00",
    "estado": "en_transito",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000447",
    "numero_guia": "LG-00114",
    "fecha_evento": "2026-02-24T19:00:00",
    "estado": "entregado",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000448",
    "numero_guia": "LG-00115",
    "fecha_evento": "2026-02-03T15:00:00",
    "estado": "CREADO",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000449",
    "numero_guia": "LG-00115",
    "fecha_evento": "2026-02-03T19:00:00",
    "estado": "recogido",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000450",
    "numero_guia": "LG-00115",
    "fecha_evento": "2026-02-04T07:00:00",
    "estado": "en_transito",
    "ciudad": "Manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000451",
    "numero_guia": "LG-00115",
    "fecha_evento": "2026-02-05T03:00:00",
    "estado": "entregado",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000452",
    "numero_guia": "LG-00116",
    "fecha_evento": "2026-02-04T18:00:00",
    "estado": "CREADO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000453",
    "numero_guia": "LG-00116",
    "fecha_evento": "2026-02-04T22:00:00",
    "estado": "recogido",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000454",
    "numero_guia": "LG-00116",
    "fecha_evento": "2026-02-05T10:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000455",
    "numero_guia": "LG-00116",
    "fecha_evento": "2026-02-06T06:00:00",
    "estado": "entregado",
    "ciudad": "Barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000456",
    "numero_guia": "LG-00117",
    "fecha_evento": "2026-01-08T06:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000457",
    "numero_guia": "LG-00117",
    "fecha_evento": "2026-01-08T10:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000458",
    "numero_guia": "LG-00117",
    "fecha_evento": "2026-01-08T22:00:00",
    "estado": "en_transito",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000459",
    "numero_guia": "LG-00118",
    "fecha_evento": "2026-02-26T18:00:00",
    "estado": "CREADO",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000460",
    "numero_guia": "LG-00118",
    "fecha_evento": "2026-02-26T22:00:00",
    "estado": "recogido",
    "ciudad": "Bogotá",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000461",
    "numero_guia": "LG-00118",
    "fecha_evento": "2026-02-27T10:00:00",
    "estado": "en_transito",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000462",
    "numero_guia": "LG-00118",
    "fecha_evento": "2026-02-28T06:00:00",
    "estado": "entregado",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000463",
    "numero_guia": "LG-00119",
    "fecha_evento": "2026-02-09T14:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000464",
    "numero_guia": "LG-00119",
    "fecha_evento": "2026-02-09T18:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000465",
    "numero_guia": "LG-00119",
    "fecha_evento": "2026-02-10T06:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000466",
    "numero_guia": "LG-00119",
    "fecha_evento": "2026-02-11T02:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000467",
    "numero_guia": "LG-00120",
    "fecha_evento": "2026-02-21T09:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000468",
    "numero_guia": "LG-00120",
    "fecha_evento": "2026-02-21T13:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000469",
    "numero_guia": "LG-00120",
    "fecha_evento": "2026-02-22T01:00:00",
    "estado": "en_transito",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000470",
    "numero_guia": "LG-00120",
    "fecha_evento": "2026-02-22T21:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000471",
    "numero_guia": "LG-00121",
    "fecha_evento": "2026-01-27T06:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000472",
    "numero_guia": "LG-00121",
    "fecha_evento": "2026-01-27T10:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000473",
    "numero_guia": "lg-00121",
    "fecha_evento": "2026-01-27T22:00:00",
    "estado": "en_transito",
    "ciudad": "Cartagena",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000474",
    "numero_guia": "LG-00121",
    "fecha_evento": "2026-01-28T18:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000475",
    "numero_guia": "LG-00122",
    "fecha_evento": "2026-03-17T09:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000476",
    "numero_guia": "LG-00122",
    "fecha_evento": "2026-03-17T13:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000477",
    "numero_guia": "LG-00122",
    "fecha_evento": "2026-03-18T01:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000478",
    "numero_guia": "LG-00122",
    "fecha_evento": "2026-03-18T21:00:00",
    "estado": "entregado",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000479",
    "numero_guia": "LG-00123",
    "fecha_evento": "2026-01-03T11:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000480",
    "numero_guia": "LG-00123",
    "fecha_evento": "2026-01-03T15:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000481",
    "numero_guia": "LG-00123",
    "fecha_evento": "2026-01-04T03:00:00",
    "estado": "en_transito",
    "ciudad": "pereira",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000482",
    "numero_guia": "LG-00123",
    "fecha_evento": "2026-01-04T23:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000483",
    "numero_guia": "LG-00124",
    "fecha_evento": "2026-01-08T08:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000484",
    "numero_guia": "LG-00124",
    "fecha_evento": "2026-01-08T12:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000485",
    "numero_guia": "LG-00124",
    "fecha_evento": "2026-01-09T00:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000486",
    "numero_guia": "LG-00124",
    "fecha_evento": "2026-01-09T20:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000487",
    "numero_guia": "LG-00125",
    "fecha_evento": "2026-03-04T06:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000488",
    "numero_guia": "LG-00125",
    "fecha_evento": "2026-03-04T10:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000489",
    "numero_guia": "LG-00125",
    "fecha_evento": "2026-03-04T22:00:00",
    "estado": "en_transito",
    "ciudad": "cartagena",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000490",
    "numero_guia": "LG-00125",
    "fecha_evento": "2026-03-05T18:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000491",
    "numero_guia": "LG-00126",
    "fecha_evento": "2026-03-05T12:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000492",
    "numero_guia": "LG-00126",
    "fecha_evento": "2026-03-05T16:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000493",
    "numero_guia": "LG-00126",
    "fecha_evento": "2026-03-06T04:00:00",
    "estado": "en_transito",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000494",
    "numero_guia": "LG-00126",
    "fecha_evento": "2026-03-07T00:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000495",
    "numero_guia": "LG-00127",
    "fecha_evento": "2026-03-29T16:00:00",
    "estado": "CREADO",
    "ciudad": "Manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000496",
    "numero_guia": "LG-00127",
    "fecha_evento": "2026-03-29T20:00:00",
    "estado": "recogido",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000497",
    "numero_guia": "LG-00127",
    "fecha_evento": "2026-03-30T08:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Manizales",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000498",
    "numero_guia": "LG-00127",
    "fecha_evento": "2026-03-31T04:00:00",
    "estado": "entregado",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000499",
    "numero_guia": "LG-00128",
    "fecha_evento": "2026-01-02T14:00:00",
    "estado": "CREADO",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000500",
    "numero_guia": "LG-00128",
    "fecha_evento": "2026-01-02T18:00:00",
    "estado": "recogido",
    "ciudad": "armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000501",
    "numero_guia": "LG-00128",
    "fecha_evento": "2026-01-03T06:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "armenia",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000502",
    "numero_guia": "LG-00128",
    "fecha_evento": "2026-01-04T02:00:00",
    "estado": "entregado",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000503",
    "numero_guia": "LG-00129",
    "fecha_evento": "2026-01-21T14:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000504",
    "numero_guia": "LG-00129",
    "fecha_evento": "2026-01-21T18:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000505",
    "numero_guia": "LG-00129",
    "fecha_evento": "2026-01-22T06:00:00",
    "estado": "en_transito",
    "ciudad": "cartagena",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000506",
    "numero_guia": "LG-00129",
    "fecha_evento": "2026-01-23T02:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000507",
    "numero_guia": "LG-00130",
    "fecha_evento": "2026-01-02T10:00:00",
    "estado": "CREADO",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000508",
    "numero_guia": "LG-00130",
    "fecha_evento": "2026-01-02T14:00:00",
    "estado": "recogido",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000509",
    "numero_guia": "LG-00130",
    "fecha_evento": "2026-01-03T02:00:00",
    "estado": "en_transito",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000510",
    "numero_guia": "LG-00130",
    "fecha_evento": "2026-01-03T22:00:00",
    "estado": "entregado",
    "ciudad": "Cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000511",
    "numero_guia": "LG-00131",
    "fecha_evento": "2026-02-19T15:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000512",
    "numero_guia": "LG-00131",
    "fecha_evento": "2026-02-19T19:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000513",
    "numero_guia": "LG-00131",
    "fecha_evento": "2026-02-20T07:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cartagena",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000514",
    "numero_guia": "LG-00131",
    "fecha_evento": "2026-02-21T03:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000515",
    "numero_guia": "LG-00132",
    "fecha_evento": "2026-03-24T14:00:00",
    "estado": "CREADO",
    "ciudad": "Bogotá",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000516",
    "numero_guia": "lg-00132",
    "fecha_evento": "2026-03-24T18:00:00",
    "estado": "recogido",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000517",
    "numero_guia": "LG-00132",
    "fecha_evento": "2026-03-25T06:00:00",
    "estado": "en_transito",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000518",
    "numero_guia": "LG-00132",
    "fecha_evento": "2026-03-26T02:00:00",
    "estado": "entregado",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000519",
    "numero_guia": "LG-00133",
    "fecha_evento": "2026-02-28T06:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000520",
    "numero_guia": "LG-00133",
    "fecha_evento": "2026-02-28T10:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000521",
    "numero_guia": "LG-00133",
    "fecha_evento": "2026-02-28T22:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000522",
    "numero_guia": "LG-00133",
    "fecha_evento": "2026-03-01T18:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000523",
    "numero_guia": "LG-00134",
    "fecha_evento": "2026-02-20T11:00:00",
    "estado": "CREADO",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000524",
    "numero_guia": "LG-00134",
    "fecha_evento": "2026-02-20T15:00:00",
    "estado": "recogido",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000525",
    "numero_guia": "LG-00134",
    "fecha_evento": "2026-02-21T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "bogota",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000526",
    "numero_guia": "LG-00135",
    "fecha_evento": "2026-01-10T17:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000527",
    "numero_guia": "LG-00135",
    "fecha_evento": "2026-01-10T21:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000528",
    "numero_guia": "LG-00135",
    "fecha_evento": "2026-01-11T09:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000529",
    "numero_guia": "LG-00135",
    "fecha_evento": "2026-01-12T05:00:00",
    "estado": "entregado",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000530",
    "numero_guia": "LG-00136",
    "fecha_evento": "2026-01-10T12:00:00",
    "estado": "CREADO",
    "ciudad": "Manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000531",
    "numero_guia": "LG-00136",
    "fecha_evento": "2026-01-10T16:00:00",
    "estado": "recogido",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000532",
    "numero_guia": "LG-00136",
    "fecha_evento": "2026-01-11T04:00:00",
    "estado": "en_transito",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000533",
    "numero_guia": "LG-00136",
    "fecha_evento": "2026-01-12T00:00:00",
    "estado": "entregado",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000534",
    "numero_guia": "LG-00137",
    "fecha_evento": "2026-02-19T07:00:00",
    "estado": "CREADO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000535",
    "numero_guia": "LG-00137",
    "fecha_evento": "2026-02-19T11:00:00",
    "estado": "recogido",
    "ciudad": "Barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000536",
    "numero_guia": "LG-00137",
    "fecha_evento": "2026-02-19T23:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000537",
    "numero_guia": "LG-00137",
    "fecha_evento": "2026-02-20T19:00:00",
    "estado": "entregado",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000538",
    "numero_guia": "LG-00138",
    "fecha_evento": "2026-01-01T11:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000539",
    "numero_guia": "LG-00138",
    "fecha_evento": "2026-01-01T15:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000540",
    "numero_guia": "LG-00138",
    "fecha_evento": "2026-01-02T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "manizales",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000541",
    "numero_guia": "LG-00138",
    "fecha_evento": "2026-01-02T23:00:00",
    "estado": "entregado",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000542",
    "numero_guia": "LG-00139",
    "fecha_evento": "2026-01-15T15:00:00",
    "estado": "CREADO",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000543",
    "numero_guia": "LG-00139",
    "fecha_evento": "2026-01-15T19:00:00",
    "estado": "recogido",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000544",
    "numero_guia": "LG-00139",
    "fecha_evento": "2026-01-16T07:00:00",
    "estado": "en_transito",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000545",
    "numero_guia": "LG-00139",
    "fecha_evento": "2026-01-17T03:00:00",
    "estado": "entregado",
    "ciudad": "Manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000546",
    "numero_guia": "LG-00140",
    "fecha_evento": "2026-01-17T08:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000547",
    "numero_guia": "LG-00140",
    "fecha_evento": "2026-01-17T12:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000548",
    "numero_guia": "LG-00140",
    "fecha_evento": "2026-01-18T00:00:00",
    "estado": "en_transito",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000549",
    "numero_guia": "LG-00140",
    "fecha_evento": "2026-01-18T20:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000550",
    "numero_guia": "LG-00141",
    "fecha_evento": "2026-02-07T17:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000551",
    "numero_guia": "LG-00141",
    "fecha_evento": "2026-02-07T21:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000552",
    "numero_guia": "LG-00141",
    "fecha_evento": "2026-02-08T09:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000553",
    "numero_guia": "LG-00141",
    "fecha_evento": "2026-02-09T05:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000554",
    "numero_guia": "LG-00142",
    "fecha_evento": "2026-02-04T07:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000555",
    "numero_guia": "LG-00142",
    "fecha_evento": "2026-02-04T11:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000556",
    "numero_guia": "LG-00142",
    "fecha_evento": "2026-02-04T23:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000557",
    "numero_guia": "LG-00142",
    "fecha_evento": "2026-02-05T19:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000558",
    "numero_guia": "LG-00143",
    "fecha_evento": "2026-03-01T07:00:00",
    "estado": "CREADO",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000559",
    "numero_guia": "lg-00143",
    "fecha_evento": "2026-03-01T11:00:00",
    "estado": "recogido",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000560",
    "numero_guia": "LG-00143",
    "fecha_evento": "2026-03-01T23:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "bogota",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000561",
    "numero_guia": "LG-00143",
    "fecha_evento": "2026-03-02T19:00:00",
    "estado": "entregado",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000562",
    "numero_guia": "LG-00144",
    "fecha_evento": "2026-01-02T15:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000563",
    "numero_guia": "LG-00144",
    "fecha_evento": "2026-01-02T19:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000564",
    "numero_guia": "LG-00144",
    "fecha_evento": "2026-01-03T07:00:00",
    "estado": "en_transito",
    "ciudad": "medellin",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000565",
    "numero_guia": "LG-00145",
    "fecha_evento": "2026-03-11T13:00:00",
    "estado": "CREADO",
    "ciudad": "Cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000566",
    "numero_guia": "LG-00145",
    "fecha_evento": "2026-03-11T17:00:00",
    "estado": "recogido",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000567",
    "numero_guia": "LG-00145",
    "fecha_evento": "2026-03-12T05:00:00",
    "estado": "en_transito",
    "ciudad": "Cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000568",
    "numero_guia": "LG-00145",
    "fecha_evento": "2026-03-13T01:00:00",
    "estado": "entregado",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000569",
    "numero_guia": "LG-00146",
    "fecha_evento": "2026-02-01T13:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000570",
    "numero_guia": "LG-00146",
    "fecha_evento": "2026-02-01T17:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000571",
    "numero_guia": "LG-00146",
    "fecha_evento": "2026-02-02T05:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000572",
    "numero_guia": "LG-00147",
    "fecha_evento": "2026-02-19T14:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000573",
    "numero_guia": "LG-00147",
    "fecha_evento": "2026-02-19T18:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000574",
    "numero_guia": "LG-00147",
    "fecha_evento": "2026-02-20T06:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000575",
    "numero_guia": "LG-00147",
    "fecha_evento": "2026-02-21T02:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000576",
    "numero_guia": "LG-00148",
    "fecha_evento": "2026-03-15T12:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000577",
    "numero_guia": "LG-00148",
    "fecha_evento": "2026-03-15T16:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000578",
    "numero_guia": "LG-00148",
    "fecha_evento": "2026-03-16T04:00:00",
    "estado": "en_transito",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000579",
    "numero_guia": "LG-00148",
    "fecha_evento": "2026-03-17T00:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000580",
    "numero_guia": "LG-00149",
    "fecha_evento": "2026-01-15T06:00:00",
    "estado": "CREADO",
    "ciudad": "Pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000581",
    "numero_guia": "LG-00149",
    "fecha_evento": "2026-01-15T10:00:00",
    "estado": "recogido",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000582",
    "numero_guia": "LG-00149",
    "fecha_evento": "2026-01-15T22:00:00",
    "estado": "en_transito",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000583",
    "numero_guia": "LG-00149",
    "fecha_evento": "2026-01-16T18:00:00",
    "estado": "entregado",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000584",
    "numero_guia": "LG-00150",
    "fecha_evento": "2026-01-02T13:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000585",
    "numero_guia": "LG-00150",
    "fecha_evento": "2026-01-02T17:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000586",
    "numero_guia": "LG-00150",
    "fecha_evento": "2026-01-03T05:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000587",
    "numero_guia": "LG-00150",
    "fecha_evento": "2026-01-04T01:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000588",
    "numero_guia": "LG-00151",
    "fecha_evento": "2026-03-08T08:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000589",
    "numero_guia": "LG-00151",
    "fecha_evento": "2026-03-08T12:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000590",
    "numero_guia": "LG-00151",
    "fecha_evento": "2026-03-09T00:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000591",
    "numero_guia": "LG-00151",
    "fecha_evento": "2026-03-09T20:00:00",
    "estado": "entregado",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000592",
    "numero_guia": "LG-00152",
    "fecha_evento": "2026-02-04T12:00:00",
    "estado": "CREADO",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000593",
    "numero_guia": "LG-00152",
    "fecha_evento": "2026-02-04T16:00:00",
    "estado": "recogido",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000594",
    "numero_guia": "LG-00152",
    "fecha_evento": "2026-02-05T04:00:00",
    "estado": "en_transito",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000595",
    "numero_guia": "LG-00152",
    "fecha_evento": "2026-02-06T00:00:00",
    "estado": "entregado",
    "ciudad": "Pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000596",
    "numero_guia": "LG-00153",
    "fecha_evento": "2026-01-11T10:00:00",
    "estado": "CREADO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000597",
    "numero_guia": "LG-00153",
    "fecha_evento": "2026-01-11T14:00:00",
    "estado": "recogido",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000598",
    "numero_guia": "LG-00153",
    "fecha_evento": "2026-01-12T02:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000599",
    "numero_guia": "LG-00153",
    "fecha_evento": "2026-01-12T22:00:00",
    "estado": "entregado",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000600",
    "numero_guia": "LG-00154",
    "fecha_evento": "2026-03-24T11:00:00",
    "estado": "CREADO",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000601",
    "numero_guia": "LG-00154",
    "fecha_evento": "2026-03-24T15:00:00",
    "estado": "recogido",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000602",
    "numero_guia": "lg-00154",
    "fecha_evento": "2026-03-25T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000603",
    "numero_guia": "LG-00155",
    "fecha_evento": "2026-02-20T14:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000604",
    "numero_guia": "LG-00155",
    "fecha_evento": "2026-02-20T18:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000605",
    "numero_guia": "LG-00155",
    "fecha_evento": "2026-02-21T06:00:00",
    "estado": "en_transito",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000606",
    "numero_guia": "LG-00155",
    "fecha_evento": "2026-02-22T02:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000607",
    "numero_guia": "LG-00156",
    "fecha_evento": "2026-01-23T15:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000608",
    "numero_guia": "LG-00156",
    "fecha_evento": "2026-01-23T19:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000609",
    "numero_guia": "LG-00156",
    "fecha_evento": "2026-01-24T07:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Armenia",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000610",
    "numero_guia": "LG-00156",
    "fecha_evento": "2026-01-25T03:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000611",
    "numero_guia": "LG-00157",
    "fecha_evento": "2026-01-08T13:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000612",
    "numero_guia": "LG-00157",
    "fecha_evento": "2026-01-08T17:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000613",
    "numero_guia": "LG-00157",
    "fecha_evento": "2026-01-09T05:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000614",
    "numero_guia": "LG-00157",
    "fecha_evento": "2026-01-10T01:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000615",
    "numero_guia": "LG-00158",
    "fecha_evento": "2026-02-11T08:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000616",
    "numero_guia": "LG-00158",
    "fecha_evento": "2026-02-11T12:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000617",
    "numero_guia": "LG-00158",
    "fecha_evento": "2026-02-12T00:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000618",
    "numero_guia": "LG-00158",
    "fecha_evento": "2026-02-12T20:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000619",
    "numero_guia": "LG-00159",
    "fecha_evento": "2026-02-06T12:00:00",
    "estado": "CREADO",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000620",
    "numero_guia": "LG-00159",
    "fecha_evento": "2026-02-06T16:00:00",
    "estado": "recogido",
    "ciudad": "CALI",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000621",
    "numero_guia": "LG-00159",
    "fecha_evento": "2026-02-07T04:00:00",
    "estado": "en_transito",
    "ciudad": "CALI",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000622",
    "numero_guia": "LG-00159",
    "fecha_evento": "2026-02-08T00:00:00",
    "estado": "entregado",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000623",
    "numero_guia": "LG-00159",
    "fecha_evento": "2026-03-08T11:00:00",
    "estado": "CREADO",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000624",
    "numero_guia": "LG-00159",
    "fecha_evento": "2026-03-08T15:00:00",
    "estado": "recogido",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000625",
    "numero_guia": "LG-00159",
    "fecha_evento": "2026-03-09T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000626",
    "numero_guia": "LG-00159",
    "fecha_evento": "2026-03-09T23:00:00",
    "estado": "entregado",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000627",
    "numero_guia": "LG-00161",
    "fecha_evento": "2026-02-03T18:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000628",
    "numero_guia": "LG-00161",
    "fecha_evento": "2026-02-03T22:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000629",
    "numero_guia": "LG-00161",
    "fecha_evento": "2026-02-04T10:00:00",
    "estado": "en_transito",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000630",
    "numero_guia": "LG-00162",
    "fecha_evento": "2026-01-02T07:00:00",
    "estado": "CREADO",
    "ciudad": "Cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000631",
    "numero_guia": "LG-00162",
    "fecha_evento": "2026-01-02T11:00:00",
    "estado": "recogido",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000632",
    "numero_guia": "LG-00162",
    "fecha_evento": "2026-01-02T23:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000633",
    "numero_guia": "LG-00162",
    "fecha_evento": "2026-01-03T19:00:00",
    "estado": "entregado",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000634",
    "numero_guia": "LG-00163",
    "fecha_evento": "2026-02-15T13:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000635",
    "numero_guia": "LG-00163",
    "fecha_evento": "2026-02-15T17:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000636",
    "numero_guia": "LG-00163",
    "fecha_evento": "2026-02-16T05:00:00",
    "estado": "en_transito",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000637",
    "numero_guia": "LG-00163",
    "fecha_evento": "2026-02-17T01:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000638",
    "numero_guia": "LG-00164",
    "fecha_evento": "2026-01-05T16:00:00",
    "estado": "CREADO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000639",
    "numero_guia": "LG-00164",
    "fecha_evento": "2026-01-05T20:00:00",
    "estado": "recogido",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000640",
    "numero_guia": "LG-00164",
    "fecha_evento": "2026-01-06T08:00:00",
    "estado": "en_transito",
    "ciudad": "Barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000641",
    "numero_guia": "LG-00164",
    "fecha_evento": "2026-01-07T04:00:00",
    "estado": "entregado",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000642",
    "numero_guia": "LG-00165",
    "fecha_evento": "2026-02-08T08:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000643",
    "numero_guia": "LG-00165",
    "fecha_evento": "2026-02-08T12:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000644",
    "numero_guia": "LG-00165",
    "fecha_evento": "2026-02-09T00:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cartagena",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000645",
    "numero_guia": "lg-00165",
    "fecha_evento": "2026-02-09T20:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000646",
    "numero_guia": "LG-00166",
    "fecha_evento": "2026-02-06T08:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000647",
    "numero_guia": "LG-00166",
    "fecha_evento": "2026-02-06T12:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000648",
    "numero_guia": "LG-00166",
    "fecha_evento": "2026-02-07T00:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000649",
    "numero_guia": "LG-00166",
    "fecha_evento": "2026-02-07T20:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000650",
    "numero_guia": "LG-00167",
    "fecha_evento": "2026-02-17T11:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000651",
    "numero_guia": "LG-00167",
    "fecha_evento": "2026-02-17T15:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000652",
    "numero_guia": "LG-00167",
    "fecha_evento": "2026-02-18T03:00:00",
    "estado": "en_transito",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000653",
    "numero_guia": "LG-00167",
    "fecha_evento": "2026-02-18T23:00:00",
    "estado": "entregado",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000654",
    "numero_guia": "LG-00168",
    "fecha_evento": "2026-03-08T18:00:00",
    "estado": "CREADO",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000655",
    "numero_guia": "LG-00168",
    "fecha_evento": "2026-03-08T22:00:00",
    "estado": "recogido",
    "ciudad": "Bogotá",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000656",
    "numero_guia": "LG-00168",
    "fecha_evento": "2026-03-09T10:00:00",
    "estado": "en_transito",
    "ciudad": "Bogotá",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000657",
    "numero_guia": "LG-00168",
    "fecha_evento": "2026-03-10T06:00:00",
    "estado": "entregado",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000658",
    "numero_guia": "LG-00169",
    "fecha_evento": "2026-02-22T15:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000659",
    "numero_guia": "LG-00169",
    "fecha_evento": "2026-02-22T19:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000660",
    "numero_guia": "LG-00169",
    "fecha_evento": "2026-02-23T07:00:00",
    "estado": "en_transito",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000661",
    "numero_guia": "LG-00169",
    "fecha_evento": "2026-02-24T03:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000662",
    "numero_guia": "LG-00170",
    "fecha_evento": "2026-02-04T09:00:00",
    "estado": "CREADO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000663",
    "numero_guia": "LG-00170",
    "fecha_evento": "2026-02-04T13:00:00",
    "estado": "recogido",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000664",
    "numero_guia": "LG-00170",
    "fecha_evento": "2026-02-05T01:00:00",
    "estado": "en_transito",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000665",
    "numero_guia": "LG-00171",
    "fecha_evento": "2026-03-10T06:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000666",
    "numero_guia": "LG-00171",
    "fecha_evento": "2026-03-10T10:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000667",
    "numero_guia": "LG-00171",
    "fecha_evento": "2026-03-10T22:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "manizales",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000668",
    "numero_guia": "LG-00171",
    "fecha_evento": "2026-03-11T18:00:00",
    "estado": "entregado",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000669",
    "numero_guia": "LG-00172",
    "fecha_evento": "2026-03-20T16:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000670",
    "numero_guia": "LG-00172",
    "fecha_evento": "2026-03-20T20:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000671",
    "numero_guia": "LG-00172",
    "fecha_evento": "2026-03-21T08:00:00",
    "estado": "en_transito",
    "ciudad": "manizales",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000672",
    "numero_guia": "LG-00172",
    "fecha_evento": "2026-03-22T04:00:00",
    "estado": "entregado",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000673",
    "numero_guia": "LG-00173",
    "fecha_evento": "2026-01-15T14:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000674",
    "numero_guia": "LG-00173",
    "fecha_evento": "2026-01-15T18:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000675",
    "numero_guia": "LG-00173",
    "fecha_evento": "2026-01-16T06:00:00",
    "estado": "en_transito",
    "ciudad": "medellin",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000676",
    "numero_guia": "LG-00173",
    "fecha_evento": "2026-01-17T02:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000677",
    "numero_guia": "LG-00174",
    "fecha_evento": "2026-01-10T08:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000678",
    "numero_guia": "LG-00174",
    "fecha_evento": "2026-01-10T12:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000679",
    "numero_guia": "LG-00174",
    "fecha_evento": "2026-01-11T00:00:00",
    "estado": "en_transito",
    "ciudad": "Medellín",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000680",
    "numero_guia": "LG-00174",
    "fecha_evento": "2026-01-11T20:00:00",
    "estado": "entregado",
    "ciudad": "Medellín",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000681",
    "numero_guia": "LG-00175",
    "fecha_evento": "2026-03-28T11:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000682",
    "numero_guia": "LG-00175",
    "fecha_evento": "2026-03-28T15:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000683",
    "numero_guia": "LG-00175",
    "fecha_evento": "2026-03-29T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000684",
    "numero_guia": "LG-00175",
    "fecha_evento": "2026-03-29T23:00:00",
    "estado": "entregado",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000685",
    "numero_guia": "LG-00176",
    "fecha_evento": "2026-03-07T10:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000686",
    "numero_guia": "LG-00176",
    "fecha_evento": "2026-03-07T14:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000687",
    "numero_guia": "LG-00176",
    "fecha_evento": "2026-03-08T02:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000688",
    "numero_guia": "lg-00176",
    "fecha_evento": "2026-03-08T22:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000689",
    "numero_guia": "LG-00177",
    "fecha_evento": "2026-02-13T12:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000690",
    "numero_guia": "LG-00177",
    "fecha_evento": "2026-02-13T16:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000691",
    "numero_guia": "LG-00177",
    "fecha_evento": "2026-02-14T04:00:00",
    "estado": "en_transito",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000692",
    "numero_guia": "LG-00178",
    "fecha_evento": "2026-01-25T07:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000693",
    "numero_guia": "LG-00178",
    "fecha_evento": "2026-01-25T11:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000694",
    "numero_guia": "LG-00178",
    "fecha_evento": "2026-01-25T23:00:00",
    "estado": "en_transito",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000695",
    "numero_guia": "LG-00178",
    "fecha_evento": "2026-01-26T19:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000696",
    "numero_guia": "LG-00179",
    "fecha_evento": "2026-03-23T10:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000697",
    "numero_guia": "LG-00179",
    "fecha_evento": "2026-03-23T14:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000698",
    "numero_guia": "LG-00179",
    "fecha_evento": "2026-03-24T02:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "medellin",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000699",
    "numero_guia": "LG-00179",
    "fecha_evento": "2026-03-24T22:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000700",
    "numero_guia": "LG-00180",
    "fecha_evento": "2026-02-28T11:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000701",
    "numero_guia": "LG-00180",
    "fecha_evento": "2026-02-28T15:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000702",
    "numero_guia": "LG-00180",
    "fecha_evento": "2026-03-01T03:00:00",
    "estado": "en_transito",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000703",
    "numero_guia": "LG-00180",
    "fecha_evento": "2026-03-01T23:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000704",
    "numero_guia": "LG-00181",
    "fecha_evento": "2026-03-17T07:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000705",
    "numero_guia": "LG-00181",
    "fecha_evento": "2026-03-17T11:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000706",
    "numero_guia": "LG-00181",
    "fecha_evento": "2026-03-17T23:00:00",
    "estado": "en_transito",
    "ciudad": "Armenia",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000707",
    "numero_guia": "LG-00181",
    "fecha_evento": "2026-03-18T19:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000708",
    "numero_guia": "LG-00182",
    "fecha_evento": "2026-03-03T10:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000709",
    "numero_guia": "LG-00182",
    "fecha_evento": "2026-03-03T14:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000710",
    "numero_guia": "LG-00182",
    "fecha_evento": "2026-03-04T02:00:00",
    "estado": "en_transito",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000711",
    "numero_guia": "LG-00182",
    "fecha_evento": "2026-03-04T22:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000712",
    "numero_guia": "LG-00183",
    "fecha_evento": "2026-03-07T13:00:00",
    "estado": "CREADO",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000713",
    "numero_guia": "LG-00183",
    "fecha_evento": "2026-03-07T17:00:00",
    "estado": "recogido",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000714",
    "numero_guia": "LG-00183",
    "fecha_evento": "2026-03-08T05:00:00",
    "estado": "en_transito",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000715",
    "numero_guia": "LG-00183",
    "fecha_evento": "2026-03-09T01:00:00",
    "estado": "entregado",
    "ciudad": "Bogotá",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000716",
    "numero_guia": "LG-00184",
    "fecha_evento": "2026-01-12T08:00:00",
    "estado": "CREADO",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000717",
    "numero_guia": "LG-00184",
    "fecha_evento": "2026-01-12T12:00:00",
    "estado": "recogido",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000718",
    "numero_guia": "LG-00184",
    "fecha_evento": "2026-01-13T00:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "bogota",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000719",
    "numero_guia": "LG-00184",
    "fecha_evento": "2026-01-13T20:00:00",
    "estado": "entregado",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000720",
    "numero_guia": "LG-00185",
    "fecha_evento": "2026-01-02T10:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000721",
    "numero_guia": "LG-00185",
    "fecha_evento": "2026-01-02T14:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000722",
    "numero_guia": "LG-00185",
    "fecha_evento": "2026-01-03T02:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000723",
    "numero_guia": "LG-00185",
    "fecha_evento": "2026-01-03T22:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000724",
    "numero_guia": "LG-00186",
    "fecha_evento": "2026-01-28T09:00:00",
    "estado": "CREADO",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000725",
    "numero_guia": "LG-00186",
    "fecha_evento": "2026-01-28T13:00:00",
    "estado": "recogido",
    "ciudad": "armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000726",
    "numero_guia": "LG-00186",
    "fecha_evento": "2026-01-29T01:00:00",
    "estado": "en_transito",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000727",
    "numero_guia": "LG-00186",
    "fecha_evento": "2026-01-29T21:00:00",
    "estado": "entregado",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000728",
    "numero_guia": "LG-00187",
    "fecha_evento": "2026-02-06T18:00:00",
    "estado": "CREADO",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000729",
    "numero_guia": "LG-00187",
    "fecha_evento": "2026-02-06T22:00:00",
    "estado": "recogido",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000730",
    "numero_guia": "LG-00187",
    "fecha_evento": "2026-02-07T10:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "MEDELLÍN",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000731",
    "numero_guia": "lg-00188",
    "fecha_evento": "2026-01-20T06:00:00",
    "estado": "CREADO",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000732",
    "numero_guia": "LG-00188",
    "fecha_evento": "2026-01-20T10:00:00",
    "estado": "recogido",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000733",
    "numero_guia": "LG-00188",
    "fecha_evento": "2026-01-20T22:00:00",
    "estado": "en_transito",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000734",
    "numero_guia": "LG-00188",
    "fecha_evento": "2026-01-21T18:00:00",
    "estado": "entregado",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000735",
    "numero_guia": "LG-00189",
    "fecha_evento": "2026-03-11T09:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000736",
    "numero_guia": "LG-00189",
    "fecha_evento": "2026-03-11T13:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000737",
    "numero_guia": "LG-00189",
    "fecha_evento": "2026-03-12T01:00:00",
    "estado": "en_transito",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000738",
    "numero_guia": "LG-00189",
    "fecha_evento": "2026-03-12T21:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000739",
    "numero_guia": "LG-00190",
    "fecha_evento": "2026-02-15T17:00:00",
    "estado": "CREADO",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000740",
    "numero_guia": "LG-00190",
    "fecha_evento": "2026-02-15T21:00:00",
    "estado": "recogido",
    "ciudad": "Bogotá",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000741",
    "numero_guia": "LG-00190",
    "fecha_evento": "2026-02-16T09:00:00",
    "estado": "en_transito",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000742",
    "numero_guia": "LG-00190",
    "fecha_evento": "2026-02-17T05:00:00",
    "estado": "entregado",
    "ciudad": "Bogotá",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000743",
    "numero_guia": "LG-00191",
    "fecha_evento": "2026-02-09T12:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000744",
    "numero_guia": "LG-00191",
    "fecha_evento": "2026-02-09T16:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000745",
    "numero_guia": "LG-00191",
    "fecha_evento": "2026-02-10T04:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Medellín",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000746",
    "numero_guia": "LG-00191",
    "fecha_evento": "2026-02-11T00:00:00",
    "estado": "entregado",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000747",
    "numero_guia": "LG-00192",
    "fecha_evento": "2026-01-07T18:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000748",
    "numero_guia": "LG-00192",
    "fecha_evento": "2026-01-07T22:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000749",
    "numero_guia": "LG-00192",
    "fecha_evento": "2026-01-08T10:00:00",
    "estado": "en_transito",
    "ciudad": "Medellín",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000750",
    "numero_guia": "LG-00192",
    "fecha_evento": "2026-01-09T06:00:00",
    "estado": "entregado",
    "ciudad": "Medellín",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000751",
    "numero_guia": "LG-00193",
    "fecha_evento": "2026-02-13T18:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000752",
    "numero_guia": "LG-00193",
    "fecha_evento": "2026-02-13T22:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000753",
    "numero_guia": "LG-00193",
    "fecha_evento": "2026-02-14T10:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "medellin",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000754",
    "numero_guia": "LG-00193",
    "fecha_evento": "2026-02-15T06:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000755",
    "numero_guia": "LG-00194",
    "fecha_evento": "2026-02-09T14:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000756",
    "numero_guia": "LG-00194",
    "fecha_evento": "2026-02-09T18:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000757",
    "numero_guia": "LG-00194",
    "fecha_evento": "2026-02-10T06:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000758",
    "numero_guia": "LG-00194",
    "fecha_evento": "2026-02-11T02:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000759",
    "numero_guia": "LG-00195",
    "fecha_evento": "2026-02-16T15:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000760",
    "numero_guia": "LG-00195",
    "fecha_evento": "2026-02-16T19:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000761",
    "numero_guia": "LG-00195",
    "fecha_evento": "2026-02-17T07:00:00",
    "estado": "en_transito",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000762",
    "numero_guia": "LG-00195",
    "fecha_evento": "2026-02-18T03:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000763",
    "numero_guia": "LG-00196",
    "fecha_evento": "2026-01-25T17:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000764",
    "numero_guia": "LG-00196",
    "fecha_evento": "2026-01-25T21:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000765",
    "numero_guia": "LG-00196",
    "fecha_evento": "2026-01-26T09:00:00",
    "estado": "en_transito",
    "ciudad": "medellin",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000766",
    "numero_guia": "LG-00196",
    "fecha_evento": "2026-01-27T05:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000767",
    "numero_guia": "LG-00197",
    "fecha_evento": "2026-03-08T18:00:00",
    "estado": "CREADO",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000768",
    "numero_guia": "LG-00197",
    "fecha_evento": "2026-03-08T22:00:00",
    "estado": "recogido",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000769",
    "numero_guia": "LG-00197",
    "fecha_evento": "2026-03-09T10:00:00",
    "estado": "en_transito",
    "ciudad": "manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000770",
    "numero_guia": "LG-00198",
    "fecha_evento": "2026-01-31T15:00:00",
    "estado": "CREADO",
    "ciudad": "Cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000771",
    "numero_guia": "LG-00198",
    "fecha_evento": "2026-01-31T19:00:00",
    "estado": "recogido",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000772",
    "numero_guia": "LG-00198",
    "fecha_evento": "2026-02-01T07:00:00",
    "estado": "en_transito",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000773",
    "numero_guia": "LG-00198",
    "fecha_evento": "2026-02-02T03:00:00",
    "estado": "entregado",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000774",
    "numero_guia": "lg-00199",
    "fecha_evento": "2026-01-04T14:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000775",
    "numero_guia": "LG-00199",
    "fecha_evento": "2026-01-04T18:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000776",
    "numero_guia": "LG-00199",
    "fecha_evento": "2026-01-05T06:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000777",
    "numero_guia": "LG-00199",
    "fecha_evento": "2026-01-06T02:00:00",
    "estado": "entregado",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000778",
    "numero_guia": "LG-00200",
    "fecha_evento": "2026-02-11T08:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000779",
    "numero_guia": "LG-00200",
    "fecha_evento": "2026-02-11T12:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000780",
    "numero_guia": "LG-00200",
    "fecha_evento": "2026-02-12T00:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "medellin",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000781",
    "numero_guia": "LG-00200",
    "fecha_evento": "2026-02-12T20:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000782",
    "numero_guia": "LG-00201",
    "fecha_evento": "2026-01-21T12:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000783",
    "numero_guia": "LG-00201",
    "fecha_evento": "2026-01-21T16:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000784",
    "numero_guia": "LG-00201",
    "fecha_evento": "2026-01-22T04:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "barranquilla",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000785",
    "numero_guia": "LG-00201",
    "fecha_evento": "2026-01-23T00:00:00",
    "estado": "entregado",
    "ciudad": "barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000786",
    "numero_guia": "LG-00202",
    "fecha_evento": "2026-03-03T12:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000787",
    "numero_guia": "LG-00202",
    "fecha_evento": "2026-03-03T16:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000788",
    "numero_guia": "LG-00202",
    "fecha_evento": "2026-03-04T04:00:00",
    "estado": "en_transito",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000789",
    "numero_guia": "LG-00202",
    "fecha_evento": "2026-03-05T00:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000790",
    "numero_guia": "LG-00203",
    "fecha_evento": "2026-03-15T18:00:00",
    "estado": "CREADO",
    "ciudad": "Barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000791",
    "numero_guia": "LG-00203",
    "fecha_evento": "2026-03-15T22:00:00",
    "estado": "recogido",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000792",
    "numero_guia": "LG-00203",
    "fecha_evento": "2026-03-16T10:00:00",
    "estado": "en_transito",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000793",
    "numero_guia": "LG-00203",
    "fecha_evento": "2026-03-17T06:00:00",
    "estado": "entregado",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000794",
    "numero_guia": "LG-00204",
    "fecha_evento": "2026-02-27T11:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000795",
    "numero_guia": "LG-00204",
    "fecha_evento": "2026-02-27T15:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000796",
    "numero_guia": "LG-00204",
    "fecha_evento": "2026-02-28T03:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000797",
    "numero_guia": "LG-00205",
    "fecha_evento": "2026-02-08T10:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000798",
    "numero_guia": "LG-00205",
    "fecha_evento": "2026-02-08T14:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000799",
    "numero_guia": "LG-00205",
    "fecha_evento": "2026-02-09T02:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cartagena",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000800",
    "numero_guia": "LG-00205",
    "fecha_evento": "2026-02-09T22:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000801",
    "numero_guia": "LG-00206",
    "fecha_evento": "2026-01-25T10:00:00",
    "estado": "CREADO",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000802",
    "numero_guia": "LG-00206",
    "fecha_evento": "2026-01-25T14:00:00",
    "estado": "recogido",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000803",
    "numero_guia": "LG-00206",
    "fecha_evento": "2026-01-26T02:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "bogota",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000804",
    "numero_guia": "LG-00206",
    "fecha_evento": "2026-01-26T22:00:00",
    "estado": "entregado",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000805",
    "numero_guia": "LG-00207",
    "fecha_evento": "2026-02-12T10:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000806",
    "numero_guia": "LG-00207",
    "fecha_evento": "2026-02-12T14:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000807",
    "numero_guia": "LG-00207",
    "fecha_evento": "2026-02-13T02:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000808",
    "numero_guia": "LG-00207",
    "fecha_evento": "2026-02-13T22:00:00",
    "estado": "entregado",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000809",
    "numero_guia": "LG-00208",
    "fecha_evento": "2026-03-27T18:00:00",
    "estado": "CREADO",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000810",
    "numero_guia": "LG-00208",
    "fecha_evento": "2026-03-27T22:00:00",
    "estado": "recogido",
    "ciudad": "Manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000811",
    "numero_guia": "LG-00208",
    "fecha_evento": "2026-03-28T10:00:00",
    "estado": "en_transito",
    "ciudad": "Manizales",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000812",
    "numero_guia": "LG-00208",
    "fecha_evento": "2026-03-29T06:00:00",
    "estado": "entregado",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000813",
    "numero_guia": "LG-00209",
    "fecha_evento": "2026-01-16T14:00:00",
    "estado": "CREADO",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000814",
    "numero_guia": "LG-00209",
    "fecha_evento": "2026-01-16T18:00:00",
    "estado": "recogido",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000815",
    "numero_guia": "LG-00209",
    "fecha_evento": "2026-01-17T06:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cali",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000816",
    "numero_guia": "LG-00209",
    "fecha_evento": "2026-01-18T02:00:00",
    "estado": "entregado",
    "ciudad": "cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000817",
    "numero_guia": "lg-00210",
    "fecha_evento": "2026-01-28T08:00:00",
    "estado": "CREADO",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000818",
    "numero_guia": "LG-00210",
    "fecha_evento": "2026-01-28T12:00:00",
    "estado": "recogido",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000819",
    "numero_guia": "LG-00210",
    "fecha_evento": "2026-01-29T00:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Cali",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000820",
    "numero_guia": "LG-00210",
    "fecha_evento": "2026-01-29T20:00:00",
    "estado": "entregado",
    "ciudad": "Cali",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000821",
    "numero_guia": "LG-00211",
    "fecha_evento": "2026-02-23T18:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000822",
    "numero_guia": "LG-00211",
    "fecha_evento": "2026-02-23T22:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000823",
    "numero_guia": "LG-00211",
    "fecha_evento": "2026-02-24T10:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000824",
    "numero_guia": "LG-00211",
    "fecha_evento": "2026-02-25T06:00:00",
    "estado": "entregado",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000825",
    "numero_guia": "LG-00212",
    "fecha_evento": "2026-02-11T07:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000826",
    "numero_guia": "LG-00212",
    "fecha_evento": "2026-02-11T11:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000827",
    "numero_guia": "LG-00212",
    "fecha_evento": "2026-02-11T23:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Medellín",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000828",
    "numero_guia": "LG-00212",
    "fecha_evento": "2026-02-12T19:00:00",
    "estado": "entregado",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000829",
    "numero_guia": "LG-00213",
    "fecha_evento": "2026-02-19T12:00:00",
    "estado": "CREADO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000830",
    "numero_guia": "LG-00213",
    "fecha_evento": "2026-02-19T16:00:00",
    "estado": "recogido",
    "ciudad": "barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000831",
    "numero_guia": "LG-00213",
    "fecha_evento": "2026-02-20T04:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000832",
    "numero_guia": "LG-00213",
    "fecha_evento": "2026-02-21T00:00:00",
    "estado": "entregado",
    "ciudad": "barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000833",
    "numero_guia": "LG-00214",
    "fecha_evento": "2026-03-17T16:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000834",
    "numero_guia": "LG-00214",
    "fecha_evento": "2026-03-17T20:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000835",
    "numero_guia": "LG-00214",
    "fecha_evento": "2026-03-18T08:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000836",
    "numero_guia": "LG-00214",
    "fecha_evento": "2026-03-19T04:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000837",
    "numero_guia": "LG-00215",
    "fecha_evento": "2026-03-02T15:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000838",
    "numero_guia": "LG-00215",
    "fecha_evento": "2026-03-02T19:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000839",
    "numero_guia": "LG-00215",
    "fecha_evento": "2026-03-03T07:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Medellín",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000840",
    "numero_guia": "LG-00215",
    "fecha_evento": "2026-03-04T03:00:00",
    "estado": "entregado",
    "ciudad": "Medellín",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000841",
    "numero_guia": "LG-00216",
    "fecha_evento": "2026-02-02T13:00:00",
    "estado": "CREADO",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000842",
    "numero_guia": "LG-00216",
    "fecha_evento": "2026-02-02T17:00:00",
    "estado": "recogido",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000843",
    "numero_guia": "LG-00216",
    "fecha_evento": "2026-02-03T05:00:00",
    "estado": "en_transito",
    "ciudad": "armenia",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000844",
    "numero_guia": "LG-00216",
    "fecha_evento": "2026-02-04T01:00:00",
    "estado": "entregado",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000845",
    "numero_guia": "LG-00217",
    "fecha_evento": "2026-01-05T10:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000846",
    "numero_guia": "LG-00217",
    "fecha_evento": "2026-01-05T14:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000847",
    "numero_guia": "LG-00217",
    "fecha_evento": "2026-01-06T02:00:00",
    "estado": "en_transito",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000848",
    "numero_guia": "LG-00217",
    "fecha_evento": "2026-01-06T22:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000849",
    "numero_guia": "LG-00218",
    "fecha_evento": "2026-02-24T06:00:00",
    "estado": "CREADO",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000850",
    "numero_guia": "LG-00218",
    "fecha_evento": "2026-02-24T10:00:00",
    "estado": "recogido",
    "ciudad": "medellin",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000851",
    "numero_guia": "LG-00218",
    "fecha_evento": "2026-02-24T22:00:00",
    "estado": "en_transito",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000852",
    "numero_guia": "LG-00218",
    "fecha_evento": "2026-02-25T18:00:00",
    "estado": "entregado",
    "ciudad": "medellin",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000853",
    "numero_guia": "LG-00219",
    "fecha_evento": "2026-03-02T06:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000854",
    "numero_guia": "LG-00219",
    "fecha_evento": "2026-03-02T10:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000855",
    "numero_guia": "LG-00219",
    "fecha_evento": "2026-03-02T22:00:00",
    "estado": "en_transito",
    "ciudad": "Cartagena",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000856",
    "numero_guia": "LG-00219",
    "fecha_evento": "2026-03-03T18:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000857",
    "numero_guia": "LG-00220",
    "fecha_evento": "2026-02-20T08:00:00",
    "estado": "CREADO",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000858",
    "numero_guia": "LG-00220",
    "fecha_evento": "2026-02-20T12:00:00",
    "estado": "recogido",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000859",
    "numero_guia": "LG-00220",
    "fecha_evento": "2026-02-21T00:00:00",
    "estado": "en_transito",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000860",
    "numero_guia": "lg-00220",
    "fecha_evento": "2026-02-21T20:00:00",
    "estado": "entregado",
    "ciudad": "BOGOTÁ",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000861",
    "numero_guia": "LG-00221",
    "fecha_evento": "2026-03-06T17:00:00",
    "estado": "CREADO",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000862",
    "numero_guia": "LG-00221",
    "fecha_evento": "2026-03-06T21:00:00",
    "estado": "recogido",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000863",
    "numero_guia": "LG-00221",
    "fecha_evento": "2026-03-07T09:00:00",
    "estado": "en_transito",
    "ciudad": "armenia",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000864",
    "numero_guia": "LG-00221",
    "fecha_evento": "2026-03-08T05:00:00",
    "estado": "entregado",
    "ciudad": "armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000865",
    "numero_guia": "LG-00222",
    "fecha_evento": "2026-01-04T16:00:00",
    "estado": "CREADO",
    "ciudad": "Manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000866",
    "numero_guia": "LG-00222",
    "fecha_evento": "2026-01-04T20:00:00",
    "estado": "recogido",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000867",
    "numero_guia": "LG-00222",
    "fecha_evento": "2026-01-05T08:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000868",
    "numero_guia": "LG-00222",
    "fecha_evento": "2026-01-06T04:00:00",
    "estado": "entregado",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000869",
    "numero_guia": "LG-00223",
    "fecha_evento": "2026-03-12T07:00:00",
    "estado": "CREADO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000870",
    "numero_guia": "LG-00223",
    "fecha_evento": "2026-03-12T11:00:00",
    "estado": "recogido",
    "ciudad": "Barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000871",
    "numero_guia": "LG-00223",
    "fecha_evento": "2026-03-12T23:00:00",
    "estado": "en_transito",
    "ciudad": "Barranquilla",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000872",
    "numero_guia": "LG-00223",
    "fecha_evento": "2026-03-13T19:00:00",
    "estado": "entregado",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000873",
    "numero_guia": "LG-00224",
    "fecha_evento": "2026-01-10T06:00:00",
    "estado": "CREADO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000874",
    "numero_guia": "LG-00224",
    "fecha_evento": "2026-01-10T10:00:00",
    "estado": "recogido",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000875",
    "numero_guia": "LG-00224",
    "fecha_evento": "2026-01-10T22:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000876",
    "numero_guia": "LG-00224",
    "fecha_evento": "2026-01-11T18:00:00",
    "estado": "entregado",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000877",
    "numero_guia": "LG-00225",
    "fecha_evento": "2026-01-05T06:00:00",
    "estado": "CREADO",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000878",
    "numero_guia": "LG-00225",
    "fecha_evento": "2026-01-05T10:00:00",
    "estado": "recogido",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000879",
    "numero_guia": "LG-00225",
    "fecha_evento": "2026-01-05T22:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "CALI",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000880",
    "numero_guia": "LG-00226",
    "fecha_evento": "2026-01-11T06:00:00",
    "estado": "CREADO",
    "ciudad": "Medellín",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000881",
    "numero_guia": "LG-00226",
    "fecha_evento": "2026-01-11T10:00:00",
    "estado": "recogido",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000882",
    "numero_guia": "LG-00226",
    "fecha_evento": "2026-01-11T22:00:00",
    "estado": "en_transito",
    "ciudad": "Medellín",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000883",
    "numero_guia": "LG-00227",
    "fecha_evento": "2026-01-08T12:00:00",
    "estado": "CREADO",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000884",
    "numero_guia": "LG-00227",
    "fecha_evento": "2026-01-08T16:00:00",
    "estado": "recogido",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000885",
    "numero_guia": "LG-00227",
    "fecha_evento": "2026-01-09T04:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "CALI",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000886",
    "numero_guia": "LG-00227",
    "fecha_evento": "2026-01-10T00:00:00",
    "estado": "entregado",
    "ciudad": "CALI",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000887",
    "numero_guia": "LG-00228",
    "fecha_evento": "2026-03-04T16:00:00",
    "estado": "CREADO",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000888",
    "numero_guia": "LG-00228",
    "fecha_evento": "2026-03-04T20:00:00",
    "estado": "recogido",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000889",
    "numero_guia": "LG-00228",
    "fecha_evento": "2026-03-05T08:00:00",
    "estado": "en_transito",
    "ciudad": "bogota",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000890",
    "numero_guia": "LG-00229",
    "fecha_evento": "2026-02-09T09:00:00",
    "estado": "CREADO",
    "ciudad": "bogota",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000891",
    "numero_guia": "LG-00229",
    "fecha_evento": "2026-02-09T13:00:00",
    "estado": "recogido",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000892",
    "numero_guia": "LG-00229",
    "fecha_evento": "2026-02-10T01:00:00",
    "estado": "en_transito",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000893",
    "numero_guia": "LG-00229",
    "fecha_evento": "2026-02-10T21:00:00",
    "estado": "entregado",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000894",
    "numero_guia": "LG-00230",
    "fecha_evento": "2026-02-19T12:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000895",
    "numero_guia": "LG-00230",
    "fecha_evento": "2026-02-19T16:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000896",
    "numero_guia": "LG-00230",
    "fecha_evento": "2026-02-20T04:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000897",
    "numero_guia": "LG-00230",
    "fecha_evento": "2026-02-21T00:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000898",
    "numero_guia": "LG-00231",
    "fecha_evento": "2026-03-05T16:00:00",
    "estado": "CREADO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000899",
    "numero_guia": "LG-00231",
    "fecha_evento": "2026-03-05T20:00:00",
    "estado": "recogido",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000900",
    "numero_guia": "LG-00231",
    "fecha_evento": "2026-03-06T08:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Barranquilla",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000901",
    "numero_guia": "LG-00231",
    "fecha_evento": "2026-03-07T04:00:00",
    "estado": "entregado",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000902",
    "numero_guia": "LG-00232",
    "fecha_evento": "2026-02-02T15:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000903",
    "numero_guia": "lg-00232",
    "fecha_evento": "2026-02-02T19:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000904",
    "numero_guia": "LG-00232",
    "fecha_evento": "2026-02-03T07:00:00",
    "estado": "en_transito",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000905",
    "numero_guia": "LG-00232",
    "fecha_evento": "2026-02-04T03:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000906",
    "numero_guia": "LG-00233",
    "fecha_evento": "2026-01-22T18:00:00",
    "estado": "CREADO",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000907",
    "numero_guia": "LG-00233",
    "fecha_evento": "2026-01-22T22:00:00",
    "estado": "recogido",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000908",
    "numero_guia": "LG-00233",
    "fecha_evento": "2026-01-23T10:00:00",
    "estado": "en_transito",
    "ciudad": "Cartagena",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000909",
    "numero_guia": "LG-00233",
    "fecha_evento": "2026-01-24T06:00:00",
    "estado": "entregado",
    "ciudad": "Cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000910",
    "numero_guia": "LG-00234",
    "fecha_evento": "2026-03-10T11:00:00",
    "estado": "CREADO",
    "ciudad": "Barranquilla",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000911",
    "numero_guia": "LG-00234",
    "fecha_evento": "2026-03-10T15:00:00",
    "estado": "recogido",
    "ciudad": "Barranquilla",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000912",
    "numero_guia": "LG-00234",
    "fecha_evento": "2026-03-11T03:00:00",
    "estado": "en_transito",
    "ciudad": "Barranquilla",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000913",
    "numero_guia": "LG-00235",
    "fecha_evento": "2026-01-16T18:00:00",
    "estado": "CREADO",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000914",
    "numero_guia": "LG-00235",
    "fecha_evento": "2026-01-16T22:00:00",
    "estado": "recogido",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000915",
    "numero_guia": "LG-00235",
    "fecha_evento": "2026-01-17T10:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "bogota",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000916",
    "numero_guia": "LG-00235",
    "fecha_evento": "2026-01-18T06:00:00",
    "estado": "entregado",
    "ciudad": "bogota",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000917",
    "numero_guia": "LG-00236",
    "fecha_evento": "2026-02-27T17:00:00",
    "estado": "CREADO",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000918",
    "numero_guia": "LG-00236",
    "fecha_evento": "2026-02-27T21:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000919",
    "numero_guia": "LG-00236",
    "fecha_evento": "2026-02-28T09:00:00",
    "estado": "en_transito",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000920",
    "numero_guia": "LG-00236",
    "fecha_evento": "2026-03-01T05:00:00",
    "estado": "entregado",
    "ciudad": "pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000921",
    "numero_guia": "LG-00237",
    "fecha_evento": "2026-02-16T08:00:00",
    "estado": "CREADO",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000922",
    "numero_guia": "LG-00237",
    "fecha_evento": "2026-02-16T12:00:00",
    "estado": "recogido",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000923",
    "numero_guia": "LG-00237",
    "fecha_evento": "2026-02-17T00:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "cartagena",
    "tipo_novedad": "DEMORA"
  },
  {
    "id_evento": "EV-000924",
    "numero_guia": "LG-00237",
    "fecha_evento": "2026-02-17T20:00:00",
    "estado": "entregado",
    "ciudad": "cartagena",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000925",
    "numero_guia": "LG-00238",
    "fecha_evento": "2026-01-05T07:00:00",
    "estado": "CREADO",
    "ciudad": "Manizales",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000926",
    "numero_guia": "LG-00238",
    "fecha_evento": "2026-01-05T11:00:00",
    "estado": "recogido",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000927",
    "numero_guia": "LG-00238",
    "fecha_evento": "2026-01-05T23:00:00",
    "estado": "en_transito",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000928",
    "numero_guia": "LG-00238",
    "fecha_evento": "2026-01-06T19:00:00",
    "estado": "entregado",
    "ciudad": "Manizales",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000929",
    "numero_guia": "LG-00239",
    "fecha_evento": "2026-02-20T14:00:00",
    "estado": "CREADO",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000930",
    "numero_guia": "LG-00239",
    "fecha_evento": "2026-02-20T18:00:00",
    "estado": "recogido",
    "ciudad": "Pereira",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000931",
    "numero_guia": "LG-00239",
    "fecha_evento": "2026-02-21T06:00:00",
    "estado": "en_transito",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000932",
    "numero_guia": "LG-00239",
    "fecha_evento": "2026-02-22T02:00:00",
    "estado": "entregado",
    "ciudad": "Pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000933",
    "numero_guia": "LG-00240",
    "fecha_evento": "2026-02-05T06:00:00",
    "estado": "CREADO",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000934",
    "numero_guia": "LG-00240",
    "fecha_evento": "2026-02-05T10:00:00",
    "estado": "recogido",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000935",
    "numero_guia": "LG-00240",
    "fecha_evento": "2026-02-05T22:00:00",
    "estado": "EN TRANSITO",
    "ciudad": "Armenia",
    "tipo_novedad": null
  },
  {
    "id_evento": "EV-000936",
    "numero_guia": "LG-00240",
    "fecha_evento": "2026-02-06T18:00:00",
    "estado": "entregado",
    "ciudad": "Armenia",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-000026",
    "numero_guia": "LG-00007",
    "fecha_evento": "2026-03-23T15:00:00",
    "estado": "recogido",
    "ciudad": "pereira",
    "tipo_novedad": "SIN_NOVEDAD"
  },
  {
    "id_evento": "EV-ERR001",
    "numero_guia": "LG-99999",
    "fecha_evento": "fecha_invalida",
    "estado": "EN TRANSITO",
    "ciudad": "Bogotá",
    "tipo_novedad": "DIRECCION_ERRADA"
  }
]);
