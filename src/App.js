import mkrRedIcon from "./assets/png/red-icon.png";
import { iwManualIcon } from "./assets/svg/index";
import "./styles.css";

export default function App() {
  function getIcons(id, ti_id, tp_id) {
    if (id === 0) {
      // Return red icon and marker color
      let color = "#9D0404"
      return {
        mrkIcon: mkrRedIcon,
        iwIcon: iwManualIcon("#9D0404"),
        color: color
      };
    }
    return null;
  }
  const outorga = {
    id: 4701,
    bh_id: 7,
    sp_id: 4,
    ti_id: 2,
    tp_id: 2,
    uh_id: 40,
    us_id: 80650,
    emp_id: 65056,
    int_id: 9326,
    us_cep: "72XXX310",
    bh_nome: "Rio PXXXXXá",
    uh_nome: "RibeiXXXXX do Torto",
    us_nome: "DIVINO XXXXX DA SILVA",
    us_email: null,
    hg_codigo: "056_18_R3/Q3",
    int_shape: {
      crs: {
        type: "name",
        properties: {
          name: "EPSG:4674"
        }
      },
      type: "Point",
      coordinates: [-48.08609234099998, -15.731574966999972]
    },
    us_bairro: null,
    dt_demanda: {
      demandas: [
        {
          mes: "1",
          tempo_h: "20",
          vazao_lh: "4000.00",
          vazao_mh: "4.0000000",
          periodo_d: "31",
          vol_max_md: "80.0000000",
          vol_mensal_mm: "2480.000000",
          id_demanta_total: "68201542",
          id_interferencia: "9326"
        },
        {
          mes: "2",
          tempo_h: "20",
          vazao_lh: "4000.00",
          vazao_mh: "4.0000000",
          periodo_d: "28",
          vol_max_md: "80.0000000",
          vol_mensal_mm: "2240.000000",
          id_demanta_total: "68209149",
          id_interferencia: "9326"
        },
        {
          mes: "3",
          tempo_h: "20",
          vazao_lh: "4000.00",
          vazao_mh: "4.0000000",
          periodo_d: "31",
          vol_max_md: "80.0000000",
          vol_mensal_mm: "2480.000000",
          id_demanta_total: "68216756",
          id_interferencia: "9326"
        },
        {
          mes: "4",
          tempo_h: "20",
          vazao_lh: "4000.00",
          vazao_mh: "4.0000000",
          periodo_d: "30",
          vol_max_md: "80.0000000",
          vol_mensal_mm: "2400.000000",
          id_demanta_total: "68224363",
          id_interferencia: "9326"
        },
        {
          mes: "5",
          tempo_h: "20",
          vazao_lh: "4000.00",
          vazao_mh: "4.0000000",
          periodo_d: "31",
          vol_max_md: "80.0000000",
          vol_mensal_mm: "2480.000000",
          id_demanta_total: "68231970",
          id_interferencia: "9326"
        },
        {
          mes: "6",
          tempo_h: "20",
          vazao_lh: "4000.00",
          vazao_mh: "4.0000000",
          periodo_d: "30",
          vol_max_md: "80.0000000",
          vol_mensal_mm: "2400.000000",
          id_demanta_total: "68239577",
          id_interferencia: "9326"
        },
        {
          mes: "7",
          tempo_h: "20",
          vazao_lh: "4000.00",
          vazao_mh: "4.0000000",
          periodo_d: "31",
          vol_max_md: "80.0000000",
          vol_mensal_mm: "2480.000000",
          id_demanta_total: "68247184",
          id_interferencia: "9326"
        },
        {
          mes: "8",
          tempo_h: "20",
          vazao_lh: "4000.00",
          vazao_mh: "4.0000000",
          periodo_d: "31",
          vol_max_md: "80.0000000",
          vol_mensal_mm: "2480.000000",
          id_demanta_total: "68254791",
          id_interferencia: "9326"
        },
        {
          mes: "9",
          tempo_h: "20",
          vazao_lh: "4000.00",
          vazao_mh: "4.0000000",
          periodo_d: "30",
          vol_max_md: "80.0000000",
          vol_mensal_mm: "2400.000000",
          id_demanta_total: "68262398",
          id_interferencia: "9326"
        },
        {
          mes: "10",
          tempo_h: "20",
          vazao_lh: "4000.00",
          vazao_mh: "4.0000000",
          periodo_d: "31",
          vol_max_md: "80.0000000",
          vol_mensal_mm: "2480.000000",
          id_demanta_total: "68270005",
          id_interferencia: "9326"
        },
        {
          mes: "11",
          tempo_h: "20",
          vazao_lh: "4000.00",
          vazao_mh: "4.0000000",
          periodo_d: "30",
          vol_max_md: "80.0000000",
          vol_mensal_mm: "2400.000000",
          id_demanta_total: "68277612",
          id_interferencia: "9326"
        },
        {
          mes: "12",
          tempo_h: "20",
          vazao_lh: "4000.00",
          vazao_mh: "4.0000000",
          periodo_d: "31",
          vol_max_md: "80.0000000",
          vol_mensal_mm: "2480.000000",
          id_demanta_total: "68285219",
          id_interferencia: "9326"
        }
      ],
      vol_anual_ma: "29200.000000"
    },
    hg_sistema: "Paranoá",
    finalidades: {
      finalidades: {
        vazao: "78900.0000",
        descricao: "IRRIGAÇÃO DE CULTURAS",
        id_finalidade: "11799687",
        subfinalidade: "MILHO / BANANA",
        id_interferencia: "9326",
        id_tipo_finalidade: "10"
      }
    },
    int_num_ato: "185/2020",
    us_cpf_cnpj: "0264XXXXX4120",
    us_endereco: "QSD XXXXXXX 14",
    emp_endereco: "NÚCLEO RURAL AXXXXXXXXXX ENGENHO QUEIMADO, CHÁCARA nº 4",
    int_latitude: -15.731575,
    int_processo: "19700XXXXX/2015",
    sp_descricao: "OUTORGADO",
    ti_descricao: "SUBTERRANEA",
    to_descricao: "OUTORGA DE DIREITO DE USO",
    tp_descricao: "TUBULAR   ",
    hg_subsistema: "R3/Q3",
    int_longitude: -48.086092,
    us_telefone_1: "6133524913",
    us_telefone_2: "61999242520",
    to_tipo_outorga: 1,
    us_caixa_postal: null,
    int_data_publicacao: "2020-07-02T00:00:00.000Z",
    int_data_vencimento: "2030-07-02T00:00:00.000Z"
  };

  let iconColor = getIcons(0, outorga.ti_id, outorga.tp_id);

  return (
    <div className="App">
      <h1>Cor Escolhida</h1>
      <div
        style={{
          backgroundColor: iconColor.color,
          width: "100%",
          height: "100px"
        }}
      ></div>

      <h1>Icone do Marcador</h1>
      <div>
        <img src={iconColor.mrkIcon} alt="Logo" />
      </div>
      <h1> Ícone no InfoWindows </h1>

      <div
        style={{ height: 100, width: 100 }}
        dangerouslySetInnerHTML={{ __html: iconColor.iwIcon }}
      />
    </div>
  );
}
