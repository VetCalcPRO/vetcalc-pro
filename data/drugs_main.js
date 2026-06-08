// VetCalc PRO - Main Drug Database
// 最終更新: 2026-03-20  薬剤数: 244件
var MASTER_DRUG_DB = [
  {
    "name": "ボスミン1mg/ml（エピネフリン）",
    "category": "循環器",
    "conc": 1,
    "concText": "1mg/mL",
    "species": {
      "犬": {
        "lo": 0.01,
        "hi": 0.01,
        "note": "心停止：0.0025mg/kg IV\n気管支拡張：0.025mg/kg\n生食９ml＋ボスミン1ml＝10ml(10倍希釈）\n心停止：0.2ml/kg IV (3-5分毎）\nアナフィラキシー：0.1-0.2ml/kg IV IM SC"
      },
      "猫": {
        "lo": 0.01,
        "hi": 0.01,
        "note": "0.1-0.2ml,IV\n0.1ml,IV,IM,SC"
      },
      "ウサギ": {
        "lo": 0.2,
        "hi": 0.2,
        "note": "0.2mg/kg IV（心停止時）"
      },
      "モルモット": {
        "lo": 0.003,
        "hi": 0.003,
        "note": "0.003mg/kg IV（心停止）"
      },
      "フェレット": {
        "lo": 0.02,
        "hi": 0.02,
        "note": "0.02mg/kg SC,IM,IV"
      },
      "ハリネズミ": {
        "lo": 0.003,
        "hi": 0.003,
        "note": "0.003mg/kg IV"
      },
      "ハムスター": {
        "lo": 0.1,
        "hi": 0.1,
        "note": "0.1mg/kg IV"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A8%E3%83%94%E3%83%8D%E3%83%95%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_001"
  },
  {
    "name": "イノバン（ドパミン塩酸塩）",
    "category": "循環器",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "生食47.5ml＋イノバン2.5ml＝50ml\n腎血流量：0.2-0.6ml/kg/h(3-10μg/kg/min)\n昇圧：0.6-1.2ml/kg/h(10-20μg/kg/min)\n※脈圧が低下傾向にある時"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%89%E3%83%91%E3%83%9F%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_002"
  },
  {
    "name": "DB-cAMP(アクトシン300mg）",
    "category": "循環器",
    "conc": 60,
    "concText": "60mg/ml",
    "species": {
      "犬": {
        "lo": 20,
        "hi": 80,
        "note": "300mg/5mlに調整（60mg/ml)\n20～80μg/kg/min(20μgからスタート）\n5%グルコースに溶解、血管漏出注意\n※脈圧が正常～強い場合"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B8%E3%83%96%E3%83%81%E3%83%AA%E3%83%AB%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AFAMP&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_003"
  },
  {
    "name": "ドプラム20mg/ml（ドキサプラム）",
    "category": "循環器",
    "conc": 20,
    "concText": "20mg/ml",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%89%E3%82%AD%E3%82%B5%E3%83%97%E3%83%A9%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_004"
  },
  {
    "name": "キシロカイン（リドカイン）",
    "category": "循環器",
    "conc": 20,
    "concText": "100mg/5ml",
    "species": {
      "犬": {
        "lo": 2,
        "hi": 4,
        "note": "2-4mg/kg IV, 25-80μg/kg/min IV CRI\n(最大8mg/kg 10分以上かけて）\n6mg/kg q1.5h IM"
      },
      "猫": {
        "lo": 0.1,
        "hi": 0.4,
        "note": "初回0.1-0.4mg/kg→0.25-0.75mg/kg ゆっくりIV"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%AA%E3%83%89%E3%82%AB%E3%82%A4%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_005"
  },
  {
    "name": "アトロピン0.5mg/ml",
    "category": "循環器",
    "conc": 0.5,
    "concText": "0.5mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.02,
          "hi": 0.04,
          "note": "0.02－0.04mg/㎏PO,IV,IM,SC"
        },
        "oral": {
          "lo": 0.02,
          "hi": 0.04,
          "note": "0.02－0.04mg/㎏PO,IV,IM,SC"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 0.02,
          "hi": 0.04,
          "note": "イヌに準ずる"
        },
        "oral": {
          "lo": 0.02,
          "hi": 0.04,
          "note": "イヌに準ずる"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.1,
        "hi": 0.5,
        "note": "0.1-0.5mg/kg SC,IM（50%のウサギがアトロピナーゼを有し効果乏しい）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.02,
        "hi": 0.05,
        "note": "0.02-0.05mg/kg SC,IM,IV"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.1,
        "hi": 0.2,
        "note": "0.1-0.2mg/kg SC,IM"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.01,
        "hi": 0.04,
        "note": "0.01-0.04mg/kg SC,IM"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.1,
        "hi": 0.4,
        "note": "0.1-0.4mg/kg SC,IM"
      }
    },
    "memo": "0.1ml-0.05ml",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%88%E3%83%AD%E3%83%94%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_006"
  },
  {
    "name": "ジプロフィリン",
    "category": "循環器",
    "conc": 300,
    "concText": "300mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 5,
          "hi": 10,
          "note": "5-10mg/kg sid-bid PO,IV"
        },
        "oral": {
          "lo": 5,
          "hi": 10,
          "note": "5-10mg/kg sid-bid PO,IV"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 2,
          "hi": 6,
          "note": "2-6mg/kg sid-bid PO"
        },
        "oral": {
          "lo": 2,
          "hi": 6,
          "note": "2-6mg/kg sid-bid PO"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "0.1ml-15mg",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B8%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_007"
  },
  {
    "name": "ヘパリン",
    "category": "循環器",
    "conc": 1000,
    "concText": "1000IU/ml",
    "species": {
      "犬": {
        "lo": 200,
        "hi": 300,
        "note": "200-300U/kg q6-8h IV,SC"
      },
      "猫": {
        "lo": 75,
        "hi": 150,
        "note": "75-150U/kg q6-8h IV"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%98%E3%83%91%E3%83%AA%E3%83%B3%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_008"
  },
  {
    "name": "ラシックス20mg/2ml, 20/40mg（フロセミド）",
    "category": "循環器",
    "conc": 10,
    "concText": "10mg/mL（20mg/2mL）、錠剤20mg/40mg",
    "species": {
      "犬": {
        "lo": 1,
        "hi": 4,
        "note": "IV/IM/SC/PO。急性肺水腫は2〜4mg/kg IV、維持は1〜2mg/kg BID〜TID PO"
      },
      "猫": {
        "lo": 1,
        "hi": 2,
        "note": "IV/IM/SC/PO。急性肺水腫は1〜2mg/kg IV、維持は1mg/kg SID〜BID PO"
      },
      "ウサギ": {
        "lo": 2,
        "hi": 5,
        "note": "2-5mg/kg PO,SC,IM,IV bid"
      },
      "フェレット": {
        "lo": 2,
        "hi": 2,
        "note": "2mg/kg PO,SC,IM,IV bid（8-12時間ごと）"
      },
      "モルモット": {
        "lo": 2,
        "hi": 5,
        "note": "2-5mg/kg PO,SC bid"
      },
      "ハリネズミ": {
        "lo": 2.5,
        "hi": 5,
        "note": "2.5-5mg/kg PO,SC,IM bid-tid"
      },
      "ハムスター": {
        "lo": 2,
        "hi": 10,
        "note": "2-10mg/kg PO,SC bid"
      }
    },
    "memo": "ループ利尿薬。急性肺水腫・胸水・腹水・心不全の体液貯留に使用。低カリウム血症に注意（長期使用時は補カリウム検討）。脱水・腎不全例では慎重に。効果はIV＞IM＞SC＞PO。",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%95%E3%83%AD%E3%82%BB%E3%83%9F%E3%83%89&nameKbn=1&nameMatch=1",
    "source": "PMDA / NVAL",
    "id": "drug_009"
  },
  {
    "name": "アルダクトンA（スピロノラクトン）",
    "category": "循環器",
    "conc": 25,
    "concText": "25mg,50mg",
    "species": {
      "犬": {
        "lo": 1,
        "hi": 2,
        "note": "1-2mg/kg PO BID"
      },
      "猫": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg PO BID"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "K保持性利尿薬",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B9%E3%83%94%E3%83%AD%E3%83%8E%E3%83%A9%E3%82%AF%E3%83%88%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_010"
  },
  {
    "name": "トラセミド4mg（ルプラック）",
    "category": "循環器",
    "conc": 4,
    "concText": "4mg,8mg",
    "species": {
      "犬": {
        "lo": 0.1,
        "hi": 0.2,
        "note": "0.05-0.2mg/kg PO SID"
      },
      "猫": {
        "lo": 0.1,
        "hi": 0.2,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%88%E3%83%A9%E3%82%BB%E3%83%9F%E3%83%89&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_011"
  },
  {
    "name": "ヒドロキシエチルデンプン（サリンヘス）",
    "category": "循環器",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "3-5ml/kg,bolus総量として15-20ml/kg/day"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "総量として10-15ml/kg/day"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%92%E3%83%89%E3%83%AD%E3%82%AD%E3%82%B7%E3%82%A8%E3%83%81%E3%83%AB%E3%83%87%E3%83%B3%E3%83%97%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_012"
  },
  {
    "name": "D-マンニトール（マンニトール）60g/300ml",
    "category": "循環器",
    "conc": 0.2,
    "concText": "60g/300ml",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "0.5-2g/kg,20min以上,IV 4h毎"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=D-%E3%83%9E%E3%83%B3%E3%83%8B%E3%83%88%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_013"
  },
  {
    "name": "濃グリセリン（グリセオール）10%200ml",
    "category": "循環器",
    "conc": 100,
    "concText": "10%200ml",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "0.5g/kg 10-30分かけてCRI BID,TID"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E6%BF%83%E3%82%B0%E3%83%AA%E3%82%BB%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_014"
  },
  {
    "name": "プロポフォール200mg/20ml",
    "category": "麻酔",
    "conc": 10,
    "concText": "200mg/20ml",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 7,
        "note": "6,6mg/kg 60sec IV\n5-7mg/kg IV\nCRI 5mg/kg IV→100-400μg/kg/min\n　　　　　　　　　　　(6-24mg/kg/h)\n５％ブドウ糖　５倍希釈まで\nてんかん 1-6mg/kg IV→0.1-0.6mg/kg/min"
      },
      "猫": {
        "lo": 6,
        "hi": 8,
        "note": "7mg/kg IV\nCRI 6mg/kg IV→200-300μg/kg/min\n(0.2-0.3mg/kg/min)"
      },
      "ウサギ": {
        "lo": 2,
        "hi": 15,
        "note": "2-15mg/kg IV（呼吸抑制が強いため推奨されない）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "血管確保困難なため使用は難しい"
      },
      "フェレット": {
        "lo": 2,
        "hi": 5,
        "note": "2-5mg/kg IV"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "血管確保困難なため使用は難しい"
      }
    },
    "memo": "0.1ml-1mg",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%97%E3%83%AD%E3%83%9D%E3%83%95%E3%82%A9%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_015"
  },
  {
    "name": "アルファキサン10mg/ml（アルファキサロン）",
    "category": "麻酔",
    "conc": 10,
    "concText": "10mg/ml",
    "species": {
      "犬": {
        "lo": 2,
        "hi": 3,
        "note": "2-3mg/kg IV(1/4量１５秒ごと）"
      },
      "猫": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg IV,1mg/kg IM"
      },
      "ウサギ": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg IM,SC"
      },
      "モルモット": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg IM,SC"
      },
      "フェレット": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg IM,SC"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 1,
        "hi": 1,
        "note": "1.0mg/kg IM,SC"
      }
    },
    "memo": "0.1ml-1mg",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%82%AD%E3%82%B5%E3%83%AD%E3%83%B3&MAIN_COMPONENT=%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%82%AD%E3%82%B5%E3%83%AD%E3%83%B3",
    "source": "NVAL",
    "id": "drug_016"
  },
  {
    "name": "ドミトール1mg/ml（メデトミジン）",
    "category": "鎮静",
    "conc": 1,
    "concText": "1mg/ml",
    "species": {
      "犬": {
        "lo": 0.005,
        "hi": 0.015,
        "note": "0.005-0.015mg/kg IV IM SC  (60mgまで)"
      },
      "猫": {
        "lo": 0.01,
        "hi": 0.02,
        "note": "0.01-0.02mg/kg IV IM SC　(80mgまで)"
      },
      "ウサギ": {
        "lo": 0.1,
        "hi": 0.5,
        "note": "0.1-0.5mg/kg SC,IM"
      },
      "モルモット": {
        "lo": 0.3,
        "hi": 0.3,
        "note": "0.3mg/kg SC,IM"
      },
      "フェレット": {
        "lo": 0.08,
        "hi": 0.2,
        "note": "0.08-0.2mg/kg SC,IM"
      },
      "ハリネズミ": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg SC"
      },
      "ハムスター": {
        "lo": 0.1,
        "hi": 0.1,
        "note": "0.1mg/kg SC"
      }
    },
    "memo": "0.1ml-0.1mg",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%A1%E3%83%87%E3%83%88%E3%83%9F%E3%82%B8%E3%83%B3%E5%A1%A9%E9%85%B8%E5%A1%A9&MAIN_COMPONENT=%E3%83%A1%E3%83%87%E3%83%88%E3%83%9F%E3%82%B8%E3%83%B3%E5%A1%A9%E9%85%B8%E5%A1%A9",
    "source": "NVAL",
    "id": "drug_017"
  },
  {
    "name": "アンチセダン",
    "category": "鎮静",
    "conc": 5,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 0.04,
        "hi": 0.48,
        "note": "メデトミジンと同量\n小型（4kg):0.32mg/kg\n中型(11kg):0.23mg/kg\n大型(45kg):0.14mg/kg"
      },
      "猫": {
        "lo": 0.1,
        "hi": 0.6,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg IM（メデトミジン拮抗）"
      },
      "モルモット": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg IM"
      },
      "フェレット": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg IM"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%A2%E3%83%81%E3%83%91%E3%83%A1%E3%82%BE%E3%83%BC%E3%83%AB%E5%A1%A9%E9%85%B8%E5%A1%A9&MAIN_COMPONENT=%E3%82%A2%E3%83%81%E3%83%91%E3%83%A1%E3%82%BE%E3%83%BC%E3%83%AB%E5%A1%A9%E9%85%B8%E5%A1%A9",
    "source": "NVAL",
    "id": "drug_018"
  },
  {
    "name": "ベトルファール(ブトルファノール)",
    "category": "鎮痛",
    "conc": 5,
    "concText": "5mg/ml",
    "species": {
      "犬": {
        "lo": 0.2,
        "hi": 0.4,
        "note": "0.2-0.4mg/kg IV,IM,SC"
      },
      "猫": {
        "lo": 0.2,
        "hi": 0.8,
        "note": "0.2-0.8mg/kg IV,IM,SC"
      },
      "ウサギ": {
        "lo": 0.1,
        "hi": 1,
        "note": "0.1-1.0mg/kg SC,IM,IV q4h-q6h"
      },
      "モルモット": {
        "lo": 0.4,
        "hi": 2,
        "note": "0.4-2.0mg/kg SC q4h"
      },
      "フェレット": {
        "lo": 0.1,
        "hi": 0.5,
        "note": "0.1-0.5mg/kg SC,IM,IV bid-q8h-q12h"
      },
      "ハリネズミ": {
        "lo": 0.05,
        "hi": 0.4,
        "note": "0.05-0.40mg/kg SC,IM q4h-q8h"
      },
      "ハムスター": {
        "lo": 1,
        "hi": 5,
        "note": "1-5mg/kg SC q4h"
      }
    },
    "memo": "0.1ml-0.5mg",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E9%85%92%E7%9F%B3%E9%85%B8%E3%83%96%E3%83%88%E3%83%AB%E3%83%95%E3%82%A1%E3%83%8E%E3%83%BC%E3%83%AB&MAIN_COMPONENT=%E9%85%92%E7%9F%B3%E9%85%B8%E3%83%96%E3%83%88%E3%83%AB%E3%83%95%E3%82%A1%E3%83%8E%E3%83%BC%E3%83%AB",
    "source": "NVAL",
    "id": "drug_019"
  },
  {
    "name": "ドルミカム10mg/2ml（ミダゾラム）",
    "category": "鎮静",
    "conc": 5,
    "concText": "10mg/2ml",
    "species": {
      "犬": {
        "lo": 0.1,
        "hi": 0.25,
        "note": "0.1-0.25mg/kg IV,IM\n食欲刺激0.1mg/kg IV"
      },
      "猫": {
        "lo": 0.3,
        "hi": 0.6,
        "note": "0.3-0.6mg/kg IV"
      },
      "ウサギ": {
        "lo": 0.5,
        "hi": 5,
        "note": "0.5-5.0mg/kg SC,IV"
      },
      "モルモット": {
        "lo": 1,
        "hi": 2,
        "note": "1-2mg/kg IM"
      },
      "フェレット": {
        "lo": 0.3,
        "hi": 5,
        "note": "0.3-5.0mg/kg SC,IM"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 1,
        "hi": 2,
        "note": "1-2mg/kg IM"
      }
    },
    "memo": "0.1ml-0.5mg",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%9F%E3%83%80%E3%82%BE%E3%83%A9%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_020"
  },
  {
    "name": "セルシン（ジアゼパム）",
    "category": "鎮静",
    "conc": 5,
    "concText": "5mg/ml",
    "species": {
      "犬": {
        "lo": 0.5,
        "hi": 1,
        "note": "IV（てんかん発作時）。筋弛緩・鎮静: 0.2〜0.5mg/kg。直腸内投与も可（1mg/kg）"
      },
      "猫": {
        "lo": 0.5,
        "hi": 1,
        "note": "IV。食欲増進: 0.05〜0.15mg/kg IV（少量）。直腸内投与: 1mg/kg"
      },
      "ウサギ": {
        "lo": 1,
        "hi": 3,
        "note": "1-3mg/kg IM,IV"
      },
      "フェレット": {
        "lo": 0.5,
        "hi": 3,
        "note": "0.5-3mg/kg SC,IM"
      },
      "モルモット": {
        "lo": 0.5,
        "hi": 3,
        "note": "0.5-3.0mg/kg IM"
      },
      "ハリネズミ": {
        "lo": 0.5,
        "hi": 2,
        "note": "0.5-2mg/kg IM"
      },
      "ハムスター": {
        "lo": 3,
        "hi": 5,
        "note": "3-5mg/kg IM"
      }
    },
    "memo": "ベンゾジアゼピン系。てんかん重積発作の第一選択（IV）。鎮静・筋弛緩・抗不安にも使用。【猫への注意】経口投与で肝壊死の報告あり→猫への経口投与は避ける。IV投与は問題なし。呼吸抑制に注意。フルマゼニルで拮抗可。",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B8%E3%82%A2%E3%82%BC%E3%83%91%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_021"
  },
  {
    "name": "リフレックス　15mg（ミルタザピン）",
    "category": "消化器",
    "conc": 15,
    "concText": "15mg",
    "species": {
      "犬": {
        "lo": 3.75,
        "hi": 7.5,
        "note": "3.75-7.5mg/kg PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "1.88 または 3.75 mg/head\n（1/8-1/4錠）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%9F%E3%83%AB%E3%82%BF%E3%82%B6%E3%83%94%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_022"
  },
  {
    "name": "レペタン0.2mg/ml(ブプレノルフィン)",
    "category": "鎮痛",
    "conc": 0.2,
    "concText": "0.2mg/ml",
    "species": {
      "犬": {
        "lo": 0.05,
        "hi": 0.015,
        "note": "0.05-0.015mg/kg  q4-8h IV,IM,SC\n鎮痛0.03-0.04mg/kg SC　4-10時間おき"
      },
      "猫": {
        "lo": 0.005,
        "hi": 0.02,
        "note": "0.005-0.02mg/kg IV,IM\n鎮痛0.01mg/kg IM　口腔粘膜投与同等"
      },
      "ウサギ": {
        "lo": 0.01,
        "hi": 0.05,
        "note": "0.01-0.05mg/kg SC,IM,IV q6h-q12h"
      },
      "モルモット": {
        "lo": 0.05,
        "hi": 0.05,
        "note": "0.05mg/kg SC q8h-q12h"
      },
      "フェレット": {
        "lo": 0.01,
        "hi": 0.03,
        "note": "0.01-0.03mg/kg SC,IM,IV q6h-q12h"
      },
      "ハリネズミ": {
        "lo": 0.01,
        "hi": 0.1,
        "note": "0.01mg/kg SC,IM q6h-q8h"
      },
      "ハムスター": {
        "lo": 0.1,
        "hi": 0.1,
        "note": "0.1mg/kg SC q6h-q8h"
      }
    },
    "memo": "0.1ml-0.02mg",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%96%E3%83%97%E3%83%AC%E3%83%8E%E3%83%AB%E3%83%95%E3%82%A3%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_023"
  },
  {
    "name": "トラマール(トラマドール)",
    "category": "鎮痛",
    "conc": 25,
    "concText": "25mg,50mg",
    "species": {
      "犬": {
        "lo": 2,
        "hi": 5,
        "note": "2-5mg/kg bid-tid,PO"
      },
      "猫": {
        "lo": 2,
        "hi": 4,
        "note": "2-4mg/kg bid,PO"
      },
      "ウサギ": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg"
      },
      "ハリネズミ": {
        "lo": 4,
        "hi": 4,
        "note": "4mg/kg"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%88%E3%83%A9%E3%83%9E%E3%83%89%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_024"
  },
  {
    "name": "ペントバルビタール",
    "category": "神経・てんかん",
    "conc": 64.8,
    "concText": "100mL/V，64.8mg/mL",
    "species": {
      "犬": {
        "lo": 3,
        "hi": 15,
        "note": "（記載なし）"
      },
      "猫": {
        "lo": 3,
        "hi": 15,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": 20,
        "hi": 45,
        "note": "20-45mg/kg IV,IP"
      },
      "モルモット": {
        "lo": 30,
        "hi": 45,
        "note": "30-45mg/kg IP"
      },
      "フェレット": {
        "lo": 1,
        "hi": 2,
        "note": "1-2mg/kg PO q12h（鎮静）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 35,
        "hi": 40,
        "note": "35-40mg/kg IP"
      }
    },
    "memo": "2019販売終了",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%9A%E3%83%B3%E3%83%88%E3%83%90%E3%83%AB%E3%83%93%E3%82%BF%E3%83%BC%E3%83%AB%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_025"
  },
  {
    "name": "フェノバール（フェノバルビタール）",
    "category": "神経・てんかん",
    "conc": 100,
    "concText": "100mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 2,
          "hi": 3,
          "note": "2-3mg/kg bid PO 必要に応じて増量\n最大5mg/kg bidまで\nてんかん重積の場合は2-8mg/kg bid IV,IM"
        },
        "oral": {
          "lo": 2,
          "hi": 3,
          "note": "2-3mg/kg bid PO 必要に応じて増量\n最大5mg/kg bidまで\nてんかん重積の場合は2-8mg/kg bid IV,IM"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 2,
          "hi": 2.5,
          "note": "2-2.5mg/kg bid PO \nてんかん重積の場合は2-4mg/kg bid IV,IM"
        },
        "oral": {
          "lo": 2,
          "hi": 2.5,
          "note": "2-2.5mg/kg bid PO \nてんかん重積の場合は2-4mg/kg bid IV,IM"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "イヌ：20-40μg/ml\n 3週間で測定、\n以後安定するまで適時年2回",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%95%E3%82%A7%E3%83%8E%E3%83%90%E3%83%AB%E3%83%93%E3%82%BF%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_026"
  },
  {
    "name": "モルヒネ",
    "category": "鎮痛",
    "conc": 10,
    "concText": "10mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.25,
          "hi": 1,
          "note": "0.25-1mg/kg SC IM 3-6時間\n0.1-0.2mg/kg/hr d.i  猫では使用せず\n0.1mg/kg 硬膜外　6-24時間\n1-3mg/kg PO 4-24時間"
        },
        "oral": {
          "lo": 0.25,
          "hi": 1,
          "note": "0.25-1mg/kg SC IM 3-6時間\n0.1-0.2mg/kg/hr d.i  猫では使用せず\n0.1mg/kg 硬膜外　6-24時間\n1-3mg/kg PO 4-24時間"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 0.1,
          "hi": 0.2,
          "note": "0.1-0.2mg/kg SC IM 3-6時間\n0.05-0.1mg/kg 硬膜外　6-24時間"
        },
        "oral": {
          "lo": 0.1,
          "hi": 0.2,
          "note": "0.1-0.2mg/kg SC IM 3-6時間\n0.05-0.1mg/kg 硬膜外　6-24時間"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 2,
        "hi": 5,
        "note": "2-5mg/kg SC,IM q2-4h"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 5,
        "note": "0.5-5.0mg/kg SC,IM q2-6h"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 2,
        "hi": 5,
        "note": "2-5mg/kg IM q4h"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 2,
        "hi": 5,
        "note": "2-5mg/kg SC q2-4h"
      }
    },
    "memo": "記載なし",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%A2%E3%83%AB%E3%83%92%E3%83%8D&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_027"
  },
  {
    "name": "フェンタニル",
    "category": "鎮痛",
    "conc": 0.05,
    "concText": "0.05mg/ml",
    "species": {
      "犬": {
        "lo": 0.005,
        "hi": 0.01,
        "note": "5-10μg/kg IV 10-45分\n2-20μg/kg/hr d.i\nパッチ製剤　72時間\n2.5mg 5-10kg,5.0mg 10-20kg,7.5mg 20-30kg 10mg 30kg~\n5kg以下半折り、カットしない"
      },
      "猫": {
        "lo": 0.002,
        "hi": 0.004,
        "note": "2-4μg/kg IV 10-45分\n1-4μg/kg/hr d.i\nパッチ製剤　2.5mg 4-5日"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "パッチ製剤は、鎮痛効果発現\nまで12-16時間かかる\n（猫＜犬時間かかる）\n舐めにくく剥がれにくい場所、\n熱などの影響がない場所",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%95%E3%82%A7%E3%83%B3%E3%82%BF%E3%83%8B%E3%83%AB%E3%82%AF%E3%82%A8%E3%83%B3%E9%85%B8%E5%A1%A9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_028"
  },
  {
    "name": "ケタミン",
    "category": "麻酔",
    "conc": 100,
    "concText": "100mg/ml",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 10,
        "note": "麻酔導入　0.6-3mg/kg/hr CRI\n5-10mg/kg IM,SC"
      },
      "猫": {
        "lo": 5,
        "hi": 10,
        "note": "鎮静　麻酔15-20mg/kg"
      },
      "ウサギ": {
        "lo": 20,
        "hi": 50,
        "note": "20-50mg/kg IM（単独では不安定な筋弛緩）"
      },
      "モルモット": {
        "lo": 22,
        "hi": 44,
        "note": "22-44mg/kg IM"
      },
      "フェレット": {
        "lo": 5,
        "hi": 15,
        "note": "5-15mg/kg IM"
      },
      "ハリネズミ": {
        "lo": 5,
        "hi": 20,
        "note": "5-20mg/kg IM"
      },
      "ハムスター": {
        "lo": 20,
        "hi": 40,
        "note": "20-40mg/kg IM"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B1%E3%82%BF%E3%83%9F%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_029"
  },
  {
    "name": "エクセグラン100mg、コンセーブ25/100mg\nエピレス10/20mg（ゾニサミド）",
    "category": "神経・てんかん",
    "conc": 100,
    "concText": "100mg",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 12,
        "note": "5-12mg/kg PO BID (開始量　2-3mg/kg→\n10mg/kg PO BIDへ)"
      },
      "猫": {
        "lo": 2.5,
        "hi": 7.5,
        "note": "2.5-7.5mg/kg PO BID"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "有効血中濃度20-50μg/ml",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%BE%E3%83%8B%E3%82%B5%E3%83%9F%E3%83%89&nameKbn=1&nameMatch=1",
    "source": "PMDA / NVAL",
    "id": "drug_030"
  },
  {
    "name": "レベチラセタム（イーケプラ）50% 500mg/g",
    "category": "神経・てんかん",
    "conc": 500,
    "concText": "50%",
    "species": {
      "犬": {
        "lo": 20,
        "hi": 20,
        "note": "20mg/kg TID PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%AC%E3%83%99%E3%83%81%E3%83%A9%E3%82%BB%E3%82%BF%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_031"
  },
  {
    "name": "アナフラニール（クロミプラミン塩酸塩）２５mg",
    "category": "神経・てんかん",
    "conc": 25,
    "concText": "２５mg",
    "species": {
      "犬": {
        "lo": 1,
        "hi": 3,
        "note": "1-2mg/kg PO BID"
      },
      "猫": {
        "lo": 0.5,
        "hi": 1,
        "note": "0.5-1mg/kg PO SID"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "てんかんあり・\n肝酵素高値投与×",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%AF%E3%83%AD%E3%83%9F%E3%83%97%E3%83%A9%E3%83%9F%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_032"
  },
  {
    "name": "ガバペンチン（ガバペン）200/300/400mg",
    "category": "神経・てんかん",
    "conc": 200,
    "concText": "200mg",
    "species": {
      "犬": {
        "lo": 2.5,
        "hi": 10,
        "note": "抗痙攣用量 2.5-10mg/kg q8-12h SID-TID PO"
      },
      "猫": {
        "lo": 5,
        "hi": 10,
        "note": "抗痙攣用量5-10mg/kg q12h PO"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "腫瘍などの鎮痛5-10mg/kg",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%AC%E3%83%90%E3%83%9A%E3%83%B3%E3%83%81%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_033"
  },
  {
    "name": "プレガバリン（リリカ）25mgカプセル",
    "category": "神経・てんかん",
    "conc": 25,
    "concText": "25mgカプセル",
    "species": {
      "犬": {
        "lo": 2,
        "hi": 3,
        "note": "2-3mg/kg BID-TID PO"
      },
      "猫": {
        "lo": 1,
        "hi": 2,
        "note": "ネコでの半減期は3-4時間"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%97%E3%83%AC%E3%82%AC%E3%83%90%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_034"
  },
  {
    "name": "メラトニン",
    "category": "神経・てんかん",
    "conc": null,
    "concText": "3mg/head",
    "species": {
      "犬": {
        "lo": 3,
        "hi": 6,
        "note": "小型犬（8キロ以下）３mg\n中型（9-25キロ）6 mg　\n大型（25キロ以上）9mg　 (VMN)"
      },
      "猫": {
        "lo": 3,
        "hi": 3,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "パターン脱毛,チルプロトコル,認知機能障害",
    "route": "oral",
    "pdf_url": "",
    "source": "適用外",
    "id": "drug_035"
  },
  {
    "name": "マーカイン0.5mg/0.1ml（ブピバカイン）",
    "category": "局所麻酔",
    "conc": 5,
    "concText": "100mg/20ml",
    "species": {
      "犬": {
        "lo": 1,
        "hi": 2,
        "note": "1-2mg/kg"
      },
      "猫": {
        "lo": 0.5,
        "hi": 1.5,
        "note": "0.5-1.5mg/kg"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "上限量、作用持続4-8時間",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%96%E3%83%94%E3%83%90%E3%82%AB%E3%82%A4%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_036"
  },
  {
    "name": "リズミナール1/5mg、エナカルド（エナラプリルマレイン酸塩",
    "category": "循環器",
    "conc": 5,
    "concText": "5mg",
    "species": {
      "犬": {
        "lo": 0.25,
        "hi": 0.5,
        "note": "0.25-0.5mg/kg q12-24h PO"
      },
      "猫": {
        "lo": 0.25,
        "hi": 0.5,
        "note": "0.25-0.5mg/kg q12-24h PO"
      },
      "ウサギ": {
        "lo": 0.25,
        "hi": 0.5,
        "note": "0.25-0.5mg/kg PO q12-24h"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": 0.25,
        "hi": 0.5,
        "note": "0.25-0.5mg/kg PO q12-24h"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A8%E3%83%8A%E3%83%A9%E3%83%97%E3%83%AA%E3%83%AB%E3%83%9E%E3%83%AC%E3%82%A4%E3%83%B3%E9%85%B8%E5%A1%A9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_037"
  },
  {
    "name": "エースワーカー0.5/1mg（テモカプリル塩酸塩）",
    "category": "循環器",
    "conc": 1,
    "concText": "1mg",
    "species": {
      "犬": {
        "lo": 0.1,
        "hi": 0.1,
        "note": "0.1mg/kg SID"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%86%E3%83%A2%E3%82%AB%E3%83%97%E3%83%AA%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_038"
  },
  {
    "name": "フォルテコール2.5/5mg（ベナゼプリル塩酸塩）",
    "category": "循環器",
    "conc": 5,
    "concText": "5mg",
    "species": {
      "犬": {
        "lo": 0.25,
        "hi": 0.5,
        "note": "0.25-0.5mg/kg BID"
      },
      "猫": {
        "lo": 0.25,
        "hi": 0.5,
        "note": "0.25-0.5mg/kg SID"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%99%E3%83%8A%E3%82%BC%E3%83%97%E3%83%AA%E3%83%AB%E5%A1%A9%E9%85%B8%E5%A1%A9&MAIN_COMPONENT=%E3%83%99%E3%83%8A%E3%82%BC%E3%83%97%E3%83%AA%E3%83%AB%E5%A1%A9%E9%85%B8%E5%A1%A9",
    "source": "NVAL",
    "id": "drug_039"
  },
  {
    "name": "バソトップ1.25mg（ラミプリル）",
    "category": "循環器",
    "conc": 1.25,
    "concText": "1.25mg",
    "species": {
      "犬": {
        "lo": 0.125,
        "hi": 0.25,
        "note": "0.125-0.25mg/kg BID"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%A9%E3%83%9F%E3%83%97%E3%83%AA%E3%83%AB&MAIN_COMPONENT=%E3%83%A9%E3%83%9F%E3%83%97%E3%83%AA%E3%83%AB",
    "source": "NVAL",
    "id": "drug_040"
  },
  {
    "name": "アピナック12.5mg（アラセプリル）",
    "category": "循環器",
    "conc": 12.5,
    "concText": "12.5mg",
    "species": {
      "犬": {
        "lo": 1,
        "hi": 3,
        "note": "1-3mg/kg PO BID"
      },
      "猫": {
        "lo": 1,
        "hi": 3,
        "note": "1-3mg/kg PO BID"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%A9%E3%82%BB%E3%83%97%E3%83%AA%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_041"
  },
  {
    "name": "ベトメディン1.25/5mg（ピモベンタン）",
    "category": "循環器",
    "conc": 0.75,
    "concText": "0.75mg/ml（注射液）/ 1.25・2.5・5mg（チュアブル）",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.15,
          "hi": 0.15,
          "note": "0.15mg/kg ゆっくり単回IV\n急性心不全（ベーリンガー ベトメディン注射液）"
        },
        "oral": {
          "lo": 0.2,
          "hi": 0.3,
          "note": "0.2-0.3mg/kg BID"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": 0.25,
          "hi": 0.25,
          "note": "0.25mg/kg BID"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "ベーリンガー ベトメディン注射液 0.75mg/ml\n犬のみ注射適応",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%94%E3%83%A2%E3%83%99%E3%83%B3%E3%83%80%E3%83%B3&MAIN_COMPONENT=%E3%83%94%E3%83%A2%E3%83%99%E3%83%B3%E3%83%80%E3%83%B3",
    "source": "NVAL",
    "id": "drug_042"
  },
  {
    "name": "テノーミン（アテノロール25mg）",
    "category": "循環器",
    "conc": 25,
    "concText": "25mg",
    "species": {
      "犬": {
        "lo": 0.25,
        "hi": 1,
        "note": "0.25-1mg/kg PO BID"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "6.25-12.5mg/head(1/4-1/2錠) PO BID"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%86%E3%83%8E%E3%83%AD%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_043"
  },
  {
    "name": "ヘルベッサー（ジルチアゼム塩酸塩）",
    "category": "循環器",
    "conc": 30,
    "concText": "30mg/60mg/100mgカプセル/200mgカプセル",
    "species": {
      "犬": {
        "lo": 0.5,
        "hi": 1.5,
        "note": "0.5-1.5mg/kg PO TID"
      },
      "猫": {
        "lo": 0.5,
        "hi": 2.5,
        "note": "10mg/head PO SID"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B8%E3%83%AB%E3%83%81%E3%82%A2%E3%82%BC%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_044"
  },
  {
    "name": "ペルサンチン（ジピリダモール）",
    "category": "循環器",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 4,
        "hi": 10,
        "note": "4-10mg/kg SID"
      },
      "猫": {
        "lo": 12.5,
        "hi": 12.5,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B8%E3%83%94%E3%83%AA%E3%83%80%E3%83%A2%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_045"
  },
  {
    "name": "アムロジピン（アムロジピン ベシル酸塩）",
    "category": "循環器",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 0.1,
        "hi": 0.2,
        "note": "0.1-0.2mg/kg PO BID"
      },
      "猫": {
        "lo": 0.15,
        "hi": 0.3,
        "note": "0.625-1.25mg/head SID0.15-0.3mg/kg"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%A0%E3%83%AD%E3%82%B8%E3%83%94%E3%83%B3%E3%83%99%E3%82%B7%E3%83%AB%E9%85%B8%E5%A1%A9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_046"
  },
  {
    "name": "ニトロールR（硝酸イソソルビド）",
    "category": "循環器",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 0.22,
        "hi": 1.1,
        "note": "2.5-5mg/head ,q12h POもしくは0.22-1.1mg/kg q12h PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E7%A1%9D%E9%85%B8%E3%82%A4%E3%82%BD%E3%82%BD%E3%83%AB%E3%83%93%E3%83%89&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_047"
  },
  {
    "name": "ネオフィリン100mg（アミノフィリン）",
    "category": "循環器",
    "conc": 25,
    "concText": "250mg/10ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 5,
          "hi": 10,
          "note": "５-10mg/kg  BID-TID PO　IM IV"
        },
        "oral": {
          "lo": 5,
          "hi": 10,
          "note": "５-10mg/kg  BID-TID PO　IM IV"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 5,
          "hi": 6,
          "note": "５-6mg/kg  BID-TID PO IM IV"
        },
        "oral": {
          "lo": 5,
          "hi": 6,
          "note": "５-6mg/kg  BID-TID PO IM IV"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%9F%E3%83%8E%E3%83%95%E3%82%A3%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_048"
  },
  {
    "name": "テオドール50mg(テオフィリン徐放剤)",
    "category": "循環器",
    "conc": 50,
    "concText": "50mg",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 20,
        "note": "10-20mg/kg BID PO"
      },
      "猫": {
        "lo": 20,
        "hi": 25,
        "note": "20-25mg/kg SID PO"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": 4.25,
        "hi": 4.25,
        "note": "4.25mg/kg PO q8-12h"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%86%E3%82%AA%E3%83%95%E3%82%A3%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_049"
  },
  {
    "name": "ムコダイン250mg（L-カルボシステイン）",
    "category": "呼吸器",
    "conc": 250,
    "concText": "250mg",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg BID-TID PO"
      },
      "猫": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg BID-TID PO"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=L-%E3%82%AB%E3%83%AB%E3%83%9C%E3%82%B7%E3%82%B9%E3%83%86%E3%82%A4%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_050"
  },
  {
    "name": "ビソルボン4mg（ブロムヘキシン塩酸塩）",
    "category": "呼吸器",
    "conc": 4,
    "concText": "4mg",
    "species": {
      "犬": {
        "lo": 0.05,
        "hi": 0.05,
        "note": "0.05mg/kg BID-TID PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%96%E3%83%AD%E3%83%A0%E3%83%98%E3%82%AD%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_051"
  },
  {
    "name": "メジコン15mg（デキストロメトルファン）",
    "category": "呼吸器",
    "conc": 15,
    "concText": "15mg",
    "species": {
      "犬": {
        "lo": 1,
        "hi": 2,
        "note": "1-2mg/kg PO TID"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%87%E3%82%AD%E3%82%B9%E3%83%88%E3%83%AD%E3%83%A1%E3%83%88%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E8%87%AD%E5%8C%96%E6%B0%B4%E7%B4%A0%E9%85%B8%E5%A1%A9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_052"
  },
  {
    "name": "レスプレン20mg(エプラジノン塩酸塩)",
    "category": "呼吸器",
    "conc": 20,
    "concText": "20mg",
    "species": {
      "犬": {
        "lo": 3,
        "hi": 5,
        "note": "3-5mg/kg PO BID"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A8%E3%83%97%E3%83%A9%E3%82%B8%E3%83%8E%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_053"
  },
  {
    "name": "セレニア200mg/20ml(マロピタントクエン酸塩）\n16/24mg",
    "category": "消化器",
    "conc": 10,
    "concText": "200mg/20ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 1,
          "hi": 1,
          "note": "1mg/kg SC\n乗り物酔い：2mg/kg SC"
        },
        "oral": {
          "lo": 2,
          "hi": 2,
          "note": "2mg/kg PO\n乗り物酔い：8mg/kg PO SID 2日まで"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 1,
          "hi": 1,
          "note": "1mg/kg SC（24h前）"
        },
        "oral": {
          "lo": 2,
          "hi": 2,
          "note": "2mg/kg PO"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "0.1ml-1mg",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "",
    "source": "適用外",
    "id": "drug_054"
  },
  {
    "name": "プリンぺラン10mg/2ml 5mg（メトクロプラミド）",
    "category": "消化器",
    "conc": 5,
    "concText": "10mg/2ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.2,
          "hi": 0.5,
          "note": "0.2-0.5mg/kg q6-8h PO,IV,IM\n抗がん剤使用時2mg/kg\n0.4mg/kg IV後に0.3mg/kg/h IV CRI\n1-2mg/kg/day CRI"
        },
        "oral": {
          "lo": 0.2,
          "hi": 0.5,
          "note": "0.2-0.5mg/kg q6-8h PO,IV,IM\n抗がん剤使用時2mg/kg\n0.4mg/kg IV後に0.3mg/kg/h IV CRI\n1-2mg/kg/day CRI"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.2,
        "hi": 1,
        "note": "0.2-1.0mg/kg PO,SC bid-qid"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.2,
        "hi": 1,
        "note": "0.2-1.0mg/kg PO,SC bid-qid"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.2,
        "hi": 1,
        "note": "0.2-1.0mg/kg PO,SC,IM bid"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.2,
        "hi": 0.5,
        "note": "0.2-0.5mg/kg PO,SC bid-qid"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.2,
        "hi": 1,
        "note": "0.2-1.0mg/kg PO,SC,IM bid"
      }
    },
    "memo": "0.1ml-0.5mg",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%A1%E3%83%88%E3%82%AF%E3%83%AD%E3%83%97%E3%83%A9%E3%83%9F%E3%83%89&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_055"
  },
  {
    "name": "ベサコリン（ベサネコール）",
    "category": "消化器",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 0.25,
        "hi": 0.25,
        "note": "0.25mg/kg tid PO,5-25mg/head tid PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "1-5mg/head tid PO"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%99%E3%82%B5%E3%83%8D%E3%82%B3%E3%83%BC%E3%83%AB%E5%A1%A9%E5%8C%96%E7%89%A9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_056"
  },
  {
    "name": "ガスモチン2.5/5mg（モサプリド）",
    "category": "消化器",
    "conc": 5,
    "concText": "5mg",
    "species": {
      "犬": {
        "lo": 0.25,
        "hi": 1,
        "note": "0.25-1mg/kg PO BID"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "(イヌに準ずる？明らかでない）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%A2%E3%82%B5%E3%83%97%E3%83%AA%E3%83%89%E3%82%AF%E3%82%A8%E3%83%B3%E9%85%B8%E5%A1%A9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_057"
  },
  {
    "name": "タケキャブ10mg（ボノプラザン）",
    "category": "消化器",
    "conc": 10,
    "concText": "10mg",
    "species": {
      "犬": {
        "lo": 0.3,
        "hi": 1,
        "note": "0.3-1mg/kg SID  2017 Dr.ohono TRVA seminer"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%9C%E3%83%8E%E3%83%97%E3%83%A9%E3%82%B6%E3%83%B3%E3%83%95%E3%83%9E%E3%83%AB%E9%85%B8%E5%A1%A9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_058"
  },
  {
    "name": "タケプロン１５mg（ランソプラゾール)",
    "category": "消化器",
    "conc": 15,
    "concText": "１５mg",
    "species": {
      "犬": {
        "lo": 0.5,
        "hi": 1,
        "note": "0.5-1.0mg/kg q12h PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg PO sid（胃潰瘍が疑われるとき）"
      },
      "モルモット": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg PO sid"
      },
      "フェレット": {
        "lo": 0.7,
        "hi": 0.7,
        "note": "0.7mg/kg PO sid"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg PO sid"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%A9%E3%83%B3%E3%82%BD%E3%83%97%E3%83%A9%E3%82%BE%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_059"
  },
  {
    "name": "ガスター10mg/ml 10mg(ファモチジン)",
    "category": "消化器",
    "conc": 10,
    "concText": "10mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.1,
          "hi": 0.2,
          "note": "0.1-0.2mg/kg q12h PO IV SC"
        },
        "oral": {
          "lo": 0.1,
          "hi": 0.2,
          "note": "0.1-0.2mg/kg q12h PO IV SC"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 10,
        "note": "0.5-10mg/kg PO,SC,IM,IV bid-tid"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 10,
        "note": "0.5-10mg/kg PO,SC,IM,IV tid"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 10,
        "note": "0.5-10mg/kg PO,SC,IM bid-qid"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 10,
        "note": "0.5-10mg/kg PO,SC,IM bid-tid（食道炎・胃潰瘍・十二指腸潰瘍）"
      }
    },
    "memo": "記載なし",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%95%E3%82%A1%E3%83%A2%E3%83%81%E3%82%B8%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_060"
  },
  {
    "name": "ザンタック（ラニチジン）",
    "category": "消化器",
    "conc": 25,
    "concText": "50mg/2ml,50mg/100mg",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.25,
          "hi": 2,
          "note": "0.25-2mg/kg bid PO,IV,IM"
        },
        "oral": {
          "lo": 0.25,
          "hi": 2,
          "note": "0.25-2mg/kg bid PO,IV,IM"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": 5,
          "hi": 5,
          "note": "5mg/kg"
        },
        "oral": {
          "lo": 5,
          "hi": 5,
          "note": "5mg/kg"
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": 3.5,
          "hi": 3.5,
          "note": "3.5mg/kg"
        },
        "oral": {
          "lo": 3.5,
          "hi": 3.5,
          "note": "3.5mg/kg"
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "0.1ml-2.5mg",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%A9%E3%83%8B%E3%83%81%E3%82%B8%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_061"
  },
  {
    "name": "サイトテック（ミソプロストール）100/200μg",
    "category": "消化器",
    "conc": 200,
    "concText": "200μg",
    "species": {
      "犬": {
        "lo": 0.002,
        "hi": 0.005,
        "note": "2-5μg/kg,q12h,PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "用量は確立されていない"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%9F%E3%82%BD%E3%83%97%E3%83%AD%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_062"
  },
  {
    "name": "タガメット（シメチジン塩酸塩）",
    "category": "消化器",
    "conc": 10,
    "concText": "200mg/20ml,200mg",
    "species": {
      "犬": {
        "injectable": {
          "lo": 10,
          "hi": 10,
          "note": "10mg/kg q6-8h IV IM PO"
        },
        "oral": {
          "lo": 10,
          "hi": 10,
          "note": "10mg/kg q6-8h IV IM PO"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO,SC,IM,IV bid-tid"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg PO,SC,IM,IV tid"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO,SC,IM bid-qid"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO,SC,IM bid-tid（食道炎、胃、十二指腸潰瘍）"
      }
    },
    "memo": "記載なし",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B7%E3%83%A1%E3%83%81%E3%82%B8%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_063"
  },
  {
    "name": "ブスコパン20mg/ml（臭化プリフィニウム）",
    "category": "消化器",
    "conc": 20,
    "concText": "20mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.3,
          "hi": 1.5,
          "note": "0.3-1.5mg/kg tid-qid PO,IV,IM,SC"
        },
        "oral": {
          "lo": 0.3,
          "hi": 1.5,
          "note": "0.3-1.5mg/kg tid-qid PO,IV,IM,SC"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": 4,
          "hi": 4,
          "note": "4mg/kg"
        },
        "oral": {
          "lo": 4,
          "hi": 4,
          "note": "4mg/kg"
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "0.1ml-2mg",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E8%87%AD%E5%8C%96%E3%83%97%E3%83%AA%E3%83%95%E3%82%A3%E3%83%8B%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_064"
  },
  {
    "name": "モニラック（ラクツロース）",
    "category": "消化器",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "肝性脳症：5-15ml/head tid-qid PO\n便秘：1ml/4.5kg tid PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "0.25-1ml/head tid PO\n便秘：1ml/4.5kg tid PO"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%A9%E3%82%AF%E3%83%84%E3%83%AD%E3%83%BC%E3%82%B9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_065"
  },
  {
    "name": "パンクレアチン",
    "category": "消化器",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "0.5-3ｇ食事に混和"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "0.5-4ｇ食事に混和"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%91%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%A2%E3%83%81%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_066"
  },
  {
    "name": "デルマトール（次没食子酸ビスマス）",
    "category": "消化器",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 20,
        "hi": 30,
        "note": "20-30mg/kg bid-tid PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E6%AC%A1%E6%B2%A1%E9%A3%9F%E5%AD%90%E9%85%B8%E3%83%93%E3%82%B9%E3%83%9E%E3%82%B9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_067"
  },
  {
    "name": "アルサルミン1g/10ml 10%（スクラルファート）",
    "category": "消化器",
    "conc": 0.1,
    "concText": "1g/10ml",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "0.5-18g PO q8-12h"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "0.25g PO q8-12h"
      },
      "ウサギ": {
        "lo": 25,
        "hi": 25,
        "note": "25mg/kg PO bid"
      },
      "モルモット": {
        "lo": 25,
        "hi": 50,
        "note": "25-50mg/kg PO bid-qid"
      },
      "フェレット": {
        "lo": 25,
        "hi": 25,
        "note": "25mg/kg PO bid"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 25,
        "hi": 50,
        "note": "25-50mg/kg PO bid"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B9%E3%82%AF%E3%83%A9%E3%83%AB%E3%83%95%E3%82%A1%E3%83%BC%E3%83%88&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_068"
  },
  {
    "name": "アドソルビン（水酸化アルミニウム）",
    "category": "消化器",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 30,
        "note": "10-30mg/kg PO q8h 食事とともに"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E5%A4%A9%E7%84%B6%E3%82%B1%E3%82%A4%E9%85%B8%E3%82%A2%E3%83%AB%E3%83%9F%E3%83%8B%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_069"
  },
  {
    "name": "チャルドール（ピコスルファートナトリウム）",
    "category": "抗生剤",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "２滴前後 sid PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%94%E3%82%B3%E3%82%B9%E3%83%AB%E3%83%95%E3%82%A1%E3%83%BC%E3%83%88%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_070"
  },
  {
    "name": "ペンタサ250mg（メサラミン）",
    "category": "消化器",
    "conc": 250,
    "concText": "250mg",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg q8h PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%A1%E3%82%B5%E3%83%A9%E3%83%9F%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_071"
  },
  {
    "name": "サラゾピリン500mg（スルファサラジン）",
    "category": "抗生剤",
    "conc": 500,
    "concText": "500mg",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 30,
        "note": "10-30mg/kg 18-12h PO"
      },
      "猫": {
        "lo": 20,
        "hi": 20,
        "note": "20mg/kg q12h PO"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B5%E3%83%A9%E3%82%BE%E3%82%B9%E3%83%AB%E3%83%95%E3%82%A1%E3%83%94%E3%83%AA%E3%82%B8%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_072"
  },
  {
    "name": "ビオフェルミン",
    "category": "消化器",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 20,
        "note": "10-20mg/kg bid-tid PO,1g/head sid PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E4%B9%B3%E9%85%B8%E8%8F%8C&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_073"
  },
  {
    "name": "グルタチオン",
    "category": "肝臓・代謝",
    "conc": 50,
    "concText": "100mg/2ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 50,
          "hi": 100,
          "note": "50-100mg/head sid IV"
        },
        "oral": {
          "lo": 50,
          "hi": 50,
          "note": "50mg/head sid-bid PO"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 25,
          "hi": 50,
          "note": "25-50mg/head sid IV"
        },
        "oral": {
          "lo": 25,
          "hi": 25,
          "note": "25mg/head sid PO"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B0%E3%83%AB%E3%82%BF%E3%83%81%E3%82%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_074"
  },
  {
    "name": "グリチルリチン",
    "category": "肝臓・代謝",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.5,
          "hi": 2,
          "note": "0.5-2ml/kg bid IV\n2-10ml/head sid IV"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": "1錠/head bid-tid PO"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": "犬に準ずる"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": "犬に準ずる"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B0%E3%83%AA%E3%83%81%E3%83%AB%E3%83%AA%E3%83%81%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_075"
  },
  {
    "name": "ウルソ50/100mg",
    "category": "肝臓・代謝",
    "conc": 100,
    "concText": "100mg",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "5-15mg/bid PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A6%E3%83%AB%E3%82%BD%E3%83%87%E3%82%AA%E3%82%AD%E3%82%B7%E3%82%B3%E3%83%BC%E3%83%AB%E9%85%B8&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_076"
  },
  {
    "name": "FOY(ガベキサートメシル酸塩)",
    "category": "肝臓・代謝",
    "conc": 20,
    "concText": "100mg/5ml",
    "species": {
      "犬": {
        "lo": 1,
        "hi": 2,
        "note": "重症例30-40mg/kg 24hCRI\n軽症例2-6mg/kg/day程度"
      },
      "猫": {
        "lo": 1,
        "hi": 2,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "100mg/5ml注射用水溶解、50ml以上の濃度に希釈（0.2%以下）",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%AC%E3%83%99%E3%82%AD%E3%82%B5%E3%83%BC%E3%83%88%E3%83%A1%E3%82%B7%E3%83%AB%E9%85%B8%E5%A1%A9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_077"
  },
  {
    "name": "BCAA製剤（リーバクト）",
    "category": "肝臓・代謝",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "0.1-0.2g/kg PO BID"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "0.1-0.3g/kg PO BID"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E5%88%86%E5%B2%90%E9%8E%96%E3%82%A2%E3%83%9F%E3%83%8E%E9%85%B8&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_078"
  },
  {
    "name": "フルスルチアミン",
    "category": "ビタミン・補液",
    "conc": 5,
    "concText": "10mg/2ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 10,
          "hi": 100,
          "note": "10-100mg/head sid PO\n12.5-50mg/head sid IM,SC"
        },
        "oral": {
          "lo": 10,
          "hi": 100,
          "note": "10-100mg/head sid PO\n12.5-50mg/head sid IM,SC"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 5,
          "hi": 30,
          "note": "5-30mg/head sid PO\n(一日の上限量50mg/head)\n12.5-25mg/head sid IM,SC"
        },
        "oral": {
          "lo": 5,
          "hi": 30,
          "note": "5-30mg/head sid PO\n(一日の上限量50mg/head)\n12.5-25mg/head sid IM,SC"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "2ml-10mg",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%95%E3%83%AB%E3%82%B9%E3%83%AB%E3%83%81%E3%82%A2%E3%83%9F%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_079"
  },
  {
    "name": "シアノコバラミン",
    "category": "ビタミン・補液",
    "conc": 1,
    "concText": "1mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.25,
          "hi": 0.5,
          "note": "100-200μg sid PO\n250-500μg sid IMまたはSC"
        },
        "oral": {
          "lo": 0.1,
          "hi": 0.2,
          "note": "100-200μg sid PO\n250-500μg sid IMまたはSC"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 0.25,
          "hi": 0.25,
          "note": "50-100μg sid PO\n250μg sid IMまたはSC"
        },
        "oral": {
          "lo": 0.05,
          "hi": 0.1,
          "note": "50-100μg sid PO\n250μg sid IMまたはSC"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "1ml-1000µｇ",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B7%E3%82%A2%E3%83%8E%E3%82%B3%E3%83%90%E3%83%A9%E3%83%9F%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_080"
  },
  {
    "name": "フォリアミン",
    "category": "ビタミン・補液",
    "conc": 15,
    "concText": "15mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.5,
          "hi": 0.5,
          "note": "0.5mg/kg sid PO,IM,SC"
        },
        "oral": {
          "lo": 0.5,
          "hi": 0.5,
          "note": "0.5mg/kg sid PO,IM,SC"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 0.5,
          "hi": 0.5,
          "note": "イヌに準ずる"
        },
        "oral": {
          "lo": 0.5,
          "hi": 0.5,
          "note": "イヌに準ずる"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E8%91%89%E9%85%B8&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_081"
  },
  {
    "name": "アスコルビン酸",
    "category": "ビタミン・補液",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "補給：100-500mg/head sid PO\n尿の酸性化：100mg/head tid PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": 50,
        "hi": 100,
        "note": "50-100mg/動物 PO,SC q24h（欠乏症・必須）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": 50,
        "hi": 200,
        "note": "50-200mg/kg PO,SC q24h"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "1ml-100mg",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%82%B9%E3%82%B3%E3%83%AB%E3%83%93%E3%83%B3%E9%85%B8&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_082"
  },
  {
    "name": "ビタミンK1",
    "category": "ビタミン・補液",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 5,
        "note": "肝疾患：１－５mg/kg sid PO\nワルファリン中毒：1mg/kg sid PO"
      },
      "猫": {
        "lo": 5,
        "hi": 5,
        "note": "肝疾患：１－５mg/kg sid PO\nワルファリン中毒：2mg/kg sid PO"
      },
      "ウサギ": {
        "lo": 1,
        "hi": 10,
        "note": "1-10mg/kg IM（必要に応じて）"
      },
      "モルモット": {
        "lo": 1,
        "hi": 10,
        "note": "1-10mg/kg IM（必要に応じて）"
      },
      "フェレット": {
        "lo": 1,
        "hi": 2,
        "note": "1-2mg(チアミン)/kg SC,IM"
      },
      "ハリネズミ": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg SC,IM（必要に応じて）"
      },
      "ハムスター": {
        "lo": 1,
        "hi": 10,
        "note": "1-10mg/kg IM（必要に応じて）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%95%E3%82%A3%E3%83%88%E3%83%8A%E3%82%B8%E3%82%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_083"
  },
  {
    "name": "タウリン９８％散 1000mg",
    "category": "ビタミン・補液",
    "conc": 1000,
    "concText": "1000mg",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "1/4-1/2/頭　BID"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "",
    "source": "適用外",
    "id": "drug_084"
  },
  {
    "name": "トランサミン250mg",
    "category": "止血・造血・ホルモン",
    "conc": 50,
    "concText": "250mg/5ml（注射） / 250mg錠（内服）",
    "species": {
      "犬": {
        "injectable": {
          "lo": 5,
          "hi": 25,
          "note": "5-25mg/kg/day IV,IM,SC\n催吐25-50mg/kg IV\nwww.mpagro.co.jp/members/ca_kiji/sonota1_201401.pdf"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "1ml-50mg",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%88%E3%83%A9%E3%83%8D%E3%82%AD%E3%82%B5%E3%83%A0%E9%85%B8&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_085"
  },
  {
    "name": "アドナ",
    "category": "止血・造血・ホルモン",
    "conc": 5,
    "concText": "5mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.2,
          "hi": 0.5,
          "note": "0.2-0.5mg/kg q8h"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%AB%E3%83%AB%E3%83%90%E3%82%BE%E3%82%AF%E3%83%AD%E3%83%A0%E3%82%B9%E3%83%AB%E3%83%9B%E3%83%B3%E9%85%B8%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_086"
  },
  {
    "name": "ビタミンK1 5mg/ml",
    "category": "ビタミン・補液",
    "conc": 5,
    "concText": "5mg/ml",
    "species": {
      "犬": {
        "lo": 0.3,
        "hi": 5,
        "note": "0.3-5mg/kg IM,IV"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": 1,
        "hi": 10,
        "note": "1-10mg/kg IM（必要に応じて）"
      },
      "モルモット": {
        "lo": 1,
        "hi": 10,
        "note": "1-10mg/kg IM（必要に応じて）"
      },
      "フェレット": {
        "lo": 1,
        "hi": 2,
        "note": "1-2mg(チアミン)/kg SC,IM"
      },
      "ハリネズミ": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg SC,IM（必要に応じて）"
      },
      "ハムスター": {
        "lo": 1,
        "hi": 10,
        "note": "1-10mg/kg IM（必要に応じて）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%95%E3%82%A3%E3%83%88%E3%83%8A%E3%82%B8%E3%82%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_087"
  },
  {
    "name": "テツクール（硫酸鉄）",
    "category": "ビタミン・補液",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "100-300mg/head q24h PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "50-100mg/head q24h PO"
      },
      "ウサギ": {
        "lo": 4,
        "hi": 6,
        "note": "4-6mg/kg IM 1回"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg IM 1回"
      },
      "ハリネズミ": {
        "lo": 25,
        "hi": 25,
        "note": "25mg/kg IM"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E7%A1%AB%E9%85%B8%E9%89%84&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_088"
  },
  {
    "name": "エスポー",
    "category": "止血・造血・ホルモン",
    "conc": 1400,
    "concText": "750IU/0.5ml",
    "species": {
      "犬": {
        "lo": 35,
        "hi": 50,
        "note": "35-50IU/kg 週3回　SC"
      },
      "猫": {
        "lo": 100,
        "hi": 100,
        "note": "100IU/kg 週4回　SC"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "週２-3回、HCTモニタ",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A8%E3%83%9D%E3%82%A8%E3%83%81%E3%83%B3%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_089"
  },
  {
    "name": "エポジン",
    "category": "止血・造血・ホルモン",
    "conc": 1400,
    "concText": "750IU/0.5ml",
    "species": {
      "犬": {
        "lo": 50,
        "hi": 100,
        "note": "（記載なし）"
      },
      "猫": {
        "lo": 50,
        "hi": 100,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "週３回、HCTモニタ",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A8%E3%83%9D%E3%82%A8%E3%83%81%E3%83%B3%E3%83%99%E3%83%BC%E3%82%BF&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_090"
  },
  {
    "name": "リマダイル(カルプロフェン）",
    "category": "NSAIDs",
    "conc": 50,
    "concText": "50mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 4.4,
          "hi": 4.4,
          "note": "2.2mg/kg q12h PO 4.4mg/kg q24h PO"
        },
        "oral": {
          "lo": 2.2,
          "hi": 2.2,
          "note": "2.2mg/kg q12h PO 4.4mg/kg q24h PO"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 0.5,
          "hi": 0.5,
          "note": "0.5mg/kg q24h PO"
        },
        "oral": {
          "lo": 0.5,
          "hi": 0.5,
          "note": "0.5mg/kg q24h PO"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 1,
        "hi": 2.2,
        "note": "1-2.2mg/kg PO q12h"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg PO q12-24h"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 1,
        "hi": 2,
        "note": "1-2mg/kg PO q12-24h"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": 5,
          "hi": 5,
          "note": "5mg/kg SC"
        },
        "oral": {
          "lo": 5,
          "hi": 5,
          "note": "5mg/kg SC"
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%AB%E3%83%AB%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%B3&MAIN_COMPONENT=%E3%82%AB%E3%83%AB%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%B3",
    "source": "NVAL",
    "id": "drug_091"
  },
  {
    "name": "メタカム(メロキシカム）",
    "category": "NSAIDs",
    "conc": 5,
    "concText": "5mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.2,
          "hi": 0.2,
          "note": "初回：0.2mg/kg sid PO,IV,SC\nその後：0.1mg/kg sid PO,IV,SC"
        },
        "oral": {
          "lo": 0.2,
          "hi": 0.2,
          "note": "初回：0.2mg/kg sid PO,IV,SC\nその後：0.1mg/kg sid PO,IV,SC"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 0.05,
          "hi": 0.3,
          "note": "0.05-0.3mg/kg eod-sid PO,SC"
        },
        "oral": {
          "lo": 0.05,
          "hi": 0.3,
          "note": "0.05-0.3mg/kg eod-sid PO,SC"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": 0.2,
          "hi": 0.2,
          "note": "0.2mg/kg SC,PO"
        },
        "oral": {
          "lo": 0.2,
          "hi": 0.2,
          "note": "0.2mg/kg SC,PO"
        },
        "lo": 0.2,
        "hi": 0.2,
        "note": "0.2mg/kg SC,PO sid"
      },
      "フェレット": {
        "injectable": {
          "lo": 0.2,
          "hi": 0.2,
          "note": "0.2mg/kg"
        },
        "oral": {
          "lo": 0.2,
          "hi": 0.2,
          "note": "0.2mg/kg"
        },
        "lo": 0.1,
        "hi": 0.2,
        "note": "0.1-0.2mg/kg PO sid"
      },
      "モルモット": {
        "injectable": {
          "lo": 0.5,
          "hi": 0.5,
          "note": "0.5mg/kg SC,PO"
        },
        "oral": {
          "lo": 0.5,
          "hi": 0.5,
          "note": "0.5mg/kg SC,PO"
        },
        "lo": 0.2,
        "hi": 0.2,
        "note": "0.2mg/kg SC"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": 0.2,
          "hi": 0.2,
          "note": "0.2mg/kg SC,PO"
        },
        "oral": {
          "lo": 0.2,
          "hi": 0.2,
          "note": "0.2mg/kg SC,PO"
        },
        "lo": 0.2,
        "hi": 0.2,
        "note": "0.2mg/kg PO,SC sid"
      },
      "ハムスター": {
        "injectable": {
          "lo": 0.2,
          "hi": 0.6,
          "note": "0.2-0.6mg/kg SC"
        },
        "oral": {
          "lo": 0.2,
          "hi": 0.6,
          "note": "0.2-0.6mg/kg SC"
        },
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "0.1ml-0.5mg",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%A1%E3%83%AD%E3%82%AD%E3%82%B7%E3%82%AB%E3%83%A0&MAIN_COMPONENT=%E3%83%A1%E3%83%AD%E3%82%AD%E3%82%B7%E3%82%AB%E3%83%A0",
    "source": "NVAL",
    "id": "drug_092"
  },
  {
    "name": "オンシオール5/6/10/20mg（ロベナコキシブ）",
    "category": "NSAIDs",
    "conc": 20,
    "concText": "20mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 2,
          "hi": 2,
          "note": "2mg/kg SC 単回"
        },
        "oral": {
          "lo": 1,
          "hi": 1,
          "note": "1mg/kg PO 食前1時間"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 2,
          "hi": 2,
          "note": "2mg/kg SC 単回"
        },
        "oral": {
          "lo": 1,
          "hi": 1,
          "note": "1mg/kg PO sid 最大6日間"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "0.1ml-2mg",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%AD%E3%83%99%E3%83%8A%E3%82%B3%E3%82%AD%E3%82%B7%E3%83%96&MAIN_COMPONENT=%E3%83%AD%E3%83%99%E3%83%8A%E3%82%B3%E3%82%AD%E3%82%B7%E3%83%96",
    "source": "NVAL",
    "id": "drug_093"
  },
  {
    "name": "プレビコックス",
    "category": "NSAIDs",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg 単回PO"
      },
      "猫": {
        "lo": 1.5,
        "hi": 1.5,
        "note": "1.5mg/kg 単回"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%95%E3%82%A3%E3%83%AD%E3%82%B3%E3%82%AD%E3%82%B7%E3%83%96&MAIN_COMPONENT=%E3%83%95%E3%82%A3%E3%83%AD%E3%82%B3%E3%82%AD%E3%82%B7%E3%83%96",
    "source": "NVAL",
    "id": "drug_094"
  },
  {
    "name": "バキソ（ピロキシカム）",
    "category": "NSAIDs",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 0.3,
        "hi": 0.3,
        "note": "0.3mg/kg,q48h,PO がん治療0.3mg/kg,q24h,PO"
      },
      "猫": {
        "lo": 0.3,
        "hi": 0.3,
        "note": "0.3mg/kg,24h,POあるいは1mg/head,q24h,PO"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%94%E3%83%AD%E3%82%AD%E3%82%B7%E3%82%AB%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_095"
  },
  {
    "name": "ぺリアクチン(シプロヘプタジン)",
    "category": "アレルギー・皮膚科",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 1,
        "hi": 1,
        "note": "0,5-1,1mg/kg q8-12h PO"
      },
      "猫": {
        "lo": 2,
        "hi": 4,
        "note": "2-4mg/kg q12-24h PO"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B7%E3%83%97%E3%83%AD%E3%83%98%E3%83%97%E3%82%BF%E3%82%B8%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_096"
  },
  {
    "name": "タベジール（クレマスチンフマル酸塩）",
    "category": "アレルギー・皮膚科",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 0.05,
        "hi": 0.1,
        "note": "0.05-0.1mg/kg q12h PO\n上限0.5-1.5mg/kg q12h PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%AF%E3%83%AC%E3%83%9E%E3%82%B9%E3%83%81%E3%83%B3%E3%83%95%E3%83%9E%E3%83%AB%E9%85%B8%E5%A1%A9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_097"
  },
  {
    "name": "アタラックス（ヒフォロキシジン塩酸塩）",
    "category": "アレルギー・皮膚科",
    "conc": 25,
    "concText": "25mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 2,
          "hi": 2,
          "note": "2mg/kg q8-12h IM,PO"
        },
        "oral": {
          "lo": 2,
          "hi": 2,
          "note": "2mg/kg q8-12h IM,PO"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": "情報なし"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": "情報なし"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%92%E3%83%89%E3%83%AD%E3%82%AD%E3%82%B7%E3%82%B8%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_098"
  },
  {
    "name": "ポララミン（クロルフェニラミンマレイン酸塩）",
    "category": "アレルギー・皮膚科",
    "conc": 5,
    "concText": "5mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.2,
          "hi": 0.5,
          "note": "0.2-0.5mg/kg q8-12h PO,IM,SC"
        },
        "oral": {
          "lo": 2.2,
          "hi": 2.2,
          "note": "2.2mg/kg q8-12h PO,IM,SC"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 2,
          "hi": 4,
          "note": "2-4mg/kg q6-8h PO, 1mg/kg q8h IV,IM"
        },
        "oral": {
          "lo": 2,
          "hi": 4,
          "note": "2-4mg/kg q6-8h PO, 1mg/kg q8h IV,IM"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 2,
        "hi": 2,
        "note": "2mg/kg PO,SC q8-12h"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 2,
        "note": "0.5-2.0mg/kg PO,SC,IM q8-12h"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg SC q8-12h"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 1,
        "hi": 2,
        "note": "1-2mg/kg PO bid"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 1,
        "hi": 2,
        "note": "1-2mg/kg PO,SC bid"
      }
    },
    "memo": "記載なし",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B8%E3%83%95%E3%82%A7%E3%83%B3%E3%83%92%E3%83%89%E3%83%A9%E3%83%9F%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_099"
  },
  {
    "name": "ソル・メドロール",
    "category": "ステロイド",
    "conc": 40,
    "concText": "40mg/ml",
    "species": {
      "犬": {
        "lo": 30,
        "hi": 30,
        "note": "抗炎症まては補充療法：0.25-0.5mg/kg/day\n中枢神経損傷30mg/kgゆっくりIV,2と6時間後に15mg/kg IV,30mg/kgゆっくりIVしてその後は5.4mg/kg/h CRI(24-48時間）\nショック：30-35mg/kg IV"
      },
      "猫": {
        "lo": 30,
        "hi": 30,
        "note": "抗炎症まては補充療法：0.25-0.5mg/kg/day\n中枢神経損傷30mg/kgゆっくりIV,2と6時間後に15mg/kg IV\n輸液後肺水腫：30mg/kg(6時間ごと）"
      },
      "ウサギ": {
        "lo": 0.5,
        "hi": 40,
        "note": "0.5-40mg/kg（抗炎症: 0.5-2mg/kg / ショック: 10-40mg/kg）"
      },
      "モルモット": {
        "lo": 0.5,
        "hi": 40,
        "note": "0.5-40mg/kg"
      },
      "フェレット": {
        "lo": 0.5,
        "hi": 40,
        "note": "0.5-40mg/kg IV"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 0.5,
        "hi": 40,
        "note": "0.5-40mg/kg"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%A1%E3%83%81%E3%83%AB%E3%83%97%E3%83%AC%E3%83%89%E3%83%8B%E3%82%BE%E3%83%AD%E3%83%B3%E3%82%B3%E3%83%8F%E3%82%AF%E9%85%B8%E3%82%A8%E3%82%B9%E3%83%86%E3%83%AB%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_100"
  },
  {
    "name": "デポ・メドロール20mg/ml",
    "category": "ステロイド",
    "conc": 20,
    "concText": "20mg/ml",
    "species": {
      "犬": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg q1-3wk IM,SC"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "10-20mg/head q1-3wk SC,IM"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "0.1ml-2mg",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E9%85%A2%E9%85%B8%E3%83%A1%E3%83%81%E3%83%AB%E3%83%97%E3%83%AC%E3%83%89%E3%83%8B%E3%82%BE%E3%83%AD%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_101"
  },
  {
    "name": "デキサメサゾン1mg/ml",
    "category": "ステロイド",
    "conc": 1,
    "concText": "1mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.07,
          "hi": 0.15,
          "note": "抗炎症：0.07-0.15mg/kg q12-24h PO,IV,IM\n中枢神経損傷：2mg/kg IV,その後1mg/kg q8-12h IV,SC,その後0.1mg/kg IV,SC,\nその後漸減\nショック、アナフィラキシー：4-6mg/kg IV(ゆっくり）\n免疫介在性血小板減少症：0.25-0.3mg/kg IV,SC,1回,その後0.25－1.25mg/kg q12-24hPO,その後0"
        },
        "oral": {
          "lo": 0.07,
          "hi": 0.15,
          "note": "抗炎症：0.07-0.15mg/kg q12-24h PO,IV,IM\n中枢神経損傷：2mg/kg IV,その後1mg/kg q8-12h IV,SC,その後0.1mg/kg IV,SC,\nその後漸減\nショック、アナフィラキシー：4-6mg/kg IV(ゆっくり）\n免疫介在性血小板減少症：0.25-0.3mg/kg IV,SC,1回,その後0.25－1.25mg/kg q12-24hPO,その後0"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 2,
        "note": "0.5-2.0mg/kg PO,SC（胃潰瘍に注意）"
      },
      "フェレット": {
        "injectable": {
          "lo": 0.5,
          "hi": 0.5,
          "note": "0.5mg/kg"
        },
        "oral": {
          "lo": 0.5,
          "hi": 0.5,
          "note": "0.5mg/kg"
        },
        "lo": 0.5,
        "hi": 2,
        "note": "0.5-2.0mg/kg SC,IM,IV"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 2,
        "note": "0.5-2.0mg/kg SC,IM,IV"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.1,
        "hi": 1.5,
        "note": "0.1-1.5mg/kg IM"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 2,
        "note": "0.5-2.0mg/kg SC,IM,IV"
      }
    },
    "memo": "b",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%87%E3%82%AD%E3%82%B5%E3%83%A1%E3%82%BF%E3%82%BE%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_102"
  },
  {
    "name": "プレドニゾロン10mg/ml",
    "category": "ステロイド",
    "conc": 10,
    "concText": "10mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 0.5,
          "hi": 1,
          "note": "抗炎症：0.5-1mg/kg q12-24h PO,IV,IM\n免疫抑制：１-6mg/kg bid PO,IV,IM\n補充療法：0.2-0.3mg/kg/day PO\n長期投与：1-4mg/kg/eod-sid PO"
        },
        "oral": {
          "lo": 0.5,
          "hi": 1,
          "note": "抗炎症：0.5-1mg/kg q12-24h PO,IV,IM\n免疫抑制：１-6mg/kg bid PO,IV,IM\n補充療法：0.2-0.3mg/kg/day PO\n長期投与：1-4mg/kg/eod-sid PO"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": "多くが犬の用量の２倍。\n犬と同様"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": "多くが犬の用量の２倍。\n犬と同様"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 2,
        "note": "0.5-2.0mg/kg PO,SC bid"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 2,
        "note": "0.5-2.0mg/kg PO,SC bid（副腎皮質機能低下症: 1.25-2.5mg/kg）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 2.2,
        "note": "0.5-2.2mg/kg PO,SC bid"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 2.5,
        "hi": 2.5,
        "note": "2.5mg/kg PO,SC,IM bid"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 0.5,
        "hi": 2.2,
        "note": "0.5-2.2mg/kg PO bid"
      }
    },
    "memo": "0.1ml-0.1mg",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%97%E3%83%AC%E3%83%89%E3%83%8B%E3%82%BE%E3%83%AD%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_103"
  },
  {
    "name": "フロリネフ0.1mg",
    "category": "ステロイド",
    "conc": 0.1,
    "concText": "0.1mg",
    "species": {
      "犬": {
        "lo": 0.01,
        "hi": 0.01,
        "note": "0.01mg/kg q12h PO"
      },
      "猫": {
        "lo": 0.01,
        "hi": 0.01,
        "note": "0.01mg/kg q12h PO"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%95%E3%83%AB%E3%83%89%E3%83%AD%E3%82%B3%E3%83%AB%E3%83%81%E3%82%BE%E3%83%B3%E9%85%A2%E9%85%B8%E3%82%A8%E3%82%B9%E3%83%86%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_104"
  },
  {
    "name": "コルタバンス（ヒドロコルチゾンアセポン酸エステル）",
    "category": "ステロイド",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "SID 7DAYS 10×10cm 2回噴霧"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%92%E3%83%89%E3%83%AD%E3%82%B3%E3%83%AB%E3%83%81%E3%82%BE%E3%83%B3%E3%82%A2%E3%82%BB%E3%83%9D%E3%83%B3%E9%85%B8%E3%82%A8%E3%82%B9%E3%83%86%E3%83%AB&MAIN_COMPONENT=%E3%83%92%E3%83%89%E3%83%AD%E3%82%B3%E3%83%AB%E3%83%81%E3%82%BE%E3%83%B3%E3%82%A2%E3%82%BB%E3%83%9D%E3%83%B3%E9%85%B8%E3%82%A8%E3%82%B9%E3%83%86%E3%83%AB",
    "source": "NVAL",
    "id": "drug_105"
  },
  {
    "name": "アミペニックス1000mg/10ml",
    "category": "抗生剤",
    "conc": 100,
    "concText": "1000mg/10ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 10,
          "hi": 40,
          "note": "20mg/kg sid SC\n10-40mg/kg q6-12h PO,IV,IM,SC\n50mg/kg q4-6h髄内投与（新生子）"
        },
        "oral": {
          "lo": 10,
          "hi": 40,
          "note": "20mg/kg sid SC\n10-40mg/kg q6-12h PO,IV,IM,SC\n50mg/kg q4-6h髄内投与（新生子）"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "0.1ml-10mg",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%A2%E3%83%B3%E3%83%94%E3%82%B7%E3%83%AA%E3%83%B3%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0&MAIN_COMPONENT=%E3%82%A2%E3%83%B3%E3%83%94%E3%82%B7%E3%83%AA%E3%83%B3%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0",
    "source": "NVAL",
    "id": "drug_106"
  },
  {
    "name": "コンベニア80mg/ml（セフォベシンナトリウム）",
    "category": "抗生剤",
    "conc": 80,
    "concText": "80mg/ml",
    "species": {
      "犬": {
        "lo": 8,
        "hi": 8,
        "note": "8mg/kg SC"
      },
      "猫": {
        "lo": 8,
        "hi": 8,
        "note": "8mg/kg SC"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "0.1ml-8mg",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%BB%E3%83%95%E3%82%A9%E3%83%99%E3%82%B7%E3%83%B3%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0&MAIN_COMPONENT=%E3%82%BB%E3%83%95%E3%82%A9%E3%83%99%E3%82%B7%E3%83%B3%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0",
    "source": "NVAL",
    "id": "drug_107"
  },
  {
    "name": "ペントシリン（ピペラシリンナトリウム）",
    "category": "抗生剤",
    "conc": 250,
    "concText": "2g",
    "species": {
      "犬": {
        "lo": 25,
        "hi": 50,
        "note": "40mg/kg q6h IV IM 重症例では100mg/kg q8h"
      },
      "猫": {
        "lo": 25,
        "hi": 50,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（重篤な副作用の可能性）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（重篤な副作用の可能性）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%94%E3%83%9A%E3%83%A9%E3%82%B7%E3%83%AA%E3%83%B3%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_108"
  },
  {
    "name": "アモキシクリア、アモリン\n(アモキシシリン）",
    "category": "抗生剤",
    "conc": 100,
    "concText": "100mg",
    "species": {
      "犬": {
        "lo": 6.6,
        "hi": 20,
        "note": "6.6-20mg/kg q8-12h"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "推奨されない（草食動物は使用禁忌）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "フェレット": {
        "lo": 10,
        "hi": 30,
        "note": "10-30mg/kg PO bid / ヘリコバクターには30mg/kg tid 21日間"
      },
      "ハリネズミ": {
        "lo": 15,
        "hi": 15,
        "note": "15mg/kg PO,SC,IM bid（注意して使用）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "使用しない"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%A2%E3%83%A2%E3%82%AD%E3%82%B7%E3%82%B7%E3%83%AA%E3%83%B3&MAIN_COMPONENT=%E3%82%A2%E3%83%A2%E3%82%AD%E3%82%B7%E3%82%B7%E3%83%AA%E3%83%B3",
    "source": "NVAL",
    "id": "drug_109"
  },
  {
    "name": "オーグメンチン250mg\n（アモキシシリン＋クラブラン酸カリウム）",
    "category": "抗生剤",
    "conc": 250,
    "concText": "250mg",
    "species": {
      "犬": {
        "lo": 12.5,
        "hi": 25,
        "note": "12.5-25mg/kg q12h PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "62.5mg/頭　q12h"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "推奨されない（草食動物）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "フェレット": {
        "lo": 12.5,
        "hi": 25,
        "note": "12.5-25mg/kg PO bid"
      },
      "ハリネズミ": {
        "lo": 12.5,
        "hi": 12.5,
        "note": "12.5mg/kg PO bid-q24h"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%A2%E3%82%AD%E3%82%B7%E3%82%B7%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_110"
  },
  {
    "name": "パセトシン250mg",
    "category": "抗生剤",
    "conc": 250,
    "concText": "250mg",
    "species": {
      "犬": {
        "lo": 20,
        "hi": 30,
        "note": "10－20mg/kg bid PO 最大20-30mg/kg q6-12 PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "推奨されない（草食動物は使用禁忌）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "フェレット": {
        "lo": 10,
        "hi": 30,
        "note": "10-30mg/kg PO bid"
      },
      "ハリネズミ": {
        "lo": 15,
        "hi": 15,
        "note": "15mg/kg PO,SC,IM bid（注意して使用）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "使用しない"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%A2%E3%82%AD%E3%82%B7%E3%82%B7%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_111"
  },
  {
    "name": "セファメジンα注 0.25,0.5g（セファゾリンナトリウム）",
    "category": "抗生剤",
    "conc": 500,
    "concText": "0.5g",
    "species": {
      "犬": {
        "lo": 20,
        "hi": 35,
        "note": "20-35mg/kg,q8h IV IM\nCRI 負荷用量1.3mg/kg-維持用量1.2mg/kg/h\n外科手術時　22mg/kg,IV　手術中2H毎"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "推奨されない（草食動物）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "推奨されない（草食動物）"
      },
      "フェレット": {
        "lo": 20,
        "hi": 25,
        "note": "20-25mg/kg SC,IM,IV q8h"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%BB%E3%83%95%E3%82%A1%E3%82%BE%E3%83%AA%E3%83%B3%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_112"
  },
  {
    "name": "セフゾン（セフジニル）",
    "category": "抗生剤",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg q12h PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%BB%E3%83%95%E3%82%B8%E3%83%8B%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_113"
  },
  {
    "name": "ケフラール（セファクロル）",
    "category": "抗生剤",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 15,
        "hi": 20,
        "note": "15-20mg/kg q8h PO"
      },
      "猫": {
        "lo": 15,
        "hi": 20,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%BB%E3%83%95%E3%82%A1%E3%82%AF%E3%83%AD%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_114"
  },
  {
    "name": "ゲンタマイシン",
    "category": "抗生剤",
    "conc": 40,
    "concText": "40mg/ml（標準注射剤）",
    "species": {
      "犬": {
        "lo": 2,
        "hi": 4,
        "note": "2-4mg/kg q8h or 9-14mg/kg q24h SC,IM,IV"
      },
      "猫": {
        "lo": 5,
        "hi": 8,
        "note": "3mg/kg q8h or 5-8mg/kg q24h SC,IM IV"
      },
      "ウサギ": {
        "lo": 4,
        "hi": 4,
        "note": "4mg/kg SC,IM q24h（腎毒性注意・使用しない場合もあり）"
      },
      "モルモット": {
        "lo": 5,
        "hi": 8,
        "note": "5-8mg/kg SC,IM q8h-q24h"
      },
      "フェレット": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg SC,IM q24h（腎毒性注意・使用しない場合もあり）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 5,
        "hi": 8,
        "note": "5-8mg/kg SC,IM q8h-q24h"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B2%E3%83%B3%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA / NVAL",
    "id": "drug_115"
  },
  {
    "name": "ラリキシン250mg,リレキシペット\n（セファレキシン）",
    "category": "抗生剤",
    "conc": 250,
    "concText": "250mg",
    "species": {
      "犬": {
        "lo": 20,
        "hi": 40,
        "note": "20-40mg/kg q6-12h PO\n最大60mg/kg tid PO"
      },
      "猫": {
        "lo": 20,
        "hi": 30,
        "note": "20-30mg/kg bid-tid PO\n最大50mg/kg bid PO"
      },
      "ウサギ": {
        "lo": 11,
        "hi": 22,
        "note": "11-22mg/kg PO bid（草食動物では腸炎誘発の可能性）"
      },
      "モルモット": {
        "lo": 50,
        "hi": 50,
        "note": "50mg/kg PO bid（推奨されない）"
      },
      "フェレット": {
        "lo": 15,
        "hi": 30,
        "note": "15-30mg/kg PO bid"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%BB%E3%83%95%E3%82%A1%E3%83%AC%E3%82%AD%E3%82%B7%E3%83%B3&MAIN_COMPONENT=%E3%82%BB%E3%83%95%E3%82%A1%E3%83%AC%E3%82%AD%E3%82%B7%E3%83%B3",
    "source": "NVAL",
    "id": "drug_116"
  },
  {
    "name": "シンプリセフ（セフポドキシム）",
    "category": "抗生剤",
    "conc": 100,
    "concText": "100mg",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg q24h"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "(情報なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%BB%E3%83%95%E3%83%9D%E3%83%89%E3%82%AD%E3%82%B7%E3%83%A0%E3%83%97%E3%83%AD%E3%82%AD%E3%82%BB%E3%83%81%E3%83%AB&MAIN_COMPONENT=%E3%82%BB%E3%83%95%E3%83%9D%E3%83%89%E3%82%AD%E3%82%B7%E3%83%A0%E3%83%97%E3%83%AD%E3%82%AD%E3%82%BB%E3%83%81%E3%83%AB",
    "source": "NVAL",
    "id": "drug_117"
  },
  {
    "name": "タイロシン",
    "category": "抗生剤",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 20,
        "hi": 40,
        "note": "20-40mg/kg 12h PO"
      },
      "猫": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg 12h PO"
      },
      "ウサギ": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg PO,SC bid（腸内細菌叢に影響を与える可能性あり）"
      },
      "モルモット": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg PO,SC bid（毒性が報告されている）"
      },
      "フェレット": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg SC,IM,PO bid-sid"
      },
      "ハリネズミ": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg PO,SC bid"
      },
      "ハムスター": {
        "lo": 2,
        "hi": 8,
        "note": "2-8mg/kg PO,SC bid（注意して使用）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%BF%E3%82%A4%E3%83%AD%E3%82%B7%E3%83%B3&MAIN_COMPONENT=%E3%82%BF%E3%82%A4%E3%83%AD%E3%82%B7%E3%83%B3",
    "source": "NVAL",
    "id": "drug_118"
  },
  {
    "name": "エリスロシン（エリスロマイシン）",
    "category": "抗生剤",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 20,
        "note": "10-20mg/kg q8-12 PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "使用しない（草食動物）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "使用しない（草食動物）"
      },
      "フェレット": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg PO q8h"
      },
      "ハリネズミ": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg PO bid"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "使用しないか、注意して使用"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A8%E3%83%AA%E3%82%B9%E3%83%AD%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_119"
  },
  {
    "name": "ジスロマック250mg（アジスロマイシン）",
    "category": "抗生剤",
    "conc": 250,
    "concText": "250mg",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg SID 5-7DAYS"
      },
      "猫": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg SID 7DAYS"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "推奨されない（草食動物）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "推奨されない（草食動物）"
      },
      "フェレット": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO bid（クリプトスポリジウム）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%82%B8%E3%82%B9%E3%83%AD%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_120"
  },
  {
    "name": "クラリス、クラリシッド、クラロイシン\n（クラリスロマシシン）",
    "category": "抗生剤",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 7.5,
        "hi": 10,
        "note": "7.5-10mg/kg q12h PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "フェレット": {
        "lo": 12.5,
        "hi": 12.5,
        "note": "12.5mg/kg PO bid（ヘリコバクター除菌）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%AF%E3%83%A9%E3%83%AA%E3%82%B9%E3%83%AD%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_121"
  },
  {
    "name": "バイトリル15/150/250mg（エンロフロキサシン）",
    "category": "抗生剤",
    "conc": null,
    "concText": "250mg",
    "species": {
      "犬": {
        "injectable": {
          "lo": 5,
          "hi": 20,
          "note": "5-20mg/kg/day PO,IV,IM,SC\n最大で20mg/kg bid PO,IV,IM,SC\n(IVは点滴静注）"
        },
        "oral": {
          "lo": 5,
          "hi": 20,
          "note": "5-20mg/kg/day PO,IV,IM,SC\n最大で20mg/kg bid PO,IV,IM,SC\n(IVは点滴静注）"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 5,
          "hi": 5,
          "note": "5mg/kg/day PO,SC"
        },
        "oral": {
          "lo": 5,
          "hi": 5,
          "note": "5mg/kg/day PO,SC"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": 10,
          "hi": 10,
          "note": "10mg/kg"
        },
        "oral": {
          "lo": 10,
          "hi": 10,
          "note": "10mg/kg"
        },
        "lo": 5,
        "hi": 20,
        "note": "5-20mg/kg PO,SC,IM bid"
      },
      "フェレット": {
        "injectable": {
          "lo": 5,
          "hi": 5,
          "note": "5mg/kg"
        },
        "oral": {
          "lo": 5,
          "hi": 5,
          "note": "5mg/kg"
        },
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO,SC,IM bid（もしくは10-20mg/kg）"
      },
      "モルモット": {
        "injectable": {
          "lo": 5,
          "hi": 20,
          "note": "5-20mg/kg"
        },
        "oral": {
          "lo": 5,
          "hi": 20,
          "note": "5-20mg/kg"
        },
        "lo": 5,
        "hi": 15,
        "note": "5-15mg/kg PO,SC,IM bid"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": 5,
          "hi": 5,
          "note": "5mg/kg SC"
        },
        "oral": {
          "lo": 5,
          "hi": 5,
          "note": "5mg/kg SC"
        },
        "lo": 2.5,
        "hi": 10,
        "note": "2.5-10mg/kg PO,SC,IM bid"
      },
      "ハムスター": {
        "injectable": {
          "lo": 10,
          "hi": 10,
          "note": "10mg/kg"
        },
        "oral": {
          "lo": 10,
          "hi": 10,
          "note": "10mg/kg"
        },
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO,SC,IM bid"
      }
    },
    "memo": "0.1ml-0.25mg",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%A8%E3%83%B3%E3%83%AD%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3&MAIN_COMPONENT=%E3%82%A8%E3%83%B3%E3%83%AD%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3",
    "source": "NVAL",
    "id": "drug_122"
  },
  {
    "name": "ゼナキル50mg（マルボフロキサシン)",
    "category": "抗生剤",
    "conc": null,
    "concText": "50mg",
    "species": {
      "犬": {
        "lo": 2.75,
        "hi": 5.5,
        "note": "2.75-5.5mg/kg sid PO"
      },
      "猫": {
        "lo": 2.75,
        "hi": 5.5,
        "note": "2.75-5.5mg/kg sid PO"
      },
      "ウサギ": {
        "lo": 2,
        "hi": 5,
        "note": "2-5mg/kg PO q24h"
      },
      "モルモット": {
        "lo": 2,
        "hi": 5,
        "note": "2-5mg/kg PO q24h"
      },
      "フェレット": {
        "lo": 2,
        "hi": 5,
        "note": "2-5mg/kg PO q24h"
      },
      "ハリネズミ": {
        "lo": 2,
        "hi": 5,
        "note": "2-5mg/kg PO q24h"
      },
      "ハムスター": {
        "lo": 2,
        "hi": 5,
        "note": "2-5mg/kg PO q24h"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%9E%E3%83%AB%E3%83%9C%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3&MAIN_COMPONENT=%E3%83%9E%E3%83%AB%E3%83%9C%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3",
    "source": "NVAL",
    "id": "drug_123"
  },
  {
    "name": "ビクタス10/40mg（オルビフロキサシン）",
    "category": "抗生剤",
    "conc": null,
    "concText": "40mg",
    "species": {
      "犬": {
        "injectable": {
          "lo": 2.5,
          "hi": 7.5,
          "note": "2.5-7.5mg/kg sid PO\n2.5-5mg/kg sid SC"
        },
        "oral": {
          "lo": 2.5,
          "hi": 7.5,
          "note": "2.5-7.5mg/kg sid PO\n2.5-5mg/kg sid SC"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "5-10mg/kg PO q24h（バクトリムが使えない場合）",
        "lo": 5,
        "hi": 10
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "5-10mg/kg PO q24h",
        "lo": 5,
        "hi": 10
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "5-10mg/kg PO q24h",
        "lo": 5,
        "hi": 10
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "5-10mg/kg PO q24h",
        "lo": 5,
        "hi": 10
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "5-10mg/kg PO q24h",
        "lo": 5,
        "hi": 10
      }
    },
    "memo": "0.1ml-5mg",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%AA%E3%83%AB%E3%83%93%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3&MAIN_COMPONENT=%E3%82%AA%E3%83%AB%E3%83%93%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3",
    "source": "NVAL",
    "id": "drug_124"
  },
  {
    "name": "シプロキサン（シプロフロキサシン）",
    "category": "抗生剤",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 20,
        "hi": 25,
        "note": "20-25mg/kg q8h PO"
      },
      "猫": {
        "lo": 12.5,
        "hi": 20,
        "note": "12.5-20mg/kg q12h PO"
      },
      "ウサギ": {
        "lo": 10,
        "hi": 20,
        "note": "10-20mg/kg PO bid-q24h"
      },
      "モルモット": {
        "lo": 5,
        "hi": 15,
        "note": "5-15mg/kg PO bid-q24h"
      },
      "フェレット": {
        "lo": 10,
        "hi": 30,
        "note": "10-30mg/kg PO q24h"
      },
      "ハリネズミ": {
        "lo": 5,
        "hi": 20,
        "note": "5-20mg/kg PO bid"
      },
      "ハムスター": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg PO bid"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B7%E3%83%97%E3%83%AD%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_125"
  },
  {
    "name": "ミノマイシン（ミノサイクリン）",
    "category": "抗生剤",
    "conc": null,
    "concText": "",
    "species": {
      "犬": {
        "injectable": {
          "lo": 5,
          "hi": 12,
          "note": "5-12mg/kg bid PO,IV\n最大で25mg/kg bid PO,IV"
        },
        "oral": {
          "lo": 5,
          "hi": 12,
          "note": "5-12mg/kg bid PO,IV\n最大で25mg/kg bid PO,IV"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "2.5-5mg/kg PO bid",
        "lo": 2.5,
        "hi": 5
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "5mg/kg PO bid",
        "lo": 5,
        "hi": 5
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "2.5-5mg/kg PO bid",
        "lo": 2.5,
        "hi": 5
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）",
        "lo": null,
        "hi": null
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "2.5mg/kg PO bid",
        "lo": 2.5,
        "hi": 2.5
      }
    },
    "memo": "記載なし",
    "route": [
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%9F%E3%83%8E%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_126"
  },
  {
    "name": "ビブラマシシン50mg（ドキシサイクリン）",
    "category": "抗生剤",
    "conc": null,
    "concText": "50mg",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg q12h PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": 2.5,
        "hi": 2.5,
        "note": "2.5mg/kg PO bid"
      },
      "モルモット": {
        "lo": 2.5,
        "hi": 2.5,
        "note": "2.5mg/kg PO bid"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（通常使用しない）"
      },
      "ハリネズミ": {
        "lo": 2.5,
        "hi": 2.5,
        "note": "2.5mg/kg PO bid"
      },
      "ハムスター": {
        "lo": 2.5,
        "hi": 2.5,
        "note": "2.5mg/kg PO bid"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%89%E3%82%AD%E3%82%B7%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_127"
  },
  {
    "name": "アンチローブ25（クリンダマイシン）",
    "category": "抗生剤",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "injectable": {
          "lo": 5,
          "hi": 11,
          "note": "5-11mg/kg bid PO,IV,IM,SC"
        },
        "oral": {
          "lo": 5,
          "hi": 11,
          "note": "5-11mg/kg bid PO,IV,IM,SC"
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": "イヌに準ずる"
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "推奨されない（腸炎誘発）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO bid"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "推奨されない（腸炎誘発）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": 5.5,
        "hi": 5.5,
        "note": "5.5mg/kg PO bid"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "lo": null,
        "hi": null,
        "note": "使用しない"
      }
    },
    "memo": "記載なし",
    "route": [
      "oral"
    ],
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%AF%E3%83%AA%E3%83%B3%E3%83%80%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3%E5%A1%A9%E9%85%B8%E5%A1%A9&MAIN_COMPONENT=%E3%82%AF%E3%83%AA%E3%83%B3%E3%83%80%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3%E5%A1%A9%E9%85%B8%E5%A1%A9",
    "source": "NVAL",
    "id": "drug_128"
  },
  {
    "name": "ホスミシン（ホスホマイシン）",
    "category": "抗生剤",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 40,
        "hi": 80,
        "note": "40-80mg/kg q8h PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%9B%E3%82%B9%E3%83%9B%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3%E3%82%AB%E3%83%AB%E3%82%B7%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_129"
  },
  {
    "name": "フラジール250mg（メトロニダゾール）",
    "category": "抗生剤",
    "conc": null,
    "concText": "250mg",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 20,
        "note": "腸炎：10-20mg/kg bid\n肝炎：7.5mg/kg bid PO\nジアルジア：25ｍｇ/kg bid 5-8日間\n※5-10mg/kg bid  2014jbvp Dr,kanazono"
      },
      "猫": {
        "lo": 10,
        "hi": 25,
        "note": "腸炎：10-25mg/kg bid\n肝炎：7.5mg/kg bid PO\nジアルジア：25mg/kg bid 5-7日"
      },
      "ウサギ": {
        "lo": 20,
        "hi": 20,
        "note": "20mg/kg PO bid"
      },
      "モルモット": {
        "lo": 20,
        "hi": 20,
        "note": "20mg/kg PO bid"
      },
      "フェレット": {
        "lo": 15,
        "hi": 20,
        "note": "15-20mg/kg PO bid / ヘリコバクター: アモキシシリン・次サリチル酸Biと併用"
      },
      "ハリネズミ": {
        "lo": 20,
        "hi": 20,
        "note": "20mg/kg PO bid"
      },
      "ハムスター": {
        "lo": 20,
        "hi": 20,
        "note": "20mg/kg PO bid"
      }
    },
    "memo": "中毒時\n休薬＋ジアゼパム　\n0.4-0.5mg/kg q8h 3days",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%A1%E3%83%88%E3%83%AD%E3%83%8B%E3%83%80%E3%82%BE%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_130"
  },
  {
    "name": "チエナム（イミペネム）",
    "category": "抗生剤",
    "conc": 500,
    "concText": "500mg/10ml",
    "species": {
      "犬": {
        "lo": 2,
        "hi": 10,
        "note": "2-10mg/kg tid IV,IM,SC"
      },
      "猫": {
        "lo": 2,
        "hi": 10,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A4%E3%83%9F%E3%83%9A%E3%83%8D%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_131"
  },
  {
    "name": "ファロム（ファロペネムナトリウム）",
    "category": "抗生剤",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg BID PO"
      },
      "猫": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg BID PO"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%95%E3%82%A1%E3%83%AD%E3%83%9A%E3%83%8D%E3%83%A0%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_132"
  },
  {
    "name": "アプシードシロップ5%(スルファジメトキシン）",
    "category": "抗生剤",
    "conc": 50,
    "concText": "5%",
    "species": {
      "犬": {
        "lo": 55,
        "hi": 55,
        "note": "55mg/kg PO (負荷）\n27.5mg/kg q12h PO （維持）"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "イヌに準ずる"
      },
      "ウサギ": {
        "lo": 25,
        "hi": 25,
        "note": "25mg/kg PO sid（初回50mg/kg、9-20日間継続）"
      },
      "モルモット": {
        "lo": 25,
        "hi": 25,
        "note": "25mg/kg PO sid（コクシジウム: 初回50mg/kg 次回25mg/kg 10-20日間）"
      },
      "フェレット": {
        "lo": 15,
        "hi": 25,
        "note": "25mg/kg PO sid（消化管コクシジウムに30mg/kg sid 2週間）"
      },
      "ハリネズミ": {
        "lo": 2,
        "hi": 20,
        "note": "2-20mg/kg PO,SC,IM bid-q24h（コクシジウム）"
      },
      "ハムスター": {
        "lo": 25,
        "hi": 25,
        "note": "25mg/kg PO sid"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B9%E3%83%AB%E3%83%95%E3%82%A1%E3%82%B8%E3%83%A1%E3%83%88%E3%82%AD%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_133"
  },
  {
    "name": "イトラコナゾール　50mg\nイトリゾール　１０mg/ml",
    "category": "抗真菌薬",
    "conc": null,
    "concText": "50mg",
    "species": {
      "犬": {
        "lo": 2.5,
        "hi": 2.5,
        "note": "2.5mg/kg q24h PO or 5mg/kg q24h PO"
      },
      "猫": {
        "lo": 1.5,
        "hi": 3,
        "note": "5mg/kg q12h PO(25mg-50mg/頭\n1.5-3mg/kg(5mg/kg) q24h PO"
      },
      "ウサギ": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg PO sid（3-4週間連続）"
      },
      "モルモット": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg PO sid"
      },
      "フェレット": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg PO sid-bid"
      },
      "ハリネズミ": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO bid"
      },
      "ハムスター": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg PO sid"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A4%E3%83%88%E3%83%A9%E3%82%B3%E3%83%8A%E3%82%BE%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_134"
  },
  {
    "name": "ナイスタチン",
    "category": "抗真菌薬",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "2.2万単位kg/day\n5-15万単位/head tid PO"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "10万単位/head q6h PO"
      },
      "ウサギ": {
        "lo": 5000,
        "hi": 5000,
        "note": "5000IU/kg PO tid-qid（消化管カンジダ症）"
      },
      "モルモット": {
        "lo": 5000,
        "hi": 5000,
        "note": "5000IU/kg PO tid（消化管カンジダ症）"
      },
      "フェレット": {
        "lo": 5000,
        "hi": 5000,
        "note": "5000IU/kg PO tid（消化管カンジダ症・腸管内のみ有効）"
      },
      "ハリネズミ": {
        "lo": 30000,
        "hi": 30000,
        "note": "30000IU/kg PO sid-tid（エルシニア感染症・消化管カンジダ症）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%8A%E3%82%A4%E3%82%B9%E3%82%BF%E3%83%81%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_135"
  },
  {
    "name": "エコリシン",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "眼軟膏 (エリスロマイシン0.5mg+コリスチン0.5mg/g)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【抗菌/眼軟膏】グラム陽性菌(エリスロマイシン)+緑膿菌含むグラム陰性菌(コリスチン)の二重抗菌\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1日数回 結膜嚢内に塗布\n他点眼剤と併用時は最後に使用・5分以上間隔"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【抗菌/眼軟膏】グラム陽性菌(エリスロマイシン)+緑膿菌含むグラム陰性菌(コリスチン)の二重抗菌\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1日数回 結膜嚢内に塗布\n他点眼剤と併用時は最後に使用・5分以上間隔"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【抗菌/眼軟膏】グラム陽性菌(エリスロマイシン)+緑膿菌含むグラム陰性菌(コリスチン)の二重抗菌\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1日数回 結膜嚢内に塗布\n他点眼剤と併用時は最後に使用・5分以上間隔"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【抗菌/眼軟膏】グラム陽性菌(エリスロマイシン)+緑膿菌含むグラム陰性菌(コリスチン)の二重抗菌\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1日数回 結膜嚢内に塗布\n他点眼剤と併用時は最後に使用・5分以上間隔"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【抗菌/眼軟膏】グラム陽性菌(エリスロマイシン)+緑膿菌含むグラム陰性菌(コリスチン)の二重抗菌\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1日数回 結膜嚢内に塗布\n他点眼剤と併用時は最後に使用・5分以上間隔"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【抗菌/眼軟膏】グラム陽性菌(エリスロマイシン)+緑膿菌含むグラム陰性菌(コリスチン)の二重抗菌\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1日数回 結膜嚢内に塗布\n他点眼剤と併用時は最後に使用・5分以上間隔"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【抗菌/眼軟膏】グラム陽性菌(エリスロマイシン)+緑膿菌含むグラム陰性菌(コリスチン)の二重抗菌\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1日数回 結膜嚢内に塗布\n他点眼剤と併用時は最後に使用・5分以上間隔"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A8%E3%83%AA%E3%82%B9%E3%83%AD%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_136"
  },
  {
    "name": "タリビット",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "点眼液0.3% / 眼軟膏0.3% (オフロキサシン)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法(点眼): 1回1滴 1日3回、症状により増減\n遮光保存・長期連用不可"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法(点眼): 1回1滴 1日3回、症状により増減\n遮光保存・長期連用不可"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法(点眼): 1回1滴 1日3回、症状により増減\n遮光保存・長期連用不可"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法(点眼): 1回1滴 1日3回、症状により増減\n遮光保存・長期連用不可"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法(点眼): 1回1滴 1日3回、症状により増減\n遮光保存・長期連用不可"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法(点眼): 1回1滴 1日3回、症状により増減\n遮光保存・長期連用不可"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法(点眼): 1回1滴 1日3回、症状により増減\n遮光保存・長期連用不可"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%AA%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_137"
  },
  {
    "name": "トブラシン",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "点眼液0.3% (トブラマイシン3mg/mL)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/抗菌】ブドウ球菌・連鎖球菌・緑膿菌などに殺菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1回1〜2滴 1日4〜5回、症状により増減\n遮光保存 ※長期連用不可"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/抗菌】ブドウ球菌・連鎖球菌・緑膿菌などに殺菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1回1〜2滴 1日4〜5回、症状により増減\n遮光保存 ※長期連用不可"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/抗菌】ブドウ球菌・連鎖球菌・緑膿菌などに殺菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1回1〜2滴 1日4〜5回、症状により増減\n遮光保存 ※長期連用不可"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/抗菌】ブドウ球菌・連鎖球菌・緑膿菌などに殺菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1回1〜2滴 1日4〜5回、症状により増減\n遮光保存 ※長期連用不可"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/抗菌】ブドウ球菌・連鎖球菌・緑膿菌などに殺菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1回1〜2滴 1日4〜5回、症状により増減\n遮光保存 ※長期連用不可"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/抗菌】ブドウ球菌・連鎖球菌・緑膿菌などに殺菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1回1〜2滴 1日4〜5回、症状により増減\n遮光保存 ※長期連用不可"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/抗菌】ブドウ球菌・連鎖球菌・緑膿菌などに殺菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・涙嚢炎\n用法: 1回1〜2滴 1日4〜5回、症状により増減\n遮光保存 ※長期連用不可"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%88%E3%83%96%E3%83%A9%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_138"
  },
  {
    "name": "ファルチモ",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "点眼液0.3% (ロメフロキサシン塩酸塩)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ファルチモはロメフロキサシン系、ロメワンと同成分"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ファルチモはロメフロキサシン系、ロメワンと同成分"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ファルチモはロメフロキサシン系、ロメワンと同成分"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ファルチモはロメフロキサシン系、ロメワンと同成分"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ファルチモはロメフロキサシン系、ロメワンと同成分"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ファルチモはロメフロキサシン系、ロメワンと同成分"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】G+/G-・緑膿菌・嫌気性菌まで広いスペクトラム\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ファルチモはロメフロキサシン系、ロメワンと同成分"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%A2%E3%82%AD%E3%82%B7%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_139"
  },
  {
    "name": "ロメワン",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "点眼液0.3% (ロメフロキサシン塩酸塩)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】DNAジャイレース阻害・殺菌的抗菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ロメフロキサシン系でG+/G-・緑膿菌まで有効"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】DNAジャイレース阻害・殺菌的抗菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ロメフロキサシン系でG+/G-・緑膿菌まで有効"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】DNAジャイレース阻害・殺菌的抗菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ロメフロキサシン系でG+/G-・緑膿菌まで有効"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】DNAジャイレース阻害・殺菌的抗菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ロメフロキサシン系でG+/G-・緑膿菌まで有効"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】DNAジャイレース阻害・殺菌的抗菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ロメフロキサシン系でG+/G-・緑膿菌まで有効"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】DNAジャイレース阻害・殺菌的抗菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ロメフロキサシン系でG+/G-・緑膿菌まで有効"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【ニューキノロン/広域抗菌】DNAジャイレース阻害・殺菌的抗菌作用\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・瞼板腺炎・周術期感染予防\n用法: 1回1滴 1日3回\n※ロメフロキサシン系でG+/G-・緑膿菌まで有効"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%AD%E3%83%A1%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3&MAIN_COMPONENT=%E3%83%AD%E3%83%A1%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3",
    "source": "NVAL",
    "id": "drug_140"
  },
  {
    "name": "ティアローズ",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "動物用点眼液 0.1% (プラノプロフェン1mg/mL)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【NSAID/犬用】COX阻害による非ステロイド性抗炎症\n適応: 犬の結膜炎・角膜炎・眼瞼炎\n用法: 1回1〜2滴 1日4回、症状により増減\n※猫・他動物への適用は適応外"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【NSAID/犬用】COX阻害による非ステロイド性抗炎症\n適応: 犬の結膜炎・角膜炎・眼瞼炎\n用法: 1回1〜2滴 1日4回、症状により増減\n※猫・他動物への適用は適応外"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【NSAID/犬用】COX阻害による非ステロイド性抗炎症\n適応: 犬の結膜炎・角膜炎・眼瞼炎\n用法: 1回1〜2滴 1日4回、症状により増減\n※猫・他動物への適用は適応外"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【NSAID/犬用】COX阻害による非ステロイド性抗炎症\n適応: 犬の結膜炎・角膜炎・眼瞼炎\n用法: 1回1〜2滴 1日4回、症状により増減\n※猫・他動物への適用は適応外"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【NSAID/犬用】COX阻害による非ステロイド性抗炎症\n適応: 犬の結膜炎・角膜炎・眼瞼炎\n用法: 1回1〜2滴 1日4回、症状により増減\n※猫・他動物への適用は適応外"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【NSAID/犬用】COX阻害による非ステロイド性抗炎症\n適応: 犬の結膜炎・角膜炎・眼瞼炎\n用法: 1回1〜2滴 1日4回、症状により増減\n※猫・他動物への適用は適応外"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【NSAID/犬用】COX阻害による非ステロイド性抗炎症\n適応: 犬の結膜炎・角膜炎・眼瞼炎\n用法: 1回1〜2滴 1日4回、症状により増減\n※猫・他動物への適用は適応外"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%86%E3%82%A3%E3%82%A2%E3%83%AD%E3%83%BC%E3%82%BA",
    "source": "NVAL",
    "id": "drug_141"
  },
  {
    "name": "ベストロン",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "点眼用粉末0.5% (セフメノキシム塩酸塩) 溶解後1mL=5mg",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【セフェム系/抗菌】粉末製剤を添付溶解液で用時溶解・溶解後は冷所7日以内\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法: 1回1〜2滴 1日4回\n⚠ セフェム/ペニシリン過敏症に注意"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【セフェム系/抗菌】粉末製剤を添付溶解液で用時溶解・溶解後は冷所7日以内\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法: 1回1〜2滴 1日4回\n⚠ セフェム/ペニシリン過敏症に注意"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【セフェム系/抗菌】粉末製剤を添付溶解液で用時溶解・溶解後は冷所7日以内\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法: 1回1〜2滴 1日4回\n⚠ セフェム/ペニシリン過敏症に注意"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【セフェム系/抗菌】粉末製剤を添付溶解液で用時溶解・溶解後は冷所7日以内\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法: 1回1〜2滴 1日4回\n⚠ セフェム/ペニシリン過敏症に注意"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【セフェム系/抗菌】粉末製剤を添付溶解液で用時溶解・溶解後は冷所7日以内\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法: 1回1〜2滴 1日4回\n⚠ セフェム/ペニシリン過敏症に注意"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【セフェム系/抗菌】粉末製剤を添付溶解液で用時溶解・溶解後は冷所7日以内\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法: 1回1〜2滴 1日4回\n⚠ セフェム/ペニシリン過敏症に注意"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【セフェム系/抗菌】粉末製剤を添付溶解液で用時溶解・溶解後は冷所7日以内\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・周術期感染予防\n用法: 1回1〜2滴 1日4回\n⚠ セフェム/ペニシリン過敏症に注意"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%BB%E3%83%95%E3%83%A1%E3%83%8E%E3%82%AD%E3%82%B7%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_142"
  },
  {
    "name": "ヒアレイン",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "点眼液0.1% / 0.3% (ヒアルロン酸ナトリウム)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【涙液補充/角膜保護】高保水性・角膜上皮伸展促進・保護膜形成\n適応: ドライアイ・シェーグレン症候群・スティーブンス・ジョンソン症候群・角結膜上皮障害\n用法: 1日5〜6回 症状により増減\n※猫のドライアイ・KCS・角膜保護に広く使用"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【涙液補充/角膜保護】高保水性・角膜上皮伸展促進・保護膜形成\n適応: ドライアイ・シェーグレン症候群・スティーブンス・ジョンソン症候群・角結膜上皮障害\n用法: 1日5〜6回 症状により増減\n※猫のドライアイ・KCS・角膜保護に広く使用"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【涙液補充/角膜保護】高保水性・角膜上皮伸展促進・保護膜形成\n適応: ドライアイ・シェーグレン症候群・スティーブンス・ジョンソン症候群・角結膜上皮障害\n用法: 1日5〜6回 症状により増減\n※猫のドライアイ・KCS・角膜保護に広く使用"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【涙液補充/角膜保護】高保水性・角膜上皮伸展促進・保護膜形成\n適応: ドライアイ・シェーグレン症候群・スティーブンス・ジョンソン症候群・角結膜上皮障害\n用法: 1日5〜6回 症状により増減\n※猫のドライアイ・KCS・角膜保護に広く使用"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【涙液補充/角膜保護】高保水性・角膜上皮伸展促進・保護膜形成\n適応: ドライアイ・シェーグレン症候群・スティーブンス・ジョンソン症候群・角結膜上皮障害\n用法: 1日5〜6回 症状により増減\n※猫のドライアイ・KCS・角膜保護に広く使用"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【涙液補充/角膜保護】高保水性・角膜上皮伸展促進・保護膜形成\n適応: ドライアイ・シェーグレン症候群・スティーブンス・ジョンソン症候群・角結膜上皮障害\n用法: 1日5〜6回 症状により増減\n※猫のドライアイ・KCS・角膜保護に広く使用"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【涙液補充/角膜保護】高保水性・角膜上皮伸展促進・保護膜形成\n適応: ドライアイ・シェーグレン症候群・スティーブンス・ジョンソン症候群・角結膜上皮障害\n用法: 1日5〜6回 症状により増減\n※猫のドライアイ・KCS・角膜保護に広く使用"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%92%E3%82%A2%E3%83%AB%E3%83%AD%E3%83%B3%E9%85%B8%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_143"
  },
  {
    "name": "パピテイン",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "点眼液 (ビタミンA=レチノールパルミタート 0.005%)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【眼表面保護/ビタミンA点眼】角膜上皮の正常化・杯細胞増加作用\n適応: 角膜乾燥・角膜上皮障害・ドライアイ補助\n用法: 1日3〜6回程度\n※シクロスポリン点眼と組み合わせることも多い"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【眼表面保護/ビタミンA点眼】角膜上皮の正常化・杯細胞増加作用\n適応: 角膜乾燥・角膜上皮障害・ドライアイ補助\n用法: 1日3〜6回程度\n※シクロスポリン点眼と組み合わせることも多い"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【眼表面保護/ビタミンA点眼】角膜上皮の正常化・杯細胞増加作用\n適応: 角膜乾燥・角膜上皮障害・ドライアイ補助\n用法: 1日3〜6回程度\n※シクロスポリン点眼と組み合わせることも多い"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【眼表面保護/ビタミンA点眼】角膜上皮の正常化・杯細胞増加作用\n適応: 角膜乾燥・角膜上皮障害・ドライアイ補助\n用法: 1日3〜6回程度\n※シクロスポリン点眼と組み合わせることも多い"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【眼表面保護/ビタミンA点眼】角膜上皮の正常化・杯細胞増加作用\n適応: 角膜乾燥・角膜上皮障害・ドライアイ補助\n用法: 1日3〜6回程度\n※シクロスポリン点眼と組み合わせることも多い"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【眼表面保護/ビタミンA点眼】角膜上皮の正常化・杯細胞増加作用\n適応: 角膜乾燥・角膜上皮障害・ドライアイ補助\n用法: 1日3〜6回程度\n※シクロスポリン点眼と組み合わせることも多い"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【眼表面保護/ビタミンA点眼】角膜上皮の正常化・杯細胞増加作用\n適応: 角膜乾燥・角膜上皮障害・ドライアイ補助\n用法: 1日3〜6回程度\n※シクロスポリン点眼と組み合わせることも多い"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%91%E3%83%91%E3%82%A4%E3%83%B3%E3%83%BB%E3%83%9D%E3%83%AA%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3B&MAIN_COMPONENT=%E3%83%91%E3%83%91%E3%82%A4%E3%83%B3%E3%83%BB%E3%83%9D%E3%83%AA%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3B",
    "source": "NVAL",
    "id": "drug_144"
  },
  {
    "name": "サンテゾーン",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "点眼液0.1% (デキサメタゾン)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド点眼】強力抗炎症・アレルギー抑制\n適応: 眼瞼炎・結膜炎・角膜炎（感染のない炎症）・術後炎症\n用法: 1回1〜2滴 1日3〜5回\n⚠ 感染性疾患（ウイルス・真菌）には禁忌 長期使用で眼圧上昇・白内障リスク"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド点眼】強力抗炎症・アレルギー抑制\n適応: 眼瞼炎・結膜炎・角膜炎（感染のない炎症）・術後炎症\n用法: 1回1〜2滴 1日3〜5回\n⚠ 感染性疾患（ウイルス・真菌）には禁忌 長期使用で眼圧上昇・白内障リスク"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド点眼】強力抗炎症・アレルギー抑制\n適応: 眼瞼炎・結膜炎・角膜炎（感染のない炎症）・術後炎症\n用法: 1回1〜2滴 1日3〜5回\n⚠ 感染性疾患（ウイルス・真菌）には禁忌 長期使用で眼圧上昇・白内障リスク"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド点眼】強力抗炎症・アレルギー抑制\n適応: 眼瞼炎・結膜炎・角膜炎（感染のない炎症）・術後炎症\n用法: 1回1〜2滴 1日3〜5回\n⚠ 感染性疾患（ウイルス・真菌）には禁忌 長期使用で眼圧上昇・白内障リスク"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド点眼】強力抗炎症・アレルギー抑制\n適応: 眼瞼炎・結膜炎・角膜炎（感染のない炎症）・術後炎症\n用法: 1回1〜2滴 1日3〜5回\n⚠ 感染性疾患（ウイルス・真菌）には禁忌 長期使用で眼圧上昇・白内障リスク"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド点眼】強力抗炎症・アレルギー抑制\n適応: 眼瞼炎・結膜炎・角膜炎（感染のない炎症）・術後炎症\n用法: 1回1〜2滴 1日3〜5回\n⚠ 感染性疾患（ウイルス・真菌）には禁忌 長期使用で眼圧上昇・白内障リスク"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド点眼】強力抗炎症・アレルギー抑制\n適応: 眼瞼炎・結膜炎・角膜炎（感染のない炎症）・術後炎症\n用法: 1回1〜2滴 1日3〜5回\n⚠ 感染性疾患（ウイルス・真菌）には禁忌 長期使用で眼圧上昇・白内障リスク"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%87%E3%82%AD%E3%82%B5%E3%83%A1%E3%82%BF%E3%82%BE%E3%83%B3%E7%82%B9%E7%9C%BC&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_145"
  },
  {
    "name": "ネオメドロールEE",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "眼軟膏 (フラジオマイシン0.35% + メチルプレドニゾロン0.1%)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏】グラム陰性菌中心のフラジオマイシン+ステロイドの混合製剤\n適応: 感染を伴う眼瞼炎・結膜炎・麦粒腫・外耳炎・皮膚炎\n用法(眼): 1日2〜4回 結膜嚢内塗布\n⚠ ウイルス感染・緑内障に禁忌 長期連用不可"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏】グラム陰性菌中心のフラジオマイシン+ステロイドの混合製剤\n適応: 感染を伴う眼瞼炎・結膜炎・麦粒腫・外耳炎・皮膚炎\n用法(眼): 1日2〜4回 結膜嚢内塗布\n⚠ ウイルス感染・緑内障に禁忌 長期連用不可"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏】グラム陰性菌中心のフラジオマイシン+ステロイドの混合製剤\n適応: 感染を伴う眼瞼炎・結膜炎・麦粒腫・外耳炎・皮膚炎\n用法(眼): 1日2〜4回 結膜嚢内塗布\n⚠ ウイルス感染・緑内障に禁忌 長期連用不可"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏】グラム陰性菌中心のフラジオマイシン+ステロイドの混合製剤\n適応: 感染を伴う眼瞼炎・結膜炎・麦粒腫・外耳炎・皮膚炎\n用法(眼): 1日2〜4回 結膜嚢内塗布\n⚠ ウイルス感染・緑内障に禁忌 長期連用不可"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏】グラム陰性菌中心のフラジオマイシン+ステロイドの混合製剤\n適応: 感染を伴う眼瞼炎・結膜炎・麦粒腫・外耳炎・皮膚炎\n用法(眼): 1日2〜4回 結膜嚢内塗布\n⚠ ウイルス感染・緑内障に禁忌 長期連用不可"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏】グラム陰性菌中心のフラジオマイシン+ステロイドの混合製剤\n適応: 感染を伴う眼瞼炎・結膜炎・麦粒腫・外耳炎・皮膚炎\n用法(眼): 1日2〜4回 結膜嚢内塗布\n⚠ ウイルス感染・緑内障に禁忌 長期連用不可"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏】グラム陰性菌中心のフラジオマイシン+ステロイドの混合製剤\n適応: 感染を伴う眼瞼炎・結膜炎・麦粒腫・外耳炎・皮膚炎\n用法(眼): 1日2〜4回 結膜嚢内塗布\n⚠ ウイルス感染・緑内障に禁忌 長期連用不可"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%A1%E3%83%81%E3%83%AB%E3%83%97%E3%83%AC%E3%83%89%E3%83%8B%E3%82%BE%E3%83%AD%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_146"
  },
  {
    "name": "リンデロンA",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "点眼/点耳/点鼻液 0.1% (ベタメタゾン0.1% + フラジオマイシン0.35%)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合点眼液】強力ステロイド(ベタメタゾン)+フラジオマイシン\n適応: 感染を伴う外眼部・前眼部炎症（眼瞼炎・結膜炎・角膜炎）・外耳道炎\n用法(眼): 1回1〜2滴 1日3〜5回\n⚠ ウイルス感染・真菌感染・緑内障に禁忌"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合点眼液】強力ステロイド(ベタメタゾン)+フラジオマイシン\n適応: 感染を伴う外眼部・前眼部炎症（眼瞼炎・結膜炎・角膜炎）・外耳道炎\n用法(眼): 1回1〜2滴 1日3〜5回\n⚠ ウイルス感染・真菌感染・緑内障に禁忌"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合点眼液】強力ステロイド(ベタメタゾン)+フラジオマイシン\n適応: 感染を伴う外眼部・前眼部炎症（眼瞼炎・結膜炎・角膜炎）・外耳道炎\n用法(眼): 1回1〜2滴 1日3〜5回\n⚠ ウイルス感染・真菌感染・緑内障に禁忌"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合点眼液】強力ステロイド(ベタメタゾン)+フラジオマイシン\n適応: 感染を伴う外眼部・前眼部炎症（眼瞼炎・結膜炎・角膜炎）・外耳道炎\n用法(眼): 1回1〜2滴 1日3〜5回\n⚠ ウイルス感染・真菌感染・緑内障に禁忌"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合点眼液】強力ステロイド(ベタメタゾン)+フラジオマイシン\n適応: 感染を伴う外眼部・前眼部炎症（眼瞼炎・結膜炎・角膜炎）・外耳道炎\n用法(眼): 1回1〜2滴 1日3〜5回\n⚠ ウイルス感染・真菌感染・緑内障に禁忌"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合点眼液】強力ステロイド(ベタメタゾン)+フラジオマイシン\n適応: 感染を伴う外眼部・前眼部炎症（眼瞼炎・結膜炎・角膜炎）・外耳道炎\n用法(眼): 1回1〜2滴 1日3〜5回\n⚠ ウイルス感染・真菌感染・緑内障に禁忌"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合点眼液】強力ステロイド(ベタメタゾン)+フラジオマイシン\n適応: 感染を伴う外眼部・前眼部炎症（眼瞼炎・結膜炎・角膜炎）・外耳道炎\n用法(眼): 1回1〜2滴 1日3〜5回\n⚠ ウイルス感染・真菌感染・緑内障に禁忌"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%99%E3%82%BF%E3%83%A1%E3%82%BF%E3%82%BE%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_147"
  },
  {
    "name": "ライトクリーン",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "洗眼液 (ホウ酸 1.9%など)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【眼洗浄液/保護】生理的洗眼・異物除去・眼脂洗浄\n適応: 結膜炎補助・眼脂洗浄・刺激物の除去\n用法: 適量を患眼に点眼または洗眼\n★ 防腐剤フリータイプあり 感染症の補助ケアに有用"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【眼洗浄液/保護】生理的洗眼・異物除去・眼脂洗浄\n適応: 結膜炎補助・眼脂洗浄・刺激物の除去\n用法: 適量を患眼に点眼または洗眼\n★ 防腐剤フリータイプあり 感染症の補助ケアに有用"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【眼洗浄液/保護】生理的洗眼・異物除去・眼脂洗浄\n適応: 結膜炎補助・眼脂洗浄・刺激物の除去\n用法: 適量を患眼に点眼または洗眼\n★ 防腐剤フリータイプあり 感染症の補助ケアに有用"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【眼洗浄液/保護】生理的洗眼・異物除去・眼脂洗浄\n適応: 結膜炎補助・眼脂洗浄・刺激物の除去\n用法: 適量を患眼に点眼または洗眼\n★ 防腐剤フリータイプあり 感染症の補助ケアに有用"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【眼洗浄液/保護】生理的洗眼・異物除去・眼脂洗浄\n適応: 結膜炎補助・眼脂洗浄・刺激物の除去\n用法: 適量を患眼に点眼または洗眼\n★ 防腐剤フリータイプあり 感染症の補助ケアに有用"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【眼洗浄液/保護】生理的洗眼・異物除去・眼脂洗浄\n適応: 結膜炎補助・眼脂洗浄・刺激物の除去\n用法: 適量を患眼に点眼または洗眼\n★ 防腐剤フリータイプあり 感染症の補助ケアに有用"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【眼洗浄液/保護】生理的洗眼・異物除去・眼脂洗浄\n適応: 結膜炎補助・眼脂洗浄・刺激物の除去\n用法: 適量を患眼に点眼または洗眼\n★ 防腐剤フリータイプあり 感染症の補助ケアに有用"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E8%80%B3%E9%81%93%E6%B4%97%E6%B5%84%E5%89%A4&MAIN_COMPONENT=%E8%80%B3%E9%81%93%E6%B4%97%E6%B5%84%E5%89%A4",
    "source": "NVAL",
    "id": "drug_148"
  },
  {
    "name": "エルタシン軟膏",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "眼軟膏 (ゲンタマイシン0.3%)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/眼軟膏】グラム陰性菌・緑膿菌に強い広域抗菌軟膏\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・外眼部感染症\n用法: 1日2〜4回 少量を患部または結膜嚢内に塗布\n長期連用不可・耐性菌出現注意"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/眼軟膏】グラム陰性菌・緑膿菌に強い広域抗菌軟膏\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・外眼部感染症\n用法: 1日2〜4回 少量を患部または結膜嚢内に塗布\n長期連用不可・耐性菌出現注意"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/眼軟膏】グラム陰性菌・緑膿菌に強い広域抗菌軟膏\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・外眼部感染症\n用法: 1日2〜4回 少量を患部または結膜嚢内に塗布\n長期連用不可・耐性菌出現注意"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/眼軟膏】グラム陰性菌・緑膿菌に強い広域抗菌軟膏\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・外眼部感染症\n用法: 1日2〜4回 少量を患部または結膜嚢内に塗布\n長期連用不可・耐性菌出現注意"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/眼軟膏】グラム陰性菌・緑膿菌に強い広域抗菌軟膏\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・外眼部感染症\n用法: 1日2〜4回 少量を患部または結膜嚢内に塗布\n長期連用不可・耐性菌出現注意"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/眼軟膏】グラム陰性菌・緑膿菌に強い広域抗菌軟膏\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・外眼部感染症\n用法: 1日2〜4回 少量を患部または結膜嚢内に塗布\n長期連用不可・耐性菌出現注意"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【アミノグリコシド/眼軟膏】グラム陰性菌・緑膿菌に強い広域抗菌軟膏\n適応: 眼瞼炎・結膜炎・角膜炎・麦粒腫・外眼部感染症\n用法: 1日2〜4回 少量を患部または結膜嚢内に塗布\n長期連用不可・耐性菌出現注意"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B2%E3%83%B3%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_149"
  },
  {
    "name": "ビクタスMTクリーム",
    "category": "抗生剤",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%AA%E3%83%AB%E3%83%93%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3%E3%83%BB%E3%83%88%E3%83%AA%E3%82%A2%E3%83%A0%E3%82%B7%E3%83%8E%E3%83%AD%E3%83%B3&MAIN_COMPONENT=%E3%82%AA%E3%83%AB%E3%83%93%E3%83%95%E3%83%AD%E3%82%AD%E3%82%B5%E3%82%B7%E3%83%B3%E3%83%BB%E3%83%88%E3%83%AA%E3%82%A2%E3%83%A0%E3%82%B7%E3%83%8E%E3%83%AD%E3%83%B3",
    "source": "NVAL",
    "id": "drug_150"
  },
  {
    "name": "デルモゾールG",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "軟膏 (ベタメタゾン吉草酸エステル0.12% + ゲンタマイシン0.1%)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏/皮膚用】強力ステロイド+ゲンタマイシンの皮膚外用剤\n適応: 感染を伴う湿疹・皮膚炎・外耳炎・眼瞼皮膚炎\n用法: 1日1〜数回 患部に薄く塗布\n⚠ 眼内への直接使用は不可"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏/皮膚用】強力ステロイド+ゲンタマイシンの皮膚外用剤\n適応: 感染を伴う湿疹・皮膚炎・外耳炎・眼瞼皮膚炎\n用法: 1日1〜数回 患部に薄く塗布\n⚠ 眼内への直接使用は不可"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏/皮膚用】強力ステロイド+ゲンタマイシンの皮膚外用剤\n適応: 感染を伴う湿疹・皮膚炎・外耳炎・眼瞼皮膚炎\n用法: 1日1〜数回 患部に薄く塗布\n⚠ 眼内への直接使用は不可"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏/皮膚用】強力ステロイド+ゲンタマイシンの皮膚外用剤\n適応: 感染を伴う湿疹・皮膚炎・外耳炎・眼瞼皮膚炎\n用法: 1日1〜数回 患部に薄く塗布\n⚠ 眼内への直接使用は不可"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏/皮膚用】強力ステロイド+ゲンタマイシンの皮膚外用剤\n適応: 感染を伴う湿疹・皮膚炎・外耳炎・眼瞼皮膚炎\n用法: 1日1〜数回 患部に薄く塗布\n⚠ 眼内への直接使用は不可"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏/皮膚用】強力ステロイド+ゲンタマイシンの皮膚外用剤\n適応: 感染を伴う湿疹・皮膚炎・外耳炎・眼瞼皮膚炎\n用法: 1日1〜数回 患部に薄く塗布\n⚠ 眼内への直接使用は不可"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【抗菌+ステロイド配合軟膏/皮膚用】強力ステロイド+ゲンタマイシンの皮膚外用剤\n適応: 感染を伴う湿疹・皮膚炎・外耳炎・眼瞼皮膚炎\n用法: 1日1〜数回 患部に薄く塗布\n⚠ 眼内への直接使用は不可"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%99%E3%82%BF%E3%83%A1%E3%82%BF%E3%82%BE%E3%83%B3%E5%90%89%E8%8D%89%E9%85%B8%E3%82%A8%E3%82%B9%E3%83%86%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_151"
  },
  {
    "name": "デキサルチン",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "軟膏 (デキサメタゾン0.1%)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド軟膏/口腔・皮膚用】炎症抑制・アレルギー抑制\n適応: 口腔粘膜・皮膚の炎症性疾患（口内炎・湿疹）\n用法: 1日2〜4回 患部に薄く塗布\n眼周囲・皮膚炎症に使用されることあり"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド軟膏/口腔・皮膚用】炎症抑制・アレルギー抑制\n適応: 口腔粘膜・皮膚の炎症性疾患（口内炎・湿疹）\n用法: 1日2〜4回 患部に薄く塗布\n眼周囲・皮膚炎症に使用されることあり"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド軟膏/口腔・皮膚用】炎症抑制・アレルギー抑制\n適応: 口腔粘膜・皮膚の炎症性疾患（口内炎・湿疹）\n用法: 1日2〜4回 患部に薄く塗布\n眼周囲・皮膚炎症に使用されることあり"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド軟膏/口腔・皮膚用】炎症抑制・アレルギー抑制\n適応: 口腔粘膜・皮膚の炎症性疾患（口内炎・湿疹）\n用法: 1日2〜4回 患部に薄く塗布\n眼周囲・皮膚炎症に使用されることあり"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド軟膏/口腔・皮膚用】炎症抑制・アレルギー抑制\n適応: 口腔粘膜・皮膚の炎症性疾患（口内炎・湿疹）\n用法: 1日2〜4回 患部に薄く塗布\n眼周囲・皮膚炎症に使用されることあり"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド軟膏/口腔・皮膚用】炎症抑制・アレルギー抑制\n適応: 口腔粘膜・皮膚の炎症性疾患（口内炎・湿疹）\n用法: 1日2〜4回 患部に薄く塗布\n眼周囲・皮膚炎症に使用されることあり"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【ステロイド軟膏/口腔・皮膚用】炎症抑制・アレルギー抑制\n適応: 口腔粘膜・皮膚の炎症性疾患（口内炎・湿疹）\n用法: 1日2〜4回 患部に薄く塗布\n眼周囲・皮膚炎症に使用されることあり"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%87%E3%82%AD%E3%82%B5%E3%83%A1%E3%82%BF%E3%82%BE%E3%83%B3%E5%8F%A3%E8%85%94%E7%94%A8&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_152"
  },
  {
    "name": "ミミピュア",
    "category": "眼・耳・皮膚",
    "conc": null,
    "concText": "洗耳液 (スクアレン・界面活性剤など)",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "【耳道洗浄液】耳垢軟化・溶解・外耳道洗浄\n適応: 犬猫の外耳炎ケア・耳垢除去・洗浄\n用法: 少量を外耳道に注入し軽くマッサージ後に拭き取り\n★ 刺激性少なく日常ケアに使用可"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "【耳道洗浄液】耳垢軟化・溶解・外耳道洗浄\n適応: 犬猫の外耳炎ケア・耳垢除去・洗浄\n用法: 少量を外耳道に注入し軽くマッサージ後に拭き取り\n★ 刺激性少なく日常ケアに使用可"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "【耳道洗浄液】耳垢軟化・溶解・外耳道洗浄\n適応: 犬猫の外耳炎ケア・耳垢除去・洗浄\n用法: 少量を外耳道に注入し軽くマッサージ後に拭き取り\n★ 刺激性少なく日常ケアに使用可"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "【耳道洗浄液】耳垢軟化・溶解・外耳道洗浄\n適応: 犬猫の外耳炎ケア・耳垢除去・洗浄\n用法: 少量を外耳道に注入し軽くマッサージ後に拭き取り\n★ 刺激性少なく日常ケアに使用可"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "【耳道洗浄液】耳垢軟化・溶解・外耳道洗浄\n適応: 犬猫の外耳炎ケア・耳垢除去・洗浄\n用法: 少量を外耳道に注入し軽くマッサージ後に拭き取り\n★ 刺激性少なく日常ケアに使用可"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "【耳道洗浄液】耳垢軟化・溶解・外耳道洗浄\n適応: 犬猫の外耳炎ケア・耳垢除去・洗浄\n用法: 少量を外耳道に注入し軽くマッサージ後に拭き取り\n★ 刺激性少なく日常ケアに使用可"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "【耳道洗浄液】耳垢軟化・溶解・外耳道洗浄\n適応: 犬猫の外耳炎ケア・耳垢除去・洗浄\n用法: 少量を外耳道に注入し軽くマッサージ後に拭き取り\n★ 刺激性少なく日常ケアに使用可"
      }
    },
    "memo": "記載なし",
    "route": "topical",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E8%80%B3%E6%B4%97%E6%B5%84%E5%89%A4&MAIN_COMPONENT=%E8%80%B3%E6%B4%97%E6%B5%84%E5%89%A4",
    "source": "NVAL",
    "id": "drug_153"
  },
  {
    "name": "ノボリンN",
    "category": "止血・造血・ホルモン",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "0.4-0.7単位/kg bid SC"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A4%E3%82%BD%E3%83%95%E3%82%A7%E3%83%B3%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_154"
  },
  {
    "name": "ランタス",
    "category": "止血・造血・ホルモン",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "0.3-0.5単位/kg bid SC"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "0.3単位/kg bid SC"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%A9%E3%83%AB%E3%82%AE%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_155"
  },
  {
    "name": "レベミル",
    "category": "止血・造血・ホルモン",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "0.05-0.2単位/kg bid SC"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "0.25単位/kg bid SC"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%AA%E3%83%B3%E3%83%87%E3%83%86%E3%83%9F%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_156"
  },
  {
    "name": "ブレンダ / ブレンダZ / パノクエル（フザプラジブナトリウム）",
    "category": "消化器",
    "conc": 0.4,
    "concText": "0.4mg/mL（1バイアル＋注射用水1mL）",
    "species": {
      "犬": {
        "lo": 0.4,
        "hi": 0.4,
        "note": "【正式適応】犬急性膵炎\n0.4mg/kg IV 1日1回×5日間\n投与量(mL) = 体重(kg) × 1mL/kg\n\n【製品比較】\nブレンダ：石原産業（先発）\nブレンダZ：ゼノアック\nパノクエル：石原産業（米国名PANOQUELL-CA1）\n有効成分・用量はすべて同一\n\n【承認外・参考】※IC取得要\n椎間板ヘルニア急性期\n子宮蓄膿症（炎症抑制目的）\n術後合併症抑制\n眼疾患（ブドウ膜炎・結膜炎等）\nSIRS・ARDS"
      },
      "猫": {
        "lo": 1.2,
        "hi": 1.6,
        "note": "【承認外・参考】※IC取得要\n猫は犬の3〜4倍量とされる\n1.2〜1.6mg/kg IV 1日1回×5日間\n\n適応：膵炎・難治性口内炎\n口内炎：口腔内滴下投与の報告あり\n\n※猫は代謝速度が速く費用高\n　効果は症例による"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "LFA-1阻害薬。サイトカイン刺激による白血球の血管壁接着・組織浸潤を抑制。ステロイド・NSAIDとは異なる作用機序のため感染併発例でも使用可能。犬のみ正式承認（2018年）。",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%95%E3%82%B6%E3%83%97%E3%83%A9%E3%82%B8%E3%83%96%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0&MAIN_COMPONENT=%E3%83%95%E3%82%B6%E3%83%97%E3%83%A9%E3%82%B8%E3%83%96%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0",
    "source": "NVAL",
    "id": "drug_157"
  },
  {
    "name": "オメプラゾール（オメプラール・オメプラゾン）",
    "category": "消化器",
    "conc": 20,
    "concText": "20mg/錠（人用）",
    "species": {
      "犬": {
        "lo": 0.5,
        "hi": 1,
        "note": "0.5〜1mg/kg PO SID（空腹時）\n\n【承認外・参考】※IC取得要\n胃潰瘍・胃食道逆流症\nNSAID投与時の胃粘膜保護\nヘリコバクター除菌（抗菌薬併用）"
      },
      "猫": {
        "lo": 0.5,
        "hi": 1,
        "note": "0.5〜1mg/kg PO SID（空腹時）\n\n【承認外・参考】※IC取得要\n胃食道逆流症・食道炎\nIBD補助"
      },
      "ウサギ": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg PO sid（胃潰瘍が疑われるとき）"
      },
      "モルモット": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg PO sid（胃潰瘍が疑われるとき）"
      },
      "フェレット": {
        "lo": 0.7,
        "hi": 0.7,
        "note": "0.7mg/kg PO sid（ヘリコバクター感染が疑われる場合）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg PO sid"
      }
    },
    "memo": "動物用医薬品の承認なし（すべて人用薬の承認外使用）。プロトンポンプ阻害薬。空腹時投与で吸収↑。ファモチジン（H2ブロッカー）より強力・持続的。カプセルは開けて投与可。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%AA%E3%83%A1%E3%83%97%E3%83%A9%E3%82%BE%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_158"
  },
  {
    "name": "シルデナフィル（バイアグラ・レバチオ）",
    "category": "循環器",
    "conc": 25,
    "concText": "25mg/錠 or 50mg/錠（人用）",
    "species": {
      "犬": {
        "lo": 0.5,
        "hi": 2,
        "note": "【承認外・参考】※IC取得要\n肺高血圧症：0.5〜2mg/kg PO BID〜TID\n重症例：3mg/kgまで増量報告あり\n\n効果判定：運動耐容能・エコーで評価"
      },
      "猫": {
        "lo": 0.5,
        "hi": 1,
        "note": "【承認外・参考】※IC取得要\n肺高血圧症：0.5〜1mg/kg PO BID\nHCM続発性肺高血圧症に使用報告あり"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "動物用医薬品の承認なし（すべて人用薬の承認外使用）。PDE5阻害薬→肺血管平滑筋弛緩→肺血管抵抗低下。バイアグラ（ED治療）とレバチオ（肺高血圧症治療）は同成分。全身性低血圧に注意。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B7%E3%83%AB%E3%83%87%E3%83%8A%E3%83%95%E3%82%A3%E3%83%AB%E3%82%AF%E3%82%A8%E3%83%B3%E9%85%B8%E5%A1%A9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_159"
  },
  {
    "name": "シクロスポリン（アトピカ・シクロスポリン）",
    "category": "アレルギー・皮膚科",
    "conc": 25,
    "concText": "25mg/cap / 50mg/cap / 100mg/cap",
    "route": "oral",
    "memo": "【犬アトピー性皮膚炎の第一選択薬の一つ】空腹時投与推奨（食事と同時投与で吸収低下）。効果発現まで4〜6週間かかることを飼い主に説明。嘔吐副作用は初期に多い→少量から開始するか食前投与を避ける。長期投与では腎機能・肝機能モニタリング推奨。生ワクチン投与は避ける。",
    "note": "承認外：猫IBD・猫天疱瘡（7.5mg/kg PO SID）、猫乾性角結膜炎（局所用製剤）",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 5,
        "note": "SID（効果不十分時BIDも可）。最初の30日はSID、改善後QOD（隔日投与）に減量を目指す"
      },
      "猫": {
        "lo": 7.5,
        "hi": 7.5,
        "note": "SID（承認外）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B7%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%9D%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA / NVAL",
    "id": "drug_160"
  },
  {
    "name": "アポキル（オクラシチニブ）",
    "category": "アレルギー・皮膚科",
    "conc": 3.6,
    "concText": "3.6mg/錠 / 5.4mg/錠 / 16mg/錠",
    "route": "oral",
    "memo": "【JAK阻害剤】犬アトピー性皮膚炎・アレルギー性皮膚炎。効果発現が早い（4〜24時間）。12ヶ月未満または体重3kg未満の犬への安全性未確立。腫瘍（特にリンパ腫）のある犬には慎重使用。感染症の悪化に注意。",
    "note": "承認外：猫アレルギー性皮膚炎（0.5〜1mg/kg PO SID、エビデンス限定的）",
    "species": {
      "犬": {
        "lo": 0.4,
        "hi": 0.6,
        "note": "最初の14日はBID、以降SID維持。体重別用量設定あり（製品添付文書参照）"
      },
      "猫": {
        "lo": 0.5,
        "hi": 1,
        "note": "承認外。SID"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%AA%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%81%E3%83%8B%E3%83%96%E3%83%9E%E3%83%AC%E3%82%A4%E3%83%B3%E9%85%B8%E5%A1%A9&MAIN_COMPONENT=%E3%82%AA%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%81%E3%83%8B%E3%83%96%E3%83%9E%E3%83%AC%E3%82%A4%E3%83%B3%E9%85%B8%E5%A1%A9",
    "source": "NVAL",
    "id": "drug_161"
  },
  {
    "name": "サイトポイント（ロキベトマブ）",
    "category": "アレルギー・皮膚科",
    "conc": 10,
    "concText": "10mg/mL（1mLバイアル / 2mLバイアル）",
    "route": "injectable",
    "memo": "【モノクローナル抗体・IL-31標的】犬アトピー性皮膚炎のそう痒コントロール。SC投与。効果持続4〜8週間。副作用が少なく長期使用向き。感染症のある動物には慎重使用。免疫抑制剤との併用可能。投与前に室温に戻す（30分）。",
    "note": "※猫への使用は承認外。猫IL-31抗体製剤（Frunevetmab/Solensia）は別製品（日本未承認）",
    "species": {
      "犬": {
        "lo": 2,
        "hi": 2,
        "note": "SC。4〜8週毎投与。体重別バイアルサイズ選択"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "承認外（猫用製剤は別途）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%AD%E3%82%AD%E3%83%99%E3%83%88%E3%83%9E%E3%83%96&MAIN_COMPONENT=%E3%83%AD%E3%82%AD%E3%83%99%E3%83%88%E3%83%9E%E3%83%96",
    "source": "NVAL",
    "id": "drug_162"
  },
  {
    "name": "クレボル（ロピニロール塩酸塩）",
    "category": "緊急・救急",
    "conc": 1,
    "concText": "1回使い切りバイアル（0.1mL）",
    "route": "topical",
    "memo": "【国内初の犬用催吐点眼剤・2025年12月発売】誤食・誤飲時の催吐処置に使用。注射不要、点眼のみ。平均12.1分で嘔吐誘発。投与犬の約90%は45分以内に嘔吐が治まる。2回目投与可（1回目で嘔吐しない場合）。嘔吐が遷延する場合はメトクロプラミド注で拮抗可。【禁忌】意識障害・痙攣中・強アルカリ/腐食性物質誤飲時・嘔吐禁忌例（食道・胃疾患等）。物産アニマルヘルス社。要指示・指定・劇薬。",
    "note": "猫には適応なし（CTZのドパミン受容体が少なく効果なし）",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "体重に応じて1〜8滴を片目または両目に点眼。製品添付文書の体重別投与滴数表参照"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "適応なし・使用不可"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%AD%E3%83%94%E3%83%8B%E3%83%AD%E3%83%BC%E3%83%AB%E5%A1%A9%E9%85%B8%E5%A1%A9&MAIN_COMPONENT=%E3%83%AD%E3%83%94%E3%83%8B%E3%83%AD%E3%83%BC%E3%83%AB%E5%A1%A9%E9%85%B8%E5%A1%A9",
    "source": "NVAL",
    "id": "drug_163"
  },
  {
    "name": "エピネフリン（アドレナリン）",
    "category": "緊急・救急",
    "conc": 1,
    "concText": "0.1%製剤（1mg/mL）",
    "route": "injectable",
    "memo": "【心肺蘇生（CPR）の第一選択薬】VF/無脈性VT以外の心停止に使用。低用量：心収縮力増強・血圧上昇。高用量：末梢血管収縮強→心筋虚血リスク増。CPRでは3〜5分毎反復投与。気管内投与も可（IV量の2〜10倍を希釈して）。アナフィラキシーショックにも使用（0.01mg/kg IM推奨）。",
    "note": "CPR: 0.01mg/kg IV/IO q3-5min。アナフィラキシー: 0.01mg/kg IM（大腿外側）",
    "species": {
      "犬": {
        "lo": 0.01,
        "hi": 0.01,
        "note": "IV/IO。CPRでは3〜5分毎反復。高用量（0.1mg/kg）は推奨されない"
      },
      "猫": {
        "lo": 0.01,
        "hi": 0.01,
        "note": "IV/IO。同上"
      },
      "ウサギ": {
        "lo": 0.2,
        "hi": 0.2,
        "note": "0.2mg/kg IV（心停止時）"
      },
      "モルモット": {
        "lo": 0.003,
        "hi": 0.003,
        "note": "0.003mg/kg IV（心停止）"
      },
      "フェレット": {
        "lo": 0.02,
        "hi": 0.02,
        "note": "0.02mg/kg SC,IM,IV"
      },
      "ハリネズミ": {
        "lo": 0.003,
        "hi": 0.003,
        "note": "0.003mg/kg IV"
      },
      "ハムスター": {
        "lo": 0.1,
        "hi": 0.1,
        "note": "0.1mg/kg IV"
      }
    },
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%89%E3%83%AC%E3%83%8A%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_164"
  },
  {
    "name": "アトロピン硫酸塩",
    "category": "緊急・救急",
    "conc": 0.5,
    "concText": "0.5mg/mL（0.05%）",
    "route": "injectable",
    "memo": "【徐脈・房室ブロック・迷走神経性心停止の第一選択】ムスカリン受容体拮抗→心拍数増加・気管支拡張・消化管運動抑制。麻酔前投与にも使用（唾液・気道分泌抑制）。緑内障・尿閉・腸閉塞には禁忌。過量で頻脈・散瞳・口渇・尿閉。気管内投与も可（IV量の2倍）。",
    "note": "麻酔前: 0.02〜0.04mg/kg SC/IM。緊急徐脈: 0.02〜0.04mg/kg IV。CPR（無脈性電気活動）: 0.04mg/kg IV",
    "species": {
      "犬": {
        "lo": 0.02,
        "hi": 0.04,
        "note": "IV/IM/SC。麻酔前はIM/SC、緊急時はIV"
      },
      "猫": {
        "lo": 0.02,
        "hi": 0.04,
        "note": "IV/IM/SC。同上"
      },
      "ウサギ": {
        "lo": 0.1,
        "hi": 0.5,
        "note": "0.1-0.5mg/kg SC,IM（50%のウサギがアトロピナーゼを有し効果乏しい）"
      },
      "モルモット": {
        "lo": 0.1,
        "hi": 0.2,
        "note": "0.1-0.2mg/kg SC,IM"
      },
      "フェレット": {
        "lo": 0.02,
        "hi": 0.05,
        "note": "0.02-0.05mg/kg SC,IM,IV"
      },
      "ハリネズミ": {
        "lo": 0.01,
        "hi": 0.04,
        "note": "0.01-0.04mg/kg SC,IM"
      },
      "ハムスター": {
        "lo": 0.1,
        "hi": 0.4,
        "note": "0.1-0.4mg/kg SC,IM"
      }
    },
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%88%E3%83%AD%E3%83%94%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_165"
  },
  {
    "name": "ドブタミン",
    "category": "緊急・救急",
    "conc": 5,
    "concText": "5mg/mL（250mg/50mLバイアル等）",
    "route": "injectable",
    "memo": "【低心拍出量・心原性ショックのCRI（持続点滴）】β1受容体刺激→心収縮力増強・心拍出量増加。末梢血管抵抗はほぼ不変（ドパミンとの違い）。必ずCRIで使用（ボーラス投与不可）。5%ブドウ糖液または生食で希釈。重篤な頻脈・不整脈では中止。猫は犬より感受性が高く低用量から開始。",
    "note": "CRI用量（μg/kg/min）: 犬5〜20、猫2.5〜10。希釈例: 体重(kg)×3mg を50mLに希釈→1mL/h = 1μg/kg/min",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 20,
        "note": "μg/kg/min でCRI。低用量から開始し効果をみながら増量"
      },
      "猫": {
        "lo": 2.5,
        "hi": 10,
        "note": "μg/kg/min でCRI。犬より感受性高い→低用量から。痙攣報告あり→注意"
      },
      "ウサギ": {
        "lo": 5,
        "hi": 15,
        "note": "μg/kg/min（承認外）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "承認外・用量不明"
      },
      "フェレット": {
        "lo": 5,
        "hi": 10,
        "note": "μg/kg/min（承認外）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "承認外・用量不明"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "承認外・用量不明"
      }
    },
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%89%E3%83%96%E3%82%BF%E3%83%9F%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_166"
  },
  {
    "name": "ゼンレリア(イルノシチニブ)",
    "category": "アレルギー・皮膚科",
    "conc": null,
    "concText": "錠剤5mg/10mg/20mg/40mg/80mg",
    "species": {
      "犬": {
        "lo": 0.6,
        "hi": 0.6,
        "note": "0.6mg/kg q24h PO / 犬のアトピー性皮膚炎・アレルギー性皮膚炎"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "JAK阻害剤（非選択的）。食事と無関係に投与可。ワクチン接種前後は注意。",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%A4%E3%83%AB%E3%83%8E%E3%82%B7%E3%83%81%E3%83%8B%E3%83%96&MAIN_COMPONENT=%E3%82%A4%E3%83%AB%E3%83%8E%E3%82%B7%E3%83%81%E3%83%8B%E3%83%96",
    "source": "NVAL",
    "id": "drug_167"
  },
  {
    "name": "センベルゴ(ベラグリフロジン)",
    "category": "止血・造血・ホルモン",
    "conc": 15,
    "concText": "経口液剤 15mg/mL",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "猫": {
        "lo": 2,
        "hi": 2,
        "note": "2mg/cat q24h PO（固定用量・体重2.3-12.5kg対象）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "世界初の猫用経口SGLT2阻害薬。インスリン治療歴のある猫は慎重に。DKAリスクに注意。ハチミツ風味。",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%99%E3%83%A9%E3%82%B0%E3%83%AA%E3%83%95%E3%83%AD%E3%82%B8%E3%83%B3&MAIN_COMPONENT=%E3%83%99%E3%83%A9%E3%82%B0%E3%83%AA%E3%83%95%E3%83%AD%E3%82%B8%E3%83%B3",
    "source": "NVAL",
    "id": "drug_168"
  },
  {
    "name": "エルーラ(カプロモレリン)",
    "category": "消化器",
    "conc": null,
    "concText": "経口液剤",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "猫": {
        "lo": 2,
        "hi": 2,
        "note": "2mg/kg q24h PO / 慢性疾患に伴う食欲不振・体重減少"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "グレリン受容体作動薬。食欲刺激＋成長ホルモン分泌促進による筋肉量増加効果。バニラ風味。",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%AB%E3%83%97%E3%83%AD%E3%83%A2%E3%83%AC%E3%83%AA%E3%83%B3&MAIN_COMPONENT=%E3%82%AB%E3%83%97%E3%83%AD%E3%83%A2%E3%83%AC%E3%83%AA%E3%83%B3",
    "source": "NVAL",
    "id": "drug_169"
  },
  {
    "name": "リブレラ(ベジンベトマブ)",
    "category": "鎮痛",
    "conc": null,
    "concText": "注射剤",
    "species": {
      "犬": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg SC q4weeks / 変形性関節症に伴う疼痛"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "抗NGFモノクローナル抗体（犬用）。4週間に1回皮下注射。妊娠・授乳中は禁忌。",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%99%E3%82%B8%E3%83%B3%E3%83%99%E3%83%88%E3%83%9E%E3%83%96&MAIN_COMPONENT=%E3%83%99%E3%82%B8%E3%83%B3%E3%83%99%E3%83%88%E3%83%9E%E3%83%96",
    "source": "NVAL",
    "id": "drug_170"
  },
  {
    "name": "ソレンシア(フルネベトマブ)",
    "category": "鎮痛",
    "conc": null,
    "concText": "注射剤",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "猫": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg SC q4weeks / 変形性関節症に伴う疼痛"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "抗NGFモノクローナル抗体（猫用）。4週間に1回皮下注射。妊娠・授乳中は禁忌。",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%95%E3%83%AB%E3%83%8D%E3%83%99%E3%83%88%E3%83%9E%E3%83%96&MAIN_COMPONENT=%E3%83%95%E3%83%AB%E3%83%8D%E3%83%99%E3%83%88%E3%83%9E%E3%83%96",
    "source": "NVAL",
    "id": "drug_171"
  },
  {
    "name": "グリセオフルビン",
    "category": "抗真菌薬",
    "conc": null,
    "concText": "錠剤・散剤",
    "species": {
      "犬": {
        "lo": 25,
        "hi": 25,
        "note": "25mg/kg PO sid-bid（28-40日）"
      },
      "猫": {
        "lo": 25,
        "hi": 25,
        "note": "25mg/kg PO bid（28-40日）"
      },
      "ウサギ": {
        "lo": 25,
        "hi": 25,
        "note": "25mg/kg PO sid-bid（1日1-2回、28-40日）"
      },
      "モルモット": {
        "lo": 15,
        "hi": 25,
        "note": "15-25mg/kg PO sid（14-28日）"
      },
      "フェレット": {
        "lo": 25,
        "hi": 25,
        "note": "25mg/kg PO sid"
      },
      "ハリネズミ": {
        "lo": 50,
        "hi": 50,
        "note": "50mg/kg PO sid"
      },
      "ハムスター": {
        "lo": 25,
        "hi": 25,
        "note": "25mg/kg PO q24h（3-6週間）"
      }
    },
    "memo": "皮膚糸状菌症（Microsporum, Trichophyton）に有効。Candida・Aspergillusには無効。妊娠中は禁忌。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B0%E3%83%AA%E3%82%BB%E3%82%AA%E3%83%95%E3%83%AB%E3%83%93%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_172"
  },
  {
    "name": "ケトコナゾール",
    "category": "抗真菌薬",
    "conc": null,
    "concText": "錠剤200mg",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 30,
        "note": "10-30mg/kg PO bid"
      },
      "猫": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO bid（注意して使用）"
      },
      "ウサギ": {
        "lo": 10,
        "hi": 15,
        "note": "10-15mg/kg PO sid（皮膚糸状菌症: 14日間）"
      },
      "モルモット": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg PO sid（3週間）"
      },
      "フェレット": {
        "lo": 10,
        "hi": 30,
        "note": "10-30mg/kg PO bid"
      },
      "ハリネズミ": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg PO sid"
      },
      "ハムスター": {
        "lo": 10,
        "hi": 40,
        "note": "10-40mg/kg PO sid"
      }
    },
    "memo": "イミダゾール系。酸性環境で吸収されるため制酸剤との併用は吸収低下。肝毒性注意。P450を阻害。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B1%E3%83%88%E3%82%B3%E3%83%8A%E3%82%BE%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_173"
  },
  {
    "name": "フルコナゾール",
    "category": "抗真菌薬",
    "conc": null,
    "concText": "錠剤50mg・注射剤",
    "species": {
      "犬": {
        "lo": 2.5,
        "hi": 10,
        "note": "2.5-10mg/kg PO,IV bid（全身性真菌症）"
      },
      "猫": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO bid"
      },
      "ウサギ": {
        "lo": 25,
        "hi": 43,
        "note": "25-43mg/kg IV bid（全身性真菌症）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 25,
        "hi": 25,
        "note": "25mg/kg PO bid"
      }
    },
    "memo": "トリアゾール系。Candida albicansを中心とした半子嚢菌・担子菌酵母の一部に有効。全身性真菌症に10mg/kgで良好な髄液への浸透性。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%95%E3%83%AB%E3%82%B3%E3%83%8A%E3%82%BE%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_174"
  },
  {
    "name": "ペニシリンG（ベンジルペニシリン）",
    "category": "抗生剤",
    "conc": 100000,
    "concText": "10万/ml",
    "species": {
      "犬": {
        "lo": 20000,
        "hi": 100000,
        "note": "22000IU/kg SC,IM q12h（ラット）"
      },
      "猫": {
        "lo": 20000,
        "hi": 40000,
        "note": "（記載なし）"
      },
      "ウサギ": {
        "lo": 40000,
        "hi": 60000,
        "note": "40000-60000IU/kg SC,IM sid（ウサギ梅毒・長期はドウベン: 42000-84000IU/kg 1週間おき3回）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": 40000,
        "hi": 40000,
        "note": "40000IU/kg IM sid"
      },
      "ハリネズミ": {
        "lo": 40000,
        "hi": 40000,
        "note": "40000IU/kg SC,IM q24h"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "グラム陽性球菌に有効。草食動物（モルモット・チンチラ・ハムスター）への使用は腸炎誘発のため推奨されない。",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%99%E3%83%B3%E3%82%B8%E3%83%AB%E3%83%9A%E3%83%8B%E3%82%B7%E3%83%AA%E3%83%B3%E3%82%AB%E3%83%AA%E3%82%A6%E3%83%A0&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_175"
  },
  {
    "name": "テトラサイクリン",
    "category": "抗生剤",
    "conc": null,
    "concText": "錠剤250mg",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 20,
        "note": "10-20mg/kg PO q8h"
      },
      "猫": {
        "lo": 10,
        "hi": 20,
        "note": "10-20mg/kg PO q8h"
      },
      "ウサギ": {
        "lo": 50,
        "hi": 50,
        "note": "50mg/kg PO q8-12h（注意して使用）"
      },
      "モルモット": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg PO q8-12h"
      },
      "フェレット": {
        "lo": 20,
        "hi": 25,
        "note": "20-25mg/kg PO q8-12h"
      },
      "ハリネズミ": {
        "lo": 10,
        "hi": 20,
        "note": "10-20mg/kg PO q8-12h"
      },
      "ハムスター": {
        "lo": 10,
        "hi": 20,
        "note": "10-20mg/kg PO q8-12h"
      }
    },
    "memo": "長期投与で骨の成長阻害の可能性あり。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%86%E3%83%88%E3%83%A9%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_176"
  },
  {
    "name": "クロラムフェニコール",
    "category": "抗生剤",
    "conc": 25,
    "concText": "25mg/ml注射剤（または錠剤250mg）",
    "species": {
      "犬": {
        "lo": 25,
        "hi": 50,
        "note": "25-50mg/kg PO,SC,IM bid"
      },
      "猫": {
        "lo": 25,
        "hi": 50,
        "note": "25-50mg/kg PO,SC,IM bid（若齢動物への投与は感受性が高いため注意）"
      },
      "ウサギ": {
        "lo": 30,
        "hi": 50,
        "note": "30-50mg/kg IM,PO bid（トレポネーマ症: 55mg/kg PO bid 2週間）"
      },
      "モルモット": {
        "lo": 50,
        "hi": 50,
        "note": "50mg/kg SC,IM,PO q8-12h（注意して使用）"
      },
      "フェレット": {
        "lo": 25,
        "hi": 50,
        "note": "25-50mg/kg IM,PO bid（増殖性腸炎: 最低2週間）"
      },
      "ハリネズミ": {
        "lo": 30,
        "hi": 50,
        "note": "30-50mg/kg PO bid"
      },
      "ハムスター": {
        "lo": 30,
        "hi": 50,
        "note": "30-50mg/kg SC,IM,PO q8-12h"
      }
    },
    "memo": "若齢・小動物では骨髄抑制（再生不良性貧血）に注意。ヒトへの血液毒性があるため取り扱い注意。",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%AF%E3%83%AD%E3%83%A9%E3%83%A0%E3%83%95%E3%82%A7%E3%83%8B%E3%82%B3%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_177"
  },
  {
    "name": "ネオマイシン",
    "category": "抗生剤",
    "conc": null,
    "concText": "外用・散剤",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 20,
        "note": "10-20mg/kg PO tid（腸内感染）"
      },
      "猫": {
        "lo": 10,
        "hi": 20,
        "note": "10-20mg/kg PO tid"
      },
      "ウサギ": {
        "lo": 30,
        "hi": 30,
        "note": "30mg/kg PO q12h"
      },
      "モルモット": {
        "lo": 15,
        "hi": 15,
        "note": "15mg/kg PO q12h"
      },
      "フェレット": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg PO q6-8h"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 30,
        "hi": 30,
        "note": "30mg/kg PO q12h"
      }
    },
    "memo": "アミノグリコシド系。全身投与は腎毒性・聴器毒性のため通常は経口（腸内滅菌）または外用のみ。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E7%A1%AB%E9%85%B8%E3%83%8D%E3%82%AA%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_178"
  },
  {
    "name": "アミカシン（硫酸アミカシン）",
    "category": "抗生剤",
    "conc": 50,
    "concText": "注射剤",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 15,
        "note": "10-15mg/kg SC,IM,IV q8h"
      },
      "猫": {
        "lo": 10,
        "hi": 15,
        "note": "10-15mg/kg SC,IM,IV q8h"
      },
      "ウサギ": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg SC,IM,IV q8-12h"
      },
      "モルモット": {
        "lo": 10,
        "hi": 15,
        "note": "10-15mg/kg SC,IM,IV q8-12h（腸内細菌叢に影響を与える可能性あり）"
      },
      "フェレット": {
        "lo": 8,
        "hi": 16,
        "note": "8-16mg/kg SC,IM,IV q8-12h"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg SC,IM,IV q12h"
      }
    },
    "memo": "アミノグリコシド系。犬猫では腎不全・前庭障害（特に猫）を引き起こしやすい。他抗生剤が使えない場合に使用。",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%9F%E3%82%AB%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_179"
  },
  {
    "name": "ミノサイクリン（ミノマイシン）",
    "category": "抗生剤",
    "conc": null,
    "concText": "錠剤50/100mg",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 12.5,
        "note": "5-12.5mg/kg PO q12h"
      },
      "猫": {
        "lo": 5,
        "hi": 12.5,
        "note": "5-12.5mg/kg PO q12h"
      },
      "ウサギ": {
        "lo": 2.5,
        "hi": 5,
        "note": "2.5-5mg/kg PO bid"
      },
      "モルモット": {
        "lo": 2.5,
        "hi": 5,
        "note": "2.5-5mg/kg PO bid"
      },
      "フェレット": {
        "lo": 5,
        "hi": 5,
        "note": "5mg/kg PO bid"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 2.5,
        "hi": 2.5,
        "note": "2.5mg/kg PO bid"
      }
    },
    "memo": "テトラサイクリン系。リケッチア・マイコプラズマ・クラミジアに有効。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%9F%E3%83%8E%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_180"
  },
  {
    "name": "クラリスロマイシン（クラリス・クラリシッド）",
    "category": "抗生剤",
    "conc": null,
    "concText": "錠剤200mg",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO bid"
      },
      "猫": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO bid（ヘリコバクター）"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": 12.5,
        "hi": 12.5,
        "note": "12.5mg/kg PO bid（ヘリコバクター）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "マクロライド系。ヘリコバクター除菌（フェレット）に使用。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%AF%E3%83%A9%E3%83%AA%E3%82%B9%E3%83%AD%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_181"
  },
  {
    "name": "アンチセダン（アチパメゾール）",
    "category": "鎮静",
    "conc": 5,
    "concText": "注射剤5mg/ml",
    "species": {
      "犬": {
        "lo": 0.05,
        "hi": 0.2,
        "note": "50-200μg/kg IM（メデトミジン拮抗）"
      },
      "猫": {
        "lo": 0.05,
        "hi": 0.2,
        "note": "50-200μg/kg IM"
      },
      "ウサギ": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg IM（メデトミジン拮抗）"
      },
      "モルモット": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg IM"
      },
      "フェレット": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg IM"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "α2受容体拮抗薬。メデトミジン・キシラジンの拮抗に使用。メデトミジンの5倍量をIMで投与。",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%A2%E3%83%81%E3%83%91%E3%83%A1%E3%82%BE%E3%83%BC%E3%83%AB%E5%A1%A9%E9%85%B8%E5%A1%A9&MAIN_COMPONENT=%E3%82%A2%E3%83%81%E3%83%91%E3%83%A1%E3%82%BE%E3%83%BC%E3%83%AB%E5%A1%A9%E9%85%B8%E5%A1%A9",
    "source": "NVAL",
    "id": "drug_182"
  },
  {
    "name": "イベルメクチン（イベルメク・ストロメクトール）",
    "category": "駆虫薬",
    "conc": 1,
    "concText": "注射剤1%（1mg/ml）・錠剤",
    "species": {
      "犬": {
        "lo": 0.2,
        "hi": 0.4,
        "note": "0.2mg/kg PO（フィラリア予防）/ 0.2-0.4mg/kg SC（疥癬・ニキビダニ）"
      },
      "猫": {
        "lo": 0.2,
        "hi": 0.4,
        "note": "0.2-0.4mg/kg SC q14d（耳ダニ・疥癬）"
      },
      "ウサギ": {
        "lo": 0.2,
        "hi": 0.4,
        "note": "0.2-0.4mg/kg SC q14d（耳ダニ・疥癬）"
      },
      "モルモット": {
        "lo": 0.2,
        "hi": 0.4,
        "note": "0.2-0.4mg/kg SC q14d（ダニ・シラミ: 7日ごと3-4回）"
      },
      "フェレット": {
        "lo": 0.02,
        "hi": 0.5,
        "note": "大系状虫予防: 0.02mg/kg SC / 疥癬: 0.2-0.4mg/kg q14日に3回 / 耳ダニ: 0.02mg/kg"
      },
      "ハリネズミ": {
        "lo": 0.2,
        "hi": 0.4,
        "note": "0.2-0.4mg/kg SC q14d（14日ごとに3回）"
      },
      "ハムスター": {
        "lo": 0.2,
        "hi": 0.4,
        "note": "0.2-0.4mg/kg SC q14d（ダニ・シラミ: 7日ごと3-4回）"
      }
    },
    "memo": "マクロライド系。根虫のγ-アミノ酪酸の遊離を促進し節後神経シナプスを遮断。コリー系犬でMDR1変異に注意。",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A4%E3%83%99%E3%83%AB%E3%83%A1%E3%82%AF%E3%83%81%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA / NVAL",
    "id": "drug_183"
  },
  {
    "name": "フェンベンダゾール（パナクール・サルコベット）",
    "category": "駆虫薬",
    "conc": null,
    "concText": "錠剤・顆粒",
    "species": {
      "犬": {
        "lo": 50,
        "hi": 50,
        "note": "50mg/kg PO sid × 3日間"
      },
      "猫": {
        "lo": 50,
        "hi": 50,
        "note": "50mg/kg PO sid × 3日間"
      },
      "ウサギ": {
        "lo": 20,
        "hi": 20,
        "note": "20mg/kg PO sid（エンセファリトゾーンに有効）"
      },
      "モルモット": {
        "lo": 20,
        "hi": 20,
        "note": "20mg/kg PO sid（ジアルジアにも有効）5日間"
      },
      "フェレット": {
        "lo": 20,
        "hi": 20,
        "note": "20mg/kg PO sid"
      },
      "ハリネズミ": {
        "lo": 20,
        "hi": 30,
        "note": "20-30mg/kg PO sid"
      },
      "ハムスター": {
        "lo": 20,
        "hi": 50,
        "note": "20-50mg/kg PO sid（5日間）"
      }
    },
    "memo": "ベンズイミダゾール系。線虫・条虫・原虫に有効。エンセファリトゾーン（ウサギ）に特に重要。",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%95%E3%82%A7%E3%83%B3%E3%83%99%E3%83%B3%E3%83%80%E3%82%BE%E3%83%BC%E3%83%AB&MAIN_COMPONENT=%E3%83%95%E3%82%A7%E3%83%B3%E3%83%99%E3%83%B3%E3%83%80%E3%82%BE%E3%83%BC%E3%83%AB",
    "source": "NVAL",
    "id": "drug_184"
  },
  {
    "name": "プラジカンテル（ドロンタール・プラジベット）",
    "category": "駆虫薬",
    "conc": null,
    "concText": "錠剤・注射剤",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO（条虫・吸虫）"
      },
      "猫": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO（条虫）"
      },
      "ウサギ": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO（10-14日後に再投与）"
      },
      "モルモット": {
        "lo": 6,
        "hi": 10,
        "note": "6-10mg/kg PO（条虫）"
      },
      "フェレット": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO（14日以内で繰り返す・条虫）"
      },
      "ハリネズミ": {
        "lo": 7,
        "hi": 7,
        "note": "7mg/kg PO,SC（14日後再投与）"
      },
      "ハムスター": {
        "lo": 6,
        "hi": 10,
        "note": "6-10mg/kg PO"
      }
    },
    "memo": "条虫・吸虫駆除薬。細胞膜のカルシウム透過性を亢進させ殺虫。",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%97%E3%83%A9%E3%82%B8%E3%82%AB%E3%83%B3%E3%83%86%E3%83%AB&MAIN_COMPONENT=%E3%83%97%E3%83%A9%E3%82%B8%E3%82%AB%E3%83%B3%E3%83%86%E3%83%AB",
    "source": "NVAL",
    "id": "drug_185"
  },
  {
    "name": "セラメクチン（レボリューション）",
    "category": "駆虫薬",
    "conc": null,
    "concText": "スポットオン製剤60mg/ml",
    "species": {
      "犬": {
        "lo": 6,
        "hi": 12,
        "note": "6-12mg/kg 局所投与"
      },
      "猫": {
        "lo": 6,
        "hi": 12,
        "note": "6-12mg/kg 局所投与"
      },
      "ウサギ": {
        "lo": 6,
        "hi": 6,
        "note": "6mg/kg 局所投与"
      },
      "モルモット": {
        "lo": 6,
        "hi": 6,
        "note": "6mg/kg 局所投与（皮膚糸状菌症にも有効）"
      },
      "フェレット": {
        "lo": 6,
        "hi": 6,
        "note": "6mg/kg 局所投与（フィラリア予防・耳ダニ）"
      },
      "ハリネズミ": {
        "lo": 6,
        "hi": 6,
        "note": "6mg/kg 局所投与"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "マクロライド系スポットオン。犬猫の外寄生虫・フィラリア予防。エキゾにも幅広く使用。",
    "route": "topical",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%BB%E3%83%A9%E3%83%A1%E3%82%AF%E3%83%81%E3%83%B3&MAIN_COMPONENT=%E3%82%BB%E3%83%A9%E3%83%A1%E3%82%AF%E3%83%81%E3%83%B3",
    "source": "NVAL",
    "id": "drug_186"
  },
  {
    "name": "ミルベマイシンオキシム（インターセプター・ミルベマイシン）",
    "category": "駆虫薬",
    "conc": null,
    "concText": "錠剤",
    "species": {
      "犬": {
        "lo": 0.5,
        "hi": 1,
        "note": "0.5-1.0mg/kg PO q30d（フィラリア予防・線虫）"
      },
      "猫": {
        "lo": 2,
        "hi": 2,
        "note": "2mg/kg PO q30d"
      },
      "ウサギ": {
        "lo": 1.15,
        "hi": 2.33,
        "note": "1.15-2.33mg/kg PO q30d"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "マクロライド系。フィラリア予防・駆虫。コリー系犬でMDR1変異に注意（イベルメクチンより安全）。",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%9F%E3%83%AB%E3%83%99%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3%E3%82%AA%E3%82%AD%E3%82%B7%E3%83%A0&MAIN_COMPONENT=%E3%83%9F%E3%83%AB%E3%83%99%E3%83%9E%E3%82%A4%E3%82%B7%E3%83%B3%E3%82%AA%E3%82%AD%E3%82%B7%E3%83%A0",
    "source": "NVAL",
    "id": "drug_187"
  },
  {
    "name": "ルフェヌロン（プログラム）",
    "category": "駆虫薬",
    "conc": null,
    "concText": "錠剤・懸濁液",
    "species": {
      "犬": {
        "lo": 10,
        "hi": 10,
        "note": "10mg/kg PO q30d（ノミ成長阻害）"
      },
      "猫": {
        "lo": 30,
        "hi": 30,
        "note": "30mg/kg PO q30d"
      },
      "ウサギ": {
        "lo": 30,
        "hi": 45,
        "note": "30-45mg/kg PO q30d"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": 30,
        "hi": 45,
        "note": "30-45mg/kg PO q30d"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "昆虫成長調節剤（IGR）。ノミの卵・幼虫発育を阻害。成虫には無効なため他薬との併用が望ましい。",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%AB%E3%83%95%E3%82%A7%E3%83%8C%E3%83%AD%E3%83%B3&MAIN_COMPONENT=%E3%83%AB%E3%83%95%E3%82%A7%E3%83%8C%E3%83%AD%E3%83%B3",
    "source": "NVAL",
    "id": "drug_188"
  },
  {
    "name": "フィプロニル（フロントライン）",
    "category": "駆虫薬",
    "conc": null,
    "concText": "スポットオン・スプレー",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "スプレー: 1-2プッシュ/kg / スポットオン: 体重別製剤"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "スプレー: 1-2プッシュ/kg / スポットオン: 体重別製剤"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "スプレー: 猫用チューブの1/5 / 毒性: 使用しない（報告あり）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "スプレーのひと押し、もしくは猫用チューブの1/5（毒性報告あり・注意）"
      },
      "ハリネズミ": {
        "lo": 7.5,
        "hi": 7.5,
        "note": "7.5mg/kg 局所投与 q30-60d"
      },
      "ハムスター": {
        "lo": 7.5,
        "hi": 7.5,
        "note": "7.5mg/kg 局所投与 q30-60d"
      }
    },
    "memo": "フェニルピラゾール系。GABAおよびグルタミン酸受容体を阻害。草食小動物への安全性注意。",
    "route": "topical",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%95%E3%82%A3%E3%83%97%E3%83%AD%E3%83%8B%E3%83%AB&MAIN_COMPONENT=%E3%83%95%E3%82%A3%E3%83%97%E3%83%AD%E3%83%8B%E3%83%AB",
    "source": "NVAL",
    "id": "drug_189"
  },
  {
    "name": "イミダクロプリド（アドバンテージ）",
    "category": "駆虫薬",
    "conc": null,
    "concText": "スポットオン",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "体重別スポットオン製剤"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "体重別スポットオン製剤"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "猫用1用量 局所投与"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "猫用1用量 局所投与"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "プレーリードッグ: 猫用量1/2 局所投与"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "ニコチン系殺虫剤。ノミ成虫に即効。ウサギ・フェレットには猫用製剤を使用。",
    "route": "topical",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%A4%E3%83%9F%E3%83%80%E3%82%AF%E3%83%AD%E3%83%97%E3%83%AA%E3%83%89&MAIN_COMPONENT=%E3%82%A4%E3%83%9F%E3%83%80%E3%82%AF%E3%83%AD%E3%83%97%E3%83%AA%E3%83%89",
    "source": "NVAL",
    "id": "drug_190"
  },
  {
    "name": "ピランテル（パモ酸ピランテル）",
    "category": "駆虫薬",
    "conc": null,
    "concText": "錠剤・懸濁液",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO（回虫・鉤虫）"
      },
      "猫": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO（14-21日ごとに繰り返す）"
      },
      "ウサギ": {
        "lo": 10,
        "hi": 15,
        "note": "10-15mg/kg PO sid（14-21日ごとに繰り返す）"
      },
      "モルモット": {
        "lo": 50,
        "hi": 50,
        "note": "50mg/kg PO sid"
      },
      "フェレット": {
        "lo": 4.4,
        "hi": 4.4,
        "note": "4.4mg/kg PO sid（蟯虫）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 10,
        "hi": 15,
        "note": "10-15mg/kg PO sid（14-21日ごとに繰り返す）"
      }
    },
    "memo": "ニコチン受容体作用。脱分極性神経筋遮断により寄生虫の筋組織を麻痺。鉤虫・蟯虫には無効。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%91%E3%83%A2%E9%85%B8%E3%83%94%E3%83%A9%E3%83%B3%E3%83%86%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_191"
  },
  {
    "name": "ピペラジン（クエン酸・アジピン酸ピペラジン）",
    "category": "駆虫薬",
    "conc": null,
    "concText": "散剤・溶液",
    "species": {
      "犬": {
        "lo": 50,
        "hi": 100,
        "note": "50-100mg/kg PO（14-21日ごとに繰り返す）"
      },
      "猫": {
        "lo": 50,
        "hi": 100,
        "note": "50-100mg/kg PO"
      },
      "ウサギ": {
        "lo": 200,
        "hi": 200,
        "note": "200mg/kg PO q14d で繰り返す"
      },
      "モルモット": {
        "lo": 4,
        "hi": 7,
        "note": "4-7mg/mL 飲水投与 q24h"
      },
      "フェレット": {
        "lo": 50,
        "hi": 100,
        "note": "50-100mg/kg PO q14d"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 3,
        "hi": 5,
        "note": "3-5mg/mL 飲水投与 7日投与し7日休薬を繰り返す"
      }
    },
    "memo": "感受性寄生虫のアセチルコリン作用を遮断し駆虫。殺虫作用は弱い。回虫に有効。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%94%E3%83%9A%E3%83%A9%E3%82%B8%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_192"
  },
  {
    "name": "アルベンダゾール（ゼンテル）",
    "category": "駆虫薬",
    "conc": null,
    "concText": "錠剤200mg",
    "species": {
      "犬": {
        "lo": 25,
        "hi": 50,
        "note": "25-50mg/kg PO bid × 3日間"
      },
      "猫": {
        "lo": 25,
        "hi": 50,
        "note": "25-50mg/kg PO bid × 3日間"
      },
      "ウサギ": {
        "lo": 7.5,
        "hi": 20,
        "note": "7.5-20mg/kg PO sid（エンセファリトゾーンに対して）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "ベンズイミダゾール系。フェンベンダゾールより強力。ジアルジア・エンセファリトゾーンにも有効。妊娠中は禁忌（催奇形性）。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%AB%E3%83%99%E3%83%B3%E3%83%80%E3%82%BE%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_193"
  },
  {
    "name": "レバミゾール",
    "category": "駆虫薬",
    "conc": null,
    "concText": "錠剤",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO sid"
      },
      "猫": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg PO sid"
      },
      "ウサギ": {
        "lo": 12.5,
        "hi": 20,
        "note": "12.5-20mg/kg PO sid（蟯虫）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "イミダゾチアゾール系化合物。線虫の神経筋接合部に作用。代謝は肝臓。",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%AC%E3%83%90%E3%83%9F%E3%82%BE%E3%83%BC%E3%83%AB%E5%A1%A9%E9%85%B8%E5%A1%A9&MAIN_COMPONENT=%E3%83%AC%E3%83%90%E3%83%9F%E3%82%BE%E3%83%BC%E3%83%AB%E5%A1%A9%E9%85%B8%E5%A1%A9",
    "source": "NVAL",
    "id": "drug_194"
  },
  {
    "name": "チアベンダゾール（チアベンゾール）",
    "category": "駆虫薬",
    "conc": null,
    "concText": "錠剤",
    "species": {
      "犬": {
        "lo": 50,
        "hi": 50,
        "note": "50mg/kg PO sid × 3日間"
      },
      "猫": {
        "lo": 50,
        "hi": 50,
        "note": "50mg/kg PO sid"
      },
      "ウサギ": {
        "lo": 50,
        "hi": 100,
        "note": "50-100mg/kg PO sid（5日間）"
      },
      "モルモット": {
        "lo": 50,
        "hi": 100,
        "note": "50-100mg/kg PO q24h × 5日"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 50,
        "hi": 100,
        "note": "50-100mg/kg PO q24h × 5日"
      }
    },
    "memo": "ベンズイミダゾール系。線虫・条虫・原虫に有効。国内では海外製品（Panacur®等）が使用される。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%81%E3%82%A2%E3%83%99%E3%83%B3%E3%83%80%E3%82%BE%E3%83%BC%E3%83%AB&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_195"
  },
  {
    "name": "石灰硫黄合剤2.5%",
    "category": "駆虫薬",
    "conc": null,
    "concText": "外用液",
    "species": {
      "犬": {
        "lo": null,
        "hi": null,
        "note": "浸漬 q7d"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "浸漬 q7d"
      },
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "浸漬 q7d"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "浸漬 q7d × 4回"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "浸漬 q7d"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "局所投与 q7d"
      }
    },
    "memo": "皮膚糸状菌・外部寄生虫に使用。強い臭気あり。希釈して全身浸漬または局所塗布。NA（適用外）の動物種あり。",
    "route": "topical",
    "pdf_url": "",
    "source": "適用外",
    "id": "drug_196"
  },
  {
    "name": "アセプロマジン（プロマック）",
    "category": "鎮静",
    "conc": 10,
    "concText": "注射剤10mg/ml",
    "species": {
      "犬": {
        "lo": 0.025,
        "hi": 0.1,
        "note": "0.025-0.1mg/kg SC,IM,IV（最大3mg）"
      },
      "猫": {
        "lo": 0.025,
        "hi": 0.1,
        "note": "0.025-0.1mg/kg SC,IM,IV（最大3mg）"
      },
      "ウサギ": {
        "lo": 0.1,
        "hi": 1,
        "note": "0.1-1.0mg/kg IM（心不全・呼吸器疾患は減量）"
      },
      "モルモット": {
        "lo": 0.5,
        "hi": 1,
        "note": "0.5-1.0mg/kg IM"
      },
      "フェレット": {
        "lo": 0.1,
        "hi": 0.3,
        "note": "0.1-0.3mg/kg SC,IM,IV"
      },
      "ハリネズミ": {
        "lo": 0.5,
        "hi": 1,
        "note": "0.5-1.0mg/kg IM"
      },
      "ハムスター": {
        "lo": 0.5,
        "hi": 1,
        "note": "0.5-1.0mg/kg IM"
      }
    },
    "memo": "フェノチアジン系。低血圧に注意。心不全・呼吸器疾患・てんかん患者では禁忌または減量。",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%A2%E3%82%BB%E3%83%97%E3%83%AD%E3%83%9E%E3%82%B8%E3%83%B3%E3%83%9E%E3%83%AC%E3%82%A4%E3%83%B3%E9%85%B8%E5%A1%A9&MAIN_COMPONENT=%E3%82%A2%E3%82%BB%E3%83%97%E3%83%AD%E3%83%9E%E3%82%B8%E3%83%B3%E3%83%9E%E3%83%AC%E3%82%A4%E3%83%B3%E9%85%B8%E5%A1%A9",
    "source": "NVAL",
    "id": "drug_197"
  },
  {
    "name": "キシラジン（セラクタール）",
    "category": "鎮静",
    "conc": 20,
    "concText": "注射剤20mg/ml・100mg/ml",
    "species": {
      "犬": {
        "lo": 0.5,
        "hi": 1,
        "note": "0.5-1.0mg/kg IV / 1-2mg/kg IM（鎮静）"
      },
      "猫": {
        "lo": 0.5,
        "hi": 1,
        "note": "0.5-1.0mg/kg IM,IV"
      },
      "ウサギ": {
        "lo": 1,
        "hi": 5,
        "note": "1-5mg/kg IM"
      },
      "モルモット": {
        "lo": 1,
        "hi": 5,
        "note": "1-5mg/kg IM"
      },
      "フェレット": {
        "lo": 1,
        "hi": 2,
        "note": "1-2mg/kg IM（単独では不十分）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "α2アドレナリン受容体作動薬。鎮静・鎮痛・筋弛緩。心疾患・呼吸器疾患では注意。アンチセダン（アチパメゾール）で拮抗可。",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%AD%E3%82%B7%E3%83%A9%E3%82%B8%E3%83%B3%E5%A1%A9%E9%85%B8%E5%A1%A9&MAIN_COMPONENT=%E3%82%AD%E3%82%B7%E3%83%A9%E3%82%B8%E3%83%B3%E5%A1%A9%E9%85%B8%E5%A1%A9",
    "source": "NVAL",
    "id": "drug_198"
  },
  {
    "name": "グリコピロレート（ロビヌール）",
    "category": "鎮静",
    "conc": 0.2,
    "concText": "注射剤0.2mg/ml",
    "species": {
      "犬": {
        "lo": 0.01,
        "hi": 0.02,
        "note": "0.01-0.02mg/kg SC,IM,IV（前投薬）"
      },
      "猫": {
        "lo": 0.01,
        "hi": 0.02,
        "note": "0.01-0.02mg/kg SC,IM,IV"
      },
      "ウサギ": {
        "lo": 0.01,
        "hi": 0.02,
        "note": "0.01-0.02mg/kg SC,IM（アトロピンより推奨・アトロピナーゼの影響を受けない）"
      },
      "モルモット": {
        "lo": 0.01,
        "hi": 0.02,
        "note": "0.01-0.02mg/kg SC,IM"
      },
      "フェレット": {
        "lo": 0.01,
        "hi": 0.02,
        "note": "0.01-0.02mg/kg SC,IM"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "抗コリン薬。アトロピンと異なり血液脳関門を通過しない。ウサギのアトロピナーゼ問題を回避できる。",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B0%E3%83%AA%E3%82%B3%E3%83%94%E3%83%AD%E3%83%8B%E3%82%A6%E3%83%A0%E8%87%AD%E5%8C%96%E7%89%A9&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_199"
  },
  {
    "name": "ヨヒンビン",
    "category": "鎮静",
    "conc": 2,
    "concText": "注射剤2mg/ml",
    "species": {
      "犬": {
        "lo": 0.1,
        "hi": 0.2,
        "note": "0.1-0.2mg/kg IV,IM（キシラジン拮抗）"
      },
      "猫": {
        "lo": 0.1,
        "hi": 0.2,
        "note": "0.1-0.2mg/kg IV,IM"
      },
      "ウサギ": {
        "lo": 0.2,
        "hi": 1,
        "note": "0.2-1.0mg/kg IV,IM"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": 0.5,
        "hi": 1,
        "note": "0.5-1.0mg/kg IM"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "α2アドレナリン受容体拮抗薬。キシラジン拮抗に使用。アンチセダンほど選択性は高くない。",
    "route": "injectable",
    "pdf_url": "",
    "source": "適用外",
    "id": "drug_200"
  },
  {
    "name": "チレタミン/ゾラゼパム（テラゾール・ゾーレティル）",
    "category": "麻酔",
    "conc": 100,
    "concText": "100mg/ml",
    "species": {
      "犬": {
        "lo": 6.6,
        "hi": 13.2,
        "note": "6.6-13.2mg/kg IM（T/Z等量）"
      },
      "猫": {
        "lo": 9.7,
        "hi": 14.3,
        "note": "9.7-14.3mg/kg IM"
      },
      "ウサギ": {
        "lo": 12,
        "hi": 22,
        "note": "12-22mg/kg IM（推奨されない報告あり）"
      },
      "フェレット": {
        "lo": 12,
        "hi": 22,
        "note": "12-22mg/kg IM（稀に使用）"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": 1,
        "hi": 5,
        "note": "1-5mg/kg IM"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "解離性麻酔薬（ケタミン類似）＋ベンゾジアゼピン。筋弛緩が良好。腎毒性に注意（特にウサギ・猫）。",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%81%E3%83%AC%E3%82%BF%E3%83%9F%E3%83%B3%E3%83%BB%E3%82%BE%E3%83%A9%E3%82%BC%E3%83%91%E3%83%A0&MAIN_COMPONENT=%E3%83%81%E3%83%AC%E3%82%BF%E3%83%9F%E3%83%B3%E3%83%BB%E3%82%BE%E3%83%A9%E3%82%BC%E3%83%91%E3%83%A0",
    "source": "NVAL",
    "id": "drug_201"
  },
  {
    "name": "フルニキシンメグルミン（バナミン）",
    "category": "NSAIDs",
    "conc": 50,
    "concText": "注射剤50mg/ml",
    "species": {
      "犬": {
        "lo": 1.1,
        "hi": 2.2,
        "note": "1.1-2.2mg/kg SC,IV q12-24h"
      },
      "猫": {
        "lo": 1,
        "hi": 1,
        "note": "1.0mg/kg SC 1回（連用禁）"
      },
      "ウサギ": {
        "lo": 1.1,
        "hi": 1.1,
        "note": "1.1mg/kg SC bid"
      },
      "モルモット": {
        "lo": 2.5,
        "hi": 5,
        "note": "2.5-5.0mg/kg SC bid-q24h"
      },
      "フェレット": {
        "lo": 0.3,
        "hi": 2,
        "note": "0.3-2.0mg/kg SC bid"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 2.5,
        "hi": 2.5,
        "note": "2.5mg/kg SC bid"
      }
    },
    "memo": "NSAIDs・COX非選択的。術後・疝痛疼痛緩和。腎機能低下時は禁忌。猫への反復投与は禁忌。",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%95%E3%83%AB%E3%83%8B%E3%82%AD%E3%82%B7%E3%83%B3%E3%83%A1%E3%82%B0%E3%83%AB%E3%83%9F%E3%83%B3&MAIN_COMPONENT=%E3%83%95%E3%83%AB%E3%83%8B%E3%82%AD%E3%82%B7%E3%83%B3%E3%83%A1%E3%82%B0%E3%83%AB%E3%83%9F%E3%83%B3",
    "source": "NVAL",
    "id": "drug_202"
  },
  {
    "name": "オキシモルフォン",
    "category": "鎮痛",
    "conc": 1,
    "concText": "注射剤1mg/ml",
    "species": {
      "犬": {
        "lo": 0.05,
        "hi": 0.2,
        "note": "0.05-0.2mg/kg SC,IM,IV q4-6h"
      },
      "猫": {
        "lo": 0.05,
        "hi": 0.1,
        "note": "0.05-0.1mg/kg SC,IM q4-6h"
      },
      "ウサギ": {
        "lo": 0.05,
        "hi": 0.2,
        "note": "0.05-0.2mg/kg SC,IM q8-12h"
      },
      "モルモット": {
        "lo": 0.2,
        "hi": 0.5,
        "note": "0.2-0.5mg/kg SC,IM q6-12h"
      },
      "フェレット": {
        "lo": 0.05,
        "hi": 0.2,
        "note": "0.05-0.2mg/kg SC,IM q8-12h"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "μ受容体完全作動薬。モルヒネより制吐・鎮静作用強い。呼吸抑制に注意。",
    "route": "injectable",
    "pdf_url": "",
    "source": "適用外",
    "id": "drug_203"
  },
  {
    "name": "ケトプロフェン（ケトフェン）",
    "category": "鎮痛",
    "conc": 10,
    "concText": "注射剤10mg/ml・錠剤",
    "species": {
      "犬": {
        "lo": 1,
        "hi": 2,
        "note": "1-2mg/kg SC,IM,PO q24h"
      },
      "猫": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg SC,IM q24h（1回のみ推奨）"
      },
      "ウサギ": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg SC,IM,PO q12-24h"
      },
      "モルモット": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg SC,IM q12-24h"
      },
      "フェレット": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg IM,PO q24h"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "NSAIDs。プロスタグランジン合成阻害。猫への反復投与は腎毒性に注意。",
    "route": "injectable",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%82%B1%E3%83%88%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%B3&MAIN_COMPONENT=%E3%82%B1%E3%83%88%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%B3",
    "source": "NVAL",
    "id": "drug_204"
  },
  {
    "name": "メペリジン/ペチジン（ペチロルファン）",
    "category": "鎮痛",
    "conc": 50,
    "concText": "注射剤50mg/ml",
    "species": {
      "犬": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg SC,IM q2-4h"
      },
      "猫": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg SC,IM q2-4h"
      },
      "ウサギ": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg SC,IM q2-4h"
      },
      "モルモット": {
        "lo": 10,
        "hi": 20,
        "note": "10-20mg/kg SC,IM q6h"
      },
      "フェレット": {
        "lo": 5,
        "hi": 10,
        "note": "5-10mg/kg SC,IM q2-4h"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 20,
        "hi": 40,
        "note": "20-40mg/kg SC,IM q2-4h"
      }
    },
    "memo": "μ受容体作動薬。短時間作用型（2-4時間）。NSAIDsとの併用効果あり。反復使用でノルメペリジン蓄積（痙攣リスク）。",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E5%A1%A9%E9%85%B8%E3%83%9A%E3%83%81%E3%82%B8%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_205"
  },
  {
    "name": "シサプリド（プロパルシド）",
    "category": "消化器",
    "conc": null,
    "concText": "錠剤5mg",
    "species": {
      "犬": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg PO bid-tid"
      },
      "猫": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg PO bid-tid（消化器うっ滞・胃食道逆流）"
      },
      "ウサギ": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg PO bid-tid（GI stasis）"
      },
      "モルモット": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg PO bid-tid"
      },
      "フェレット": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg PO bid-tid"
      },
      "ハリネズミ": {
        "lo": 0.5,
        "hi": 0.5,
        "note": "0.5mg/kg PO bid"
      },
      "ハムスター": {
        "lo": 0.1,
        "hi": 0.5,
        "note": "0.1-0.5mg/kg PO bid"
      }
    },
    "memo": "消化管運動促進薬。アセチルコリン放出刺激。ウサギのGI stasisに重要。ヒトでの発売は中止（心毒性）。国内流通に注意。",
    "route": "oral",
    "pdf_url": "",
    "source": "適用外",
    "id": "drug_206"
  },
  {
    "name": "ロペラミド（ロペミン）",
    "category": "消化器",
    "conc": null,
    "concText": "錠剤1mg・カプセル",
    "species": {
      "犬": {
        "lo": 0.08,
        "hi": 0.16,
        "note": "0.08-0.16mg/kg PO bid-qid"
      },
      "猫": {
        "lo": null,
        "hi": null,
        "note": "使用を避ける（中枢神経毒性リスク）"
      },
      "ウサギ": {
        "lo": 0.1,
        "hi": 0.1,
        "note": "0.1mg/kg PO bid-tid（非特異的下痢・草食動物ではほぼ使用しない）"
      },
      "モルモット": {
        "lo": 0.1,
        "hi": 0.1,
        "note": "0.1mg/kg PO bid（特発性下痢）"
      },
      "フェレット": {
        "lo": 0.2,
        "hi": 0.2,
        "note": "0.2mg/kg PO bid（カタル性腸炎）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 0.1,
        "hi": 0.1,
        "note": "0.1mg/kg PO bid-tid"
      }
    },
    "memo": "オピオイドμ受容体作動薬（腸管局所）。腸蠕動抑制・水分吸収促進。感染性下痢には禁忌。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E5%A1%A9%E9%85%B8%E3%83%AD%E3%83%9A%E3%83%A9%E3%83%9F%E3%83%89&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_207"
  },
  {
    "name": "ジゴキシン",
    "category": "循環器",
    "conc": 0.05,
    "concText": "0.05mg/ml（小動物用）・0.25mg錠",
    "species": {
      "犬": {
        "lo": 0.005,
        "hi": 0.01,
        "note": "0.005-0.01mg/kg PO q12-24h（徐放剤は20%減量）"
      },
      "猫": {
        "lo": 0.005,
        "hi": 0.01,
        "note": "0.005-0.01mg/kg PO q48h"
      },
      "ウサギ": {
        "lo": 0.005,
        "hi": 0.01,
        "note": "0.005-0.01mg/kg PO q24-48h"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "フェレット": {
        "lo": 0.005,
        "hi": 0.01,
        "note": "0.005-0.01mg/kg PO q12-24h"
      },
      "ハリネズミ": {
        "lo": 0.01,
        "hi": 0.05,
        "note": "0.01-0.05mg/kg PO q12-24h"
      },
      "ハムスター": {
        "lo": 0.05,
        "hi": 0.1,
        "note": "0.05-0.1mg/kg PO q12-24h"
      }
    },
    "memo": "強心配糖体。治療域が狭いため血中濃度モニタリング推奨。低カリウム血症で毒性増強。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B8%E3%82%B4%E3%82%AD%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_208"
  },
  {
    "name": "オキシトシン",
    "category": "止血・造血・ホルモン",
    "conc": 10,
    "concText": "注射剤10IU/ml",
    "species": {
      "犬": {
        "lo": 0.5,
        "hi": 3,
        "note": "0.5-3.0IU/kg SC,IM（分娩促進）"
      },
      "猫": {
        "lo": 0.5,
        "hi": 3,
        "note": "0.5-3.0IU/kg SC,IM"
      },
      "ウサギ": {
        "lo": 0.1,
        "hi": 3,
        "note": "0.1-3.0IU/kg SC,IM"
      },
      "モルモット": {
        "lo": 0.2,
        "hi": 3,
        "note": "0.2-3.0IU/kg SC,IM,IV"
      },
      "フェレット": {
        "lo": 0.2,
        "hi": 3,
        "note": "0.2-3.0IU/kg SC,IM"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 0.2,
        "hi": 3,
        "note": "0.2-3.0IU/kg SC,IM,IV"
      }
    },
    "memo": "子宮収縮・泌乳促進。分娩促進・胎盤遺残・子宮蓄膿症（開放型）に使用。過剰投与で子宮破裂リスク。",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%AA%E3%82%AD%E3%82%B7%E3%83%88%E3%82%B7%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_209"
  },
  {
    "name": "アムホテリシンB（ファンギゾン）",
    "category": "抗真菌薬",
    "conc": 5,
    "concText": "注射剤50mg/バイアル",
    "species": {
      "犬": {
        "lo": 0.25,
        "hi": 0.5,
        "note": "0.25-0.5mg/kg IV q48h（重篤な全身性真菌症）"
      },
      "猫": {
        "lo": 0.25,
        "hi": 0.5,
        "note": "0.25-0.5mg/kg IV q48h"
      },
      "ウサギ": {
        "lo": 1,
        "hi": 1,
        "note": "1mg/kg IV sid（重篤な真菌症・フルコナゾールと併用）"
      },
      "モルモット": {
        "lo": 0.11,
        "hi": 0.11,
        "note": "0.11mg/kg IV（腎毒性に注意）"
      },
      "フェレット": {
        "lo": 0.4,
        "hi": 0.8,
        "note": "0.4-0.8mg/kg IV（プラストマイセス・高窒素血症に注意）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      }
    },
    "memo": "ポリエン系。真菌細胞膜エルゴステロールに結合し殺菌的に作用。腎毒性・肝毒性あり。生理食塩水に溶解しない（5%ブドウ糖使用）。合計量7-25mgの範囲で。",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%A0%E3%83%9B%E3%83%86%E3%83%AA%E3%82%B7%E3%83%B3B&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_210"
  },
  {
    "name": "クロルテトラサイクリン（オーレオマイシン）",
    "category": "抗生剤",
    "conc": null,
    "concText": "散剤・軟膏",
    "species": {
      "犬": {
        "lo": 25,
        "hi": 50,
        "note": "25-50mg/kg PO q8h"
      },
      "猫": {
        "lo": 25,
        "hi": 50,
        "note": "25-50mg/kg PO q8h"
      },
      "ウサギ": {
        "lo": 50,
        "hi": 50,
        "note": "50mg/kg PO q8-12h（注意して使用）"
      },
      "モルモット": {
        "lo": 50,
        "hi": 50,
        "note": "50mg/kg PO q12h"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "（記載なし）"
      },
      "ハムスター": {
        "lo": 25,
        "hi": 50,
        "note": "25-50mg/kg PO q8h"
      }
    },
    "memo": "テトラサイクリン系。主に外用・飼料添加として使用。長期投与で骨成長障害。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%86%E3%83%88%E3%83%A9%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_211"
  },
  {
    "name": "ペニシリンGカリウム",
    "category": "抗菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "40,000〜60,000 IU/kg　筋注・皮下注　1日1回\nウサギ梅毒: 長期作用ペニシリン(ドウペン) 42,000〜84,000 IU/kg、1週間おきに3回投与"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "40,000 IU/kg　筋注　1日1回\n推奨されない"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "40,000 IU/kg　筋注・皮下注　1日1回　または　20,000 IU/kg　筋注　1日2回"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_212"
  },
  {
    "name": "アンピシリン",
    "category": "抗菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "10 mg/kgで致死的な腸炎を生じる、推奨されない"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "5〜30 mg/kg　静注・筋注・皮下注　1日3回"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_214"
  },
  {
    "name": "アモキシシリン水和物",
    "category": "抗菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "10〜30 mg/kg　経口　1日2〜3回\nヘリコバクターでは30 mg/kg、1日3回、21日間投与"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "15 mg/kg　経口・筋注　1日2回\n使用には注意が必要"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_216"
  },
  {
    "name": "アモキシシリン水和物・クラブラン酸カリウム",
    "category": "抗菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "12.5〜25 mg/kg　経口　1日2回"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "12.5 mg/kg　経口　1日3回"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_218"
  },
  {
    "name": "テトラサイクリン塩酸塩",
    "category": "抗菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "50 mg/kg　経口　1日2〜3回"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "25 mg/kg　経口　1日2〜3回\n妊娠症例には注意する"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "10〜20 mg/kg　経口　1日2〜3回"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "10 mg/kg　経口　1日2〜3回"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "25〜50 mg/kg　経口　1日1回\nオキシテトラサイクリンとして"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_220"
  },
  {
    "name": "ドキシサイクリン塩酸塩水和物",
    "category": "抗菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "2.5 mg/kg　経口　1日2回\n4 mg/kg　経口　1日1回"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "2.5 mg/kg　経口　1日2回"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "2.5 mg/kg　経口　1日2回"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "5 mg/kg　経口　1日2回"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_222"
  },
  {
    "name": "クリンダマイシン塩酸塩",
    "category": "抗菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "5.5〜10 mg/kg　経口　1日2回\n嫌気性菌感染症、骨および歯牙疾患、トキソプラズマ症に使用する"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "5.5 mg/kg　経口　1日2回"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_224"
  },
  {
    "name": "アミカシン硫酸塩",
    "category": "抗菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "2 mg/kg　静注・筋注・皮下注　1日3回\n腸内細菌叢に影響を与える可能性あり"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "10〜15 mg/kg　筋注・皮下注　1日2回"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "10 mg/kg　筋注　1日2回"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "10〜15 mg/kg　静注・筋注・皮下注　1日2〜3回\n腸内細菌叢に影響を与える可能性あり"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "2.5〜5 mg/kg　筋注　1日2〜3回\n下痢に注意する"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_226"
  },
  {
    "name": "ゲンタマイシン硫酸塩",
    "category": "抗菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "2.5 mg/kg　筋注・皮下注　1日2回\nポリメチルメタクリレートビーズ20gに対して本剤1gを混ぜる"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "5 mg/kg　筋注・皮下注　1日1回\n聴覚毒性および腎毒性あり"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "5〜8 mg/kg　筋注・皮下注　1日1〜3回"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "5〜8 mg/kg　筋注・皮下注　1日1〜3回"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "推奨されない"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_228"
  },
  {
    "name": "エンロフロキサシン",
    "category": "抗菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "5〜20 mg/kg　経口・皮下注　1日2回\nパスツレラ症ほか、半減期2時間、乳汁中に排泄される"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "5〜10 mg/kg　経口・皮下注　1日2回\nもしくは10〜20 mg/kgで投与する"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "5〜10 mg/kg　経口・皮下注　1日2回"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "5〜15 mg/kg　経口・皮下注　1日2回"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "5〜10 mg/kg　経口・皮下注　1日2回"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_230"
  },
  {
    "name": "ST合剤",
    "category": "抗菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "30 mg/kg　経口・筋注・皮下注　1日2回"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "15〜30 mg/kg　経口・皮下注　1日2回\n消化管コクシジウムには30 mg/kg、1日1回、2週間で投与する"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "15〜30 mg/kg　経口・皮下注　1日2回"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "15〜30 mg/kg　経口・皮下注　1日2回"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "30 mg/kg　経口・皮下注　1日2回\nマイコプラズマ、クロストリジウムに有効、筋注は避ける"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_232"
  },
  {
    "name": "スルファジメトキシン",
    "category": "抗菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "25 mg/kg　経口　1日1回\nコクシジウム症: 初回50 mg/kg、次に25 mg/kg、9日間"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "25 mg/kg　経口　1日1回\nコクシジウム症: 初回50 mg/kg、次に25 mg/kg、9日間"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "25 mg/kg　経口　1日1回\nコクシジウム症: 初回50 mg/kg、次に25 mg/kg、10〜20日間連続"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "25 mg/kg　経口　1日1回\nコクシジウム症: 初回50 mg/kg、次に25 mg/kg、10〜20日間連続"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "2〜20 mg/kg　経口・静注・筋注・皮下注\nコクシジウム症にはST合剤あるいはトルトラズリルが使用される"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_234"
  },
  {
    "name": "アムホテリシンB",
    "category": "抗真菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "1 mg/kg　静注　1日1回\n重度の真菌症に対してフルコナゾールと併用、腎毒性・肝毒性に注意"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "0.4〜0.8 mg/kg　静注　7日ごと\nブラストマイセス症、高窒素血症に注意、合計量7〜25mgの範囲で使用する"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "1 mg/kg　皮下注　1日1回、1週間に5回を3週続ける\n腎毒性に注意"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_236"
  },
  {
    "name": "イトラコナゾール",
    "category": "抗真菌薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "5 mg/kg　経口　1日1回\n3〜4週間連続投与する"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "15 mg/kg　経口　1日1〜2回"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "5 mg/kg　経口　1日1回"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "5 mg/kg　経口　1日1回"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "5〜10 mg/kg　経口　1日1回"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_238"
  },
  {
    "name": "アルベンダゾール",
    "category": "抗寄生虫薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "7.5〜20 mg/kg　経口　1日1回\nエンセファリトゾーン症に対して3週間以上使用する"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_240"
  },
  {
    "name": "チアベンダゾール",
    "category": "抗寄生虫薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "50〜100 mg/kg　経口　1日1回\n5日間、もしくは50 mg/kg、経口、1日1回、3週間投与する"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "100 mg/kg　経口　1日1回\n5日間使用する"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "100 mg/kg　経口　1日1回\n5日間使用する"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_242"
  },
  {
    "name": "フェンベンダゾール",
    "category": "抗寄生虫薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": 20,
        "hi": 20,
        "note": "20 mg/kg　経口　1日1回\nエンセファリトゾーン症にも有効、3週間以上継続"
      },
      "フェレット": {
        "lo": 20,
        "hi": 20,
        "note": "20 mg/kg　経口　1日1回\n5日間投与する"
      },
      "ハムスター": {
        "lo": 20,
        "hi": 50,
        "note": "20〜50 mg/kg　経口　1日1回\n5日間投与する、ジアルジアにも有効"
      },
      "モルモット": {
        "lo": 20,
        "hi": 50,
        "note": "20〜50 mg/kg　経口　1日1回"
      },
      "ハリネズミ": {
        "lo": 20,
        "hi": 30,
        "note": "20〜30 mg/kg　経口　1日1回\n5〜10日間投与する"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_244"
  },
  {
    "name": "メトロニダゾール",
    "category": "抗寄生虫薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "20 mg/kg　経口　1日2回\n嫌気性菌感染症に使用する"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "15〜20 mg/kg　経口　1日2回\nヘリコバクターでは: メトロニダゾール20 mg/kg＋アモキシシリン10 mg/kg、または10 mg/kg＋サリチル酸ビスマス17.5 mg/kg、経口、1日2回で投与する"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "20 mg/kg　経口　1日2回"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "20 mg/kg　経口　1日2回"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "20 mg/kg　経口　1日2回\nアメーバ症で使用する"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_246"
  },
  {
    "name": "イベルメクチン",
    "category": "抗寄生虫薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "0.1〜0.2 mg/kg　皮下注　14日ごと\n耳ダニ、疥癬に対して、まれに食欲低下がある"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "0.02〜0.5 mg/kg　経口・皮下注　1日1回\n犬糸状虫: 0.02 mg/kg、疥癬: 0.2〜0.4 mg/kg、回虫: 0.2〜0.5 mg/kgで投与する"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "0.2〜0.4 mg/kg　経口・皮下注　1日1回\nニキビダニに対して、7〜14日ごとに3回投与する"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "0.2〜0.4 mg/kg　皮下注　1日1回\nダニ、シラミに対して、7日ごとに3〜4回投与する"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "0.2 mg/kg　経口・皮下注　14日ごとに3回\nヒゼンダニ、線虫に対して使用する"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_248"
  },
  {
    "name": "ピペラジン",
    "category": "抗寄生虫薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "200 mg/kg　経口　14〜21日ごとに繰り返す"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "10 mg/mL　飲水投与　4〜7日間"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_250"
  },
  {
    "name": "ピランテルパモ酸塩",
    "category": "抗寄生虫薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "10〜15 mg/kg　経口　1日1回\n14〜21日ごとに繰り返す"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "4.4 mg/kg　経口"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "10〜15 mg/kg　経口　1日1回\n線虫類に使用する、14〜21日ごとに繰り返す"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "50 mg/kg　経口　1日1回"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "7 mg/kg　経口・皮下注　14日ごとに繰り返す\n条虫・吸虫に対して使用する"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_252"
  },
  {
    "name": "塩酸レバミゾール",
    "category": "抗寄生虫薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "12.5〜20 mg/kg　経口　1日1回\n胃虫に対して使用する"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "10 mg/kg　皮下注　48時間ごと\n線虫、肺虫に対して、必要に応じて14日ごとに繰り返す"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_254"
  },
  {
    "name": "オメプラゾール",
    "category": "消化器系薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "0.5 mg/kg　経口　1日1回 または 0.7 mg/kg　経口　1日1回\n胃潰瘍が疑われるとき / ヘリコバクター感染が疑われるとき"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "0.5 mg/kg　経口　1日1回\n胃潰瘍が疑われるときに使用する"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "0.5 mg/kg　経口　1日1回\n胃潰瘍が疑われるときに使用する"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "0.5 mg/kg　経口　1日1回\n胃潰瘍が疑われるときに使用する"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_256"
  },
  {
    "name": "シサプリド",
    "category": "消化器系薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "0.5 mg/kg　経口　1日2〜3回\n胃腸うっ滞に使用する"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "0.5 mg/kg　経口　1日2〜3回"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "0.1〜0.5 mg/kg　経口　1日2回"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "0.5 mg/kg　経口　1日2〜3回"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_258"
  },
  {
    "name": "シメチジン",
    "category": "消化器系薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "5〜10 mg/kg　経口・静注・筋注・皮下注　1日2〜3回"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "10 mg/kg　経口・静注・筋注・皮下注　1日3回"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "5〜10 mg/kg　経口・筋注・皮下注　1日2〜3回\n食道炎、胃・十二指腸潰瘍に使用する"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "5〜10 mg/kg　経口・静注・筋注・皮下注　1日2〜4回"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "10 mg/kg　経口　1日3回\n胃潰瘍に使用する"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_260"
  },
  {
    "name": "塩酸メトクロプラミド",
    "category": "消化器系薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "0.2〜1.05 mg/kg　経口・皮下注　1日2〜4回"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "0.2〜1 mg/kg　経口・皮下注　1日2〜4回"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "0.2〜1 mg/kg　経口・筋注・皮下注　1日2回\n消化器うっ滞に使用する"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "0.2〜1 mg/kg　経口・筋注・皮下注　1日2回\n消化器うっ滞に使用する"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "0.2〜0.5 mg/kg　経口・皮下注　1日2回\n制吐作用がある"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_262"
  },
  {
    "name": "ロペラミド塩酸塩",
    "category": "消化器系薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "0.1 mg/kg　経口　1日1〜3回\n非特異的下痢・胃腸うっ滞を起こす可能性があるため、完全草食動物にはほとんど用いない"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "0.2 mg/kg　経口　1日2回\nカタル性腸炎に使用する"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "0.1 mg/kg　経口　1日2〜3回\n特発性下痢に使用する"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "0.1 mg/kg　経口　1日2〜3回"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "0.1 mg/kg　経口　1日2〜3回"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_264"
  },
  {
    "name": "アトロピン硫酸塩水和物",
    "category": "鎮静・麻酔薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "0.08 mg/kg　静注・筋注・皮下注\n約50%のウサギがアトロピナーゼを有するため効果がほとんどないか短時間のみ。抗コリン薬としてグリコピロレート0.01 mg/kgを使用することもある"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "0.02〜0.05 mg/kg　静注・筋注・皮下注"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "0.4 mg/kg　筋注・皮下注"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "0.05 mg/kg　筋注・皮下注"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "0.01〜0.04 mg/kg　筋注・皮下注　術前投与"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_266"
  },
  {
    "name": "ジアゼパム",
    "category": "鎮静・麻酔薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "0.5〜5 mg/kg　静注・皮下注"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "0.5〜3 mg/kg　筋注・皮下注"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "3〜5 mg/kg　皮下注"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "2〜5 mg/kg　皮下注"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "0.5〜2 mg/kg　筋注\nケタミン5〜20 mg/kgと併用して鎮静させる"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_268"
  },
  {
    "name": "酒石酸ブトルファノール",
    "category": "鎮静・麻酔薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "0.1〜0.5 mg/kg　静注・筋注"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "0.1〜0.5 mg/kg　静注・筋注・皮下注"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "1〜5 mg/kg　皮下注　2〜4時間ごと"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "2 mg/kg　皮下注　4時間ごと"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "0.2〜0.4 mg/kg　筋注\n鎮痛として使用する"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_270"
  },
  {
    "name": "ブプレノルフィン塩酸塩",
    "category": "鎮静・麻酔薬",
    "conc": null,
    "concText": "",
    "species": {
      "ウサギ": {
        "lo": null,
        "hi": null,
        "note": "0.01〜0.05 mg/kg　静注・筋注"
      },
      "フェレット": {
        "lo": null,
        "hi": null,
        "note": "0.01〜0.03 mg/kg　静注・筋注・皮下注"
      },
      "ハムスター": {
        "lo": null,
        "hi": null,
        "note": "0.1 mg/kg　皮下注　6〜8時間ごと"
      },
      "モルモット": {
        "lo": null,
        "hi": null,
        "note": "0.05 mg/kg　皮下注　6〜12時間ごと"
      },
      "ハリネズミ": {
        "lo": null,
        "hi": null,
        "note": "0.01 mg/kg　筋注・皮下注\n鎮痛として使用する"
      }
    },
    "memo": "",
    "route": [
      "exotic"
    ],
    "pdf_url": "",
    "source": "エキゾチック動物の医学",
    "id": "drug_272"
  },
  {
    "name": "イーケプラ",
    "category": "神経・てんかん",
    "conc": 20,
    "concText": "20mg/ml",
    "species": {
      "犬": {
        "injectable": {
          "lo": 20,
          "hi": 20,
          "note": "20mg/kg q8-12h IV"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": 20,
          "hi": 20,
          "note": "20mg/kg q8-12h IV"
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      }
    },
    "memo": "20mg/kg q8-12h　5～45μg/mL 人における参照値 犬，猫での半減期は約4時間",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "",
    "source": "",
    "id": "drug_273"
  },
  {
    "name": "レスミン（ジフェンヒドラミン）",
    "category": "アレルギー・皮膚科",
    "conc": null,
    "concText": "記載なし",
    "species": {
      "犬": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "猫": {
        "injectable": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "oral": {
          "lo": null,
          "hi": null,
          "note": null
        },
        "note": "（記載なし）"
      },
      "ウサギ": {
        "injectable": {
          "lo": 2,
          "hi": 2,
          "note": "2mg/kg PO,SC q8-12h"
        },
        "oral": {
          "lo": 2,
          "hi": 2,
          "note": "2mg/kg PO,SC q8-12h"
        },
        "note": "（記載なし）"
      },
      "フェレット": {
        "injectable": {
          "lo": 0.5,
          "hi": 2,
          "note": "0.5-2mg/kg PO,SC,IM q8-12h"
        },
        "oral": {
          "lo": 0.5,
          "hi": 2,
          "note": "0.5-2mg/kg PO,SC,IM q8-12h"
        },
        "note": "（記載なし）"
      },
      "モルモット": {
        "injectable": {
          "lo": 5,
          "hi": 5,
          "note": "5mg/kg SC q8-12h"
        },
        "oral": {
          "lo": 5,
          "hi": 5,
          "note": "5mg/kg SC q8-12h"
        },
        "note": "（記載なし）"
      },
      "ハリネズミ": {
        "injectable": {
          "lo": 1,
          "hi": 2,
          "note": "1-2mg/kg PO bid"
        },
        "oral": {
          "lo": 1,
          "hi": 2,
          "note": "1-2mg/kg PO bid"
        },
        "note": "（記載なし）"
      },
      "ハムスター": {
        "injectable": {
          "lo": 1,
          "hi": 2,
          "note": "1-2mg/kg PO,SC bid"
        },
        "oral": {
          "lo": 1,
          "hi": 2,
          "note": "1-2mg/kg PO,SC bid"
        },
        "note": "（記載なし）"
      }
    },
    "memo": "記載なし",
    "route": [
      "injectable",
      "oral"
    ],
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%B8%E3%83%95%E3%82%A7%E3%83%B3%E3%83%92%E3%83%89%E3%83%A9%E3%83%9F%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_274"
  },
  {
    "name": "ダルベポエチンアルファ（ネスプ）",
    "category": "止血・造血・ホルモン",
    "conc": 0.06,
    "concText": "30μg/0.5ml",
    "species": {
      "犬": { "lo": 0.001, "hi": 0.0015, "note": "1〜1.5μg/kg SC 週1回" },
      "猫": { "lo": 0.001, "hi": 0.0015, "note": "1〜1.5μg/kg SC 週1回" },
      "ウサギ": { "lo": null, "hi": null, "note": "（記載なし）" },
      "フェレット": { "lo": null, "hi": null, "note": "（記載なし）" },
      "モルモット": { "lo": null, "hi": null, "note": "（記載なし）" },
      "ハリネズミ": { "lo": null, "hi": null, "note": "（記載なし）" },
      "ハムスター": { "lo": null, "hi": null, "note": "（記載なし）" }
    },
    "memo": "ESA（赤血球造血刺激因子）。腎性貧血に使用。投与前にHt・網状赤血球数確認。高血圧・多血症に注意。",
    "route": "injectable",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%80%E3%83%AB%E3%83%99%E3%83%9D%E3%82%A8%E3%83%81%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "適用外",
    "alias": ["ネスプ", "darbepoetin", "ESA"],
    "id": "drug_275"
  },
  {
    "name": "ラシックス20/40mg（フロセミド）経口",
    "category": "循環器",
    "conc": 20,
    "concText": "20mg/錠",
    "species": {
      "犬": { "lo": 1, "hi": 2, "note": "1〜2mg/kg BID〜TID PO" },
      "猫": { "lo": 1, "hi": 1, "note": "1mg/kg SID〜BID PO" },
      "ウサギ": { "lo": 2, "hi": 5, "note": "2-5mg/kg PO bid" },
      "フェレット": { "lo": 2, "hi": 2, "note": "2mg/kg PO bid" },
      "モルモット": { "lo": 2, "hi": 5, "note": "2-5mg/kg PO bid" },
      "ハリネズミ": { "lo": 2.5, "hi": 5, "note": "2.5-5mg/kg PO bid-tid" },
      "ハムスター": { "lo": 2, "hi": 10, "note": "2-10mg/kg PO bid" }
    },
    "memo": "ループ利尿薬。維持投与。低カリウム血症に注意。",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%83%95%E3%83%AD%E3%82%BB%E3%83%9F%E3%83%89&nameKbn=1&nameMatch=1",
    "source": "PMDA / NVAL",
    "id": "drug_276"
  },
  {
    "name": "ベトメディン1.25/5mg（ピモベンダン）経口",
    "category": "循環器",
    "conc": 1.25,
    "concText": "1.25mg/錠",
    "species": {
      "犬": { "lo": 0.2, "hi": 0.3, "note": "0.2-0.3mg/kg BID" },
      "猫": { "lo": 0.25, "hi": 0.25, "note": "0.25mg/kg BID" },
      "ウサギ": { "lo": null, "hi": null, "note": "（記載なし）" },
      "フェレット": { "lo": null, "hi": null, "note": "（記載なし）" },
      "モルモット": { "lo": null, "hi": null, "note": "（記載なし）" },
      "ハリネズミ": { "lo": null, "hi": null, "note": "（記載なし）" },
      "ハムスター": { "lo": null, "hi": null, "note": "（記載なし）" }
    },
    "memo": "食前1時間投与推奨。",
    "route": "oral",
    "pdf_url": "https://www.vm.nval.go.jp/?PRODUCT_NAME=%E3%83%94%E3%83%A2%E3%83%99%E3%83%B3%E3%83%80%E3%83%B3&MAIN_COMPONENT=%E3%83%94%E3%83%A2%E3%83%99%E3%83%B3%E3%83%80%E3%83%B3",
    "source": "NVAL",
    "id": "drug_277"
  },
  {
    "name": "ネオフィリン100mg（アミノフィリン）経口",
    "category": "循環器",
    "conc": 100,
    "concText": "100mg/錠",
    "species": {
      "犬": { "lo": 5, "hi": 10, "note": "5-10mg/kg BID-TID PO" },
      "猫": { "lo": 5, "hi": 6, "note": "5-6mg/kg BID-TID PO" },
      "ウサギ": { "lo": null, "hi": null, "note": "（記載なし）" },
      "フェレット": { "lo": null, "hi": null, "note": "（記載なし）" },
      "モルモット": { "lo": null, "hi": null, "note": "（記載なし）" },
      "ハリネズミ": { "lo": null, "hi": null, "note": "（記載なし）" },
      "ハムスター": { "lo": null, "hi": null, "note": "（記載なし）" }
    },
    "memo": "記載なし",
    "route": "oral",
    "pdf_url": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/?iyakuName=%E3%82%A2%E3%83%9F%E3%83%8E%E3%83%95%E3%82%A3%E3%83%AA%E3%83%B3&nameKbn=1&nameMatch=1",
    "source": "PMDA",
    "id": "drug_278"
  }

];

